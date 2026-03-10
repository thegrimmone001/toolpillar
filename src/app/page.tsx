import Link from "next/link";
import { tools, getFeaturedTools } from "@/data/tools";
import { ALL_CATEGORIES, CATEGORY_META } from "@/types";
import ToolCard from "@/components/ToolCard";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  const featured = getFeaturedTools();
  const totalTools = tools.length;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-violet-50 to-white px-4 pb-16 pt-20 dark:from-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Discover the Best{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              AI Tools
            </span>
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {totalTools}+ curated AI tools across {ALL_CATEGORIES.length} categories.
            Find the perfect tool for writing, coding, design, marketing, and more.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tools"
              className="rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
            >
              Browse All Tools
            </Link>
            <Link
              href="/submit"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Submit Your Tool
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Banner — between hero and featured */}
      <AdBanner slot="top-banner" format="horizontal" className="py-4" />

      {/* Featured Tools */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Featured Tools</h2>
          <Link href="/tools" className="text-sm font-medium text-violet-600 hover:text-violet-700">
            View all &rarr;
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Ad Banner — between featured and categories */}
      <AdBanner slot="mid-banner" format="horizontal" className="pb-4" />

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Browse by Category</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ALL_CATEGORIES.map((cat) => {
            const meta = CATEGORY_META[cat];
            const count = tools.filter((t) => t.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/categories/${cat}`}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-violet-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
              >
                <span className="text-2xl">{meta.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{meta.label}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{count} tools</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
