"use client";

import React, { useState } from "react";
import { 
  BarcodeIcon, 
  SmartphoneIcon, 
  ReceiptIcon, 
  RupeeIcon, 
  UsersIcon, 
  PackageIcon, 
  ArrowRightIcon, 
  PlayIcon,
  CheckIcon,
  SparklesIcon,
  StoreIcon
} from "./Icons";

export default function Hero() {
  const [activeCard, setActiveCard] = useState(0);

  const heroTransactions = [
    {
      id: 0,
      badge: "SCAN & BILL",
      title: "Rice 25kg (Fortune Kolam)",
      detail: "Barcode #890123 scanned at counter",
      impact: "Added to Bill #DH-4029 • ₹1,250",
      type: "sale",
      time: "10:03 AM",
    },
    {
      id: 1,
      badge: "CUSTOMER PAYMENT",
      title: "Rahul Patel (Regular Khata)",
      detail: "Received ₹2,500 Cash at counter",
      impact: "Outstanding reduced: ₹9,500 → ₹7,000",
      type: "payment",
      time: "11:20 AM",
    },
    {
      id: 2,
      badge: "STOCK UPDATED",
      title: "Rice 25kg Inventory Count",
      detail: "Auto-deducted after sale completion",
      impact: "Shop Warehouse: 20 Bags → 18 Bags",
      type: "stock",
      time: "10:05 AM",
    },
    {
      id: 3,
      badge: "PURCHASE INWARD",
      title: "ABC Traders (Supplier Inward)",
      detail: "Purchase Bill #PB-881 verified",
      impact: "+20 Bags added to stock • ₹22,000",
      type: "purchase",
      time: "09:15 AM",
    },
  ];

  return (
    <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50">
      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-emerald-200/40 to-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Core Brand Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs">
            <SparklesIcon className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Every Sale. Every Purchase. Every Rupee. Remembered.</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Your Shop Has a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 underline decoration-emerald-300 decoration-wavy decoration-2">Memory.</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
            DukanHisab remembers every sale, purchase, payment, product, customer and expense — all in one connected system.
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Run your everyday shop from the app. Understand your complete business from the web panel.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#interactive-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-2xl shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore DukanHisab</span>
              <ArrowRightIcon className="w-5 h-5" />
            </a>

            <a
              href="#day-in-shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-6 py-3.5 rounded-2xl border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
            >
              <PlayIcon className="w-4 h-4 text-emerald-600" />
              <span>See How It Works</span>
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
              No accounting jargon
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
              Lightning-fast barcode billing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
              Works on any phone & PC
            </span>
          </div>
        </div>

        {/* Hero Interactive Digital Shop Scene */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Shop Counter Mockup Frame */}
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/50 p-4 sm:p-7 overflow-hidden">
            
            {/* Counter Top Bar */}
            <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Live Shop Counter</span>
                  <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <StoreIcon className="w-4 h-4 text-emerald-600" />
                    Shree Ganesh General Store & Kirana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active Memory Sync • Real-Time</span>
              </div>
            </div>

            {/* Central Stage: The Connected Shop Counter */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Side: Barcode Scanner & Product On Counter */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 tracking-wide uppercase">Shop Counter Hardware</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">USB / BT</span>
                  </div>

                  {/* Visual Barcode Scanner with Red Beam */}
                  <div className="relative bg-white border border-slate-300/80 rounded-xl p-3 shadow-inner">
                    <div className="relative flex flex-col items-center justify-center py-3 bg-slate-950 rounded-lg overflow-hidden">
                      {/* Laser red scan line */}
                      <div className="absolute w-full h-0.5 bg-red-500 shadow-[0_0_8px_#ef4444] animate-laser"></div>

                      {/* Barcode Graphic */}
                      <div className="flex items-center justify-center gap-1.5 px-4">
                        <span className="w-1 h-12 bg-white rounded-xs"></span>
                        <span className="w-2 h-12 bg-white rounded-xs"></span>
                        <span className="w-0.5 h-12 bg-white"></span>
                        <span className="w-1.5 h-12 bg-white"></span>
                        <span className="w-0.5 h-12 bg-white"></span>
                        <span className="w-3 h-12 bg-white"></span>
                        <span className="w-1 h-12 bg-white"></span>
                        <span className="w-2 h-12 bg-white"></span>
                        <span className="w-0.5 h-12 bg-white"></span>
                        <span className="w-1.5 h-12 bg-white"></span>
                      </div>
                      <p className="text-[10px] font-mono text-emerald-400 mt-2 tracking-widest">
                        8901234567890 • BEEP!
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Rice 25kg (Kolam)</p>
                        <p className="text-[11px] text-slate-500">In Stock: 18 Bags left</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-extrabold text-emerald-600">₹1,250</span>
                        <p className="text-[10px] text-slate-400 line-through">₹1,300 MRP</p>
                      </div>
                    </div>
                  </div>

                  {/* Customer At Counter */}
                  <div className="mt-3 bg-white border border-slate-200/80 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                        RP
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Rahul Patel</p>
                        <p className="text-[10px] text-slate-500">Regular Customer • Custom Pricing</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full">
                      Khata: ₹7,000
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle: Phone with DukanHisab App */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-64 rounded-[36px] bg-slate-900 p-2.5 shadow-2xl shadow-emerald-950/20 border-4 border-slate-800">
                  {/* Phone Speaker / Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-xl z-20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                  </div>

                  {/* Phone Screen */}
                  <div className="bg-slate-50 rounded-[28px] overflow-hidden border border-slate-200 text-slate-900 text-xs">
                    {/* App Header */}
                    <div className="bg-emerald-600 text-white p-3 pt-5">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm tracking-tight">DukanHisab POS</span>
                        <span className="text-[10px] bg-emerald-700 px-2 py-0.5 rounded-full">Bill #4029</span>
                      </div>
                      <p className="text-[11px] text-emerald-100 mt-0.5">Counter Billing • Rahul Patel</p>
                    </div>

                    {/* App Cart Content */}
                    <div className="p-3 space-y-2.5 bg-white min-h-[170px]">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <div>
                          <p className="font-bold text-slate-800">Rice 25kg</p>
                          <p className="text-[10px] text-slate-500">1 Bag × ₹1,250</p>
                        </div>
                        <span className="font-bold text-slate-900">₹1,250</span>
                      </div>

                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <div>
                          <p className="font-bold text-slate-800">Fortune Oil 5L</p>
                          <p className="text-[10px] text-slate-500">1 Can × ₹820 (Saved Rate)</p>
                        </div>
                        <span className="font-bold text-slate-900">₹820</span>
                      </div>

                      <div className="pt-1 flex items-center justify-between font-extrabold text-sm text-slate-900">
                        <span>Grand Total:</span>
                        <span className="text-emerald-700">₹2,070</span>
                      </div>
                    </div>

                    {/* Payment Bar */}
                    <div className="p-2.5 bg-slate-100 border-t border-slate-200 flex gap-2">
                      <button className="flex-1 bg-emerald-600 text-white font-bold py-1.5 rounded-lg text-center shadow-xs">
                        Cash Paid ✓
                      </button>
                      <button className="flex-1 bg-white border border-slate-300 font-bold py-1.5 rounded-lg text-slate-700 text-center">
                        Add Khata
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Generated Connected Memory Records */}
              <div className="lg:col-span-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Connected Shop Records
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Click to inspect</span>
                </div>

                <div className="space-y-2">
                  {heroTransactions.map((tx, idx) => {
                    const isSelected = activeCard === idx;
                    return (
                      <div
                        key={tx.id}
                        onClick={() => setActiveCard(idx)}
                        className={`cursor-pointer rounded-xl p-3 border transition-all ${
                          isSelected
                            ? "bg-emerald-50/90 border-emerald-400 shadow-md translate-x-1"
                            : "bg-white hover:bg-slate-50 border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                            tx.type === "sale" ? "bg-emerald-100 text-emerald-800" :
                            tx.type === "payment" ? "bg-blue-100 text-blue-800" :
                            tx.type === "stock" ? "bg-amber-100 text-amber-800" :
                            "bg-purple-100 text-purple-800"
                          }`}>
                            {tx.badge}
                          </span>
                          <span className="text-slate-400 font-medium">{tx.time}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-900">{tx.title}</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">{tx.detail}</p>
                        <p className="text-[11px] font-semibold text-emerald-700 mt-1 flex items-center gap-1">
                          <CheckIcon className="w-3 h-3 text-emerald-600" />
                          {tx.impact}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom Memory Connecting Ribbon */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 bg-slate-50/80 -mx-4 -mb-4 sm:-mx-7 sm:-mb-7 p-4 rounded-b-3xl">
              <div className="flex items-center gap-2 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>The DukanHisab Rule:</span>
                <strong className="text-slate-900">One action at the counter updates Sales, Inventory, Customer Khata & Cash simultaneously.</strong>
              </div>
              <span className="text-emerald-700 font-semibold">Zero duplicate entries →</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
