import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "See what's new in GolfOps. Product updates, new features, and improvements.",
};

const updates = [
  {
    date: "February 2026",
    version: "0.1.0",
    title: "Initial Launch",
    changes: [
      "Marketing website with all core pages",
      "Brand design system with GolfOps identity",
      "Responsive navigation and footer",
      "Features, Pricing, About, and Contact pages",
      "Charity, Corporate, and Clubs landing pages",
      "Blog infrastructure with SEO optimization",
      "Privacy Policy and Terms of Service",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="pt-[72px]">
      <section className="section-padding bg-white">
        <div className="container-marketing max-w-3xl">
          <p className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
            Changelog
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal font-heading leading-tight mb-4">
            What&apos;s New
          </h1>
          <p className="text-lg text-slate mb-16">
            Product updates, new features, and improvements to GolfOps.
          </p>

          <div className="space-y-12">
            {updates.map((update) => (
              <article key={update.version} className="relative pl-8 border-l-2 border-emerald/20">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald border-4 border-white" />
                <div className="mb-4">
                  <span className="text-xs font-semibold text-emerald bg-emerald/10 px-2.5 py-1 rounded-full">
                    v{update.version}
                  </span>
                  <span className="text-sm text-gray ml-3">{update.date}</span>
                </div>
                <h2 className="text-xl font-bold text-charcoal font-heading mb-3">
                  {update.title}
                </h2>
                <ul className="space-y-2">
                  {update.changes.map((change) => (
                    <li key={change} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 flex-shrink-0" />
                      <span className="text-sm text-slate">{change}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
