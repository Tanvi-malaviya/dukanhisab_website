"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  GooglePlayIcon, 
  MonitorIcon, 
  ArrowRightIcon, 
  CheckIcon, 
  StarIcon, 
  BarcodeIcon,
  ZapIcon,
  ShieldCheckIcon,
  UsersIcon,
  ReceiptIcon,
  SparklesIcon
} from "./Icons";

export default function FeaturesCtaSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const featureHighlights = [
    {
      title: "Fast Counter POS",
      speed: "3.2s per Bill",
      icon: <ReceiptIcon className="w-5 h-5 text-teal-300" />,
      desc: "Barcode scan items, add discounts, and print 2\" or 3\" thermal receipts with zero lag.",
      badge: "Instant Billing",
    },
    {
      title: "Smart Inventory",
      speed: "Live Stock Sync",
      icon: <BarcodeIcon className="w-5 h-5 text-emerald-300" />,
      desc: "Automatic stock deduction upon sale, low-stock warnings, and barcode label generator.",
      badge: "Zero Stockouts",
    },
    {
      title: "Digital Khata Book",
      speed: "3x Recovery",
      icon: <UsersIcon className="w-5 h-5 text-amber-300" />,
      desc: "Record customer Udhar and send gentle payment reminders on WhatsApp with your UPI QR.",
      badge: "Zero Bad Debts",
    },
    {
      title: "Daily Profit & P&L",
      speed: "100% Accurate",
      icon: <ZapIcon className="w-5 h-5 text-cyan-300" />,
      desc: "Automatic profit calculation on every item sold so you pull your shutter down with total clarity.",
      badge: "Instant Tally",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-slate-100 relative overflow-hidden border-t border-slate-200">
      
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#036272_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bento Feature Launchpad Container */}
        <div className="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#01282f] via-[#02444e] to-[#011c21] text-white p-7 sm:p-11 lg:p-14 border border-teal-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          
          {/* Top Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-teal-400/20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-400/40 text-teal-200 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TEST-DRIVE DUKANHISAB • ALL FEATURES UNLOCKED</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-teal-100 font-semibold">
              <div className="flex text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5 fill-amber-300" />
                ))}
              </div>
              <span className="font-bold text-white">4.8★ on Play Store</span>
              <span className="text-teal-300/80 hidden sm:inline">• 50,000+ Retailers</span>
            </div>
          </div>

          {/* Centerpiece Grid: Left Pitch & Right Interactive Feature Dial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (Span 6): Value Pitch & Dual Launch Portals */}
            <div className="lg:col-span-6 space-y-5">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Ready to Put All These Features to Work? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-200 to-amber-200">
                  Start In Under 60 Seconds.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-teal-100/90 leading-relaxed font-normal">
                Every feature you explored—from instant camera barcode scanning to customer-specific pricing and profit reports—is ready to use right now on your phone and PC.
              </p>

              {/* Dual Launch Cards (Side-by-Side Micro Bento) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                
                {/* Portal 1: Mobile App */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white text-slate-900 border border-white hover:bg-slate-50 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center">
                        <GooglePlayIcon className="w-4 h-4 text-teal-700" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-full">
                        Counter App
                      </span>
                    </div>
                    <div className="text-sm font-black text-slate-900">Mobile POS App</div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      Phone camera barcode scan, thermal printing &amp; WhatsApp bills.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#036272]">
                    <span>Download Free</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Portal 2: Web Command Center */}
                <a
                  href="https://dukanhisab.in/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-teal-950/70 hover:bg-teal-900/90 text-white border border-teal-400/40 hover:border-teal-300 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-xl bg-teal-800/70 flex items-center justify-center">
                        <MonitorIcon className="w-4 h-4 text-teal-200" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-cyan-200 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800/60">
                        Big Screen
                      </span>
                    </div>
                    <div className="text-sm font-black text-white">Web Office Panel</div>
                    <p className="text-[11px] text-teal-100/80 mt-0.5 leading-snug">
                      Bulk Excel import, ledger statements &amp; multi-staff cashier roles.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-teal-800/60 flex items-center justify-between text-xs font-bold text-teal-200">
                    <span>Open in Browser</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

              </div>

              {/* 4 Feature Value Checks */}
              <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-teal-100 font-medium">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400 stroke-[3] shrink-0" />
                  <span>Works 100% Offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400 stroke-[3] shrink-0" />
                  <span>Free Plan Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400 stroke-[3] shrink-0" />
                  <span>Zero Setup Hardware Needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400 stroke-[3] shrink-0" />
                  <span>Automatic Cloud Backup</span>
                </div>
              </div>

            </div>

            {/* Right Column (Span 6): Interactive Feature Radar / Live Preview Showcase */}
            <div className="lg:col-span-6 space-y-3">
              
              <div className="text-xs font-extrabold uppercase tracking-wider text-teal-300 flex items-center justify-between px-1">
                <span>Core Capabilities Quick-View</span>
                <span className="text-[11px] font-semibold text-teal-400/80">Click to Inspect</span>
              </div>

              {/* 4 Feature Bento Cards */}
              <div className="space-y-2.5">
                {featureHighlights.map((feat, idx) => {
                  const isActive = activeFeature === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveFeature(idx)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? "bg-white/15 border-teal-300/80 shadow-lg shadow-teal-950/40 ring-1 ring-teal-400/40 scale-[1.01]"
                          : "bg-black/25 border-teal-800/40 hover:bg-black/35 hover:border-teal-700/60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                            isActive ? "bg-teal-500/30 text-white" : "bg-black/40 text-teal-300"
                          }`}>
                            {feat.icon}
                          </div>
                          <div>
                            <div className="text-sm font-extrabold text-white flex items-center gap-2">
                              <span>{feat.title}</span>
                              <span className="text-[10px] font-bold text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded-full border border-teal-700/40">
                                {feat.badge}
                              </span>
                            </div>
                            <p className="text-xs text-teal-100/80 mt-0.5 font-normal">
                              {feat.desc}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0 ml-3">
                          <span className="text-xs font-black text-amber-300 block">
                            {feat.speed}
                          </span>
                          <span className="text-[9px] text-teal-300/70 block">
                            {isActive ? "Selected ✓" : "Speed"}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Micro Footnote */}
              <div className="pt-2 px-2 flex items-center justify-between text-[11px] text-teal-300/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No credit card or payment required to start</span>
                </span>
                <Link href="/pricing" className="text-white hover:underline font-bold flex items-center gap-1">
                  <span>View Pricing</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>

            </div>

          </div>

          {/* Bottom Trust & Platform Strip */}
          <div className="mt-10 pt-6 border-t border-teal-400/20 flex flex-wrap items-center justify-between gap-4 text-xs text-teal-200/80">
            <div className="flex items-center gap-4">
              <span>📱 Android Smartphone</span>
              <span>•</span>
              <span>💻 Windows / Mac Laptop</span>
              <span>•</span>
              <span>🖨️ Thermal Roll &amp; Laser Print</span>
            </div>
            <div className="font-semibold text-white">
              🇮🇳 Made with pride for Indian Retail &amp; Wholesale Businesses
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
