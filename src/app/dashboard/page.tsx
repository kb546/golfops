import { Panel, StatusBadge } from "@/components/dashboard/primitives";
import { EventSwitcher } from "@/components/dashboard/event-switcher";
import {
  CircularMetricCard,
  CountdownCard,
  TrendMetricCard,
} from "@/components/dashboard/enhanced-metrics";
import { AreaChart, DonutChart } from "@/components/dashboard/charts";
import { ActivityTimeline } from "@/components/dashboard/activity-timeline";
import { SmartAlerts } from "@/components/dashboard/smart-alerts";
import { events, monthlyRevenue } from "@/lib/mock-data/dashboard";
import { DollarSign, Users, Building2, TrendingUp } from "lucide-react";

export default function DashboardOverviewPage() {
  // Transform monthlyRevenue for AreaChart
  const revenueChartData = monthlyRevenue.map((item) => ({
    name: item.month,
    value: item.value,
  }));

  // Revenue breakdown data for donut chart
  const revenueBreakdown = [
    { name: "Registrations", value: 18500, color: "#84CC16" },
    { name: "Sponsorships", value: 5000, color: "#10B981" },
    { name: "Add-ons", value: 1000, color: "#3B82F6" },
  ];

  return (
    <div>
      {/* Event Switcher */}
      <EventSwitcher />

      {/* Quick Actions */}
      <div className="mb-8 flex flex-wrap gap-3">
        <button className="rounded-[var(--radius-sm)] bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-glow-lime hover:shadow-glow-lime-hover transition-all">
          Generate AI Email
        </button>
        <button className="rounded-[var(--radius-sm)] border-2 border-lime/40 text-lime bg-transparent hover:bg-lime/10 px-5 py-2.5 text-sm font-semibold transition-all">
          Run Smart Pairings
        </button>
        <button className="rounded-[var(--radius-sm)] border-2 border-gray/20 text-charcoal bg-white hover:bg-mist px-5 py-2.5 text-sm font-semibold transition-all">
          Download Reports
        </button>
        <button className="rounded-[var(--radius-sm)] border-2 border-gray/20 text-charcoal bg-white hover:bg-mist px-5 py-2.5 text-sm font-semibold transition-all">
          Send Reminders
        </button>
      </div>

      {/* Key Metrics - 4 across */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
        <CircularMetricCard
          label="Revenue Progress"
          value={24500}
          max={30000}
          color="#84CC16"
          subtitle="82% of goal"
        />
        <CircularMetricCard
          label="Registration"
          value={128}
          max={144}
          color="#10B981"
          subtitle="89% filled"
        />
        <CountdownCard
          label="Days Until Event"
          days={30}
          subtitle="Checklist Progress"
          progress={75}
        />
        <CircularMetricCard
          label="Sponsor Fulfillment"
          value={8}
          max={10}
          color="#F59E0B"
          subtitle="80% confirmed"
        />
      </section>

      {/* Revenue & Activity */}
      <section className="grid gap-6 xl:grid-cols-[1.5fr,1fr] mb-8">
        <Panel title="Revenue Trend" subtitle="Last 6 months">
          <AreaChart
            data={revenueChartData}
            dataKey="value"
            xAxisKey="name"
            height={280}
            color="#84CC16"
          />
        </Panel>

        <Panel title="Recent Activity" subtitle="Live updates">
          <div className="max-h-[280px] overflow-y-auto pr-2">
            <ActivityTimeline />
          </div>
        </Panel>
      </section>

      {/* Alerts & Revenue Breakdown */}
      <section className="grid gap-6 xl:grid-cols-[1fr,1fr] mb-8">
        <Panel title="What Needs Attention" subtitle="Action items">
          <SmartAlerts />
        </Panel>

        <Panel title="Revenue Breakdown" subtitle="Current event">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-bold text-charcoal font-heading">
                $24,500
              </p>
              <p className="text-sm text-slate mt-1">Total revenue</p>
            </div>
          </div>
          <DonutChart
            data={revenueBreakdown}
            height={220}
            showLegend={true}
          />
        </Panel>
      </section>

      {/* Additional Metrics */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
        <TrendMetricCard
          label="Total Players"
          value="486"
          trend="up"
          delta="+14.2%"
          icon={<Users className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Gross Revenue"
          value="$24,580"
          trend="up"
          delta="+9.4%"
          icon={<DollarSign className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Active Events"
          value="12"
          trend="up"
          delta="+3 this month"
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Sponsor Pipeline"
          value="$38,000"
          trend="flat"
          delta="unchanged"
          icon={<Building2 className="w-5 h-5" />}
        />
      </section>

      {/* Recent Events Table */}
      <section>
        <Panel title="Recent Events" subtitle="Multi-event command center">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-gray/10 text-xs uppercase tracking-[0.12em] text-slate">
                  <th className="py-2">Event</th>
                  <th className="py-2">Organizer</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Players</th>
                  <th className="py-2">Revenue</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b border-gray/10 last:border-b-0 hover:bg-lime/5 transition-colors">
                    <td className="py-3">
                      <p className="text-sm font-semibold text-charcoal">{event.name}</p>
                      <p className="text-xs text-slate">{event.id}</p>
                    </td>
                    <td className="py-3 text-sm text-slate">{event.organizer}</td>
                    <td className="py-3 text-sm text-slate">{event.date}</td>
                    <td className="py-3 text-sm text-charcoal">{event.players}</td>
                    <td className="py-3 text-sm font-semibold text-charcoal">${event.revenue.toLocaleString()}</td>
                    <td className="py-3"><StatusBadge status={event.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </section>
    </div>
  );
}
