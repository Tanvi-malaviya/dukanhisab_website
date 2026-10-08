"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  GooglePlayIcon, 
  ArrowRightIcon, 
  CheckIcon, 
  StarIcon, 
  SparklesIcon,
  ShieldCheckIcon,
  ZapIcon,
  RupeeIcon,
  CloudSyncIcon
} from "./Icons";

export default function ResourcesCtaSection() {
  const [activeTab, setActiveTab] = useState("billing");

  const tabData = {
    billing: {
      badge: "⚡ Fast 5-Sec Counter Speed",
      headline: "Create Professional GST Bills in Seconds",
      metric1: { label: "Average Bill Time", value: "3.8 Sec", sub: "Barcode Ready" },
      metric2: { label: "Tax Accuracy", value: "100%", sub: "Automated GST & Cess" },
      highlight: "Print 2-inch, 3-inch thermal or A4 bills & share directly via WhatsApp with zero calculation mistakes.",
      tag: "Billing & Invoicing"
    },
    khata: {
      badge: "👥 3x Faster Udhar Recovery",
      headline: "Zero-Loss Customer & Supplier Credit",
      metric1: { label: "Recovered Faster", value: "3x Rate", sub: "WhatsApp Reminders" },
      metric2: { label: "Ledger Disputes", value: "0 Dues", sub: "Digital Audit Trail" },
      highlight: "Send automated gentle payment links with UPI QR code. Customers pay faster without any awkward calls.",
      tag: "Khata Accounting"
    },
    inventory: {
      badge: "📦 Never Run Out of High-Demand Stock",
      headline: "Real-Time Stock & Expiry Control",
      metric1: { label: "Dead Stock Reduced", value: "35%", sub: "In First 60 Days" },
      metric2: { label: "Stock Visibility", value: "Live", sub: "Batch & Item Tracking" },
      highlight: "Get instant low-stock alerts before items run out and track wholesale vs retail profit margins live.",
      tag: "Smart Inventory"
    }
  };

  const current = tabData[activeTab];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Growth Launchpad Card */}
        <div className="relative rounded-3xl sm:rounded-[40px] bg-gradient-to-br from-[#041c19] via-[#062c26] to-[#021714] text-white p-7 sm:p-12 lg:p-16 border border-teal-500/30 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[450px] h-[350px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#14b8a6_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Top Pill Row */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-teal-800/40">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>GROWTH TOOLKIT • DUKANHISAB BUSINESS SUITE</span>
            </div>

            {/* Micro rating chip */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <div className="flex items-center text-amber-400">
                <StarIcon className="w-4 h-4 fill-amber-400" />
                <StarIcon className="w-4 h-4 fill-amber-400" />
                <StarIcon className="w-4 h-4 fill-amber-400" />
                <StarIcon className="w-4 h-4 fill-amber-400" />
                <StarIcon className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="font-bold text-white">4.8/5</span>
              <span className="text-teal-400/80">• 50,000+ Indian Dukandars</span>
            </div>
          </div>

          {/* Two-Column Grid: Left Pitch & Right Interactive Terminal */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Put Knowledge Into Action. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300">
                  Upgrade Your Shop Today.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                You’ve explored the guides and business blueprints — now experience how effortless daily billing, automated Udhar recovery, and live inventory control can be.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 via-[#036272] to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-teal-950/50 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden border border-teal-300/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <GooglePlayIcon className="w-5 h-5 text-white shrink-0" />
                  <span>Download Free on Android</span>
                  <ArrowRightIcon className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/ecosystem"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 hover:border-white/25 backdrop-blur-sm transition-all"
                >
                  <span>Explore Web Ecosystem</span>
                </Link>
              </div>

              {/* Trust Badges Check Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Free Plan Forever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Works Completely Offline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cloud Auto-Backup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Credit Card Required</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Live Toolkit Terminal (Span 6) */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b2b26]/90 border border-teal-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden">
                
                {/* Header with Interactive Tabs */}
                <div className="flex items-center justify-between pb-4 border-b border-teal-800/50 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-bold text-teal-200 tracking-wider">DUKANHISAB LIVE ENGINE</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-400/30 px-2.5 py-0.5 rounded-full">
                    Active & Ready
                  </span>
                </div>

                {/* Tab Switcher Buttons */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-black/30 rounded-xl mb-5 border border-teal-900/60">
                  <button
                    type="button"
                    onClick={() => setActiveTab("billing")}
                    className={`text-xs font-bold py-2 px-2 rounded-lg transition-all text-center ${
                      activeTab === "billing"
                        ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-md shadow-teal-950/60"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    🧾 Billing
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("khata")}
                    className={`text-xs font-bold py-2 px-2 rounded-lg transition-all text-center ${
                      activeTab === "khata"
                        ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-md shadow-teal-950/60"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    👥 Udhar
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("inventory")}
                    className={`text-xs font-bold py-2 px-2 rounded-lg transition-all text-center ${
                      activeTab === "inventory"
                        ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-md shadow-teal-950/60"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    📦 Stock
                  </button>
                </div>

                {/* Active Tab Showcase Box */}
                <div className="space-y-4">
                  <div className="inline-block text-[11px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full">
                    {current.badge}
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    {current.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {current.highlight}
                  </p>

                  {/* Two Key Live Metrics Cards */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-black/35 rounded-2xl p-4 border border-teal-800/40">
                      <p className="text-[11px] text-teal-300/80 font-medium">{current.metric1.label}</p>
                      <p className="text-2xl font-black text-white mt-1">{current.metric1.value}</p>
                      <span className="text-[10px] text-emerald-400 font-semibold">{current.metric1.sub}</span>
                    </div>

                    <div className="bg-black/35 rounded-2xl p-4 border border-teal-800/40">
                      <p className="text-[11px] text-teal-300/80 font-medium">{current.metric2.label}</p>
                      <p className="text-2xl font-black text-white mt-1">{current.metric2.value}</p>
                      <span className="text-[10px] text-emerald-400 font-semibold">{current.metric2.sub}</span>
                    </div>
                  </div>

                  {/* Mini Bottom Footnote */}
                  <div className="pt-3 border-t border-teal-900/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <CloudSyncIcon className="w-3.5 h-3.5 text-teal-400" />
                      <span>Syncs across Phone, Tablet & PC</span>
                    </span>
                    <Link
                      href="/how-it-works"
                      className="text-teal-300 hover:text-white font-bold flex items-center gap-1"
                    >
                      <span>How it works</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Banner Accent */}
          <div className="mt-12 pt-8 border-t border-teal-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="text-center sm:text-left">
              🇮🇳 Crafted with pride to empower Indian retail and wholesale shopkeepers.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-teal-400 font-semibold">Need assistance?</span>
              <Link href="/contact" className="text-white hover:text-teal-300 font-bold underline underline-offset-4">
                Chat with our Team
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
