"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ClockIcon,
  BarcodeIcon,
  MonitorIcon,
  SmartphoneIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  PackageIcon,
  WalletIcon,
  PrinterIcon,
  WhatsAppIcon,
  TagIcon,
} from "./Icons";

export default function ExploreDimensions() {
  // State for Card 1: Timeline Step
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  // State for Card 2: Interactive Scan Simulator
  const [isScanning, setIsScanning] = useState(false);
  const [scannedCount, setScannedCount] = useState(3);

  // State for Card 3: Active Device View
  const [activeDevice, setActiveDevice] = useState("mobile"); // 'mobile' | 'web'

  const timelineSteps = [
    {
      time: "08:30 AM",
      label: "Morning Inward Stock",
      detail: "+20 Rice Bags received from ABC Traders.",
      stat: "Inventory: 20 Bags • Payable: +₹22,000",
      accent: "teal",
    },
    {
      time: "11:15 AM",
      label: "Barcode Counter Sale",
      detail: "Rahul Patel buys 2 Bags @ saved custom rate.",
      stat: "Bill: ₹2,360 • Stock auto-deducted to 18",
      accent: "emerald",
    },
    {
      time: "09:30 PM",
      label: "Zero-Effort Day Closing",
      detail: "One-click cashbook tally & WhatsApp ledger.",
      stat: "Galla: ₹9,840 reconciled automatically",
      accent: "indigo",
    },
  ];

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScannedCount((prev) => prev + 1);
    }, 600);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
            <SparklesIcon className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>Interactive Business Dimensions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Everything Connected.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200">
              Never Boring.
            </span>
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Interact with the 3 pillars of DukanHisab below. Test a shop day, trigger a barcode scan, and toggle between mobile and web.
          </p>
        </div>

        {/* 3 Interactive Next-Gen Dimension Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

          {/* ============================================================
              DIMENSION 1: WORKFLOW TIMELINE STORY
              ============================================================ */}
          <div className="relative group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/60 p-6 sm:p-7 shadow-xl shadow-black/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top ambient highlight */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/15 rounded-full blur-2xl group-hover:bg-teal-500/25 transition-all" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shadow-inner">
                  <ClockIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950/80 border border-teal-800/80 px-2.5 py-1 rounded-full">
                  Workflow Story
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-teal-300 transition-colors">
                A Day Inside Your Shop
              </h3>

              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Follow one bag of Rice 25kg from morning arrival to night closing. No manual reconciliation ever needed.
              </p>

              {/* Interactive Timeline Stepper Inside Card */}
              <div className="mt-6 bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 pb-2 border-b border-slate-800/80">
                  <span>Interactive Day Stepper</span>
                  <span className="text-teal-400 font-mono">Step {activeTimelineStep + 1} of 3</span>
                </div>

                {/* Stepper Buttons */}
                <div className="grid grid-cols-3 gap-1.5">
                  {timelineSteps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTimelineStep(idx)}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all text-center cursor-pointer ${activeTimelineStep === idx
                          ? "bg-teal-600 text-white shadow-xs"
                          : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
                        }`}
                    >
                      {step.time}
                    </button>
                  ))}
                </div>

                {/* Active Step Showcase Box */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/90 text-xs animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-white text-[11px]">
                      {timelineSteps[activeTimelineStep].label}
                    </span>
                    <span className="text-[10px] font-mono text-teal-400 font-bold">
                      {timelineSteps[activeTimelineStep].time}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    {timelineSteps[activeTimelineStep].detail}
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] font-mono text-teal-300 flex items-center gap-1.5">
                    <CheckIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>{timelineSteps[activeTimelineStep].stat}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Link CTA */}
            <div className="mt-7 pt-4 border-t border-slate-800 flex items-center justify-between">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 group-hover:text-teal-300 transition-colors"
              >
                <span>Walk Through Full 24h Story</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <span className="text-[10px] text-slate-500 font-mono">08:30 → 21:30</span>
            </div>
          </div>

          {/* ============================================================
              DIMENSION 2: LIGHTNING POS & BARCODE ENGINE
              ============================================================ */}
          <div className="relative group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 p-6 sm:p-7 shadow-xl shadow-black/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top ambient highlight */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-all" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-inner">
                  <BarcodeIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-1 rounded-full">
                  0.18s POS Engine
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                Hardware & POS Power
              </h3>

              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Connect USB or Bluetooth barcode guns. Print 80mm thermal receipts or send instant WhatsApp PDF bills.
              </p>

              {/* Interactive Laser Scan Simulation */}
              <div className="mt-6 bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 pb-2 border-b border-slate-800/80">
                  <span>Interactive Scanner Simulation</span>
                  <span className="text-cyan-400 font-mono">USB / BT Gun</span>
                </div>

                {/* Barcode Visual Box */}
                <div className="relative bg-slate-900 rounded-xl p-3 border border-slate-800 overflow-hidden flex flex-col items-center justify-center">
                  {/* Laser scan line when active */}
                  {isScanning && (
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-red-500 shadow-[0_0_12px_#ef4444] animate-pulse z-10" />
                  )}

                  {/* Simulated barcode bars */}
                  <div className="flex items-center justify-center gap-1 py-1">
                    <span className="w-1 h-8 bg-white/90"></span>
                    <span className="w-2 h-8 bg-white/90"></span>
                    <span className="w-0.5 h-8 bg-white/90"></span>
                    <span className="w-1.5 h-8 bg-white/90"></span>
                    <span className="w-0.5 h-8 bg-white/90"></span>
                    <span className="w-2.5 h-8 bg-white/90"></span>
                    <span className="w-1 h-8 bg-white/90"></span>
                    <span className="w-0.5 h-8 bg-white/90"></span>
                    <span className="w-2 h-8 bg-white/90"></span>
                  </div>

                  <p className="text-[10px] font-mono text-cyan-400 mt-1.5 tracking-widest">
                    89012345601 • {isScanning ? "BEEP! SCANNING..." : "READY TO SCAN"}
                  </p>
                </div>

                {/* Scan Button & Live Counter */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={handleSimulateScan}
                    disabled={isScanning}
                    className="flex-1 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-bold py-1.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <BarcodeIcon className="w-4 h-4" />
                    <span>{isScanning ? "Scanning..." : "Click to Scan Item"}</span>
                  </button>

                  <span className="text-[11px] font-mono text-slate-300 bg-slate-900 px-2.5 py-1.5 rounded-xl border border-slate-800">
                    <strong className="text-cyan-400">{scannedCount}</strong> scanned
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Link CTA */}
            <div className="mt-7 pt-4 border-t border-slate-800 flex items-center justify-between">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
              >
                <span>Explore All 24+ Modules</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <span className="text-[10px] text-slate-500 font-mono">Thermal • A4 • QR</span>
            </div>
          </div>

          {/* ============================================================
              DIMENSION 3: MOBILE APP × WEB PANEL SYNERGY
              ============================================================ */}
          <div className="relative group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/60 p-6 sm:p-7 shadow-xl shadow-black/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top ambient highlight */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/15 rounded-full blur-2xl group-hover:bg-indigo-500/25 transition-all" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shadow-inner">
                  <MonitorIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800/80 px-2.5 py-1 rounded-full">
                  Dual Ecosystem
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors">
                Mobile App × Web Panel
              </h3>

              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Run lightning-fast counter operations from your pocket, and examine deep financial audit trails on your desktop.
              </p>

              {/* Interactive Device Switcher Inside Card */}
              <div className="mt-6 bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 pb-2 border-b border-slate-800/80">
                  <span>Interactive Device Switcher</span>
                  <div className="flex items-center gap-1 text-[10px] text-teal-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping"></span>
                    <span>2-Way Sync</span>
                  </div>
                </div>

                {/* Device Selector Tabs */}
                <div className="grid grid-cols-2 gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveDevice("mobile")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${activeDevice === "mobile"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    <SmartphoneIcon className="w-3.5 h-3.5" />
                    <span>Android / iOS</span>
                  </button>

                  <button
                    onClick={() => setActiveDevice("web")}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${activeDevice === "web"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    <MonitorIcon className="w-3.5 h-3.5" />
                    <span>PC Web Panel</span>
                  </button>
                </div>

                {/* Active Device Preview Box */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs animate-fade-in">
                  {activeDevice === "mobile" ? (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[11px] font-bold text-indigo-300">
                        <span>Pocket POS Operations</span>
                        <span className="text-[10px] bg-indigo-950 text-indigo-300 px-1.5 py-0.5 rounded">In Shop</span>
                      </div>
                      <p className="text-[11px] text-slate-300">
                        Camera barcode scanner, offline counter sales, voice search, WhatsApp digital bill delivery.
                      </p>
                      <div className="pt-1 text-[10px] text-slate-400 font-mono">
                        Speed: &lt; 2 taps per sale • Runs on any ₹7,000 phone
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[11px] font-bold text-teal-300">
                        <span>Deep ERP Web Dashboard</span>
                        <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded">Office / Home</span>
                      </div>
                      <p className="text-[11px] text-slate-300">
                        GSTR-1 & GSTR-3B tax reports, bulk product Excel import, staff roles & multi-counter management.
                      </p>
                      <div className="pt-1 text-[10px] text-slate-400 font-mono">
                        Analytics: Real-time profit/loss, dead stock alerts
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Link CTA */}
            <div className="mt-7 pt-4 border-t border-slate-800 flex items-center justify-between">
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors"
              >
                <span>See How Both Stay in Sync</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <span className="text-[10px] text-slate-500 font-mono">Auto Cloud Sync</span>
            </div>
          </div>

        </div>

        {/* Bottom Connected Value Strip */}
        <div className="mt-12 bg-gradient-to-r from-teal-950/60 via-slate-900 to-indigo-950/60 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                Complete Freedom from Disconnected Software
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                No need to buy separate POS billing, separate Khata app, and separate accounting software.
              </p>
            </div>
          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-xl transition-all shadow-sm"
          >
            <span>View All Plans & Features</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
