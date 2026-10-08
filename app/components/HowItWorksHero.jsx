"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  StoreIcon, 
  TruckIcon, 
  LandmarkIcon,
  CheckIcon, 
  ArrowRightIcon, 
  GooglePlayIcon,
  ShieldCheckIcon,
  BarcodeIcon,
  SparklesIcon
} from "./Icons";

export default function HowItWorksHero() {
  const [activeStep, setActiveStep] = useState(2); // Default to Counter Rush (stage 2)

  const nodes = [
    {
      id: 0,
      stepNum: "01",
      stepLabel: "Opening",
      title: "Shop Opening",
      subtitle: "Cash Drawer Calibrated",
      badge: "Galla Base",
      icon: StoreIcon,
      accentColor: "from-amber-400 to-amber-600",
      glowColor: "rgba(245, 158, 11, 0.4)",
      coreStatus: "SESSION INITIATED",
      coreTitle: "₹3,500 Cash In Drawer",
      coreImpact: "Opening balance locked. Every rupee added today is tracked from this exact baseline.",
      syncPoints: ["Physical Cash Drawer", "Day Session #D-249", "Clerk Shift Log"],
      telemetry: "Session #D-249 Online • Opening Float: ₹3,500 • Ready for Sales"
    },
    {
      id: 1,
      stepNum: "02",
      stepLabel: "Inward",
      title: "Stock Inward",
      subtitle: "Fresh Delivery Unloaded",
      badge: "+20 Bags Auto-Stock",
      icon: TruckIcon,
      accentColor: "from-purple-400 to-indigo-600",
      glowColor: "rgba(168, 85, 247, 0.4)",
      coreStatus: "INVENTORY EXPANDED",
      coreTitle: "20 Bags Kolam Rice",
      coreImpact: "One inward entry automatically credits supplier ledger and increments live warehouse stock.",
      syncPoints: ["Live Stock +20 Bags", "Purchase #PB-104", "Supplier Udhar Credit"],
      telemetry: "Inward Delivery PB-104 • Stock Auto-Credited +20 Bags • Supplier: ABC Traders"
    },
    {
      id: 2,
      stepNum: "03",
      stepLabel: "Billing",
      title: "Counter Billing",
      subtitle: "3-Second Barcode Bill",
      badge: "WhatsApp Synced",
      icon: BarcodeIcon,
      accentColor: "from-teal-400 to-emerald-500",
      glowColor: "rgba(13, 148, 136, 0.5)",
      coreStatus: "COUNTER PULSE",
      coreTitle: "1 Scan • 4 Instant Updates",
      coreImpact: "Barcode beep deducts stock, issues digital WhatsApp invoice, logs customer khata, and tallies cash.",
      syncPoints: ["Stock: 20 → 18 Bags", "WhatsApp Bill Sent", "Cash Galla: +₹1,250"],
      telemetry: "Barcode Scanned • Bill #DH-4029 Shared on WhatsApp • Cash Settled"
    },
    {
      id: 3,
      stepNum: "04",
      stepLabel: "Closing",
      title: "Day Closing",
      subtitle: "Zero-Mistake Tally",
      badge: "100% Reconciled",
      icon: LandmarkIcon,
      accentColor: "from-emerald-400 to-teal-600",
      glowColor: "rgba(168, 85, 247, 0.4)",
      coreStatus: "PERFECT BALANCE",
      coreTitle: "Cash & Digital Matched",
      coreImpact: "Physical drawer matches digital audit down to the last rupee. Cloud encrypted auto-backup stored.",
      syncPoints: ["Net Profit Calculated", "Cash vs UPI Tally: 100%", "Encrypted Cloud Sync"],
      telemetry: "Day Session Closed • Drawer Reconciled: 100% Match • Zero Variance"
    }
  ];

  const current = nodes[activeStep];
  const ActiveIcon = current.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf6f4] via-[#f3f9f8] to-white pt-6 pb-16 sm:pt-10 sm:pb-24 border-b border-teal-100/70">
      
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-teal-200/35 via-emerald-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[350px] bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#036272_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb & Live Connected Sync Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-teal-700 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#036272] font-bold">How It Works</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#ccfbf1]/90 border border-teal-300/60 text-[#024f5c] px-3.5 py-1 rounded-full text-xs font-bold tracking-tight shadow-2xs backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#036272] animate-pulse"></span>
            <span>Live Connected Business Synapse • 100% Automatic</span>
          </div>
        </div>

        {/* Main 2-Column Split: Left Hero Pitch & Right The Connected Shop Synapse */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Punchy Headline & Value Proposition (Span 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-bold shadow-2xs">
              <SparklesIcon className="w-3.5 h-3.5 text-teal-600" />
              <span>Complete Shop Lifecycle • Connected Memory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.08]">
              Whatever Happens <br className="hidden sm:inline" />
              in Your Shop, <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">
                The Record Stays Connected.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3.5 text-teal-500/30"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C70 2, 150 12, 298 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Every action at your counter instantly ripples through purchases, live inventory, customer ledgers, and cash in hand — completely automatic, with zero double entries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#connected-flow"
                className="inline-flex items-center justify-center gap-2 bg-[#036272] hover:bg-[#024f5c] text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>See Connected Flow</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 font-bold px-5 py-2.5 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <GooglePlayIcon className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">GET IT ON</span>
                  <span className="text-sm font-black text-slate-900">Google Play</span>
                </div>
              </a>
            </div>

            {/* Micro Feature Proof Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-teal-600" />
                <span>Zero Double Entries</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-teal-600" />
                <span>100% Offline Capable</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-teal-600" />
                <span>Real-Time Cloud Sync</span>
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: The Living Connected Shop Synapse Matrix (Span 7) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#061e1b] via-[#041a17] to-[#02110f] border border-teal-500/40 shadow-2xl p-5 sm:p-7 overflow-hidden text-white min-h-[480px] sm:min-h-[520px] flex flex-col justify-between">
              
              {/* Ambient Radiant Glow Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-600/15 rounded-full blur-2xl pointer-events-none" />

              {/* Top Bar: Orbit Status & Step Indicator */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-teal-900/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-300">
                    Live Shop Synapse Orbit
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <span>Store Operations:</span>
                  <span className="text-teal-300 font-bold bg-teal-950/80 px-2.5 py-0.5 rounded-md border border-teal-800/60">
                    Stage {activeStep + 1} of 4
                  </span>
                </div>
              </div>

              {/* ===================== THE LIVING CONSTELLATION ORBIT ===================== */}
              <div className="relative my-4 flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[340px]">
                
                {/* SVG Orbital Rays & Connecting Laser Lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 600 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#036272" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#036272" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="laserBeamActive" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
                      <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#036272" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Concentric Orbital Guides */}
                  <ellipse cx="300" cy="180" rx="250" ry="145" stroke="#0f3b35" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
                  <ellipse cx="300" cy="180" rx="170" ry="100" stroke="#134e48" strokeWidth="1.2" opacity="0.4" />
                  <circle cx="300" cy="180" r="140" fill="url(#orbitGlow)" />

                  {/* Connecting Dynamic Rays to 4 Satellites:
                      Center: (300, 180)
                      North:  (300, 45)
                      East:   (510, 180)
                      South:  (300, 315)
                      West:   (90, 180)
                  */}
                  {/* Ray to North */}
                  <line x1="300" y1="180" x2="300" y2="45" stroke={activeStep === 0 ? "url(#laserBeamActive)" : "#0f3b35"} strokeWidth={activeStep === 0 ? "2.5" : "1"} strokeDasharray={activeStep === 0 ? "none" : "3 3"} />
                  {/* Ray to East */}
                  <line x1="300" y1="180" x2="510" y2="180" stroke={activeStep === 1 ? "url(#laserBeamActive)" : "#0f3b35"} strokeWidth={activeStep === 1 ? "2.5" : "1"} strokeDasharray={activeStep === 1 ? "none" : "3 3"} />
                  {/* Ray to South */}
                  <line x1="300" y1="180" x2="300" y2="315" stroke={activeStep === 2 ? "url(#laserBeamActive)" : "#0f3b35"} strokeWidth={activeStep === 2 ? "2.5" : "1"} strokeDasharray={activeStep === 2 ? "none" : "3 3"} />
                  {/* Ray to West */}
                  <line x1="300" y1="180" x2="90" y2="180" stroke={activeStep === 3 ? "url(#laserBeamActive)" : "#0f3b35"} strokeWidth={activeStep === 3 ? "2.5" : "1"} strokeDasharray={activeStep === 3 ? "none" : "3 3"} />
                </svg>

                {/* ================= CENTRAL PULSING SHOP MEMORY CORE ================= */}
                <div className="relative z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#052823] via-[#08352f] to-[#041c19] border-2 border-teal-400/60 shadow-[0_0_40px_rgba(13,148,136,0.35)] flex flex-col items-center justify-center p-4 text-center select-none backdrop-blur-md">
                  
                  {/* Outer breathing aura ring */}
                  <div className="absolute inset-[-6px] rounded-full border border-teal-400/30 animate-pulse pointer-events-none" />

                  {/* Micro Synapse Badge */}
                  <span className="text-[9px] font-black tracking-widest text-emerald-400 uppercase bg-black/50 px-2 py-0.5 rounded-full border border-teal-500/40 mb-1">
                    {current.coreStatus}
                  </span>

                  {/* Core Main Title */}
                  <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight mt-0.5">
                    {current.coreTitle}
                  </h4>

                  {/* Core Description Quote */}
                  <p className="text-[10px] sm:text-[11px] text-teal-100/80 leading-snug mt-1.5 line-clamp-2 px-1">
                    {current.coreImpact}
                  </p>

                  {/* 3 Active Synced Records Pills */}
                  <div className="flex flex-wrap items-center justify-center gap-1 mt-2.5 max-w-[170px]">
                    {current.syncPoints.map((pt, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[8px] sm:text-[9px] font-semibold text-teal-200 bg-teal-950/90 border border-teal-500/40 px-1.5 py-0.5 rounded-md truncate max-w-[155px]"
                      >
                        ✓ {pt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ================= 4 ORBITING SATELLITE INTERACTIVE NODES ================= */}
                
                {/* 1. NORTH (Stage 1: Shop Opening) */}
                <button
                  type="button"
                  onClick={() => setActiveStep(0)}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 cursor-pointer rounded-2xl p-2.5 sm:px-3 sm:py-2 text-left border flex items-center gap-2.5 backdrop-blur-md ${
                    activeStep === 0
                      ? "bg-gradient-to-r from-amber-950/90 to-teal-950/90 border-amber-400 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105"
                      : "bg-black/50 border-teal-900/60 text-slate-300 hover:border-amber-400/60 hover:text-white"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                    <StoreIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black text-amber-400">Stage 01</span>
                      <span className="text-[9px] font-semibold text-slate-400 hidden sm:inline">• Opening</span>
                    </div>
                    <span className="text-xs font-bold text-white block">Cash Drawer Base</span>
                  </div>
                </button>

                {/* 2. EAST (Stage 2: Stock Inward) */}
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className={`absolute top-1/2 right-0 -translate-y-1/2 z-30 transition-all duration-300 cursor-pointer rounded-2xl p-2.5 sm:px-3 sm:py-2 text-left border flex items-center gap-2.5 backdrop-blur-md ${
                    activeStep === 1
                      ? "bg-gradient-to-r from-purple-950/90 to-teal-950/90 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105"
                      : "bg-black/50 border-teal-900/60 text-slate-300 hover:border-purple-400/60 hover:text-white"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-400/30">
                    <TruckIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black text-purple-400">Stage 02</span>
                      <span className="text-[9px] font-semibold text-slate-400 hidden sm:inline">• Inward</span>
                    </div>
                    <span className="text-xs font-bold text-white block">+20 Kolam Bags</span>
                  </div>
                </button>

                {/* 3. SOUTH (Stage 3: Counter Billing) */}
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 cursor-pointer rounded-2xl p-2.5 sm:px-3 sm:py-2 text-left border flex items-center gap-2.5 backdrop-blur-md ${
                    activeStep === 2
                      ? "bg-gradient-to-r from-teal-950/90 to-emerald-950/90 border-teal-300 text-white shadow-[0_0_25px_rgba(45,212,191,0.5)] scale-105"
                      : "bg-black/50 border-teal-900/60 text-slate-300 hover:border-teal-400/60 hover:text-white"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-400/40">
                    <BarcodeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black text-teal-300">Stage 03</span>
                      <span className="text-[9px] font-semibold text-slate-400 hidden sm:inline">• Billing</span>
                    </div>
                    <span className="text-xs font-bold text-white block">3-Sec WhatsApp Bill</span>
                  </div>
                </button>

                {/* 4. WEST (Stage 4: Day Closing) */}
                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  className={`absolute top-1/2 left-0 -translate-y-1/2 z-30 transition-all duration-300 cursor-pointer rounded-2xl p-2.5 sm:px-3 sm:py-2 text-left border flex items-center gap-2.5 backdrop-blur-md ${
                    activeStep === 3
                      ? "bg-gradient-to-r from-emerald-950/90 to-teal-950/90 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105"
                      : "bg-black/50 border-teal-900/60 text-slate-300 hover:border-emerald-400/60 hover:text-white"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
                    <LandmarkIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black text-emerald-400">Stage 04</span>
                      <span className="text-[9px] font-semibold text-slate-400 hidden sm:inline">• Closing</span>
                    </div>
                    <span className="text-xs font-bold text-white block">100% Cash Matched</span>
                  </div>
                </button>

              </div>

              {/* Bottom Live Synapse Telemetry Bar */}
              <div className="relative z-10 pt-3 border-t border-teal-900/60 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
                <div className="flex items-center gap-2 text-teal-300 font-mono text-[11px] truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span className="truncate">{current.telemetry}</span>
                </div>

                {/* Stage Selector Buttons (No timings, clean operational stages) */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {nodes.map((n, idx) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        activeStep === idx
                          ? "bg-teal-500 text-black font-black shadow-xs"
                          : "bg-teal-950/60 text-slate-400 hover:text-white border border-teal-900/60"
                      }`}
                    >
                      {n.stepNum}. {n.stepLabel}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
