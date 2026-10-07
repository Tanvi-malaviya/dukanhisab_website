"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  BarcodeIcon, 
  ReceiptIcon, 
  RupeeIcon, 
  CheckIcon, 
  SmartphoneIcon, 
  MonitorIcon, 
  CloudSyncIcon, 
  WhatsAppIcon 
} from "./Icons";

export default function FunctionalityLottieAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      id: "scan",
      title: "Barcode Scan",
      subtitle: "Lightning Fast Counter Beep",
      icon: BarcodeIcon,
      badge: "1-Sec Scanning",
      color: "emerald"
    },
    {
      id: "bill",
      title: "Smart POS & GST",
      subtitle: "Automatic Tax & Discount",
      icon: ReceiptIcon,
      badge: "HSN & GST Ready",
      color: "teal"
    },
    {
      id: "khata",
      title: "Udhar & Galla",
      subtitle: "Daily Cashbook Reconciliation",
      icon: RupeeIcon,
      badge: "Cash + Khata Tally",
      color: "amber"
    },
    {
      id: "print",
      title: "Print & WhatsApp",
      subtitle: "Thermal & PDF Paperless",
      icon: WhatsAppIcon,
      badge: "Instant Delivery",
      color: "emerald"
    },
    {
      id: "sync",
      title: "Live Cloud Sync",
      subtitle: "Counter Phone ⟷ Web Panel",
      icon: CloudSyncIcon,
      badge: "100% Offline Safe",
      color: "teal"
    }
  ];

  // Auto-advance loop every 4.5 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  return (
    <div className="w-full bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-white relative">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Title Bar */}
      <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
          <span className="ml-2 text-xs font-mono text-slate-300 font-bold">
            dukanhisab-engine.anim // {steps[activeStep].title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>{isPlaying ? "⏸ Pause" : "▶ Play"}</span>
          </button>
          <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
            Live Flow
          </span>
        </div>
      </div>

      {/* Interactive Step Navigation Bar */}
      <div className="grid grid-cols-5 border-b border-slate-800 bg-slate-950/60 p-1.5 gap-1 relative z-10">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => {
                setActiveStep(idx);
                setIsPlaying(false);
              }}
              className={`p-2 rounded-xl text-left transition-all relative overflow-hidden flex flex-col items-center sm:items-start cursor-pointer ${
                isActive
                  ? "bg-slate-800 text-white shadow-md border border-slate-700"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              {/* Active step progress indicator line */}
              {isActive && isPlaying && (
                <div 
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 animate-[progress_4.5s_linear_infinite]"
                  style={{ animationDuration: "4.5s" }}
                />
              )}
              
              <div className="flex items-center gap-1.5">
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                <span className="hidden sm:inline text-xs font-bold truncate">{step.title}</span>
              </div>
              <span className="text-[10px] text-slate-400 hidden lg:block truncate mt-0.5">
                {step.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Animation Stage */}
      <div className="p-6 sm:p-8 min-h-[360px] sm:min-h-[380px] flex flex-col justify-between relative z-10">
        
        {/* ================= STAGE 1: BARCODE SCANNER ================= */}
        {activeStep === 0 && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Step 1: Point &amp; Beep</span>
                <h3 className="text-xl font-black text-white mt-0.5">Barcode &amp; Weighing Scale Scan</h3>
              </div>
              <span className="text-xs bg-emerald-950 border border-emerald-700/60 text-emerald-300 font-bold px-3 py-1 rounded-full animate-pulse">
                Scan Active ⚡
              </span>
            </div>

            {/* Visual Barcode Scanning Stage */}
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 relative overflow-hidden flex flex-col items-center justify-center">
              
              {/* Laser Scanning Line Animation */}
              <div className="w-full max-w-xs relative my-2">
                <div className="h-20 bg-white/5 rounded-xl border border-slate-700 p-3 flex flex-col justify-between items-center relative overflow-hidden">
                  
                  {/* The Sweeping Red/Emerald Laser Line */}
                  <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] animate-[bounce_1.4s_infinite]" />

                  {/* SVG Barcode Graphic */}
                  <div className="flex items-end justify-center gap-1.5 h-10 w-4/5 pt-1 opacity-90">
                    {[3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3].map((h, i) => (
                      <span 
                        key={i} 
                        className={`bg-slate-200 inline-block rounded-xs ${
                          h === 4 ? "w-1.5 h-full" : h === 3 ? "w-1 h-5/6" : h === 2 ? "w-0.5 h-full" : "w-0.5 h-4/6"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 tracking-widest">
                    8901234567890
                  </span>
                </div>
              </div>

              {/* Product Scanned Card popping up */}
              <div className="mt-4 w-full max-w-sm bg-slate-900 border border-emerald-500/40 rounded-xl p-3.5 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Fortune Sunlite Refined Oil 1L</h4>
                    <span className="text-[10px] text-slate-400 font-mono">HSN: 1512 • In Stock: 42 Cans</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-emerald-400">₹145</span>
                  <span className="text-[9px] text-slate-400 block line-through">₹160</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>Works with Camera Scanner, USB Gun &amp; Bluetooth Scale</span>
              <span className="text-emerald-400 font-bold">Item Added to Cart ✓</span>
            </div>
          </div>
        )}

        {/* ================= STAGE 2: SMART POS & GST ================= */}
        {activeStep === 1 && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Step 2: Automated Cart</span>
                <h3 className="text-xl font-black text-white mt-0.5">Real-Time GST &amp; Discount Tally</h3>
              </div>
              <span className="text-xs bg-teal-950 border border-teal-700/60 text-teal-300 font-bold px-3 py-1 rounded-full">
                Auto-Calculated
              </span>
            </div>

            {/* Interactive Bill Breakdown Box */}
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <span>CART ITEMS (3 PRODUCTS)</span>
                <span className="text-teal-400 font-bold">TAX BREAKUP</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>1. Fortune Kolam Rice (25kg Bag)</span>
                  <span className="font-mono font-bold text-white">₹1,250.00</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>2. Fortune Refined Oil 1L (x2)</span>
                  <span className="font-mono font-bold text-white">₹290.00</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>3. Tata Salt 1kg Pkt</span>
                  <span className="font-mono font-bold text-white">₹28.00</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-1 text-slate-400 text-[11px]">
                  <div className="flex justify-between">
                    <span>Taxable Subtotal:</span>
                    <span className="font-mono text-slate-200">₹1,493.33</span>
                  </div>
                  <div className="flex justify-between text-teal-400">
                    <span>CGST (2.5%) + SGST (2.5%):</span>
                    <span className="font-mono">+₹74.67</span>
                  </div>
                </div>

                <div className="bg-slate-900 border border-teal-500/30 p-2.5 rounded-xl flex flex-col justify-center text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Grand Total</span>
                  <span className="text-lg font-black text-teal-400 font-mono">₹1,568.00</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>HSN Codes auto-assigned • Round-off toggle supported</span>
              <span className="text-teal-400 font-bold">GST Compliant ✓</span>
            </div>
          </div>
        )}

        {/* ================= STAGE 3: UDHAR & GALLA ================= */}
        {activeStep === 2 && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Step 3: Multi-Payment</span>
                <h3 className="text-xl font-black text-white mt-0.5">Udhar Khata &amp; Galla Cashbook</h3>
              </div>
              <span className="text-xs bg-amber-950 border border-amber-700/60 text-amber-300 font-bold px-3 py-1 rounded-full">
                Ledger Linked
              </span>
            </div>

            {/* Split Payment & Drawer Simulation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Left: Customer Khata Book Card */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="font-bold text-slate-300">Customer Khata</span>
                  <span className="text-amber-400 font-bold">Ramesh Patel</span>
                </div>

                <div className="py-3 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Previous Outstanding:</span>
                    <span className="font-mono text-slate-200">₹2,400</span>
                  </div>
                  <div className="flex justify-between text-amber-400 font-bold">
                    <span>Current Bill Added:</span>
                    <span className="font-mono">+₹1,568</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-white">
                    <span>Total Khata Due:</span>
                    <span className="font-mono text-amber-400 text-sm">₹3,968</span>
                  </div>
                </div>

                <div className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 p-2 rounded-lg text-center font-bold">
                  📲 Free WhatsApp Reminder Scheduled
                </div>
              </div>

              {/* Right: Cash Drawer (Galla) Balance */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="font-bold text-slate-300">Shop Galla (Cash)</span>
                  <span className="text-emerald-400 font-bold">Register #01</span>
                </div>

                <div className="py-3 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Opening Cash:</span>
                    <span className="font-mono text-slate-200">₹5,000</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Today's Cash Sales:</span>
                    <span className="font-mono">+₹12,450</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-white">
                    <span>Galla Tally Balance:</span>
                    <span className="font-mono text-emerald-400 text-sm">₹17,450</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 bg-slate-900 p-2 rounded-lg text-center">
                  Denomination Calculator Ready (500x, 200x, 100x)
                </div>
              </div>

            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>Supports Split: Cash + UPI QR + Khata in single bill</span>
              <span className="text-amber-400 font-bold">Zero Mismatch ✓</span>
            </div>
          </div>
        )}

        {/* ================= STAGE 4: PRINT & WHATSAPP ================= */}
        {activeStep === 3 && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Step 4: Invoice Output</span>
                <h3 className="text-xl font-black text-white mt-0.5">Thermal Print &amp; WhatsApp Receipt</h3>
              </div>
              <span className="text-xs bg-emerald-950 border border-emerald-700/60 text-emerald-300 font-bold px-3 py-1 rounded-full">
                Paperless &amp; Print
              </span>
            </div>

            {/* Thermal Slip Output Simulation */}
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Thermal Receipt Paper Roll */}
              <div className="w-52 bg-white text-slate-900 rounded-lg p-3.5 shadow-2xl text-[10px] font-mono leading-tight space-y-2 border-t-4 border-emerald-600 relative overflow-hidden">
                <div className="text-center font-bold border-b border-dashed border-slate-300 pb-2">
                  <div className="text-xs font-black">DUKANHISAB STORE</div>
                  <div className="text-[9px] text-slate-500">GSTIN: 24AAAAA0000A1Z5</div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between font-bold">
                    <span>Invoice: #DH-9021</span>
                    <span>12:45 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fortune Rice 25kg</span>
                    <span>₹1,250</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fortune Oil 1L (x2)</span>
                    <span>₹290</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-slate-300 pt-1.5 flex justify-between font-black text-xs">
                  <span>TOTAL PAID</span>
                  <span className="text-emerald-700">₹1,568</span>
                </div>

                <div className="text-center pt-1 text-[8px] text-slate-500">
                  Thank You! Visit Again.
                </div>
              </div>

              {/* WhatsApp Green Delivery Bubble */}
              <div className="flex-1 space-y-3">
                <div className="bg-emerald-900/60 border border-emerald-500/40 rounded-2xl p-4 space-y-2 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Invoice Delivered</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    "Namaste Ramesh Bhai! Aapki dukaan ka bill #DH-9021 ready hai. View PDF bill &amp; current balance: ₹1,568."
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-emerald-400 font-mono pt-1">
                    <span>Delivered instantly</span>
                    <span>Read ✓✓</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Connects to 2-inch &amp; 3-inch Bluetooth Thermal Printers</span>
                </div>
              </div>

            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>Save ₹10,000+ yearly on pre-printed bill books</span>
              <span className="text-emerald-400 font-bold">Professional Branding ✓</span>
            </div>
          </div>
        )}

        {/* ================= STAGE 5: CLOUD SYNC ================= */}
        {activeStep === 4 && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Step 5: Cloud Synchronization</span>
                <h3 className="text-xl font-black text-white mt-0.5">Counter App ⟷ Web Panel Synchronized</h3>
              </div>
              <span className="text-xs bg-teal-950 border border-teal-700/60 text-teal-300 font-bold px-3 py-1 rounded-full">
                Live 2-Way Sync
              </span>
            </div>

            {/* Sync Pipeline Representation */}
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Mobile Device */}
              <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 p-4 rounded-2xl w-full md:w-auto">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <SmartphoneIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Counter Mobile App</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Bill Created: 12:45:02</div>
                </div>
              </div>

              {/* Animated Sync Data Waves */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-1.5 text-teal-400 text-xs font-mono font-bold animate-pulse">
                  <span>←</span>
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>→</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono mt-1">Encrypted Cloud Sync (0.2s)</span>
              </div>

              {/* Laptop Web Dashboard */}
              <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 p-4 rounded-2xl w-full md:w-auto">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                  <MonitorIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Office Web Panel</div>
                  <div className="text-[10px] text-teal-400 font-mono">dukanhisab.in/shop</div>
                </div>
              </div>

            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Internet down? Bills continue offline and sync automatically upon reconnecting.</span>
              </span>
              <span className="text-teal-400 font-bold shrink-0">Zero Downtime ✓</span>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Step Indicator Dots */}
      <div className="px-6 py-3.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActiveStep(i);
                setIsPlaying(false);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === activeStep ? "w-6 bg-emerald-400" : "w-2 bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
              setIsPlaying(false);
            }}
            className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer text-xs"
          >
            ‹
          </button>
          <span className="text-[11px] font-mono text-slate-400">
            {activeStep + 1} / {steps.length}
          </span>
          <button
            type="button"
            onClick={() => {
              setActiveStep((prev) => (prev + 1) % steps.length);
              setIsPlaying(false);
            }}
            className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer text-xs"
          >
            ›
          </button>
        </div>
      </div>

    </div>
  );
}
