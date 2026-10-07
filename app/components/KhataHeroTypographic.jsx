"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GooglePlayIcon, WhatsAppIcon, ArrowRightIcon, ShieldCheckIcon } from "./Icons";

export default function KhataHeroTypographic() {
  const [toggleActive, setToggleActive] = useState(true);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-2 pb-5 sm:pt-3 sm:pb-7 border-b border-teal-100/60">
      
      {/* Subtle Brand Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-teal-200/25 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb & Live Status Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2 sm:mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-teal-700">Home</Link>
            <span>›</span>
            <span className="text-[#0d9488] font-bold">Khata &amp; Accounting</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#115e59] px-3.5 py-1 rounded-full text-xs font-bold tracking-tight shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse"></span>
            <span>Zero Calculation Mistakes • 100% Automatic</span>
          </div>
        </div>

        {/* ===================== THE TYPOGRAPHIC HERO SHOWPIECE ===================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto select-none">
          
          {/* LINE 1: [Fanned Cards Deck] + "Accounting" + [Toggle Switch] */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 gap-y-1.5 mb-0.5 sm:mb-1">
            
            {/* Fanning Floating Ledger & Payment Cards */}
            <div className="relative h-16 w-40 sm:h-20 sm:w-52 shrink-0 flex items-center justify-center">
              
              {/* Card 1: Khata Udhar (Brand Emerald/Teal) */}
              <div className="absolute left-0 bottom-1 w-13 sm:w-15 h-16 sm:h-20 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 p-1.5 shadow-md transform -rotate-18 -translate-y-1 hover:-translate-y-3 hover:rotate-0 transition-transform duration-300 cursor-pointer text-white">
                <span className="text-[8px] font-black text-teal-100 uppercase tracking-tight block">Khata</span>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-white block mt-1.5">₹4.2k</span>
                <div className="w-4 h-2 bg-teal-400/40 rounded-xs mt-1.5"></div>
              </div>

              {/* Card 2: UPI GPay (White Card with Teal Border) */}
              <div className="absolute left-5.5 bottom-1 w-13 sm:w-15 h-16 sm:h-20 rounded-xl bg-white border border-teal-200/90 p-1.5 shadow-md transform -rotate-10 -translate-y-1.5 hover:-translate-y-3 hover:rotate-0 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center gap-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#0d9488]"></span>
                  <span className="text-[8px] font-black text-slate-800">GPay</span>
                </div>
                <span className="text-[9px] font-bold text-teal-700 block mt-2.5">UPI</span>
                <div className="w-4 h-1.5 bg-teal-100 rounded-xs mt-1.5"></div>
              </div>

              {/* Card 3: WhatsApp Pay (Brand Teal) */}
              <div className="absolute left-13 bottom-1 w-13 sm:w-15 h-16 sm:h-20 rounded-xl bg-gradient-to-br from-[#0d9488] to-[#0f766e] p-1.5 shadow-lg transform -rotate-2 -translate-y-2 hover:-translate-y-4 hover:rotate-0 transition-transform duration-300 cursor-pointer text-white">
                <span className="text-[8px] font-bold text-teal-100 block">💬 Pay</span>
                <span className="text-[9px] font-black text-white block mt-1.5">Auto</span>
                <div className="w-4 h-1.5 bg-teal-300/40 rounded-xs mt-1.5"></div>
              </div>

              {/* Card 4: Cash Galla (Mint Card with Teal Border) */}
              <div className="absolute left-20.5 bottom-1 w-13 sm:w-15 h-16 sm:h-20 rounded-xl bg-[#e6f7f6] border border-teal-300 p-1.5 shadow-md transform rotate-6 -translate-y-1 hover:-translate-y-3 hover:rotate-0 transition-transform duration-300 cursor-pointer text-teal-950">
                <span className="text-[8px] font-black text-teal-700 block">Galla</span>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-teal-900 block mt-1.5">Cash</span>
                <div className="w-4 h-1.5 bg-teal-600/30 rounded-xs mt-1.5"></div>
              </div>

              {/* Card 5: Bank / RuPay (Deep Forest Teal) */}
              <div className="absolute left-28 bottom-1 w-13 sm:w-15 h-16 sm:h-20 rounded-xl bg-gradient-to-br from-[#115e59] to-[#134e4a] p-1.5 shadow-md transform rotate-14 hover:-translate-y-3 hover:rotate-0 transition-transform duration-300 cursor-pointer text-white">
                <span className="text-[8px] font-black text-teal-200 block">RuPay</span>
                <span className="text-[9px] font-bold text-white block mt-2.5">Direct</span>
              </div>

              {/* Clicking Mouse Pointer Cursor */}
              <div className="absolute bottom-[-2px] left-[42%] z-20 pointer-events-none drop-shadow-md transform -rotate-12 animate-bounce">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d9488] fill-[#0d9488] stroke-white stroke-2" viewBox="0 0 24 24">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
              </div>

            </div>

            {/* Word: "Accounting" */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Accounting
            </h1>

            {/* Interactive Brand Toggle Switch [ON] */}
            <button
              type="button"
              onClick={() => setToggleActive(!toggleActive)}
              className={`w-13 sm:w-15 h-7.5 sm:h-8.5 rounded-full p-1 transition-all duration-300 flex items-center cursor-pointer shadow-inner border-2 ${
                toggleActive 
                  ? "bg-[#0d9488] border-[#14b8a6] justify-end shadow-teal-900/30" 
                  : "bg-slate-300 border-slate-400 justify-start"
              }`}
              title="Toggle Auto Reminders"
            >
              <span className="w-5.5 h-5.5 rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-200 shadow-md transform transition-transform" />
            </button>

          </div>

          {/* LINE 2: "that feels" */}
          <div className="mb-0.5 sm:mb-1">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              that feels
            </span>
          </div>

          {/* LINE 3: "effortless" (Brand Teal) + [Lightning] + [WhatsApp] + [Lock Badge] */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-1.5 mb-2.5 sm:mb-3">
            
            {/* Word: "effortless" in DukanHisab Teal/Emerald theme */}
            <span className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0d9488] tracking-tight leading-none drop-shadow-xs">
              effortless
            </span>

            {/* 3 Iconic Accompanying Badges in Brand Theme */}
            <div className="flex items-center gap-1.5 sm:gap-2 pl-1">
              
              {/* Badge 1: Brand Teal squircle with lightning */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#0d9488] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md border border-teal-400 transform -rotate-6 hover:rotate-0 transition-transform">
                <span className="text-base sm:text-lg text-white">⚡</span>
              </div>

              {/* Badge 2: Crisp white squircle with WhatsApp reminder */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md border border-teal-200 transform rotate-3 hover:rotate-0 transition-transform">
                <WhatsAppIcon className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-[#0d9488]" />
              </div>

              {/* Badge 3: Deep Forest Teal squircle with metallic lock */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-[#115e59] to-[#0f766e] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md border border-teal-600 transform rotate-12 hover:rotate-0 transition-transform text-white">
                <span className="text-xs sm:text-sm">🔒</span>
              </div>

            </div>

          </div>

          {/* Subtitle Text (Tight margin, zero excess gap) */}
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed font-medium mb-3.5 sm:mb-4">
            Designed for modern Indian shopkeepers. Record customer Udhar, reconcile daily cash galla, and collect pending dues 3x faster with automated WhatsApp reminders.
          </p>

          {/* ===================== CTA BUTTONS (MATCHING DUKANHISAB THEME) ===================== */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            {/* Brand Primary Button (Emerald/Teal Google Play CTA) */}
            <a
              href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-2xl shadow-lg shadow-teal-700/25 hover:shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <GooglePlayIcon className="w-5 h-5 text-white" />
              <span>Download App</span>
            </a>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-teal-50/60 text-slate-800 font-bold text-sm sm:text-base px-6 py-3 rounded-2xl border border-teal-200 shadow-xs hover:border-teal-300 transition-all"
            >
              <span>Book a Free Demo</span>
              <ArrowRightIcon className="w-4 h-4 text-[#0d9488]" />
            </Link>

          </div>

          {/* Trust Footnote (Tight spacing) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-500 font-semibold mt-2.5 sm:mt-3">
            <span className="flex items-center gap-1.5">
              <span className="text-[#0d9488] font-bold">✓</span> 100% Free Forever Plan
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#0d9488] font-bold">✓</span> Auto WhatsApp Reminders
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#0d9488] font-bold">✓</span> Bank-Grade 256-bit Backup
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
