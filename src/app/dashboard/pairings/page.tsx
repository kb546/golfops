import { DashboardPageTitle, Panel, ProgressBar } from "@/components/dashboard/primitives";
import { pairings } from "@/lib/mock-data/dashboard";

export default function PairingsPage() {
  return (
    <div>
      <DashboardPageTitle
        title="Smart Pairings"
        subtitle="AI-balanced groups by handicap, preferences, and relationship rules."
        action={
          <button className="rounded-[var(--radius-sm)] bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-forest-light">
            Re-run AI Balancer
          </button>
        }
      />

      <section className="grid gap-4 lg:grid-cols-3">
        <Panel title="AI Pairing Confidence" subtitle="Current configuration">
          <p className="mb-3 text-3xl font-bold font-heading text-charcoal">92%</p>
          <ProgressBar value={92} />
          <p className="mt-3 text-sm text-slate">Constraints respected: handicap spread, VIP requests, no-repeat pair rules.</p>
        </Panel>

        <Panel title="Tee Sheet Summary" subtitle="Morning wave">
          <div className="space-y-2 text-sm text-slate">
            <p>Groups generated: <span className="font-semibold text-charcoal">18</span></p>
            <p>Average HCP spread: <span className="font-semibold text-charcoal">3.2</span></p>
            <p>Preference satisfaction: <span className="font-semibold text-charcoal">89%</span></p>
          </div>
        </Panel>

        <Panel title="Manual Overrides" subtitle="Drag/drop after AI run">
          <div className="space-y-2 text-sm text-slate">
            <p>Pending overrides: <span className="font-semibold text-charcoal">3</span></p>
            <p>Conflicts detected: <span className="font-semibold text-charcoal">1</span></p>
            <p>Last update: <span className="font-semibold text-charcoal">6 min ago</span></p>
          </div>
        </Panel>
      </section>

      <section className="mt-6">
        <Panel title="Workflow Snapshot" subtitle="Preference import -> AI balance -> tee sheet publish">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-[var(--radius-sm)] border border-gray/10 bg-mist p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate">Step 1</p>
              <p className="mt-1 text-sm font-semibold text-charcoal">Import Preferences</p>
              <p className="mt-1 text-xs text-slate">Player requests, VIP tags, and no-pair constraints ingested.</p>
            </div>
            <div className="rounded-[var(--radius-sm)] border border-lime/30 bg-lime/10 p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate">Step 2</p>
              <p className="mt-1 text-sm font-semibold text-charcoal">AI Balancer</p>
              <p className="mt-1 text-xs text-slate">Groups optimized by handicap, compatibility, and pace.</p>
            </div>
            <div className="rounded-[var(--radius-sm)] border border-gray/10 bg-mist p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-slate">Step 3</p>
              <p className="mt-1 text-sm font-semibold text-charcoal">Publish Tee Sheet</p>
              <p className="mt-1 text-xs text-slate">Instant sync to mobile, print board, and starter desk.</p>
            </div>
          </div>
        </Panel>
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-2">
        {pairings.map((group) => (
          <Panel
            key={`${group.teeTime}-${group.hole}`}
            title={`${group.teeTime} • Hole ${group.hole.replace("#", "")}`}
            subtitle="Auto-balanced foursome"
          >
            <div className="space-y-2">
              {group.players.map((player) => (
                <div key={player.name} className="flex items-center justify-between rounded-[var(--radius-sm)] bg-mist px-3 py-2">
                  <p className="text-sm font-medium text-charcoal">{player.name}</p>
                  <div className="flex items-center gap-2 text-xs text-slate">
                    <span className="rounded-full bg-white px-2 py-1">HCP {player.handicap}</span>
                    <span className="rounded-full bg-white px-2 py-1">{player.preference}</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </section>
    </div>
  );
}
