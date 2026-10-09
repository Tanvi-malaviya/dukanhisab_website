"use client";

import React from "react";
import Image from "next/image";
import { 
  GooglePlayIcon, 
  MonitorIcon,
  ArrowRightIcon, 
  CheckIcon, 
  StarIcon, 
  ShieldCheckIcon,
  ZapIcon,
  CloudSyncIcon,
  SparklesIcon
} from "./Icons";

export default function ResourcesCtaSection() {
  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container (Compact & Refined) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#012a32] via-[#036272] to-[#012229] text-white p-6 sm:p-8 lg:p-10 border border-teal-500/30 shadow-xl overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[250px] bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf_0.75px,transparent_0.75px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

          {/* Top Pill / Status Ribbon */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-7 pb-4 border-b border-teal-400/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-400/30 text-teal-200 text-[11px] font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>100% FREE SETUP • DUKANHISAB BUSINESS SUITE</span>
            </div>

            {/* Rating Chip */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-100">
              <div className="flex items-center text-amber-300">
                <StarIcon className="w-3.5 h-3.5 fill-amber-300" />
                <StarIcon className="w-3.5 h-3.5 fill-amber-300" />
                <StarIcon className="w-3.5 h-3.5 fill-amber-300" />
                <StarIcon className="w-3.5 h-3.5 fill-amber-300" />
                <StarIcon className="w-3.5 h-3.5 fill-amber-300" />
              </div>
              <span className="font-bold text-white">4.8/5.0</span>
              <span className="text-teal-300/80 text-[11px]">• 50,000+ Indian Shopkeepers</span>
            </div>
          </div>

          {/* Two-Column Grid: Left Pitch & Right Phone Mockup */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column (Span 7) */}
            <div className="lg:col-span-7 space-y-4">
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18]">
                Put Knowledge Into Action. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-200 to-amber-200">
                  Upgrade Your Shop in 60 Seconds.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-normal max-w-lg">
                You’ve seen the tools and guides — now experience how effortless daily counter billing, automated WhatsApp Udhar collection, and stock tracking can be for your retail store.
              </p>

              {/* Dual Action Buttons: Android App & Web Panel */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                
                {/* Google Play Download Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg shadow-teal-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white"
                >
                  <GooglePlayIcon className="w-4 h-4 text-teal-700 shrink-0" />
                  <div className="text-left leading-tight">
                    <span className="block text-[8px] uppercase font-bold text-slate-500 tracking-wider">Free Download</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900">Google Play Store</span>
                  </div>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-1 transition-transform ml-0.5" />
                </a>

                {/* Web Panel Button */}
                <a
                  href="https://dukanhisab.in/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-950/70 hover:bg-teal-900/90 text-white font-bold text-xs sm:text-sm border border-teal-400/40 hover:border-teal-300 shadow-md transition-all active:scale-[0.98]"
                >
                  <MonitorIcon className="w-4 h-4 text-teal-300" />
                  <span>Launch Web Panel</span>
                </a>

              </div>

              {/* 4 Feature Value Points Grid */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-teal-100 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-300 shrink-0">
                    <CheckIcon className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>100% Works Offline (No Wi-Fi needed)</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-300 shrink-0">
                    <CheckIcon className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>WhatsApp Invoices with UPI QR Code</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-300 shrink-0">
                    <CheckIcon className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Free Lifetime Plan Available</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-300 shrink-0">
                    <CheckIcon className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Automatic Encrypted Cloud Backup</span>
                </div>
              </div>

            </div>

            {/* Right Column: Mobile App Showcase + Live Reconciled Floating Metrics (Span 5) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              <div className="relative w-full max-w-xs py-2 sm:py-3 flex justify-center">
                
                {/* Real Smartphone Mockup (Compact) */}
                <div className="relative w-[145px] sm:w-[165px] rounded-3xl p-1.5 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 border-2 sm:border-[3px] border-slate-700/80 shadow-xl overflow-hidden ring-1 ring-white/10">
                  {/* Dynamic Island pill */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-slate-800 mr-1"></div>
                    <div className="w-4 h-0.5 rounded-full bg-slate-800"></div>
                  </div>

                  {/* Screen Content */}
                  <div className="relative rounded-[1.3rem] overflow-hidden bg-white shadow-inner aspect-[459/920]">
                    <Image
                      src="/images/dukanhisab-mobile-dashboard.png"
                      alt="DukanHisab Shop Billing App Interface"
                      width={488}
                      height={980}
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                  </div>
                </div>

                {/* Floating Metric Card 1: Today's Counter Sales (Top Left) */}
                <div className="absolute top-1 -left-2 sm:-left-5 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-teal-100 text-slate-900 flex items-center gap-2 animate-bounce-subtle z-20">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black shrink-0">
                    ₹
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight block">Today's Sales</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900 block leading-tight">₹18,450.00</span>
                    <span className="text-[9px] font-bold text-emerald-600 block">↑ 24% Growth</span>
                  </div>
                </div>

                {/* Floating Metric Card 2: 3-Second Counter Speed (Bottom Right) */}
                <div className="absolute bottom-2 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-teal-100 text-slate-900 flex items-center gap-2 z-20">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center text-xs font-black shrink-0">
                    ⚡
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight block">Billing Speed</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900 block leading-tight">3.2 Seconds</span>
                    <span className="text-[9px] font-bold text-teal-700 block">Barcode Ready</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Trust & Peace-of-Mind Strip */}
          <div className="mt-8 pt-5 border-t border-teal-400/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              
              <div className="p-1.5 sm:p-2">
                <div className="w-7 h-7 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center mx-auto mb-1">
                  <ZapIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-white block">60-Sec Setup</span>
                <span className="text-[10px] text-teal-200/80 block">Instant billing</span>
              </div>

              <div className="p-1.5 sm:p-2">
                <div className="w-7 h-7 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center mx-auto mb-1">
                  <ShieldCheckIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-white block">100% Private</span>
                <span className="text-[10px] text-teal-200/80 block">Encrypted data</span>
              </div>

              <div className="p-1.5 sm:p-2">
                <div className="w-7 h-7 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center mx-auto mb-1">
                  <CloudSyncIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-white block">All-in-One Sync</span>
                <span className="text-[10px] text-teal-200/80 block">Phone &amp; Laptop</span>
              </div>

              <div className="p-1.5 sm:p-2">
                <div className="w-7 h-7 rounded-full bg-teal-400/20 text-teal-300 flex items-center justify-center mx-auto mb-1">
                  <SparklesIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-white block">Free Forever Tier</span>
                <span className="text-[10px] text-teal-200/80 block">No credit card</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
