import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getToolsByCategory } from "@/data/tools";
import { ALL_CATEGORIES, CATEGORY_META, Category } from "@/types";
import ToolCard from "@/components/ToolCard";

export function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({ category: cat }));
}

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_META[category as Category];
  if (!meta) return { title: "Category Not Found" };
  return {
    title: `Best AI ${meta.label} Tools`,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!ALL_CATEGORIES.includes(category as Category)) notFound();

  const meta = CATEGORY_META[category as Category];
  const categoryTools = getToolsByCategory(category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">Home</Link>
        {" / "}
        <span className="text-zinc-900 dark:text-white">{meta.label}</span>
      </nav>

      <div className="flex items-center gap-3">
        <span className="text-4xl">{meta.emoji}</span>
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{meta.label}</h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">{meta.description}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {categoryTools.length} tools in this category
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {/* Other categories */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">Other Categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {ALL_CATEGORIES.filter((c) => c !== category).map((cat) => (
            <Link
              key={cat}
              href={`/categories/${cat}`}
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-400"
            >
              {CATEGORY_META[cat].emoji} {CATEGORY_META[cat].label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
