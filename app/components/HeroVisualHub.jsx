"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { 
  BarcodeIcon, 
  ReceiptIcon, 
  UsersIcon, 
  ShoppingBagIcon, 
  RupeeIcon, 
  CheckIcon, 
  PlayIcon,
  GooglePlayIcon,
  SparklesIcon,
  ArrowRightIcon,
  MonitorIcon
} from "./Icons";

export default function HeroVisualHub({ onOpenVideo }) {
  // 4 Core Everyday Shop Modules
  const modes = [
    {
      id: "billing",
      title: "5-Sec Billing",
      tagline: "Scan & Print",
      badgeText: "Thermal & GST Ready",
      phoneImg: "/images/phone-billing-hero.png",
      pillIcon: "⚡",
      color: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-500/10 text-blue-600 border-blue-200",
      activeRing: "ring-blue-500",
      statValue: "5 Sec",
      statLabel: "Average Bill Time",
      notification: {
        title: "Bill #1049 Printed",
        amount: "₹1,480",
        type: "Thermal & WhatsApp Sent",
      },
    },
    {
      id: "khata",
      title: "Digital Khata",
      tagline: "Udhar & Reminders",
      badgeText: "1-Click WhatsApp UPI",
      phoneImg: "/images/phone-khata-hero.png",
      pillIcon: "📖",
      color: "from-teal-600 to-teal-600",
      accentBg: "bg-teal-500/10 text-teal-600 border-teal-200",
      activeRing: "ring-teal-500",
      statValue: "3x Faster",
      statLabel: "Payment Recovery",
      notification: {
        title: "Rahul Patel (Udhar)",
        amount: "₹2,500 Paid",
        type: "UPI Received via WhatsApp",
      },
    },
    {
      id: "stock",
      title: "Live Stock",
      tagline: "Inventory Count",
      badgeText: "Auto-Deducted on Sale",
      phoneImg: "/images/phone-inventory-hero.png",
      pillIcon: "📦",
      color: "from-amber-600 to-orange-600",
      accentBg: "bg-amber-500/10 text-amber-600 border-amber-200",
      activeRing: "ring-amber-500",
      statValue: "100%",
      statLabel: "Stock Accuracy",
      notification: {
        title: "Fortune Oil 1L",
        amount: "24 Left",
        type: "Auto-synced with Counter",
      },
    },
    {
      id: "reports",
      title: "Daily Munafa",
      tagline: "Profit & Cash",
      badgeText: "Real-Time P&L",
      phoneImg: "/images/phone-home-hero.png",
      pillIcon: "📊",
      color: "from-purple-600 to-pink-600",
      accentBg: "bg-purple-500/10 text-purple-600 border-purple-200",
      activeRing: "ring-purple-500",
      statValue: "₹18,450",
      statLabel: "Today's Net Turnover",
      notification: {
        title: "Today's Profit",
        amount: "+₹3,820",
        type: "Cash Drawer Matched",
      },
    },
  ];

  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const activeMode = modes[activeModeIndex];
  const containerRef = useRef(null);

  // 3D Mouse Parallax calculation
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleSimulateScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 700);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      
      {/* ================= LEFT COLUMN: INSTANT VISUAL CLARITY ================= */}
      <div className="lg:col-span-7 space-y-6 text-left">
        
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-100/90 border border-teal-300 text-teal-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs">
          <SparklesIcon className="w-4 h-4 text-teal-600 animate-spin" style={{ animationDuration: "9s" }} />
          <span>50,000+ Dukaano Ka Bharosa</span>
          <span className="bg-teal-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
            All-In-One
          </span>
        </div>

        {/* Crisp Punchy Headline - Zero text bloat */}
        <div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Apni Dukaan Ka <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] via-teal-600 to-teal-500">
              Complete Digital Hisab
            </span>
          </h1>
          
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
            <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-lg">🧾 Fast Billing</span>
            <span className="text-slate-300">•</span>
            <span className="bg-teal-100 text-teal-800 px-2.5 py-1 rounded-lg">📖 Khata Diary</span>
            <span className="text-slate-300">•</span>
            <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-lg">📦 Live Stock</span>
            <span className="text-slate-300">•</span>
            <span className="bg-purple-100 text-purple-800 px-2.5 py-1 rounded-lg">📲 WhatsApp UPI</span>
          </div>
        </div>

        {/* 4 INTERACTIVE LIVE FEATURE TILES (Tap to switch screen) */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              👉 Tap to preview how it works:
            </span>
            <span className="text-[10px] font-mono font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
              Screen Syncs Instantly
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {modes.map((mode, index) => {
              const isSelected = activeModeIndex === index;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveModeIndex(index)}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 relative group overflow-hidden ${
                    isSelected
                      ? "bg-white border-teal-500 shadow-lg shadow-teal-900/10 ring-2 ring-teal-500/20 scale-[1.02]"
                      : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  {/* Top indicator dot */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                  )}

                  <div className="text-xl mb-1.5">{mode.pillIcon}</div>
                  <div className={`text-xs font-black leading-tight ${isSelected ? "text-teal-900" : "text-slate-800"}`}>
                    {mode.title}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5 truncate">
                    {mode.tagline}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual 4-Step Instant Flow Strip */}
        <div className="p-3 bg-white/90 backdrop-blur-xs border border-teal-200/90 rounded-2xl shadow-xs flex items-center justify-between gap-1 text-[11px] font-bold text-slate-800 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-[10px]">1</span>
            <span>Scan Item 📸</span>
          </div>
          <span className="text-teal-500">➔</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-[10px]">2</span>
            <span>Print Bill 🖨️</span>
          </div>
          <span className="text-teal-500">➔</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-[10px]">3</span>
            <span>WhatsApp Khata 📲</span>
          </div>
          <span className="text-teal-500">➔</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-[10px]">4</span>
            <span>Munafa Track 📈</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-700/25 hover:shadow-xl transition-all active:scale-95 group"
          >
            <GooglePlayIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span>Download Free App</span>
          </a>

          <a
            href="https://dukanhisab.in/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-sm transition-all"
          >
            <MonitorIcon className="w-4 h-4 text-teal-400" />
            <span>Web Panel</span>
          </a>

          <button
            type="button"
            onClick={onOpenVideo}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-teal-300"
          >
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <PlayIcon className="w-3 h-3 text-white ml-0.5" />
            </span>
            <span>Watch Demo</span>
          </button>
        </div>

      </div>

      {/* ================= RIGHT COLUMN: INTERACTIVE 3D SHOPKEEPER + LIVE SCREEN SYNC ================= */}
      <div className="lg:col-span-5 relative flex justify-center items-end select-none">
        
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-md perspective-[1000px] py-4"
        >
          {/* 3D Tilted Scene */}
          <div
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
              transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
            }}
            className="relative w-full flex items-end justify-center transform-style-3d"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 via-teal-300/25 to-teal-500/20 rounded-[40px] blur-2xl -z-10" />

            {/* Floating Top Badge: Active Mode Indicator */}
            <div
              style={{ transform: "translateZ(45px)" }}
              className="absolute -top-3 -left-2 sm:-left-4 z-30 bg-white/95 backdrop-blur-md border border-teal-300 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float-slow"
            >
              <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                {activeMode.pillIcon}
              </div>
              <div>
                <div className="text-[11px] font-black text-slate-900 leading-tight">
                  {activeMode.title}
                </div>
                <div className="text-[10px] text-teal-700 font-bold">
                  {activeMode.badgeText}
                </div>
              </div>
            </div>

            {/* Floating Live Transaction Bubble (Top Right) */}
            <div
              style={{ transform: "translateZ(50px)" }}
              className="absolute top-10 -right-2 sm:-right-6 z-30 bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2.5"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400">
                  {activeMode.notification.type}
                </div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{activeMode.notification.title}</span>
                  <span className="text-teal-400 font-mono">
                    {activeMode.notification.amount}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Metric Card (Bottom Left) */}
            <div
              style={{ transform: "translateZ(40px)" }}
              className="absolute bottom-6 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2.5 animate-float-delayed"
            >
              <div className="text-right">
                <div className="text-sm font-black text-teal-700 font-mono leading-tight">
                  {activeMode.statValue}
                </div>
                <div className="text-[9px] text-slate-500 font-semibold">
                  {activeMode.statLabel}
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                <CheckIcon className="w-3 h-3 stroke-[3]" />
              </div>
            </div>

            {/* Visual Assembly: Shopkeeper + Phone Frame */}
            <div className="relative flex items-end justify-center w-full">
              {/* Smiling Indian Shopkeeper */}
              <div
                style={{ transform: "translateZ(15px)" }}
                className="relative w-64 sm:w-76 h-auto z-10"
              >
                <Image
                  src="/images/shopkeeper-man.png"
                  alt="Confident Indian Shopkeeper using DukanHisab"
                  width={340}
                  height={320}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Dynamic Phone Mockup - Reactively updates based on active tile */}
              <div
                style={{ transform: "translateZ(55px)" }}
                className="relative -ml-16 sm:-ml-20 mb-3 w-44 sm:w-56 z-20 group cursor-pointer"
                onClick={handleSimulateScan}
                title="Tap to trigger barcode scan effect!"
              >
                {/* Phone Outer Shell */}
                <div className="relative rounded-[32px] p-1 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl ring-1 ring-white/20 transition-all hover:scale-[1.03]">
                  {/* Phone Screen with Dynamic Image */}
                  <div className="relative rounded-[28px] overflow-hidden bg-white min-h-[300px]">
                    <Image
                      key={activeMode.phoneImg}
                      src={activeMode.phoneImg}
                      alt={`DukanHisab ${activeMode.title} screen`}
                      width={220}
                      height={360}
                      priority
                      className="w-full h-auto object-contain block transition-opacity duration-300"
                    />

                    {/* Laser Barcode Scan Beam Effect */}
                    {isScanning && (
                      <div className="absolute inset-0 bg-teal-500/10 pointer-events-none z-30">
                        <div className="w-full h-1 bg-teal-400 shadow-[0_0_12px_#14b8a6] animate-laser absolute left-0" />
                      </div>
                    )}

                    {/* Bottom Tap Trigger */}
                    <div className="absolute bottom-2.5 left-2 right-2 z-30">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSimulateScan();
                        }}
                        className={`w-full py-1.5 px-2 rounded-xl font-bold text-[10px] flex items-center justify-center gap-1 transition-all shadow-md ${
                          isScanning
                            ? "bg-slate-900 text-teal-400"
                            : "bg-teal-600 hover:bg-teal-700 text-white"
                        }`}
                      >
                        <BarcodeIcon className="w-3 h-3" />
                        <span>{isScanning ? "Scanning..." : "Tap to Scan ⚡"}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtitle helper */}
                <div className="text-center mt-2">
                  <span className="inline-block text-[10px] font-bold text-slate-600 bg-white/90 border border-slate-200 px-2.5 py-0.5 rounded-full shadow-xs">
                    👆 Screen updates on tile tap
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
