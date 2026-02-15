"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const STORAGE_KEY = "golfops:presentation-mode";

function shouldEnableFromQuery(value: string | null): boolean {
  if (!value) return false;
  const normalized = value.toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "on";
}

export function PresentationModeController() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const applyState = (enabled: boolean) => {
      html.dataset.presentation = enabled ? "true" : "false";
      body.classList.toggle("presentation-mode", enabled);
      window.localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
    };

    const queryEnabled =
      shouldEnableFromQuery(searchParams.get("present")) ||
      shouldEnableFromQuery(searchParams.get("presentation"));

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (queryEnabled) {
      applyState(true);
    } else if (saved === "1") {
      applyState(true);
    } else {
      applyState(false);
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "p" &&
        (event.metaKey || event.ctrlKey) &&
        !event.shiftKey
      ) {
        event.preventDefault();
        const enabled = html.dataset.presentation === "true";
        applyState(!enabled);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchParams]);

  return null;
}
