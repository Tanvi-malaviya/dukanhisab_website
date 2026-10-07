"use client";

import React, { useState, useEffect } from "react";
import { CheckIcon, ArrowRightIcon, RupeeIcon, SparklesIcon } from "./Icons";

// Plan UI config mapped by slug (exact replica of design document)
const PLAN_UI_CONFIG = {
  free: {
    displayName: "Free",
    tagline: "Perfect for getting started",
    popular: false,
    badgeText: null,
    badgeStyle: "",
    ctaText: "Get Started Free",
    ctaStyle: "bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 shadow-xs",
    footnote: "No credit card required",
    subprice: "",
    featureLabels: [
      "Sales & Purchase",
      "Inventory Management",
      "Customers & Suppliers",
      "Basic Reports",
      "Shop Website (Basic)",
      "Works Offline",
      "With Ads",
    ],
  },
  premium: {
    displayName: "Premium",
    tagline: "For growing businesses",
    popular: true,
    badgeText: "Most Popular",
    badgeStyle: "bg-[#05684f] text-white",
    ctaText: "Upgrade to Premium",
    ctaStyle: "bg-[#05684f] hover:bg-[#04523e] text-white shadow-lg shadow-emerald-700/25",
    footnote: "Best for small and medium shops",
    subprice: "(Just ₹1 per day)",
    featureLabels: [
      "All Free Plan Features",
      "No Ads",
      "PDF/Print/WhatsApp Invoices",
      "Email Invoices",
      "Cloud Backup",
      "Excel Export",
      "Shop Website (Themes & Banner)",
      "Up to 2 Shops",
      "Priority Support",
      "Free Feature Updates",
    ],
  },
  business: {
    displayName: "Lifetime",
    tagline: "One-time payment. Lifetime benefits.",
    popular: false,
    badgeText: "Best Value",
    badgeStyle: "bg-gradient-to-r from-amber-500 to-amber-600 text-white",
    ctaText: "Get Lifetime Plan",
    ctaStyle: "bg-[#d97706] hover:bg-[#b45309] text-white shadow-lg shadow-amber-600/25",
    footnote: "One-time payment - No recurring cost",
    subprice: "",
    featureLabels: [
      "All Premium Features",
      "Lifetime Updates (included features)",
      "No Ads",
      "Up to 5 Shops",
      "Premium Website Features",
      "Priority Support",
      "Future Feature Access",
      "Founder Special Offer 🎁",
    ],
  },
};

function formatPrice(price, billingPeriod) {
  const numPrice = parseFloat(price);
  if (billingPeriod === "free" || numPrice === 0) {
    return { display: "₹0", period: "Forever", subprice: "" };
  }
  if (billingPeriod === "lifetime") {
    return {
      display: "₹" + numPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 }),
      period: "One-Time",
      subprice: "",
    };
  }
  if (billingPeriod === "yearly") {
    return {
      display: "₹" + numPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 }),
      period: "per year",
      subprice: "(Just ₹1 per day)",
    };
  }
  if (billingPeriod === "monthly") {
    return {
      display: "₹" + numPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 }),
      period: "per month",
      subprice: "",
    };
  }
  return { display: "₹" + numPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 }), period: "", subprice: "" };
}

function PlanCardSkeleton() {
  return (
    <div className="rounded-3xl p-7 sm:p-8 flex flex-col bg-white border border-slate-200/90 shadow-md animate-pulse">
      <div className="pb-5 border-b border-slate-100 space-y-3">
        <div className="h-5 w-32 bg-slate-200 rounded-lg" />
        <div className="h-3 w-48 bg-slate-100 rounded" />
        <div className="h-12 w-24 bg-slate-200 rounded-lg mt-4" />
      </div>
      <div className="py-6 space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-full bg-slate-200 shrink-0" />
            <div className={"h-3 bg-slate-100 rounded " + (i % 2 === 0 ? "w-40" : "w-32")} />
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-slate-100">
        <div className="h-10 bg-slate-200 rounded-xl" />
      </div>
    </div>
  );
}

const ADDON_UI_META = {
  website: {
    badge: "✓ Included in Lifetime Plan",
  },
  shop: {
    badge: "Centralized Khata & Multi-Branch",
  },
  containers: {
    badge: "Zero Asset & Crate Leakage",
  },
};

function formatAddonPrice(price, billingPeriod) {
  const num = parseFloat(price);
  if (isNaN(num) || num === 0 || billingPeriod === "free") {
    return "Free Add-on";
  }
  const formatted = "₹" + num.toLocaleString("en-IN", { maximumFractionDigits: 0 });
  if (billingPeriod === "lifetime") {
    return `${formatted} Lifetime`;
  }
  if (billingPeriod === "yearly") {
    return `+${formatted} / year`;
  }
  if (billingPeriod === "monthly") {
    return `+${formatted} / month`;
  }
  return formatted;
}

const STATIC_FALLBACK_PLANS = [
  { id: "fallback-free", name: "Free", slug: "free", price: "0.00", billing_period: "free" },
  { id: "fallback-premium", name: "Premium", slug: "premium", price: "365.00", billing_period: "yearly" },
  { id: "fallback-business", name: "Lifetime", slug: "business", price: "999.00", billing_period: "lifetime" },
];

const STATIC_FALLBACK_ADDONS = [
  {
    id: 1,
    title: "Extra Shop",
    slug: "shop",
    type: "shop",
    description: "Add one more shop to your account. Each purchase grants 1 additional shop for a full year.",
    price: "200.00",
    billing_period: "yearly",
  },
  {
    id: 2,
    title: "Shop Website",
    slug: "website",
    type: "website",
    description: "Publish a public website to showcase your products online, with a shareable link for your customers. One-time purchase - pay once, keep it forever.",
    price: "200.00",
    billing_period: "lifetime",
  },
];

