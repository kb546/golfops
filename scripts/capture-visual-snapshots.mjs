#!/usr/bin/env node

import { mkdir, access } from "node:fs/promises";
import { constants } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";

const BASE_URL = process.env.VISUAL_BASE_URL ?? "http://127.0.0.1:3000";
const START_SERVER = process.env.VISUAL_START_SERVER === "1";
const OUTPUT_DIR = path.resolve("artifacts/visual-baseline");

const ROUTES = [
  { route: "/", slug: "home" },
  { route: "/features", slug: "features" },
  { route: "/pricing", slug: "pricing" },
  { route: "/about", slug: "about" },
  { route: "/contact", slug: "contact" },
  { route: "/dashboard", slug: "dashboard-overview" },
];

async function waitForServer(url, timeoutMs = 60_000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const res = await fetch(url, { method: "GET" });
      if (res.ok) return;
    } catch {
      // keep polling
    }
    await new Promise((resolve) => setTimeout(resolve, 800));
  }
  throw new Error(`Server did not become available at ${url} in time.`);
}

async function ensureOutputDir() {
  await mkdir(OUTPUT_DIR, { recursive: true });
}

async function loadPlaywright() {
  try {
    const mod = await import("playwright");
    return mod;
  } catch {
    console.error(
      [
        "Missing dependency: playwright",
        "Install it with:",
        "  npm install -D playwright",
        "Then install browser binaries:",
        "  npx playwright install chromium",
      ].join("\n")
    );
    process.exit(1);
  }
}

function startDevServer() {
  const child = spawn(
    "npm",
    ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", "3000"],
    {
      stdio: "inherit",
      env: process.env,
      shell: process.platform === "win32",
    }
  );
  return child;
}

async function main() {
  const { chromium } = await loadPlaywright();
  await ensureOutputDir();

  let serverProcess = null;
  if (START_SERVER) {
    serverProcess = startDevServer();
    await waitForServer(BASE_URL);
  } else {
    try {
      await access(OUTPUT_DIR, constants.F_OK);
    } catch {
      // ignore; dir already handled by ensureOutputDir
    }
  }

  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext({
      viewport: { width: 1512, height: 982 },
      deviceScaleFactor: 1,
      colorScheme: "dark",
    });
    const page = await context.newPage();

    for (const entry of ROUTES) {
      const targetUrl = `${BASE_URL}${entry.route}${
        entry.route.includes("?") ? "&" : "?"
      }present=1`;
      await page.goto(targetUrl, { waitUntil: "networkidle" });
      await page.waitForTimeout(800);
      await page.screenshot({
        path: path.join(OUTPUT_DIR, `${entry.slug}.png`),
        fullPage: true,
      });
      console.log(`Captured ${entry.slug}`);
    }

    await context.close();
  } finally {
    await browser.close();
    if (serverProcess) {
      serverProcess.kill("SIGTERM");
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
