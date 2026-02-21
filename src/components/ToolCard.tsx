import Link from "next/link";
import { Tool, CATEGORY_META } from "@/types";

const PRICING_COLORS: Record<string, string> = {
  free: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  freemium: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  paid: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "open-source": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const cat = CATEGORY_META[tool.category];
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700 dark:hover:shadow-violet-900/20"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-xl dark:bg-zinc-800">
            {cat.emoji}
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
              {tool.name}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{cat.label}</p>
          </div>
        </div>
        {tool.featured && (
          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
            Featured
          </span>
        )}
      </div>
      <p className="mt-3 line-clamp-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{tool.tagline}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${PRICING_COLORS[tool.pricing]}`}>
          {tool.pricing === "open-source" ? "Open Source" : tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
        </span>
        {tool.pricingNote && (
          <span className="text-xs text-zinc-400 dark:text-zinc-500">{tool.pricingNote}</span>
        )}
      </div>
    </Link>
  );
}
