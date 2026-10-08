"use client";

import React, { useState, useEffect } from "react";
import { Lottie } from "lottie-react";

export default function Shop3DHeroAnimation() {
  const [activeTab, setActiveTab] = useState("counter");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modes = [
    {
      id: "counter",
      title: "POS Counter & Galla",
      icon: "🏪",
      src: "/animations/pos_cash_register.json",
      highlight: "Daily Sales & Cash Drawer",
      desc: "Fast checkout with automated cash galla tracking",
      status: "Galla Active: ₹18,450"
    },
    {
      id: "printer",
      title: "Instant Thermal Slip",
      icon: "🖨️",
      src: "/animations/receipt_printer_modern.json",
      highlight: "2-Sec Bluetooth Print",
      desc: "Zero-wait bill printing for long customer queues",
      status: "Bill #1084 Printed"
    },
    {
      id: "payment",
      title: "UPI & Digital Pay",
      icon: "💳",
      src: "/animations/payment_success.json",
      highlight: "Instant QR Settlement",
      desc: "Zero ledger mismatch with instant payment receipt",
      status: "Payment Confirmed ✓"
    }
  ];

  const currentMode = modes.find((m) => m.id === activeTab) || modes[0];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Dynamic Ambient Glow Behind Card */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-teal-400/25 via-emerald-300/20 to-teal-600/25 rounded-3xl blur-2xl -z-10 opacity-90 pointer-events-none"></div>

      {/* Main Glassmorphic 3D Showcase Card */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-2xl shadow-teal-950/15 border border-teal-100 overflow-hidden">
        
        {/* Top Header Strip: Counter Status & Pulse */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <span className="text-xs font-black text-slate-800 tracking-wide block leading-none">
                SMART DUKAAN TERMINAL
              </span>
              <span className="text-[10px] text-teal-700 font-bold">
                Counter POS • DukanHisab Live
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-full shadow-2xs">
            <span className="text-xs">⚡</span>
            <span className="text-[11px] font-black text-teal-900 tracking-tight">
              100% Offline &amp; Sync
            </span>
          </div>
        </div>

        {/* Feature Mode Selector Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/90 rounded-2xl mb-4 border border-slate-200/70">
          {modes.map((mode) => {
            const isActive = activeTab === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveTab(mode.id)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-white text-teal-900 shadow-md shadow-slate-900/5 font-black scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                <span className="text-sm">{mode.icon}</span>
                <span className="truncate hidden sm:inline">{mode.title.split(" ")[0]}</span>
                <span className="truncate sm:hidden">{mode.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Central 3D Animation Arena */}
        <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-teal-50/50 via-white to-slate-50/40 border border-teal-100/80 flex flex-col items-center justify-center overflow-hidden p-2">
          
          {/* Subtle Isometric Grid Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#036272_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

          {/* Floating Pill Top Left: Live Galla Metric */}
          <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-xs border border-teal-200/90 shadow-lg rounded-xl px-2.5 py-1.5 flex items-center gap-2 animate-bounce-slow">
            <span className="w-6 h-6 rounded-lg bg-teal-500 text-white flex items-center justify-center text-xs font-black">
              ₹
            </span>
            <div>
              <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-600">Daily Sales</p>
              <p className="text-xs font-black text-slate-900">₹24,850 <span className="text-emerald-700 text-[10px] font-bold">▲ +18%</span></p>
            </div>
          </div>

          {/* Floating Pill Bottom Right: Live Bill Generated */}
          <div className="absolute bottom-3 right-3 z-10 bg-white/95 backdrop-blur-xs border border-teal-200/90 shadow-lg rounded-xl px-2.5 py-1.5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs font-black">
              ✓
            </span>
            <div>
              <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-600">Speed Billing</p>
              <p className="text-xs font-black text-slate-900">1.2s Per Customer</p>
            </div>
          </div>

          {/* Actual 3D Lottie Canvas */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center z-0 transition-transform duration-300 hover:scale-105">
            {isMounted ? (
              <Lottie
                key={currentMode.id}
                src={currentMode.src}
                loop={true}
                autoplay={true}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 border-3 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-[11px] font-bold text-slate-400">Loading 3D Engine...</span>
              </div>
            )}
          </div>

          {/* Platform Shadow for 3D grounding effect */}
          <div className="w-36 h-4 bg-teal-900/10 rounded-full blur-md -mt-3 pointer-events-none"></div>
        </div>

        {/* Feature Context Banner Below 3D Canvas */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-base">{currentMode.icon}</span>
            <div>
              <p className="font-black text-slate-900 text-xs leading-tight">
                {currentMode.highlight}
              </p>
              <p className="text-[11px] text-slate-500 leading-tight">
                {currentMode.desc}
              </p>
            </div>
          </div>

          <span className="shrink-0 text-[11px] bg-emerald-50 text-emerald-700 font-extrabold px-2.5 py-1 rounded-lg border border-emerald-200">
            {currentMode.status}
          </span>
        </div>

        {/* Bottom Feature Quick Pills */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-slate-100/80 text-center">
          <div className="bg-slate-50 rounded-xl py-1.5 px-1 border border-slate-200/60">
            <span className="text-[10px] font-bold text-slate-600 block">📦 Stock &amp; Low Alert</span>
          </div>
          <div className="bg-slate-50 rounded-xl py-1.5 px-1 border border-slate-200/60">
            <span className="text-[10px] font-bold text-slate-600 block">👥 Udhar Khata Ledger</span>
          </div>
          <div className="bg-slate-50 rounded-xl py-1.5 px-1 border border-slate-200/60">
            <span className="text-[10px] font-bold text-slate-600 block">📊 Daily Profit / Galla</span>
          </div>
        </div>

      </div>
    </div>
  );
}
