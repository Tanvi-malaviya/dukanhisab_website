"use client";

import React, { useState, useEffect } from "react";
import { Lottie } from "lottie-react";

export default function BillingLottieShowcase() {
  const [activeTab, setActiveTab] = useState("scan");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modes = [
    {
      id: "scan",
      label: "Barcode & Bill",
      icon: "⚡",
      badge: "Real-time Item Scan",
      src: "/animations/receipt_scanner.json",
      tag: "Auto-Calculate Totals & Discounts"
    },
    {
      id: "print",
      label: "Thermal Slip",
      icon: "🖨️",
      badge: "Fast 2-Sec Print",
      src: "/animations/receipt_printer_modern.json",
      tag: "Supports Bluetooth & USB Printers"
    },
    {
      id: "counter",
      label: "Shop Counter",
      icon: "🏪",
      badge: "Instant Checkout",
      src: "/animations/pos_cash_register.json",
      tag: "Cash & UPI Galla Reconciliation"
    },
    {
      id: "verified",
      label: "Instant Bills",
      icon: "✓",
      badge: "100% Accurate Invoices",
      src: "/animations/receipt_printer_gold.json",
      tag: "Professional A4 & Thermal Invoices"
    }
  ];

  const currentMode = modes.find((m) => m.id === activeTab) || modes[0];

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto">
      {/* Outer Device Mockup Container */}
      <div className="relative bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border-4 border-slate-800/10 hover:shadow-teal-900/10 transition-all duration-300">
        
        {/* Glow ambient background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-emerald-400/20 to-teal-600/20 rounded-3xl blur-xl -z-10 opacity-70 pointer-events-none"></div>

        {/* Device Top Bar: Status notch & live pill */}
        <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-black text-slate-700 tracking-wider uppercase">
              DukanHisab Billing 3.0
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
              ⚡ LIVE PREVIEW
            </span>
          </div>
        </div>

        {/* Interactive Mode Pills */}
        <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-2xl mb-4">
          {modes.map((mode) => {
            const isActive = activeTab === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveTab(mode.id)}
                className={`py-1.5 px-1 rounded-xl text-xs font-bold transition-all text-center flex flex-col items-center gap-0.5 cursor-pointer ${
                  isActive
                    ? "bg-white text-teal-800 shadow-sm border border-teal-200/60 scale-102"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                }`}
                title={mode.label}
              >
                <span className="text-sm leading-none">{mode.icon}</span>
                <span className="text-[10px] leading-tight truncate w-full font-bold">
                  {mode.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Lottie Animation Display Area */}
        <div className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[300px] border border-teal-100/60 overflow-hidden group">
          
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          {/* Floating Pill: Mode Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-teal-800 border border-teal-200/70 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping"></span>
              {currentMode.badge}
            </span>
          </div>

          {/* Floating Pill: Quick feature callout */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 bg-teal-800 text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold shadow-xs">
              ⚡ 1-Sec Bill
            </span>
          </div>

          {/* The Lottie Canvas */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 relative z-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            {isMounted ? (
              <Lottie
                key={currentMode.id}
                src={currentMode.src}
                loop={true}
                autoplay={true}
                className="w-full h-full object-contain drop-shadow-md"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 border-3 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Bottom interactive status strip */}
          <div className="w-full mt-2 pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-600">
            <span className="font-semibold text-teal-900 flex items-center gap-1">
              <span className="text-emerald-600 font-bold">✓</span> {currentMode.tag}
            </span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
              Active
            </span>
          </div>
        </div>

        {/* Bottom CTA / Feature Summary Ribbon */}
        <div className="mt-3 pt-2 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 bg-teal-50/80 px-3 py-1.5 rounded-xl border border-teal-200/60">
            <span>✨ Barcode Scanner • Thermal Bluetooth • WhatsApp Invoice</span>
          </div>
        </div>

      </div>
    </div>
  );
}
