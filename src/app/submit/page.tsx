import type { Metadata } from "next";
import Link from "next/link";
import PayPalSubscribeButton from "@/components/PayPalSubscribeButton";

export const metadata: Metadata = {
  title: "Submit Your AI Tool",
  description: "Get your AI tool listed in our curated directory. Choose from free or featured listing options.",
};

const plans = [
  {
    name: "Free Listing",
    price: "$0",
    period: "",
    features: [
      "Basic listing with description",
      "Category placement",
      "Permanent listing",
      "Standard visibility",
    ],
    cta: "Submit Free Listing",
    featured: false,
  },
  {
    name: "Featured Listing",
    price: "$29",
    period: "/month",
    features: [
      "Everything in Free, plus:",
      "\"Featured\" badge on your listing",
      "Homepage placement",
      "Priority in category pages",
      "Highlighted card design",
      "Analytics dashboard (coming soon)",
    ],
    cta: "Get Featured",
    featured: true,
  },
  {
    name: "Sponsored Listing",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Featured, plus:",
      "Top of category placement",
      "Dedicated review article",
      "Social media promotion",
      "Newsletter inclusion",
      "Custom affiliate tracking",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
          Get Your AI Tool Listed
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Reach thousands of people searching for AI tools every month.
          Choose the plan that fits your needs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              plan.featured
                ? "border-violet-400 bg-violet-50 shadow-lg shadow-violet-100/50 dark:border-violet-600 dark:bg-violet-950/30 dark:shadow-violet-900/20"
                : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            }`}
          >
            {plan.featured && (
              <span className="mb-4 w-fit rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">
                Most Popular
              </span>
            )}
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{plan.name}</h2>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-zinc-900 dark:text-white">{plan.price}</span>
              {plan.period && <span className="text-sm text-zinc-500">{plan.period}</span>}
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-0.5 text-violet-600">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            {/* PayPal for paid plans, mailto for free/sponsored-contact */}
            {plan.name === "Featured Listing" ? (
              <div className="mt-8">
                <PayPalSubscribeButton planKey="featured" />
              </div>
            ) : plan.name === "Sponsored Listing" ? (
              <div className="mt-8">
                <PayPalSubscribeButton planKey="sponsored" />
              </div>
            ) : (
              <a
                href="mailto:hello@aitoolindex.com?subject=Free%20Listing%20Submission"
                className="mt-8 block rounded-full border border-zinc-300 py-3 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {plan.cta}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Questions? Reach out at{" "}
          <a href="mailto:hello@aitoolindex.com" className="text-violet-600 hover:underline">
            hello@aitoolindex.com
          </a>
        </p>
        <Link href="/tools" className="mt-4 inline-block text-sm text-violet-600 hover:underline">
          &larr; Back to browsing tools
        </Link>
      </div>
    </div>
  );
}