export default function PricingSection() {
  const [plans, setPlans] = useState([]);
  const [addons, setAddons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addonsLoading, setAddonsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost/Dukanhisab/public/api";

    async function loadData() {
      // 1. Fetch Plans
      try {
        setLoading(true);
        const res = await fetch(`${apiBase}/public/plans`, { signal: controller.signal });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        setPlans(data.plans || []);
        setIsFallback(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          setPlans(STATIC_FALLBACK_PLANS);
          setIsFallback(true);
        }
      } finally {
        setLoading(false);
      }

      // 2. Fetch Add-ons
      try {
        setAddonsLoading(true);
        const res = await fetch(`${apiBase}/public/addons`, { signal: controller.signal });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        if (Array.isArray(data.addons) && data.addons.length > 0) {
          setAddons(data.addons);
        } else {
          setAddons(STATIC_FALLBACK_ADDONS);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setAddons(STATIC_FALLBACK_ADDONS);
        }
      } finally {
        setAddonsLoading(false);
      }
    }

    loadData();
    return () => controller.abort();
  }, []);

  return (
    <section id="pricing" className="pt-8 sm:pt-10 pb-20 lg:pb-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-teal-50 border border-teal-200/80 rounded-full text-teal-800 text-xs font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>All plans &amp; pricing updated live from admin panel</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {loading ? (
            <>
              <PlanCardSkeleton />
              <PlanCardSkeleton />
              <PlanCardSkeleton />
            </>
          ) : (
            plans.map((plan) => {
              const ui = PLAN_UI_CONFIG[plan.slug] || {
                tagline: plan.description || "",
                popular: false,
                ctaText: "Get Started",
                ctaStyle: "bg-slate-900 hover:bg-slate-800 text-white",
                featureLabels: [],
              };
              const { display, period } = formatPrice(plan.price, plan.billing_period);
              const isPopular = ui.popular || ui.badgeText === "Most Popular";
              const isBestValue = plan.billing_period === "lifetime" || ui.badgeText === "Best Value";
              const cardBorder = isPopular
                ? "bg-white border-2 border-emerald-600 shadow-xl shadow-emerald-700/10 scale-102 z-10"
                : isBestValue
                ? "bg-[#fffdf7] border-2 border-amber-400 shadow-lg shadow-amber-500/10"
                : "bg-white border border-slate-200/90 shadow-sm";

              return (
                <div
                  key={plan.id}
                  className={"rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative " + cardBorder}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#05684f] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}
                  {isBestValue && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      Best Value
                    </div>
                  )}
                  <div>
                    <div className="pb-5 border-b border-slate-100">
                      <h3 className="text-2xl font-black text-slate-900">{ui.displayName || plan.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 min-h-[28px]">{ui.tagline}</p>
                      <div className="mt-4 flex items-baseline gap-1.5 flex-wrap">
                        <span className="text-4xl sm:text-5xl font-black text-slate-900">{display}</span>
                        <span className="text-xs sm:text-sm text-slate-500 font-semibold">{period}</span>
                      </div>
                      {ui.subprice && (
                        <p className="text-xs font-semibold text-emerald-700 mt-1">{ui.subprice}</p>
                      )}
                    </div>
                    <div className="py-6 space-y-3">
                      {ui.featureLabels.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.app.dukanhisab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all active:scale-98 cursor-pointer " + ui.ctaStyle}
                    >
                      <span>{ui.ctaText}</span>
                    </a>
                    {ui.footnote && (
                      <p className="text-center text-[11px] font-medium text-slate-400 mt-2.5">
                        {ui.footnote}
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {isFallback && (
          <p className="text-center text-xs text-slate-400 mt-4">Showing saved plan info. Live prices may vary.</p>
        )}

        <div className="mt-14 max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">Modular Add-ons</span>
              <h3 className="text-xl font-black text-slate-900 mt-2">DukanHisab Add-on Marketplace</h3>
              <p className="text-xs text-slate-500 mt-0.5">Need specialized capabilities? Add modular extensions without forcing expensive plan changes.</p>
            </div>
            <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shrink-0">Managed in /shop/addons</span>
          </div>
          {addonsLoading ? (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 animate-pulse space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-28 bg-slate-200 rounded" />
                    <div className="h-4 w-20 bg-slate-200 rounded" />
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded" />
                  <div className="h-3 w-3/4 bg-slate-100 rounded" />
                </div>
              ))}
            </div>
          ) : (
            <div
              className={
                "mt-6 grid gap-4 " +
                (addons.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")
              }
            >
              {addons.map((addon) => {
                const meta = ADDON_UI_META[addon.slug] || ADDON_UI_META[addon.type] || {};
                const badge = addon.badge || meta.badge;
                const formattedPrice = formatAddonPrice(addon.price, addon.billing_period);

                return (
                  <div
                    key={addon.id || addon.slug}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between transition-all hover:shadow-xs group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-extrabold text-slate-900 group-hover:text-teal-900 transition-colors">
                          {addon.title}
                        </span>
                        <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200/70 shrink-0">
                          {formattedPrice}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {addon.description}
                      </p>
                    </div>
                    {badge && (
                      <div className="pt-3 border-t border-slate-200/60 mt-3">
                        <span className="text-[11px] text-teal-800 font-semibold inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                          {badge}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-10 text-center text-xs text-slate-500">
          No hidden transaction cuts. Cancel or change plans anytime. No long-term lock-in contracts. Supported in English, Gujarati (ગુજરાતી), and Hindi (हिंदी).
        </div>
      </div>
    </section>
  );
}

