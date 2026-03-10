"use client";

// Ad banner component — supports Google AdSense and direct placements.
// For AdSense: set NEXT_PUBLIC_ADSENSE_CLIENT in .env.local
// For direct ads: pass custom props to render sponsor banners.

interface AdBannerProps {
  slot?: string;                 // AdSense ad slot id
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
  className?: string;
  // Direct sponsor banner (used when no AdSense)
  sponsorName?: string;
  sponsorUrl?: string;
  sponsorText?: string;
}

export default function AdBanner({
  slot,
  format = "auto",
  className = "",
  sponsorName,
  sponsorUrl,
  sponsorText,
}: AdBannerProps) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  // Direct sponsor banner (takes priority if provided)
  if (sponsorName && sponsorUrl) {
    return (
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>
        <a
          href={sponsorUrl}
          target="_blank"
          rel="noopener sponsored"
          className="block rounded-xl border border-violet-200 bg-gradient-to-r from-violet-50 to-indigo-50 p-4 text-center transition-all hover:shadow-md dark:border-violet-800 dark:from-violet-950/30 dark:to-indigo-950/30"
        >
          <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Sponsored</span>
          <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">
            {sponsorText || `Check out ${sponsorName}`}
          </p>
          <span className="mt-1 inline-block text-xs text-violet-600 hover:underline">
            Learn more →
          </span>
        </a>
      </div>
    );
  }

  // Google AdSense banner
  if (adsenseClient && slot) {
    return (
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>
        <div className="text-center">
          <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Advertisement</span>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={adsenseClient}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        </div>
      </div>
    );
  }

  // Fallback: self-promotion banner (no AdSense configured yet)
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>
      <a
        href="/submit"
        className="block rounded-xl border border-dashed border-violet-300 bg-violet-50/50 p-4 text-center transition-all hover:border-violet-400 hover:bg-violet-50 dark:border-violet-800 dark:bg-violet-950/20 dark:hover:border-violet-700"
      >
        <p className="text-sm font-semibold text-violet-700 dark:text-violet-400">
          🚀 Want your AI tool featured here?
        </p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          Get your tool in front of thousands of users. Starting at $29/month.
        </p>
      </a>
    </div>
  );
}
