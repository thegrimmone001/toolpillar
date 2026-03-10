import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { tools, getToolBySlug, getToolsByCategory } from "@/data/tools";
import { CATEGORY_META } from "@/types";
import ToolCard from "@/components/ToolCard";
import AdBanner from "@/components/AdBanner";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found" };
  return {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    keywords: [tool.name, "AI tool", ...tool.tags],
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const cat = CATEGORY_META[tool.category];
  const related = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: "AI Tool",
    offers: {
      "@type": "Offer",
      price: tool.pricing === "free" || tool.pricing === "open-source" ? "0" : undefined,
      priceCurrency: "USD",
      description: tool.pricingNote,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">Home</Link>
          {" / "}
          <Link href={`/categories/${tool.category}`} className="hover:text-zinc-900 dark:hover:text-white">
            {cat.label}
          </Link>
          {" / "}
          <span className="text-zinc-900 dark:text-white">{tool.name}</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-100 text-3xl dark:bg-zinc-800">
            {cat.emoji}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{tool.name}</h1>
              {tool.featured && (
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">{tool.tagline}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={tool.affiliateUrl || tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
          >
            Visit {tool.name} &rarr;
          </a>
          <span className="flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
            {tool.pricing === "open-source"
              ? "Open Source"
              : tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
            {tool.pricingNote && ` · ${tool.pricingNote}`}
          </span>
        </div>

        {/* Ad Banner — below CTA */}
        <AdBanner slot="tool-detail" format="horizontal" className="mt-8" />

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">About {tool.name}</h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">{tool.description}</p>
        </div>

        {/* Tags */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Tags</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              More {cat.label} Tools
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((t) => (
                <ToolCard key={t.slug} tool={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
