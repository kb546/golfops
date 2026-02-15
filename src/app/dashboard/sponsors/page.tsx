import { DashboardPageTitle, Panel } from "@/components/dashboard/primitives";
import { BarChart, DonutChart } from "@/components/dashboard/charts";
import { TrendMetricCard } from "@/components/dashboard/enhanced-metrics";
import { sponsors } from "@/lib/mock-data/dashboard";
import { DollarSign, TrendingUp, RefreshCw, Building2, CheckCircle2, Target } from "lucide-react";

export default function SponsorsPage() {
  // Revenue by tier
  const revenueByTier = [
    { name: "Gold", value: 24000, color: "#F59E0B" },
    { name: "Silver", value: 8000, color: "#94A3B8" },
    { name: "Bronze", value: 6000, color: "#CD7F32" },
  ];

  // Sponsor pipeline stages
  const pipelineStages = [
    {
      stage: "Prospects",
      count: 8,
      sponsors: [
        { name: "Vista Tech", value: "$5K", confidence: 40 },
        { name: "Peak Insurance", value: "$3K", confidence: 35 },
      ],
    },
    {
      stage: "Proposed",
      count: 5,
      sponsors: [
        { name: "CloudFirst", value: "$8K", confidence: 65 },
        { name: "Apex Consulting", value: "$5K", confidence: 70 },
      ],
    },
    {
      stage: "Confirmed",
      count: 4,
      sponsors: [
        { name: "TitlePro", value: "$12K", tier: "Gold" },
        { name: "GreenLine Bank", value: "$12K", tier: "Gold" },
      ],
    },
    {
      stage: "Fulfilled",
      count: 2,
      sponsors: [
        { name: "Summit Motors", value: "$8K", tier: "Silver", satisfaction: 95 },
      ],
    },
  ];

  // Fulfillment tasks
  const fulfillmentTasks = [
    { task: "Logo on event website", completed: 4, total: 4, progress: 100 },
    { task: "Banner at registration desk", completed: 3, total: 4, progress: 75 },
    { task: "Social media callouts", completed: 4, total: 4, progress: 100 },
    { task: "Email newsletter feature", completed: 2, total: 4, progress: 50 },
    { task: "Post-event thank you", completed: 0, total: 4, progress: 0 },
  ];

  // ROI breakdown
  const roiData = [
    { name: "High (>3x)", value: 2 },
    { name: "Medium (2-3x)", value: 1 },
    { name: "Low (<2x)", value: 1 },
  ];

  const getTierBadgeColor = (tier: string) => {
    if (tier === "Gold") return "bg-warning/10 text-warning border-warning/30";
    if (tier === "Silver") return "bg-slate/10 text-slate border-slate/30";
    return "bg-amber-700/10 text-amber-700 border-amber-700/30";
  };

  return (
    <div>
      <DashboardPageTitle
        title="Sponsors & ROI"
        subtitle="Track tier visibility, clicks, leads, and sponsor outcomes post-event."
        action={
          <button className="rounded-[var(--radius-sm)] bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-glow-lime hover:shadow-glow-lime-hover transition-all">
            Generate Sponsor Report
          </button>
        }
      />

      {/* Key Metrics */}
      <section className="mb-6 grid gap-6 md:grid-cols-3">
        <TrendMetricCard
          label="Total Sponsor Value"
          value="$38,000"
          trend="up"
          delta="Pipeline + confirmed"
          icon={<DollarSign className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Average ROI"
          value="2.7x"
          trend="up"
          delta="Across active sponsors"
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Renewal Intent"
          value="81%"
          trend="up"
          delta="Survey signal"
          icon={<RefreshCw className="w-5 h-5" />}
        />
      </section>

      {/* Sponsor Pipeline Kanban */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Sponsor Pipeline</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pipelineStages.map((stage) => (
            <div
              key={stage.stage}
              className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-4 shadow-soft"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-charcoal font-heading">{stage.stage}</h3>
                <span className="px-2.5 py-1 rounded-full bg-lime/10 text-lime text-xs font-semibold border border-lime/20">
                  {stage.count}
                </span>
              </div>
              <div className="space-y-3">
                {stage.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="rounded-[var(--radius-md)] border border-gray/10 bg-gradient-to-br from-mist to-white p-3 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-semibold text-charcoal">{sponsor.name}</p>
                      <span className="text-xs font-bold text-lime">{sponsor.value}</span>
                    </div>
                    {"confidence" in sponsor && (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 rounded-full bg-mist">
                          <div
                            className="h-1.5 rounded-full bg-lime"
                            style={{ width: `${sponsor.confidence}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate">{sponsor.confidence}%</span>
                      </div>
                    )}
                    {"tier" in sponsor && (
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold border ${getTierBadgeColor(sponsor.tier)}`}>
                        {sponsor.tier}
                      </span>
                    )}
                    {"satisfaction" in sponsor && (
                      <div className="flex items-center gap-1 text-xs text-success">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{sponsor.satisfaction}% satisfied</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue by Tier & ROI Distribution */}
      <section className="mb-6 grid gap-6 xl:grid-cols-2">
        <Panel title="Revenue by Tier" subtitle="Current event breakdown">
          <BarChart
            data={revenueByTier}
            height={260}
            colors={["#F59E0B", "#94A3B8", "#CD7F32"]}
          />
          <div className="mt-4 flex items-center gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-warning" />
              <span className="text-slate">Gold: $24K</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-slate" />
              <span className="text-slate">Silver: $8K</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#CD7F32" }} />
              <span className="text-slate">Bronze: $6K</span>
            </div>
          </div>
        </Panel>

        <Panel title="ROI Distribution" subtitle="Performance tiers">
          <DonutChart
            data={roiData}
            height={260}
            innerRadius={60}
            outerRadius={90}
            showLegend={true}
            colors={["#84CC16", "#3B82F6", "#F59E0B"]}
          />
        </Panel>
      </section>

      {/* Fulfillment Checklist */}
      <section className="mb-6">
        <Panel title="Fulfillment Checklist" subtitle="Sponsor deliverables tracking">
          <div className="space-y-3">
            {fulfillmentTasks.map((task) => (
              <div
                key={task.task}
                className="flex items-center justify-between p-3 rounded-[var(--radius-md)] border border-gray/10 bg-gradient-to-r from-white to-mist"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-charcoal">{task.task}</p>
                    <span className="text-xs text-slate">
                      {task.completed}/{task.total} sponsors
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-mist">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          task.progress === 100
                            ? "bg-success"
                            : task.progress >= 50
                              ? "bg-lime"
                              : "bg-warning"
                        }`}
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-charcoal w-10 text-right">
                      {task.progress}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Sponsor Performance Cards */}
      <section>
        <h2 className="text-lg font-semibold text-charcoal mb-4">Sponsor Performance</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.brand}
              className="rounded-[var(--radius-lg)] border border-gray/10 bg-white p-5 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-gradient-to-br from-lime/20 to-emerald/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-lime" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-charcoal font-heading">
                      {sponsor.brand}
                    </h3>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold border ${getTierBadgeColor(sponsor.tier)}`}>
                      {sponsor.tier}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate">Reach</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {sponsor.reach.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate">Clicks</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {sponsor.clicks}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate">Leads</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {sponsor.leads}
                  </span>
                </div>
                <div className="pt-3 border-t border-gray/10 flex items-center justify-between">
                  <span className="text-xs text-slate">ROI</span>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4 text-success" />
                    <span className="text-lg font-bold text-success font-heading">
                      {sponsor.roi}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
