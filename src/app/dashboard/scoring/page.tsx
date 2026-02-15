import { ArrowDown, ArrowRight, ArrowUp, Trophy, Target } from "lucide-react";
import { DashboardPageTitle, Panel } from "@/components/dashboard/primitives";
import { BarChart } from "@/components/dashboard/charts";
import { TrendMetricCard } from "@/components/dashboard/enhanced-metrics";
import { leaderboard } from "@/lib/mock-data/dashboard";

export default function ScoringPage() {
  // Hole-by-hole stats
  const holeStats = [
    { name: "H1", value: 3.8 },
    { name: "H2", value: 4.2 },
    { name: "H3", value: 4.9 },
    { name: "H4", value: 3.6 },
    { name: "H5", value: 5.1 },
    { name: "H6", value: 4.4 },
    { name: "H7", value: 3.9 },
    { name: "H8", value: 4.7 },
    { name: "H9", value: 5.2 },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  const getScoreColor = (net: number) => {
    if (net < 70) return "text-success";
    if (net < 75) return "text-lime";
    return "text-charcoal";
  };

  return (
    <div>
      <DashboardPageTitle
        title="Live Scoring"
        subtitle="Real-time leaderboard visibility across mobile and clubhouse displays."
        action={
          <button className="rounded-[var(--radius-sm)] bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-forest-deep shadow-glow-lime hover:shadow-glow-lime-hover transition-all">
            Open TV Display Mode
          </button>
        }
      />

      {/* Key Metrics */}
      <section className="mb-6 grid gap-6 md:grid-cols-3">
        <TrendMetricCard
          label="Scores Updated"
          value="84"
          trend="up"
          delta="Last 15 minutes"
          icon={<Target className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Disputes Open"
          value="2"
          trend="flat"
          delta="Current"
          icon={<Trophy className="w-5 h-5" />}
        />
        <TrendMetricCard
          label="Avg Input Latency"
          value="1.8s"
          trend="down"
          delta="Mobile entry"
          icon={<Target className="w-5 h-5" />}
        />
      </section>

      {/* Live Leaderboard - Card Based */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Live Leaderboard</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {leaderboard.map((entry) => {
            const MovementIcon =
              entry.movement === "up"
                ? ArrowUp
                : entry.movement === "down"
                  ? ArrowDown
                  : ArrowRight;

            const movementColor =
              entry.movement === "up"
                ? "text-success"
                : entry.movement === "down"
                  ? "text-error"
                  : "text-slate";

            return (
              <div
                key={entry.player}
                className={`rounded-[var(--radius-lg)] border p-5 shadow-soft hover:shadow-card transition-all duration-300 ${
                  entry.rank <= 3
                    ? "border-gold/30 bg-gradient-to-br from-gold/5 to-warning/5"
                    : "border-gray/10 bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getRankIcon(entry.rank)}</span>
                    <div>
                      <h3 className="text-base font-bold text-charcoal font-heading">
                        {entry.player}
                      </h3>
                      <p className="text-xs text-slate">Thru {entry.thru}</p>
                    </div>
                  </div>
                  <MovementIcon className={`w-5 h-5 ${movementColor}`} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate mb-1">Gross Score</p>
                    <p className="text-lg font-semibold text-charcoal">{entry.gross}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate mb-1">Net Score</p>
                    <p className={`text-2xl font-bold font-heading ${getScoreColor(entry.net)}`}>
                      {entry.net}
                    </p>
                  </div>
                </div>

                {/* Progress bar showing completion */}
                <div className="mt-3">
                  <div className="h-1.5 w-full rounded-full bg-mist">
                    <div
                      className="h-1.5 rounded-full bg-gradient-primary"
                      style={{
                        width: entry.thru === "F" ? "100%" : `${(parseInt(entry.thru) / 18) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hole Stats */}
      <section className="mb-6">
        <Panel title="Hole-by-Hole Stats" subtitle="Average scores per hole (Front 9)">
          <BarChart data={holeStats} height={280} color="#84CC16" />
        </Panel>
      </section>

      {/* Score Entry & Display */}
      <section className="grid gap-6 lg:grid-cols-2">
        <Panel title="Mobile Score Entry" subtitle="On-course input experience">
          <div className="rounded-[var(--radius-md)] border border-gray/10 bg-gradient-to-br from-lime/5 to-emerald/5 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-charcoal">Hole 14</p>
                <p className="text-sm text-slate">Par 4 • 385 yards</p>
              </div>
              <span className="rounded-full bg-lime/20 text-lime px-3 py-1.5 text-xs font-semibold border border-lime/30">
                Group B
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { player: "P1", score: 4 },
                { player: "P2", score: 5 },
                { player: "P3", score: 4 },
                { player: "P4", score: 3 },
              ].map((entry) => (
                <div
                  key={entry.player}
                  className="rounded-[var(--radius-md)] bg-white border border-gray/10 p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-xs text-slate mb-2">{entry.player}</p>
                  <p className="text-2xl font-bold text-charcoal font-heading">{entry.score}</p>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel title="Clubhouse Display" subtitle="TV/projector mode state">
          <div className="rounded-[var(--radius-md)] bg-gradient-dark p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-lg font-semibold">Live Leaderboard</p>
                <p className="text-xs text-white/70 mt-1">Updated 12 seconds ago</p>
              </div>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime"></span>
              </span>
            </div>
            <div className="space-y-3">
              {leaderboard.slice(0, 3).map((entry) => (
                <div
                  key={entry.player}
                  className="flex items-center justify-between p-3 rounded-[var(--radius-md)] bg-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{getRankIcon(entry.rank)}</span>
                    <span className="font-semibold">{entry.player}</span>
                  </div>
                  <span className="text-xl font-bold font-heading text-lime">
                    {entry.net}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}
