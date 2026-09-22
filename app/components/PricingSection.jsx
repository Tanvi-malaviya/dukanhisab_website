"use client";

import React, { useState } from "react";
import { CheckIcon, ArrowRightIcon, RupeeIcon, SparklesIcon } from "./Icons";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("annual");

  const plans = [
    {
      name: "Starter Core",
      tagline: "For small shops starting digital billing and khata.",
      price: billingCycle === "annual" ? "₹0" : "₹0",
      period: "Forever Free",
      popular: false,
      features: [
        "Fast POS Billing & Invoicing",
        "Up to 200 Products Master",
        "Customer Khata & Balance Tracking",
        "WhatsApp Invoice Sharing",
        "Cash Drawer Tracking",
        "Single Mobile Counter",
      ],
      ctaText: "Start Managing Free",
      ctaStyle: "bg-white border-2 border-slate-300 text-slate-800 hover:bg-slate-50",
    },
    {
      name: "Shop Pro",
      tagline: "For active retail shops needing barcode POS & cloud sync.",
      price: billingCycle === "annual" ? "₹499" : "₹599",
      period: "/ month, billed annually",
      popular: true,
      features: [
        "Everything in Starter Core",
        "Unlimited Products & Inventory",
        "Full Barcode Scanning Support",
        "Customer-Specific Custom Pricing",
        "Supplier Purchases & Payables",
        "Sale & Purchase Returns",
        "Web Panel Access on PC/Laptop",
        "Daily Expense Logging",
        "Excel & PDF Data Export",
      ],
      ctaText: "Start Managing Your Shop",
      ctaStyle: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-700/25",
    },
    {
      name: "Business Growth",
      tagline: "For growing shops with multiple counters and heavy stock.",
      price: billingCycle === "annual" ? "₹999" : "₹1,199",
      period: "/ month, billed annually",
      popular: false,
      features: [
        "Everything in Shop Pro",
        "Multi-Counter / Multi-Device Billing",
        "Multi-User Staff Permissions",
        "Automated Cloud Backup",
        "Advanced Ledger & P&L Reports",
        "Priority Phone & WhatsApp Support",
        "Bulk Excel Import/Export",
      ],
      ctaText: "Upgrade to Business",
      ctaStyle: "bg-slate-900 hover:bg-slate-800 text-white",
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <RupeeIcon className="w-3.5 h-3.5 text-emerald-700" />
            Clear & Honest Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple Pricing for Hardworking Shops.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Start free with core counter features. Upgrade when your shop needs full barcode scanning, supplier ledgers, and web panel management.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-white rounded-2xl border border-slate-300 shadow-xs">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Annual Plan</span>
              <span className="text-[10px] bg-emerald-700 text-emerald-100 px-1.5 py-0.2 rounded">
                Save ~18%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? "bg-white border-2 border-emerald-500 shadow-2xl shadow-emerald-700/15 scale-102 z-10"
                  : "bg-white border border-slate-200/90 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  Most Popular For Retailers
                </div>
              )}

              <div>
                <div className="pb-5 border-b border-slate-100">
                  <h3 className="text-xl font-black text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.tagline}</p>
                  
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-xs text-slate-500 font-medium">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block">
                    What's Included:
                  </span>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#interactive-demo"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all active:scale-98 ${plan.ctaStyle}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          No hidden transaction cuts. Cancel or change plans anytime. No long-term lock-in contracts.
        </div>

      </div>
    </section>
  );
}
