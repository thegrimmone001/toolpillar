import type { Metadata } from "next";
import SearchBar from "@/components/SearchBar";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Browse All AI Tools",
  description: "Search and filter 500+ AI tools across writing, coding, design, marketing, and more.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">All AI Tools</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Search by name, category, or tag to find the perfect AI tool.
      </p>
      <div className="mt-8">
        <SearchBar />
      </div>
      {/* Ad banner below search results */}
      <AdBanner slot="tools-list" format="horizontal" className="mt-8" />
    </div>
  );
}
