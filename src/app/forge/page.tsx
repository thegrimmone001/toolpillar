import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ModelForge — Federated Hub for Local LLM Development",
  description:
    "Build, version, and share your local LLMs. A decentralized, self-hostable platform for the open AI community. Like GitHub, but for models — federated, private, yours.",
  keywords: [
    "local LLM",
    "federated AI",
    "model registry",
    "self-hosted",
    "open source",
    "LLM development",
    "decentralized AI",
    "model versioning",
  ],
};

const features = [
  {
    icon: "🔗",
    title: "Federated by Design",
    desc: "Run your own instance. Discover and pull models from any other instance on the network. No single point of control.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    desc: "Your models and data never leave your infrastructure unless you choose to share them. Self-host everything.",
  },
  {
    icon: "📦",
    title: "Git-Style Versioning",
    desc: "Track every iteration of your model. Commit, tag, branch. Full provenance and lineage for every weight file.",
  },
  {
    icon: "⚡",
    title: "CLI-Native Workflow",
    desc: "Push, pull, and manage models from the terminal. Works alongside Ollama, LM Studio, and llama.cpp.",
  },
  {
    icon: "🌐",
    title: "Open Source",
    desc: "MIT licensed. Fork it, extend it, contribute back. Built by the community, for the community.",
  },
  {
    icon: "🤝",
    title: "Collaborative Training",
    desc: "Share training configs, datasets, and fine-tuning recipes. Reproduce results. Build on each other's work.",
  },
];

const useCases = [
  {
    persona: "🧪 Researchers",
    text: "Version and share fine-tuned models with your lab. Track experiments, reproduce results, and build on each other's work without uploading to centralized platforms.",
  },
  {
    persona: "🏢 Enterprise Teams",
    text: "Private model registry behind your firewall. SSO, access control, audit logs. Pull open models from the federation while keeping proprietary work internal.",
  },
  {
    persona: "🛠️ Indie Developers",
    text: "Publish your fine-tunes for the community. Get credit for your work. Pull models from others. No vendor lock-in, no gatekeepers.",
  },
];

export default function ForgePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 via-amber-50 to-white px-4 pb-20 pt-24 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-sm text-orange-700 dark:border-orange-800 dark:bg-zinc-800 dark:text-orange-400">
            <span className="text-lg">🔥</span>
            <span>Coming Soon — Join the Waitlist</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Model
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Forge
            </span>
          </h1>
          <p className="mt-2 text-xl font-medium text-zinc-600 dark:text-zinc-400">
            The Federated Hub for Local LLM Development
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">
            Build, version, and share your local LLMs on a platform you control.
            Like GitHub for models — but decentralized, self-hostable, and yours.
          </p>

          {/* Waitlist Form */}
          <div className="mx-auto mt-10 max-w-md">
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:ring-orange-800"
              />
              <input type="hidden" name="source" value="modelforge-waitlist" />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:from-orange-700 hover:to-red-700 hover:shadow-lg hover:shadow-orange-200/50"
              >
                Join Waitlist →
              </button>
            </form>
            <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
              No spam. We&apos;ll notify you when early access opens.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto mt-12 flex max-w-lg justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">100%</p>
              <p className="text-xs text-zinc-500">Open Source</p>
            </div>
            <div className="border-l border-zinc-200 dark:border-zinc-700" />
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">Self-Host</p>
              <p className="text-xs text-zinc-500">Or Managed</p>
            </div>
            <div className="border-l border-zinc-200 dark:border-zinc-700" />
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">Federated</p>
              <p className="text-xs text-zinc-500">No Lock-In</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
          The Problem with AI Today
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-5 dark:border-red-900 dark:bg-red-950/20">
            <p className="text-sm font-semibold text-red-700 dark:text-red-400">🏢 Centralized Control</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              A few companies control where you host models, how you share them, and what&apos;s allowed. Your work lives on someone else&apos;s platform.
            </p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-5 dark:border-red-900 dark:bg-red-950/20">
            <p className="text-sm font-semibold text-red-700 dark:text-red-400">🔓 No Versioning</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Fine-tuned a model? Good luck tracking iterations, sharing configs, or reproducing results. It&apos;s all manual and messy.
            </p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-5 dark:border-red-900 dark:bg-red-950/20">
            <p className="text-sm font-semibold text-red-700 dark:text-red-400">👁️ Privacy Gaps</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Upload your model to a platform and you lose control. Enterprise teams can&apos;t risk proprietary models on third-party infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-zinc-50 px-4 py-16 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
            Built for the Decentralized Future
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-orange-700"
              >
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-3 font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
          How It Works
        </h2>
        <div className="mt-10 space-y-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">1</div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">Deploy Your Instance</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                One command with Docker. Your own model registry, running on your hardware. Or use our managed hosting.
              </p>
              <code className="mt-2 inline-block rounded bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                docker run -p 8080:8080 modelforge/server
              </code>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">2</div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">Push Your Models</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Use the CLI to push models, tag versions, and track changes. Works with GGUF, safetensors, and more.
              </p>
              <code className="mt-2 inline-block rounded bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                mforge push my-llama-finetune:v2 --tag &quot;better-coding&quot;
              </code>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">3</div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">Federate &amp; Discover</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Connect to other instances. Browse public models from the federation. Pull what you need, share what you want.
              </p>
              <code className="mt-2 inline-block rounded bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                mforge pull alice@her-server.com/coding-llama:latest
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-zinc-50 px-4 py-16 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
            Who It&apos;s For
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {useCases.map((uc) => (
              <div
                key={uc.persona}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <p className="text-lg font-semibold text-zinc-900 dark:text-white">{uc.persona}</p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{uc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding / Support */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Support the Mission
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          ModelForge is open source and community-funded. Your donation helps us build
          the decentralized AI infrastructure the world needs. Every dollar goes directly
          to development.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.paypal.com/donate/?business=hugh%40hughgalloway.com&currency_code=USD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-8 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-orange-200/50"
          >
            ❤️ Donate via PayPal
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-8 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            ⭐ Star on GitHub (coming soon)
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Decentralized is the Future
          </h2>
          <p className="mt-4 text-orange-100">
            Be part of the movement. Join the waitlist and help shape what open AI development looks like.
          </p>
          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/60 outline-none backdrop-blur-sm focus:border-white/40 focus:ring-2 focus:ring-white/20"
            />
            <input type="hidden" name="source" value="modelforge-waitlist-bottom" />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-50"
            >
              Join Waitlist →
            </button>
          </form>
        </div>
      </section>

      {/* Footer link back */}
      <div className="mx-auto max-w-4xl px-4 py-8 text-center">
        <Link href="/" className="text-sm text-violet-600 hover:underline">
          ← Back to ToolPillar
        </Link>
        <span className="mx-2 text-zinc-300">|</span>
        <span className="text-xs text-zinc-400">
          ModelForge is a project by{" "}
          <Link href="/" className="text-violet-600 hover:underline">ToolPillar</Link>
        </span>
      </div>
    </div>
  );
}
