import { DashboardPageTitle, Panel } from "@/components/dashboard/primitives";
import { sponsors } from "@/lib/mock-data/dashboard";

export default function SponsorsPage() {
  return (
    <div>
      <DashboardPageTitle
        title="Sponsors & ROI"
        subtitle="Track tier visibility, clicks, leads, and sponsor outcomes post-event."
        action={
          <button className="rounded-[var(--radius-sm)] bg-gradient-primary px-4 py-2 text-sm font-semibold text-forest-deep">
            Generate Sponsor Report
          </button>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        <Panel title="Total Sponsor Value" subtitle="Pipeline + confirmed">
          <p className="text-3xl font-bold font-heading text-charcoal">$38,000</p>
        </Panel>
        <Panel title="Average ROI" subtitle="Across active sponsors">
          <p className="text-3xl font-bold font-heading text-charcoal">2.7x</p>
        </Panel>
        <Panel title="Renewal Intent" subtitle="Survey signal">
          <p className="text-3xl font-bold font-heading text-charcoal">81%</p>
        </Panel>
      </section>

      <section className="mt-6">
        <Panel title="Sponsor Performance" subtitle="Event page + comms placements">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] text-left">
              <thead>
                <tr className="border-b border-gray/10 text-xs uppercase tracking-[0.12em] text-slate">
                  <th className="py-2">Brand</th>
                  <th className="py-2">Tier</th>
                  <th className="py-2">Reach</th>
                  <th className="py-2">Clicks</th>
                  <th className="py-2">Leads</th>
                  <th className="py-2">ROI</th>
                </tr>
              </thead>
              <tbody>
                {sponsors.map((sponsor) => (
                  <tr key={sponsor.brand} className="border-b border-gray/10 last:border-b-0">
                    <td className="py-3 text-sm font-semibold text-charcoal">{sponsor.brand}</td>
                    <td className="py-3 text-sm text-slate">{sponsor.tier}</td>
                    <td className="py-3 text-sm text-slate">{sponsor.reach.toLocaleString()}</td>
                    <td className="py-3 text-sm text-slate">{sponsor.clicks}</td>
                    <td className="py-3 text-sm text-slate">{sponsor.leads}</td>
                    <td className="py-3 text-sm font-semibold text-lime">{sponsor.roi}</td>
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
