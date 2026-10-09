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
    // subprice: "(Just ₹1 per day)",
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
      // subprice: "(Just ₹1 per day)",
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

function formatAddonPrice(price, billingPeriod) {
  const numPrice = parseFloat(price);
  if (isNaN(numPrice) || numPrice === 0) {
    return { display: "₹0", period: "Free Add-on", subprice: "" };
  }
  if (billingPeriod === "lifetime") {
    return {
      display: "₹" + numPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 }),
      period: "One-Time",
      subprice: "(Pay once, keep forever)",
    };
  }
  if (billingPeriod === "yearly") {
    return {
      display: "₹" + numPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 }),
      period: "per year",
      subprice: "(Extendable yearly anytime)",
    };
  }
  if (billingPeriod === "monthly") {
    return {
      display: "₹" + numPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 }),
      period: "per month",
      subprice: "",
    };
  }
  return {
    display: "₹" + numPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 }),
    period: billingPeriod ? `per ${billingPeriod}` : "",
    subprice: "",
  };
}


const ADDON_UI_CONFIG = {
  shop: {
    displayName: "Extra Shop",
    tagline: "Add one more shop or branch to your account",
    badgeText: "Multi-Branch",
    badgeStyle: "bg-teal-700 text-white",
    cardBorder: "bg-white border-2 border-teal-600/80 shadow-lg shadow-teal-900/10",
    ctaText: "Add Extra Shop",
    ctaStyle: "bg-[#036272] hover:bg-[#024f5c] text-white shadow-md shadow-teal-900/20",
    footnote: "Centralized Khata & Ledger across all branches",
    subprice: "(Extendable yearly anytime)",
    featureLabels: [
      "1 Additional Shop / Branch access",
      "Independent inventory & counter billing",
      "Centralized Khata & ledger reporting",
      "Switch between shops in 1-click",
      "Full 1-year validity per purchase",
      "Multi-staff & device support",
    ],
  },
  website: {
    displayName: "Shop Website",
    tagline: "Your 1-click digital public storefront",
    badgeText: "One-Time • Lifetime",
    badgeStyle: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
    cardBorder: "bg-[#f8fdfb] border-2 border-emerald-500/90 shadow-lg shadow-emerald-700/10",
    ctaText: "Activate Shop Website",
    ctaStyle: "bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-md shadow-emerald-700/20",
    footnote: "✓ Included free in Lifetime Plan",
    subprice: "(Pay once, keep forever)",
    featureLabels: [
      "Instant public website & product catalog",
      "1-Click direct WhatsApp customer orders",
      "Real-time stock decrement from counter",
      "Custom shop banner & brand theme colors",
      "Customer call button & inquiry form",
      "Zero monthly or annual hosting fees",
    ],
  },
};


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

    // 3.5-second timeout safeguard so user is never stuck waiting if local API is slow/offline
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 3500);

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
        setPlans(STATIC_FALLBACK_PLANS);
        setIsFallback(true);
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
        setAddons(STATIC_FALLBACK_ADDONS);
      } finally {
        setAddonsLoading(false);
      }
    }

    loadData();
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return (
    <section id="pricing" className="pt-8 sm:pt-10 pb-10 lg:pb-14 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status & Live Indicator */}
        <div className="flex justify-center mb-8">
          {loading ? (
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-teal-300 rounded-full text-slate-800 text-xs font-bold shadow-md shadow-teal-900/5 animate-pulse">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-teal-200 border-t-[#036272] animate-spin shrink-0" />
              <span>Fetching live plans &amp; pricing from server...</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-teal-50 border border-teal-200/80 rounded-full text-teal-800 text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>All plans &amp; pricing updated live from admin panel</span>
            </div>
          )}
        </div>

        {/* Pricing Plans Grid or Animated Loader */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
            <div className="relative w-14 h-14 mb-4">
              <div className="w-14 h-14 rounded-full border-4 border-teal-100 border-t-[#036272] animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#036272] animate-ping" />
              </div>
            </div>
            <h3 className="text-base font-extrabold text-slate-900">
              Loading Subscription Plans...
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Please wait while we fetch the latest subscription plans
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan) => {
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
            })}
          </div>
        )}

        {isFallback && !loading && (
          <p className="text-center text-xs text-slate-400 mt-4">Showing saved plan info. Live prices may vary.</p>
        )}

        {/* Modular Add-ons Marketplace Section */}
        <div className="mt-14 max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                Modular Add-ons
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                DukanHisab Add-on Marketplace
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Need specialized capabilities? Add modular extensions without forcing expensive plan changes.
              </p>
            </div>
            <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 shrink-0">
              Managed in /shop/addons
            </span>
          </div>

          {addonsLoading ? (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <div className="w-10 h-10 rounded-full border-3 border-teal-100 border-t-[#036272] animate-spin mb-3" />
              <span className="text-xs font-bold text-slate-700">Loading Add-on Extensions...</span>
            </div>
          ) : (
            <div
              className={
                "mt-8 grid gap-8 items-stretch " +
                (addons.length === 1
                  ? "max-w-md mx-auto grid-cols-1"
                  : addons.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")
              }
            >
              {addons.map((addon) => {
                const ui =
                  ADDON_UI_CONFIG[addon.slug] ||
                  ADDON_UI_CONFIG[addon.type] || {
                    displayName: addon.title,
                    tagline: addon.description,
                    badgeText: addon.billing_period === "lifetime" ? "Lifetime Add-on" : "Modular Add-on",
                    badgeStyle: "bg-teal-700 text-white",
                    cardBorder: "bg-white border-2 border-teal-600/70 shadow-lg shadow-teal-900/10",
                    ctaText: `Activate ${addon.title}`,
                    ctaStyle: "bg-[#036272] hover:bg-[#024f5c] text-white shadow-md shadow-teal-900/20",
                    footnote: "Instant activation for your shop",
                    subprice: addon.billing_period === "lifetime" ? "(Pay once, keep forever)" : "(Extendable anytime)",
                    featureLabels: [
                      addon.description || "Modular capability for your shop",
                      "Instant activation in your account",
                      "Full customer support & updates",
                    ],
                  };

                const { display, period, subprice } = formatAddonPrice(addon.price, addon.billing_period);
                const finalSubprice = ui.subprice || subprice;

                return (
                  <div
                    key={addon.id || addon.slug}
                    className={
                      "rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative " +
                      (ui.cardBorder || "bg-white border-2 border-slate-200 shadow-md")
                    }
                  >
                    {ui.badgeText && (
                      <div
                        className={
                          "absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap " +
                          ui.badgeStyle
                        }
                      >
                        {ui.badgeText}
                      </div>
                    )}

                    <div>
                      <div className="pb-5 border-b border-slate-100">
                        <h4 className="text-2xl font-black text-slate-900">
                          {ui.displayName || addon.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 min-h-[28px]">
                          {ui.tagline || addon.description}
                        </p>
                        <div className="mt-4 flex items-baseline gap-1.5 flex-wrap">
                          <span className="text-4xl sm:text-5xl font-black text-slate-900">
                            {display}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-500 font-semibold">
                            {period}
                          </span>
                        </div>
                        {finalSubprice && (
                          <p className="text-xs font-semibold text-teal-700 mt-1">
                            {finalSubprice}
                          </p>
                        )}
                      </div>

                      <div className="py-6 space-y-3">
                        {ui.featureLabels.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                          >
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
                        className={
                          "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all active:scale-98 cursor-pointer " +
                          ui.ctaStyle
                        }
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

