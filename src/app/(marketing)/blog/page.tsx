import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and tips for golf tournament organizers. Learn how to plan better events, raise more money, and delight your players.",
};

const posts = [
  {
    title: "How to Plan a Charity Golf Tournament: The Complete 2026 Guide",
    excerpt: "Everything you need to know about organizing a successful charity golf event — from budgeting and sponsorships to day-of logistics.",
    category: "Tournament Planning",
    readTime: "8 min read",
    slug: "charity-golf-tournament-guide-2026",
    image: "/images/blog/putters-overhead.jpg",
    imageAlt: "Overhead view of golf putters around a hole",
  },
  {
    title: "Best Golf Tournament Software: A Comprehensive Comparison",
    excerpt: "We compare GolfOps, Golf Genius, Event Caddy, Kismet Golf, and more to help you find the right platform.",
    category: "Product",
    readTime: "10 min read",
    slug: "best-golf-tournament-software",
    image: "/images/hero/tournament-crowd.jpg",
    imageAlt: "Tournament crowd watching golf",
  },
  {
    title: "10 Ways to Increase Fundraising at Your Next Golf Event",
    excerpt: "Proven strategies to maximize donations, sponsorships, and add-on revenue at your charity golf tournament.",
    category: "Fundraising Tips",
    readTime: "7 min read",
    slug: "increase-fundraising-golf-event",
    image: "/images/use-cases/trophy-putters.jpg",
    imageAlt: "Golf trophy on putting green",
  },
  {
    title: "Corporate Golf Day Planning: Impress Clients, Not Spreadsheets",
    excerpt: "How to run a polished corporate golf event that strengthens relationships and builds brand loyalty.",
    category: "Corporate Events",
    readTime: "6 min read",
    slug: "corporate-golf-day-planning",
    image: "/images/use-cases/clubhouse-sunset.jpg",
    imageAlt: "Clubhouse at sunset",
  },
  {
    title: "Golf Tournament Pairings: Why Smart Matching Makes Better Events",
    excerpt: "Discover how AI-powered pairing algorithms create more competitive and enjoyable golf tournaments.",
    category: "Smart Pairings",
    readTime: "5 min read",
    slug: "smart-golf-pairings-guide",
    image: "/images/blog/woman-putting.jpg",
    imageAlt: "Woman putting on golf green",
  },
  {
    title: "Accepting Mobile Money at Golf Events: A Guide for African Tournaments",
    excerpt: "How to integrate M-Pesa, MTN MoMo, and other mobile payment methods into your golf event workflow.",
    category: "Payments",
    readTime: "6 min read",
    slug: "mobile-money-golf-events-africa",
    image: "/images/hero/fairway-ball.jpg",
    imageAlt: "Golf ball on fairway",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-[72px]">
      <section className="section-padding bg-white">
        <div className="container-marketing">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal font-heading leading-tight">
              Insights for Organizers
            </h1>
            <p className="mt-4 text-lg text-slate">
              Guides, tips, and strategies to help you run better golf events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-[var(--radius-md)] overflow-hidden border border-gray/10 hover:shadow-elevated hover:border-emerald/20 transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-emerald bg-emerald/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-charcoal font-heading mb-2 group-hover:text-forest transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
