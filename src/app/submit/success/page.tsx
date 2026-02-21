"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const subscriptionID = searchParams.get("subscriptionID");
  const planLabel = plan === "sponsored" ? "Sponsored" : "Featured";

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <div className="text-5xl">🎉</div>
      <h1 className="mt-6 text-3xl font-bold text-zinc-900 dark:text-white">
        Welcome to {planLabel}!
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Your subscription is active. We'll get your listing set up within 24 hours.
      </p>
      {subscriptionID && (
        <p className="mt-4 rounded-lg bg-zinc-100 p-3 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          Subscription ID: <code className="font-mono">{subscriptionID}</code>
        </p>
      )}
      <div className="mt-8 space-y-3">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Next steps: email us at{" "}
          <a href="mailto:hello@toolpillar.com" className="text-violet-600 hover:underline">
            hello@toolpillar.com
          </a>
          with your tool details and we'll publish your listing.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-zinc-500">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
