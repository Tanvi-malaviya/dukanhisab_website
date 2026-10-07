"use client";

import React from "react";
import Link from "next/link";
import { GooglePlayIcon, WhatsAppIcon, ArrowRightIcon } from "./Icons";

export default function InventoryCtaSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ripple Style CTA Card */}
        <div className="relative rounded-[2rem] sm:rounded-[2.8rem] bg-[#0d9488] text-white p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Layered Concentric Ripple Rings (Right Side) */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] lg:w-[55%] pointer-events-none overflow-hidden flex items-center justify-end">
            <svg
              className="h-[150%] sm:h-[180%] w-auto translate-x-[25%] sm:translate-x-[20%] shrink-0"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer-most Ring */}
              <circle cx="500" cy="300" r="460" fill="white" fillOpacity="0.05" />
              {/* Ring 5 */}
              <circle cx="500" cy="300" r="390" fill="white" fillOpacity="0.08" />
              {/* Ring 4 */}
              <circle cx="500" cy="300" r="320" fill="white" fillOpacity="0.12" />
              {/* Ring 3 */}
              <circle cx="500" cy="300" r="250" fill="white" fillOpacity="0.18" />
              {/* Ring 2 */}
              <circle cx="500" cy="300" r="180" fill="white" fillOpacity="0.28" />
              {/* Ring 1 */}
              <circle cx="500" cy="300" r="115" fill="white" fillOpacity="0.45" />
              {/* Center Core */}
              <circle cx="500" cy="300" r="55" fill="white" fillOpacity="0.85" />
            </svg>
          </div>

          {/* Left-Aligned Content Container */}
          <div className="relative z-10 max-w-xl space-y-6">
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Take Total Control <br className="hidden sm:inline" />
              of Your Stock.
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-teal-50/90 leading-relaxed font-normal max-w-md">
              Your store inventory should work for you, not the other way around. Track items, prevent stockouts, and grow with confidence.
            </p>

            {/* Pill Buttons with Metallic Toggle Sphere */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              
              {/* Primary Pill Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-4 bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-bold pl-6 pr-3 py-3 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Download Mobile App</span>
                <span className="w-6 h-6 rounded-full bg-gradient-to-b from-slate-100 via-white to-slate-400 shadow-md border border-white/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                </span>
              </a>

              {/* Secondary Pill Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-bold pl-6 pr-3 py-3 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Request Free Demo</span>
                <span className="w-6 h-6 rounded-full bg-gradient-to-b from-slate-100 via-white to-slate-400 shadow-md border border-white/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                </span>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
