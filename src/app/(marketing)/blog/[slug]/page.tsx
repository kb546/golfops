import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title,
    description: `Read about ${title.toLowerCase()} on the GolfOps blog.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="pt-[72px]">
      <article className="section-padding bg-white">
        <div className="container-marketing max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-forest transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal font-heading leading-tight mb-6">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray mb-12 pb-8 border-b border-gray/10">
            <span>GolfOps Team</span>
            <span>&middot;</span>
            <span>Coming Soon</span>
          </div>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate leading-relaxed">
              This blog post is coming soon. We&apos;re working on high-quality,
              SEO-optimized content to help golf tournament organizers run
              better events.
            </p>
            <p className="text-base text-slate leading-relaxed mt-4">
              In the meantime, check out our{" "}
              <Link href="/features" className="text-forest font-semibold hover:underline">
                features
              </Link>{" "}
              or{" "}
              <Link href="/register" className="text-forest font-semibold hover:underline">
                get started free
              </Link>{" "}
              with your first event.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
