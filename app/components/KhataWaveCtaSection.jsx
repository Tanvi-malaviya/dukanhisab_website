"use client";

import React from "react";
import Link from "next/link";
import { GooglePlayIcon, ArrowRightIcon } from "./Icons";

export default function KhataWaveCtaSection() {
  return (
    <section className="py-12 sm:py-10 sm:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Contour Wave Showcase Card */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-white border border-slate-200/90 shadow-xl sm:shadow-2xl overflow-hidden py-10 sm:py-14 px-6 sm:px-12 text-center flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px]">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-100/30 via-emerald-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Elegant Animated Sinusoidal Contour Wave Lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glowing Light Beam Gradients */}
                <linearGradient id="waveTealBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#036272" stopOpacity="0" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#036272" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="waveAmberBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                  <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#036272" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Base Wave Line 1 (Floating) */}
              <path
                d="M -50 320 C 220 320, 360 220, 460 120 C 560 20, 720 -10, 960 10 C 1080 20, 1180 50, 1250 80"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-70 sm:opacity-85 animate-[waveFloat1_8s_ease-in-out_infinite]"
              />

              {/* Base Wave Line 2 (Floating) */}
              <path
                d="M -50 390 C 230 390, 380 280, 480 170 C 580 60, 740 20, 980 40 C 1100 50, 1190 90, 1250 130"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-75 sm:opacity-90 animate-[waveFloat2_10s_ease-in-out_infinite]"
              />

              {/* Base Wave Line 3 (Floating) */}
              <path
                d="M -50 460 C 240 460, 400 340, 500 220 C 600 100, 760 50, 1000 70 C 1120 80, 1200 130, 1250 180"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-80 sm:opacity-95 animate-[waveFloat3_12s_ease-in-out_infinite]"
              />

              {/* Base Wave Line 4 (Floating) */}
              <path
                d="M -50 530 C 250 530, 420 400, 520 270 C 620 140, 780 80, 1020 100 C 1140 110, 1210 170, 1250 230"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-60 sm:opacity-80 animate-[waveFloat4_9s_ease-in-out_infinite]"
              />

              {/* Base Wave Line 5 (Floating) */}
              <path
                d="M -50 600 C 260 600, 440 460, 540 320 C 640 180, 800 110, 1040 130 C 1160 140, 1220 210, 1250 280"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-50 sm:opacity-75 animate-[waveFloat5_11s_ease-in-out_infinite]"
              />

              {/* GLOWING LIGHT BEAM 1: Gliding across Line 3 */}
              <path
                d="M -50 460 C 240 460, 400 340, 500 220 C 600 100, 760 50, 1000 70 C 1120 80, 1200 130, 1250 180"
                stroke="url(#waveTealBeam)"
                strokeWidth="3"
                strokeLinecap="round"
                className="light-beam-1"
              />

              {/* GLOWING LIGHT BEAM 2: Gliding across Line 2 */}
              <path
                d="M -50 390 C 230 390, 380 280, 480 170 C 580 60, 740 20, 980 40 C 1100 50, 1190 90, 1250 130"
                stroke="url(#waveAmberBeam)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="light-beam-2"
              />
            </svg>
          </div>

          {/* Embedded Custom Keyframes for Fluid Wave Motion & Gliding Light Beams */}
          <style jsx>{`
            @keyframes waveFloat1 {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            @keyframes waveFloat2 {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(12px); }
            }
            @keyframes waveFloat3 {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes waveFloat4 {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(9px); }
            }
            @keyframes waveFloat5 {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-7px); }
            }
            @keyframes beamGlide1 {
              0% { stroke-dashoffset: 1600; }
              100% { stroke-dashoffset: -1600; }
            }
            @keyframes beamGlide2 {
              0% { stroke-dashoffset: 1800; }
              100% { stroke-dashoffset: -1800; }
            }
            .light-beam-1 {
              stroke-dasharray: 260 1400;
              animation: beamGlide1 6s linear infinite;
            }
            .light-beam-2 {
              stroke-dasharray: 200 1200;
              animation: beamGlide2 8s linear infinite;
            }
          `}</style>

          {/* Center Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Top Micro Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-600 mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#036272] animate-pulse"></span>
              <span>Join 50,000+ Smart Shopkeepers</span>
            </div>

            {/* Headline matching user's reference typography */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6 sm:mb-8 select-none">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-teal-700">
                TEAMS
              </span>{" "}
              of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500">
                shopkeepers now
              </span>
            </h2>

            {/* Gradient Pill CTA Button (Inspired directly by user's screenshot) */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 via-[#036272] to-[#01353e] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-900/20 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gentle Shimmer Highlight */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <GooglePlayIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
                <span>Get started</span>
                <ArrowRightIcon className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Demo Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
              >
                <span>Book a Free Demo</span>
              </Link>
            </div>

            {/* Trust Badges Footnote */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500 mt-6 sm:mt-8">
              <span className="flex items-center gap-1.5">
                <span className="text-[#036272] font-bold">✓</span> 100% Free Forever Plan
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#036272] font-bold">✓</span> No Credit Card Required
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:flex items-center gap-1.5">
                <span className="text-[#036272] font-bold">✓</span> Instant Setup in 2 Mins
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
