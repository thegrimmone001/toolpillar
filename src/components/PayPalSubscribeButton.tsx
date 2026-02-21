"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

// Renders a PayPal Subscriptions button for the given plan key.
// Requires env vars:
// - NEXT_PUBLIC_PAYPAL_CLIENT_ID
// - NEXT_PUBLIC_PAYPAL_PLAN_ID_FEATURED
// - NEXT_PUBLIC_PAYPAL_PLAN_ID_SPONSORED
export default function PayPalSubscribeButton({ planKey }: { planKey: "featured" | "sponsored" }) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const planId =
    planKey === "featured"
      ? process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID_FEATURED
      : process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID_SPONSORED;

  useEffect(() => {
    if (!loaded || !containerRef.current || !(window as any).paypal || !planId) return;

    // Clear existing buttons if re-rendering
    containerRef.current.innerHTML = "";

    const paypal = (window as any).paypal;
    paypal
      .Buttons({
        style: { layout: "horizontal", color: "gold", shape: "pill", label: "subscribe" },
        createSubscription: (_data: any, actions: any) => {
          return actions.subscription.create({ plan_id: planId });
        },
        onApprove: (data: any) => {
          const subscriptionID = data.subscriptionID || data.subscriptionId;
          window.location.href = `/submit/success?plan=${planKey}&subscriptionID=${subscriptionID}`;
        },
        onError: (err: any) => {
          console.error("PayPal error", err);
          alert("There was an error processing your subscription. Please try again or contact support.");
        },
      })
      .render(containerRef.current);
  }, [loaded, planId, planKey]);

  if (!clientId) {
    return (
      <p className="text-sm text-zinc-500">
        Configure payments by setting NEXT_PUBLIC_PAYPAL_CLIENT_ID and plan IDs in .env.local
      </p>
    );
  }

  return (
    <div>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${clientId}&components=buttons&vault=true&intent=subscription`}
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      />
      {!planId ? (
        <p className="text-sm text-zinc-500">Set the plan ID env var for the {planKey} plan to enable checkout.</p>
      ) : (
        <div ref={containerRef} />
      )}
    </div>
  );
}
