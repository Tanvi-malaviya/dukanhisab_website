"use client";

import React, { useState, useEffect } from "react";
import { Lottie } from "lottie-react";

export default function SupportHeroLottie() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* Soft Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-emerald-300/20 to-teal-500/20 rounded-[36px] blur-2xl -z-10 opacity-80 pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-[32px] p-4 sm:p-6 shadow-2xl shadow-teal-950/10 border border-teal-200/80 overflow-hidden group">
        
        {/* Top Header Strip inside card */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-teal-50">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-black text-slate-800 tracking-wide uppercase">
              DukanHisab Help Desk
            </span>
          </div>

          <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200/70">
            ⚡ Always Active
          </span>
        </div>

        {/* Lottie Animation Display Frame */}
        <div className="relative w-full aspect-[650/400] flex items-center justify-center rounded-2xl bg-gradient-to-b from-teal-50/40 via-white to-slate-50/30 overflow-hidden">
          {isMounted ? (
            <Lottie
              src="/lottie/support-animation.json"
              loop={true}
              autoplay={true}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 py-16">
              <div className="w-9 h-9 border-3 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs font-bold text-slate-400">Loading animation...</span>
            </div>
          )}
        </div>

        {/* Bottom Interactive / Friendly Slogan */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base">🤝</span>
            <span className="text-xs font-extrabold text-teal-900 italic font-serif">
              &ldquo;Koi Bhi Sawal Ho, Hum Hamesha Saath Hain!&rdquo;
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
            Live Support
          </span>
        </div>

      </div>
    </div>
  );
}
