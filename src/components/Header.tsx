import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="text-2xl">⚡</span>
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            AI Tool Index
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
          <Link href="/tools" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
            Browse Tools
          </Link>
          <Link href="/categories/code-dev" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
            Categories
          </Link>
        </nav>
        <Link
          href="/submit"
          className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700"
        >
          Submit Tool
        </Link>
      </div>
    </header>
  );
}
