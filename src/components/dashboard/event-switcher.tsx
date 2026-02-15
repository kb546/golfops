"use client";

import { ChevronDown, Calendar, Users, DollarSign } from "lucide-react";
import { useState } from "react";

interface Event {
  id: string;
  name: string;
  date: string;
  players: number;
  revenue: number;
}

const MOCK_EVENTS: Event[] = [
  {
    id: "EVT-2026-012",
    name: "Pinehurst Charity Classic 2026",
    date: "Aug 15-16, 2026",
    players: 144,
    revenue: 24500,
  },
  {
    id: "EVT-2026-008",
    name: "Executive Cup UAE",
    date: "Mar 10, 2026",
    players: 84,
    revenue: 9200,
  },
  {
    id: "EVT-2026-006",
    name: "Lakeside Members Open",
    date: "Feb 25, 2026",
    players: 96,
    revenue: 5400,
  },
];

export function EventSwitcher() {
  const [selectedEvent, setSelectedEvent] = useState(MOCK_EVENTS[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-[var(--radius-lg)] border border-gray/10 bg-white p-5 shadow-soft hover:shadow-card transition-all duration-300 text-left group"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold text-charcoal font-heading">
                {selectedEvent.name}
              </h2>
              <ChevronDown
                className={`w-5 h-5 text-slate transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{selectedEvent.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>{selectedEvent.players} players</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" />
                <span>${selectedEvent.revenue.toLocaleString()} revenue</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[var(--radius-lg)] border border-gray/10 shadow-elevated z-10 overflow-hidden">
          {MOCK_EVENTS.map((event) => (
            <button
              key={event.id}
              onClick={() => {
                setSelectedEvent(event);
                setIsOpen(false);
              }}
              className={`w-full p-4 text-left hover:bg-lime/5 transition-colors border-b border-gray/10 last:border-b-0 ${
                event.id === selectedEvent.id ? "bg-lime/10" : ""
              }`}
            >
              <div className="font-semibold text-charcoal mb-1">
                {event.name}
              </div>
              <div className="flex items-center gap-3 text-xs text-slate">
                <span>{event.date}</span>
                <span>•</span>
                <span>{event.players} players</span>
                <span>•</span>
                <span>${event.revenue.toLocaleString()}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
