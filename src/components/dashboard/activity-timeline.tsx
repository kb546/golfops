"use client";

import { UserPlus, DollarSign, Building2, Mail } from "lucide-react";
import { StatusBadge } from "./primitives";

interface Activity {
  id: string;
  type: "registration" | "payment" | "sponsor" | "communication";
  title: string;
  subtitle: string;
  timestamp: string;
  status?: string;
}

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: "1",
    type: "registration",
    title: "New registration: John Smith",
    subtitle: "Championship Flight • $300",
    timestamp: "2 min ago",
  },
  {
    id: "2",
    type: "payment",
    title: "Payment confirmed",
    subtitle: "Sarah Johnson • M-Pesa • $300",
    timestamp: "15 min ago",
    status: "Sent",
  },
  {
    id: "3",
    type: "sponsor",
    title: "Sponsor logo uploaded",
    subtitle: "Callaway Golf • Gold Tier",
    timestamp: "1 hour ago",
  },
  {
    id: "4",
    type: "registration",
    title: "New registration: Mike Davis",
    subtitle: "A Flight • $300",
    timestamp: "2 hours ago",
  },
  {
    id: "5",
    type: "communication",
    title: "Email campaign sent",
    subtitle: "48h Reminder • 96 recipients",
    timestamp: "3 hours ago",
    status: "Sent",
  },
  {
    id: "6",
    type: "payment",
    title: "Payment confirmed",
    subtitle: "Robert Chen • Stripe • $300",
    timestamp: "4 hours ago",
    status: "Sent",
  },
];

const ACTIVITY_ICONS = {
  registration: UserPlus,
  payment: DollarSign,
  sponsor: Building2,
  communication: Mail,
};

const ACTIVITY_COLORS = {
  registration: "bg-lime/10 text-lime",
  payment: "bg-success/10 text-success",
  sponsor: "bg-gold/10 text-gold",
  communication: "bg-info/10 text-info",
};

export function ActivityTimeline() {
  return (
    <div className="space-y-4">
      {MOCK_ACTIVITIES.map((activity, index) => {
        const Icon = ACTIVITY_ICONS[activity.type];
        const colorClass = ACTIVITY_COLORS[activity.type];

        return (
          <div key={activity.id} className="flex items-start gap-3">
            <div
              className={`flex items-center justify-center w-9 h-9 rounded-full ${colorClass} flex-shrink-0`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-charcoal">
                    {activity.title}
                  </p>
                  <p className="text-xs text-slate mt-0.5">{activity.subtitle}</p>
                </div>
                {activity.status && (
                  <StatusBadge status={activity.status} />
                )}
              </div>
              <p className="text-xs text-slate/70 mt-1">{activity.timestamp}</p>
            </div>
            {index < MOCK_ACTIVITIES.length - 1 && (
              <div className="absolute left-[18px] w-px h-12 bg-gray/10 mt-9" />
            )}
          </div>
        );
      })}
    </div>
  );
}
