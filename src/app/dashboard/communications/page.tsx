import { DashboardPageTitle, Panel, StatusBadge } from "@/components/dashboard/primitives";
import { DonutChart, BarChart } from "@/components/dashboard/charts";
import { TrendMetricCard } from "@/components/dashboard/enhanced-metrics";
import { campaigns } from "@/lib/mock-data/dashboard";
import { Mail, Send, MousePointerClick } from "lucide-react";

export default function CommunicationsPage() {
  // Audience segmentation data
  const audienceData = [
    { name: "Registered Players", value: 128, color: "#84CC16" },
    { name: "Sponsors", value: 10, color: "#F59E0B" },
    { name: "All Participants", value: 214, color: "#3B82F6" },
  ];

  // Performance comparison data
  const performanceData = campaigns.map((c) => ({
    name: c.campaign.split(":")[0],
    value: parseInt(c.opened),
  }));

  return (
    <div>
      <DashboardPageTitle
        title="AI Communications"
        subtitle="Draft, schedule, and monitor campaigns from registration to post-event follow-up."
        action={
          <button className="rounded-[var(--radius-sm)] bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-glow-lime hover:shadow-glow-lime-hover transition-all">
            Generate AI Draft
          </button>
        }
      />

      {/* Key Metrics */}
      <section className="mb-6 grid gap-6 md:grid-cols-3">
        <TrendMetricCard
          label="Avg Open Rate"
          value="71%"
          trend="up"
          delta="+5.2% vs prev"
          icon={<Mail className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Avg Click Rate"
          value="29%"
          trend="up"
          delta="+2.8% vs prev"
          icon={<MousePointerClick className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Automations Active"
          value="14"
          trend="up"
          delta="Across all events"
          icon={<Send className="w-5 h-5" />}
        />
      </section>

      {/* Campaign Performance Cards */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Campaign Performance</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {campaigns.map((campaign) => {
            const openRate = parseInt(campaign.opened);
            const clickRate = parseInt(campaign.clicked);

            return (
              <div
                key={campaign.campaign}
                className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-5 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-charcoal mb-1">
                      {campaign.campaign}
                    </h3>
                    <p className="text-xs text-slate">{campaign.audience}</p>
                  </div>
                  <StatusBadge status={campaign.status} />
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate">📧 Sent: {campaign.sent}</span>
                      <span className="font-semibold text-charcoal">{openRate}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-mist">
                      <div
                        className="h-2 rounded-full bg-lime"
                        style={{ width: `${openRate}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate mt-1">Open Rate</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate">Click Rate</span>
                      <span className="font-semibold text-charcoal">{clickRate}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-mist">
                      <div
                        className="h-2 rounded-full bg-emerald"
                        style={{ width: `${clickRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Audience & Performance Comparison */}
      <section className="grid gap-6 xl:grid-cols-2 mb-6">
        <Panel title="Audience Segmentation" subtitle="Current event">
          <DonutChart
            data={audienceData}
            height={280}
            innerRadius={60}
            outerRadius={90}
            showLegend={true}
          />
        </Panel>

        <Panel title="Campaign Open Rates" subtitle="Performance comparison">
          <BarChart
            data={performanceData}
            height={280}
            colors={["#84CC16", "#10B981", "#3B82F6"]}
          />
        </Panel>
      </section>

      {/* AI Assistant */}
      <section>
        <Panel title="AI Assistant" subtitle="Event-aware draft helper">
          <div className="space-y-3">
            <div className="rounded-[var(--radius-md)] bg-gradient-to-br from-lime/5 to-emerald/5 p-4 border border-lime/20">
              <p className="text-sm font-semibold text-charcoal mb-2">💡 Prompt</p>
              <p className="text-sm text-slate">
                Create a friendly 48-hour reminder for Executive Cup UAE with check-in instructions.
              </p>
            </div>
            <div className="rounded-[var(--radius-md)] bg-white border border-gray/10 p-4">
              <p className="text-sm font-semibold text-charcoal mb-2">✨ AI Draft Preview</p>
              <p className="text-sm text-slate italic">
                {
                  '"Hi {{first_name}}, your tee time is coming up this Saturday at 7:40 AM. Please arrive 30 minutes early for check-in..."'
                }
              </p>
            </div>
            <div className="rounded-[var(--radius-md)] bg-success/5 border border-success/20 p-4">
              <p className="text-sm font-semibold text-charcoal mb-2">✓ Safety Checks</p>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="px-2 py-1 bg-success/10 text-success rounded-full border border-success/20">
                  ✓ Brand tone: pass
                </span>
                <span className="px-2 py-1 bg-success/10 text-success rounded-full border border-success/20">
                  ✓ Variables: complete
                </span>
                <span className="px-2 py-1 bg-success/10 text-success rounded-full border border-success/20">
                  ✓ Unsubscribe: included
                </span>
              </div>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}
