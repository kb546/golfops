import { DashboardPageTitle, Panel } from "@/components/dashboard/primitives";
import { BarChart } from "@/components/dashboard/charts";
import { CircularProgress } from "@/components/dashboard/charts";
import { TrendMetricCard } from "@/components/dashboard/enhanced-metrics";
import { pairings } from "@/lib/mock-data/dashboard";
import { Users, CheckCircle, AlertTriangle } from "lucide-react";

export default function PairingsPage() {
  // Flight distribution data
  const flightDistribution = [
    { name: "Championship", value: 32 },
    { name: "A Flight", value: 36 },
    { name: "B Flight", value: 28 },
    { name: "C Flight", value: 20 },
  ];

  // Handicap distribution per group
  const handicapData = [
    { name: "Grp 1", value: 13.25 },
    { name: "Grp 2", value: 8.5 },
    { name: "Grp 3", value: 14.5 },
    { name: "Grp 4", value: 10.5 },
    { name: "Grp 5", value: 12.0 },
    { name: "Grp 6", value: 11.8 },
  ];

  // Calculate average handicap for a group
  const getAverageHandicap = (players: any[]) => {
    const sum = players.reduce((acc, p) => acc + p.handicap, 0);
    return (sum / players.length).toFixed(1);
  };

  // Check if group is balanced (within acceptable range)
  const isBalanced = (avgHandicap: number) => {
    return avgHandicap >= 8 && avgHandicap <= 13;
  };

  return (
    <div>
      <DashboardPageTitle
        title="Smart Pairings"
        subtitle="AI-balanced groups by handicap, preferences, and relationship rules."
        action={
          <button className="rounded-[var(--radius-sm)] bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-glow-lime hover:shadow-glow-lime-hover transition-all">
            Re-run AI Balancer
          </button>
        }
      />

      {/* Key Metrics */}
      <section className="mb-6 grid gap-6 md:grid-cols-3">
        <TrendMetricCard
          label="Groups Generated"
          value="18"
          trend="up"
          delta="Morning wave"
          icon={<Users className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Avg HCP Spread"
          value="3.2"
          trend="down"
          delta="Well balanced"
          icon={<CheckCircle className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Pending Overrides"
          value="3"
          trend="flat"
          delta="1 conflict detected"
          icon={<AlertTriangle className="w-5 h-5" />}
        />
      </section>

      {/* AI Confidence & Flight Distribution */}
      <section className="mb-6 grid gap-6 xl:grid-cols-[1fr,1.5fr]">
        <Panel title="AI Pairing Confidence" subtitle="Current configuration">
          <div className="flex flex-col items-center justify-center py-6">
            <CircularProgress
              value={92}
              max={100}
              size={140}
              strokeWidth={14}
              color="#84CC16"
            />
            <p className="mt-4 text-sm text-slate text-center max-w-xs">
              Constraints respected: handicap spread, VIP requests, no-repeat pair rules
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-success/10 text-success text-xs font-semibold rounded-full border border-success/20">
                ✓ Handicap balanced
              </span>
              <span className="px-3 py-1 bg-success/10 text-success text-xs font-semibold rounded-full border border-success/20">
                ✓ Preferences met
              </span>
            </div>
          </div>
        </Panel>

        <Panel title="Flight Distribution" subtitle="Player allocation across flights">
          <BarChart
            data={flightDistribution}
            height={240}
            colors={["#84CC16", "#10B981", "#3B82F6", "#F59E0B"]}
          />
        </Panel>
      </section>

      {/* Handicap Balance Chart */}
      <section className="mb-6">
        <Panel title="Handicap Balance by Group" subtitle="Average handicap per foursome">
          <BarChart data={handicapData} height={260} color="#84CC16" />
          <div className="mt-4 flex items-center gap-2 text-xs text-slate">
            <span className="px-2 py-1 bg-success/10 text-success rounded border border-success/20">
              8-13: Balanced
            </span>
            <span className="px-2 py-1 bg-warning/10 text-warning rounded border border-warning/20">
              &lt;8 or &gt;13: Review
            </span>
          </div>
        </Panel>
      </section>

      {/* Pairing Grid */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-charcoal mb-4">
          Pairing Grid • Drag to Adjust
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pairings.map((group, index) => {
            const avgHandicap = parseFloat(getAverageHandicap(group.players));
            const balanced = isBalanced(avgHandicap);

            return (
              <div
                key={`${group.teeTime}-${group.hole}`}
                className={`rounded-[var(--radius-lg)] border p-5 shadow-soft hover:shadow-card transition-all duration-300 cursor-move ${
                  balanced
                    ? "border-success/20 bg-success/5"
                    : "border-warning/30 bg-warning/5"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-bold text-charcoal font-heading">
                      🏌️ Group {index + 1}
                    </h3>
                    <p className="text-xs text-slate mt-0.5">
                      {group.teeTime} • {group.hole}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      balanced
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-warning/10 text-warning border border-warning/20"
                    }`}
                  >
                    {balanced ? "✓ Balanced" : "⚠️ Review"}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {group.players.map((player) => (
                    <div
                      key={player.name}
                      className="flex items-center justify-between rounded-[var(--radius-md)] bg-white border border-gray/10 px-3 py-2.5 hover:shadow-md transition-shadow"
                    >
                      <p className="text-sm font-semibold text-charcoal">
                        {player.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-lime bg-lime/10 px-2 py-1 rounded border border-lime/20">
                          {player.handicap}
                        </span>
                        <span className="text-xs text-slate bg-mist px-2 py-1 rounded">
                          {player.preference}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate">Avg Handicap</span>
                    <span className={`font-bold ${balanced ? "text-success" : "text-warning"}`}>
                      {avgHandicap}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Workflow Steps */}
      <section>
        <Panel title="Workflow" subtitle="Preference import → AI balance → Tee sheet publish">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[var(--radius-md)] border border-gray/10 bg-gradient-to-br from-mist to-white p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-lime/10 text-lime flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <p className="text-sm font-semibold text-charcoal">Import Preferences</p>
              </div>
              <p className="text-xs text-slate leading-relaxed">
                Player requests, VIP tags, and no-pair constraints ingested
              </p>
            </div>

            <div className="rounded-[var(--radius-md)] border border-lime/30 bg-gradient-to-br from-lime/5 to-emerald/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-lime text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <p className="text-sm font-semibold text-charcoal">AI Balancer</p>
              </div>
              <p className="text-xs text-slate leading-relaxed">
                Groups optimized by handicap, compatibility, and pace
              </p>
            </div>

            <div className="rounded-[var(--radius-md)] border border-gray/10 bg-gradient-to-br from-mist to-white p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-lime/10 text-lime flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <p className="text-sm font-semibold text-charcoal">Publish Tee Sheet</p>
              </div>
              <p className="text-xs text-slate leading-relaxed">
                Instant sync to mobile, print board, and starter desk
              </p>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}
