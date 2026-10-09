"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ShopManagementHeroVisual() {
  const [activeTab, setActiveTab] = useState("sales");

  const tabs = [
    {
      id: "sales",
      label: "Daily Sales & Galla",
      icon: "🛒",
      badge: "₹38,450 Today",
      stat1: { label: "Cash Galla", val: "₹24,200", color: "text-emerald-700 bg-emerald-50" },
      stat2: { label: "UPI & QR", val: "₹14,250", color: "text-blue-700 bg-blue-50" },
      stat3: { label: "Bills Created", val: "68 Invoices", color: "text-teal-700 bg-teal-50" },
      floatingPill: {
        title: "Bill #1084 Generated",
        subtitle: "₹850 • Cash Paid ✓",
        icon: "🧾",
      },
    },
    {
      id: "stock",
      label: "Stock & Inventory",
      icon: "📦",
      badge: "3,400+ Products",
      stat1: { label: "In-Stock Items", val: "98.4%", color: "text-emerald-700 bg-emerald-50" },
      stat2: { label: "Low Stock Alert", val: "3 Items Left", color: "text-amber-700 bg-amber-50" },
      stat3: { label: "Barcode Scan", val: "0.5s Fast", color: "text-teal-700 bg-teal-50" },
      floatingPill: {
        title: "Low Stock Warning",
        subtitle: "Fortune Oil 1L (Only 2 left)",
        icon: "⚠️",
      },
    },
    {
      id: "khata",
      label: "Udhaar & Customers",
      icon: "👥",
      badge: "Auto Reminders",
      stat1: { label: "Udhaar Recovered", val: "₹4,800", color: "text-emerald-700 bg-emerald-50" },
      stat2: { label: "Active Customers", val: "340 Khata", color: "text-teal-700 bg-teal-50" },
      stat3: { label: "WhatsApp Alerts", val: "Instant SMS", color: "text-blue-700 bg-blue-50" },
      floatingPill: {
        title: "Udhaar Received",
        subtitle: "Ramesh Bhai: ₹1,500 Paid ✓",
        icon: "💬",
      },
    },
  ];

  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
      {/* Ambient Gradient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-teal-400/20 via-emerald-300/15 to-[#036272]/20 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Main Glassmorphic Showcase Box */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-6 shadow-2xl shadow-teal-950/10 border border-teal-100 overflow-hidden">
        
        {/* Top Header: Shop Status & Cloud Sync */}
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <span className="text-xs font-black text-slate-800 tracking-wide block leading-none">
                SMART DUKAAN DASHBOARD
              </span>
              <span className="text-[10px] text-teal-700 font-bold">
                Mobile &amp; Web • Live Synchronized
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-full shadow-2xs">
            <span className="text-xs">⚡</span>
            <span className="text-[11px] font-black text-teal-900 tracking-tight">
              100% Offline Ready
            </span>
          </div>
        </div>

        {/* 3 Operational Mode Selector Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/90 rounded-2xl mb-4 border border-slate-200/70">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 px-1.5 rounded-xl text-xs font-bold transition-all text-center ${
                  isActive
                    ? "bg-white text-teal-900 shadow-md shadow-slate-900/5 font-black scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                <span className="text-sm">{tab.icon}</span>
                <span className="truncate leading-tight">{tab.label.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Central Visual Arena: Phone Preview with Floating Shop Metrics */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#eef9f8] via-[#f7fcfb] to-white border border-teal-100/80 p-3 sm:p-4 overflow-hidden">
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#036272_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Top Floating Metric Pill: Tab Context */}
          <div className="relative z-10 flex items-center justify-between bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-sm border border-teal-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-teal-500 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                {current.icon}
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 leading-none">
                  {current.label}
                </p>
                <p className="text-xs font-black text-slate-900 leading-tight mt-0.5">
                  {current.badge}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
              Live Updated
            </span>
          </div>

          {/* Device Showcase + 3 Real Live Operation Badges */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 py-2">
            
            {/* Real Smartphone Frame with DukanHisab App Screenshot */}
            <div className="relative w-44 sm:w-48 aspect-[9/18.5] rounded-[2rem] p-2 bg-slate-900 shadow-2xl shadow-teal-950/25 border-2 border-slate-700 shrink-0">
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Screen Area */}
              <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-slate-950">
                <Image
                  src="/images/dukanhisab-mobile-dashboard.png"
                  alt="DukanHisab Shop Management App Mobile Interface"
                  fill
                  sizes="(max-width: 640px) 180px, 200px"
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle soft gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Live Contextual Metrics Cards (Right side on desktop, stacked on mobile) */}
            <div className="w-full sm:w-auto flex-1 space-y-2.5 z-10">
              
              {/* Stat 1 */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase leading-none">
                    {current.stat1.label}
                  </p>
                  <p className="text-sm font-black text-slate-900 mt-0.5">
                    {current.stat1.val}
                  </p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${current.stat1.color}`}>
                  Verified
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase leading-none">
                    {current.stat2.label}
                  </p>
                  <p className="text-sm font-black text-slate-900 mt-0.5">
                    {current.stat2.val}
                  </p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${current.stat2.color}`}>
                  Active
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase leading-none">
                    {current.stat3.label}
                  </p>
                  <p className="text-sm font-black text-slate-900 mt-0.5">
                    {current.stat3.val}
                  </p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${current.stat3.color}`}>
                  Real-time
                </span>
              </div>

              {/* Floating Alert / Live Activity Pill */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-2.5 border border-teal-200/90 shadow-sm flex items-center gap-2.5 animate-pulse">
                <span className="text-base">{current.floatingPill.icon}</span>
                <div className="min-w-0">
                  <p className="text-[11px] font-black text-teal-950 truncate">
                    {current.floatingPill.title}
                  </p>
                  <p className="text-[10px] font-medium text-teal-800 truncate">
                    {current.floatingPill.subtitle}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Feature Micro-Pills */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-slate-100 text-center">
          <div className="bg-slate-50 rounded-xl py-2 px-1 border border-slate-200/60">
            <span className="text-[11px] font-black text-slate-800 block leading-tight">
              📱 Phone + Web
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5">
              Auto Cloud Sync
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl py-2 px-1 border border-slate-200/60">
            <span className="text-[11px] font-black text-slate-800 block leading-tight">
              ⚡ 2-Min Setup
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5">
              Zero Training Needed
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl py-2 px-1 border border-slate-200/60">
            <span className="text-[11px] font-black text-slate-800 block leading-tight">
              🔒 100% Safe Data
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5">
              Encrypted Backup
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
