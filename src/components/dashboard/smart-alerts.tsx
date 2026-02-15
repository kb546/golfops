"use client";

import { AlertCircle, Clock, Upload, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "warning" | "info" | "urgent";
  icon: "alert" | "clock" | "upload" | "dollar";
  title: string;
  subtitle: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const MOCK_ALERTS: Alert[] = [
  {
    id: "1",
    type: "warning",
    icon: "dollar",
    title: "16 players haven't paid yet",
    subtitle: "$4,800 outstanding",
    action: {
      label: "Send Reminder",
      onClick: () => {},
    },
  },
  {
    id: "2",
    type: "urgent",
    icon: "clock",
    title: "Pairings need to be finalized by Aug 10",
    subtitle: "5 days remaining",
    action: {
      label: "Review Pairings",
      onClick: () => {},
    },
  },
  {
    id: "3",
    type: "info",
    icon: "upload",
    title: "3 sponsors awaiting logo upload",
    subtitle: "Gold and Silver tiers",
    action: {
      label: "View Sponsors",
      onClick: () => {},
    },
  },
];

const ICON_MAP = {
  alert: AlertCircle,
  clock: Clock,
  upload: Upload,
  dollar: DollarSign,
};

const ALERT_STYLES = {
  urgent: {
    card: "border-error/30 bg-error/5",
    icon: "bg-error/10 text-error",
    button: "bg-error hover:bg-error/90 text-white",
  },
  warning: {
    card: "border-warning/30 bg-warning/5",
    icon: "bg-warning/10 text-warning",
    button: "bg-warning hover:bg-warning/90 text-white",
  },
  info: {
    card: "border-info/30 bg-info/5",
    icon: "bg-info/10 text-info",
    button: "bg-info hover:bg-info/90 text-white",
  },
};

export function SmartAlerts() {
  return (
    <div className="space-y-3">
      {MOCK_ALERTS.map((alert) => {
        const Icon = ICON_MAP[alert.icon];
        const styles = ALERT_STYLES[alert.type];

        return (
          <div
            key={alert.id}
            className={cn(
              "rounded-[var(--radius-md)] border p-4 transition-all duration-300 hover:shadow-card",
              styles.card
            )}
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0",
                  styles.icon
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-charcoal mb-1">
                  {alert.title}
                </p>
                <p className="text-xs text-slate">{alert.subtitle}</p>
              </div>
              {alert.action && (
                <button
                  onClick={alert.action.onClick}
                  className={cn(
                    "px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-all duration-200 flex-shrink-0",
                    styles.button
                  )}
                >
                  {alert.action.label}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
