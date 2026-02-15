import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Suspense } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cloud" />}>
      <DashboardShell>{children}</DashboardShell>
    </Suspense>
  );
}
