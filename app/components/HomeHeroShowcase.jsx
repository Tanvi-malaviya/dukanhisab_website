"use client";

import React from "react";
import Image from "next/image";

export default function HomeHeroShowcase() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Soft Ambient Glows Behind Visual */}
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-gradient-to-tr from-teal-400/20 via-emerald-200/20 to-transparent rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Main Glassmorphic Showcase Frame */}
      <div className="relative p-2.5 sm:p-3.5 rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border border-emerald-100 shadow-2xl shadow-emerald-950/10 overflow-hidden">
        
        {/* Central 3D Illustration Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#f2fbf7] via-[#f7fcf9] to-white border border-emerald-100/80 aspect-[4/3] group">
          
          {/* Main 3D Render Image */}
          <Image
            src="/images/home_hero_3d_smart_dukaan.jpg"
            alt="DukanHisab - 3D Smart Indian Retail Shop Counter with POS, Barcode Scanner, Thermal Printer and Mobile App"
            width={1024}
            height={768}
            priority
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 select-none"
          />

          {/* Soft Bottom Gradient for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />

          {/* Floating Hotspot 1: Smart POS Tablet (Top Left) */}
          <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-emerald-200/90 flex items-center gap-2.5 animate-float-slow">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
                💻
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 leading-none">Touch POS</p>
                <p className="text-xs font-black text-slate-900 leading-tight">1-Sec Billing Terminal</p>
              </div>
            </div>
          </div>

          {/* Floating Hotspot 2: Mobile App Sync (Top Right) */}
          <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-emerald-200/90 flex items-center gap-2.5 animate-float-delayed">
              <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
                📱
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 leading-none">Cloud Sync</p>
                <p className="text-xs font-black text-slate-900 leading-tight">Phone ⟷ PC Connected</p>
              </div>
            </div>
          </div>

          {/* Floating Hotspot 3: Barcode Scan Laser (Middle Left) */}
          <div className="absolute bottom-16 left-3 sm:bottom-18 sm:left-4 z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-xl py-1.5 px-3 shadow-lg border border-emerald-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-black text-slate-900">
                ⚡ 0.8s Barcode Beep
              </span>
            </div>
          </div>

          {/* Floating Hotspot 4: Thermal Slip & UPI QR (Bottom Right) */}
          <div className="absolute bottom-3.5 right-3 sm:bottom-5 sm:right-4 z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-emerald-200/90 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shadow-xs">
                🖨️
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 leading-none">Thermal Slip</p>
                <p className="text-xs font-black text-slate-900 leading-tight">Instant Print + WhatsApp</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Capabilities Row */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-100 text-center">
          <div className="bg-emerald-50/60 rounded-xl py-2 px-1 border border-emerald-100">
            <span className="text-[10px] font-bold text-emerald-900 block leading-tight">🏪 Smart Cash Galla</span>
            <span className="text-[9px] text-emerald-700 block mt-0.5">Auto-Tally Daily Cash &amp; UPI</span>
          </div>
          <div className="bg-emerald-50/60 rounded-xl py-2 px-1 border border-emerald-100">
            <span className="text-[10px] font-bold text-emerald-900 block leading-tight">👥 Udhar Khata Ledger</span>
            <span className="text-[9px] text-emerald-700 block mt-0.5">Auto WhatsApp Reminders</span>
          </div>
          <div className="bg-emerald-50/60 rounded-xl py-2 px-1 border border-emerald-100">
            <span className="text-[10px] font-bold text-emerald-900 block leading-tight">📦 4,200+ Stock Items</span>
            <span className="text-[9px] text-emerald-700 block mt-0.5">Low Inventory Warning Alerts</span>
          </div>
        </div>

      </div>
    </div>
  );
}
