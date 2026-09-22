"use client";

import React from "react";
import { StoreIcon, CheckIcon, ArrowRightIcon, MonitorIcon, SmartphoneIcon } from "./Icons";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white relative overflow-hidden">
      {/* Twilight shop closing ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-600/15 via-teal-700/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* End of Day Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>9:30 PM • Shop Closing Twilight Tally</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          Don't Just Run Your Shop. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            Remember Everything That Happens Inside It.
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
          Sales. Purchases. Stock. Customers. Suppliers. Payments. Expenses. Returns. <br />
          <span className="text-white font-bold">All connected with DukanHisab.</span>
        </p>

        {/* The Twilight Shop Closing Record Graphic */}
        <div className="my-10 max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xs">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
            <span>Day Session Closing</span>
            <span className="text-emerald-400 font-mono">Status: Reconciled</span>
          </div>

          <div className="py-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-300">
            <span className="flex items-center gap-1">
              <CheckIcon className="w-4 h-4 text-emerald-400" /> Cash Drawer Balanced
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <CheckIcon className="w-4 h-4 text-emerald-400" /> Inventory Decremented
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <CheckIcon className="w-4 h-4 text-emerald-400" /> WhatsApp Bills Delivered
            </span>
          </div>

          <div className="pt-3 border-t border-slate-800 text-center">
            <span className="inline-block font-extrabold text-sm sm:text-base text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-4 py-1.5 rounded-full shadow-inner">
              Complete Shop Record ✓
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#interactive-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-emerald-900/40 hover:shadow-2xl transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <SmartphoneIcon className="w-5 h-5" />
            <span>Start With DukanHisab</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>

          <a
            href="#mobile-web"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base px-8 py-4 rounded-2xl border border-slate-700 transition-all"
          >
            <MonitorIcon className="w-5 h-5 text-emerald-400" />
            <span>Explore the Web Panel</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Available for Android, iOS, and all Web Browsers. Zero credit card required to test.
        </p>

      </div>
    </section>
  );
}
