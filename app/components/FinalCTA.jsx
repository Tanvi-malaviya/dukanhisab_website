"use client";

import React, { useState } from "react";
import {
  StoreIcon,
  CheckIcon,
  ArrowRightIcon,
  MonitorIcon,
  SmartphoneIcon,
  GooglePlayIcon,
  RupeeIcon,
  ShieldCheckIcon,
  StarIcon,
  ZapIcon,
  GlobeIcon,
  SparklesIcon,
} from "./Icons";

export default function FinalCTA() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#090e17] text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background Decorative Mesh & Radial Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-teal-500/20 via-emerald-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[600px] h-[300px] bg-teal-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[600px] h-[300px] bg-cyan-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Shutter Closing Live Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-teal-950/40 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
            </span>
            <span>9:30 PM • Shop Closing Twilight Tally</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-300">Zero Stress Night</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            Don&apos;t Just Run Your Shop. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">
              Remember Every Single Rupee Inside It.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Sales, stock counts, supplier dues, and customer Udhar. Pull your shutter down with total peace of mind every single night.
          </p>
        </div>

        {/* The Live Interactive "Reconciled Store Terminal" (Unique Visual Centerpiece) */}
      
        {/* Dual Gateway Cards: Mobile App vs Web Command Center */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
          
          {/* Gateway 1: Android Mobile App */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-950/40 group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                  <SmartphoneIcon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800/60">
                  Pocket &amp; Counter POS
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mt-4">
                DukanHisab Mobile App
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Fast barcode scanning, 3-second counter billing, Bluetooth thermal printing, and 1-tap WhatsApp slips right from your phone.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>100% Works Offline (No internet required)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Camera Barcode Scanning &amp; Quick Catalog</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Free WhatsApp Bill Invoicing to Customers</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-black text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-teal-950/60 hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <GooglePlayIcon className="w-5 h-5 text-white" />
                <span>Download Android App</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-300">4.8 / 5.0</span>
                <span>• Trusted by 10,000+ Retailers</span>
              </div>
            </div>
          </div>

          {/* Gateway 2: Desktop Web Panel */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-950/40 group">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <MonitorIcon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/60">
                  Big-Screen Command Center
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mt-4">
                DukanHisab Web Panel
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Comprehensive accounting ledger, bulk Excel imports, multi-branch dashboard, and full tax &amp; profit reports on any PC or laptop.
              </p>

              <div className="mt-5 space-y-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Instant browser access without installing software</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>1-Click Bulk Excel Product &amp; Price Upload</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Multi-User Roles &amp; Cashier Staff Permissions</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <a
                href="https://dukanhisab.in/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl border border-slate-700 hover:border-cyan-500/60 shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MonitorIcon className="w-5 h-5 text-cyan-400" />
                <span>Launch Web Panel (dukanhisab.in/shop)</span>
                <ArrowRightIcon className="w-4 h-4 text-slate-400" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <GlobeIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Accessible on Chrome, Safari, Edge &amp; Firefox</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust & Peace-of-Mind Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-2">
                <ZapIcon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white block">60-Sec Setup</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Start billing in 1 minute</span>
            </div>

            <div className="p-3">
              <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-2">
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white block">100% Private</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Encrypted cloud backups</span>
            </div>

            <div className="p-3">
              <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-2">
                <GlobeIcon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white block">Made For Bharat</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">ગુજરાતી • हिंदी • English</span>
            </div>

            <div className="p-3">
              <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-2">
                <RupeeIcon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white block">Free Forever Tier</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">No credit card required</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
