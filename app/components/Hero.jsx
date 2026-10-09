"use client";

import React from "react";
import Link from "next/link";
import HomeHeroShowcase from "./HomeHeroShowcase";
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  GooglePlayIcon, 
  MonitorIcon 
} from "./Icons";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-12 overflow-hidden bg-gradient-to-b from-[#e8f8f2] via-[#f0fcf7] to-white">
      {/* Soft ambient glow on the right */}
      <div className="absolute -top-40 right-0 w-[550px] h-[450px] bg-gradient-to-bl from-teal-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===================== HERO 2-COLUMN SECTION (PREMIUM INDIAN SAAS) ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 pt-3 lg:pt-6">
          
          {/* Left Column: Pill, Headline, Copy, Trust Points & CTA Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Pill/Badge: MADE FOR INDIAN SHOPKEEPERS */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/90 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>MADE FOR INDIAN SHOPKEEPERS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.12]">
              Everything Your Shop Needs, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#036272] via-[#0b8093] to-[#02515e]">
                All in One App
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              From billing and inventory to customers, suppliers and business reports — DukanHisab helps you manage your entire shop simply and professionally.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {[
                { title: "Easy to Use", icon: "✓" },
                { title: "Works Offline", icon: "⚡" },
                { title: "Secure & Reliable", icon: "🔒" },
                { title: "Made for Indian Shops", icon: "🏪" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-[#036272] flex items-center justify-center text-xs font-black shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA Buttons Row (Including 'Explore Demo' Link to Dedicated Demo Page) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#036272] via-[#0a7a8d] to-[#02515e] hover:from-[#02515e] hover:to-[#01353e] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-[#036272]/25 hover:shadow-xl transition-all active:scale-98 group cursor-pointer"
              >
                <GooglePlayIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Download App</span>
              </a>

              {/* EXPLORE DEMO BUTTON -> NAVIGATES TO DEDICATED NEW /demo PAGE */}
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-[#edf7f8] hover:bg-[#d6eff2] text-[#036272] font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full border border-[#036272]/30 shadow-xs hover:border-[#036272] hover:shadow-md transition-all active:scale-98 cursor-pointer group"
              >
                <SparklesIcon className="w-4 h-4 text-[#036272] group-hover:rotate-12 transition-transform" />
                <span>Explore Demo</span>
                <ArrowRightIcon className="w-4 h-4 text-[#036272] group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://dukanhisab.in/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-5 py-3.5 rounded-full border border-slate-300 shadow-2xs hover:border-teal-500 hover:text-teal-700 transition-all cursor-pointer group"
              >
                <MonitorIcon className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <span>Web Panel</span>
              </a>
            </div>

            {/* Social Trust Line */}
            <div className="pt-2 flex items-center gap-2 sm:gap-3 text-xs text-slate-500 font-medium">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <span className="font-bold text-slate-800">4.8 Rating</span>
              <span className="text-slate-300">•</span>
              <span>Trusted by 50,000+ Indian Retailers</span>
            </div>

          </div>

          {/* Right Column: Interactive Dual-Device POS Command Center */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <HomeHeroShowcase />
          </div>

        </div>

        {/* ===================== 5 QUICK FEATURE CARDS ROW ===================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {[
            {
              icon: "⏱️",
              title: "Create Bills in Seconds",
              bg: "bg-emerald-50/80 border-emerald-200 hover:bg-emerald-100/70",
              textColor: "text-emerald-950",
            },
            {
              icon: "📑",
              title: "GST & Non-GST Support",
              bg: "bg-amber-50/80 border-amber-200 hover:bg-amber-100/70",
              textColor: "text-amber-950",
            },
            {
              icon: "🖨️",
              title: "Print & Share Instantly",
              bg: "bg-purple-50/80 border-purple-200 hover:bg-purple-100/70",
              textColor: "text-purple-950",
            },
            {
              icon: "％",
              title: "Apply Discounts & Offers",
              bg: "bg-blue-50/80 border-blue-200 hover:bg-blue-100/70",
              textColor: "text-blue-950",
            },
            {
              icon: "👥",
              title: "Add Customers Easily",
              bg: "bg-rose-50/80 border-rose-200 hover:bg-rose-100/70",
              textColor: "text-rose-950",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border ${item.bg} text-center flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-xs group cursor-pointer`}
            >
              <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className={`text-xs font-bold ${item.textColor} leading-tight`}>
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
