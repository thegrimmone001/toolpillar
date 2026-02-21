import Link from "next/link";
import { ALL_CATEGORIES, CATEGORY_META } from "@/types";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="text-xl">🏛️</span>
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                ToolPillar
              </span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              Discover the best AI tools for every task. Curated, categorized, and updated regularly.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Categories</h3>
            <ul className="mt-3 space-y-2">
              {ALL_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/categories/${cat}`}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {CATEGORY_META[cat].emoji} {CATEGORY_META[cat].label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">More</h3>
            <ul className="mt-3 space-y-2">
              {ALL_CATEGORIES.slice(5).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/categories/${cat}`}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {CATEGORY_META[cat].emoji} {CATEGORY_META[cat].label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Directory</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  All Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/submit"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  Submit a Tool
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <p className="text-center text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} ToolPillar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
