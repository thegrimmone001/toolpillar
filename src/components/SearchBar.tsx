"use client";
import { useState } from "react";
import { searchTools } from "@/data/tools";
import ToolCard from "./ToolCard";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(() => searchTools(""));

  return (
    <div>
      <div className="relative">
        <input
          value={query}
          onChange={(e) => {
            const q = e.target.value;
            setQuery(q);
            setResults(searchTools(q));
          }}
          placeholder="Search tools, categories, or tags..."
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-violet-500 transition focus:ring-2 dark:border-zinc-800 dark:bg-zinc-900"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">⌘K</span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((t) => (
          <ToolCard key={t.slug} tool={t} />)
        )}
      </div>
    </div>
  );
}
