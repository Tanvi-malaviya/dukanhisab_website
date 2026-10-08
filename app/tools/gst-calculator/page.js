"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CtaBanner from "../../components/CtaBanner";
import { 
  CheckIcon, 
  ArrowRightIcon, 
  GooglePlayIcon, 
  CalculatorIcon, 
  ZapIcon 
} from "../../components/Icons";

export default function GstCalculatorPage() {
  const [amount, setAmount] = useState("1000");
  const [gstRate, setGstRate] = useState("18");
  const [calcType, setCalcType] = useState("add"); // "add" or "remove"
  const [openFaq, setOpenFaq] = useState(null);
  const [exampleRate, setExampleRate] = useState(18);
  const [copied, setCopied] = useState(false);

  const numAmount = parseFloat(amount) || 0;
  const rate = parseFloat(gstRate) || 0;

  let baseAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (calcType === "add") {
    baseAmount = numAmount;
    gstAmount = (baseAmount * rate) / 100;
    totalAmount = baseAmount + gstAmount;
  } else {
    // Remove GST: Total = Base * (1 + rate/100) => Base = Total / (1 + rate/100)
    totalAmount = numAmount;
    baseAmount = totalAmount / (1 + rate / 100);
    gstAmount = totalAmount - baseAmount;
  }

  const cgstAmount = gstAmount / 2;
  const sgstAmount = gstAmount / 2;
  const basePct = totalAmount > 0 ? ((baseAmount / totalAmount) * 100).toFixed(1) : "0";
  const cgstPct = totalAmount > 0 ? ((cgstAmount / totalAmount) * 100).toFixed(1) : "0";
  const sgstPct = totalAmount > 0 ? ((sgstAmount / totalAmount) * 100).toFixed(1) : "0";

  const handleCopyResult = () => {
    const summary = `DukanHisab GST Calculation Summary:
• Base Amount: ₹${baseAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
• GST Rate: ${rate}% (${calcType === "add" ? "Added" : "Included"})
• CGST (${rate / 2}%): ₹${cgstAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
• SGST (${rate / 2}%): ₹${sgstAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
• Total Tax Amount: ₹${gstAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
• Total Bill Amount: ₹${totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

Calculated with DukanHisab (dukanhisab.com)`;

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleReset = () => {
    setAmount("1000");
    setGstRate("18");
    setCalcType("add");
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Is this GST calculator free to use?",
      a: "Yes, our GST calculator is 100% free with unlimited calculations. You do not need to register or download anything to use it.",
    },
    {
      q: "Can I use this for my business invoices?",
      a: "Yes, the calculations follow official GST rules (CGST + SGST or IGST) and can be used directly for preparing customer estimates, invoices, and purchase records.",
    },
    {
      q: "Which GST rates are available?",
      a: "We provide all standard Indian GST tax slabs: 5%, 12%, 18%, and 28%. You can also calculate reverse GST (removing GST from gross prices).",
    },
    {
      q: "Is the calculation accurate as per latest GST rules?",
      a: "Yes, the formula applies the exact standard government GST taxation calculation up to two decimal places.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-4 pb-8 sm:pb-10 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3 sm:mb-4">
              <Link href="/" className="hover:text-teal-700">Home</Link>
              <span>›</span>
              <span className="text-teal-700">Free GST Calculator</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#115e59] px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-tight shadow-2xs">
                  <span>FREE UTILITY TOOL</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  GST <span className="text-[#036272]">Calculator</span>
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                  Calculate GST amount instantly for any product or service. Find exact base price, GST tax split, and total amount with 5%, 12%, 18%, and 28% GST rates. Fast, free, and accurate.
                </p>

                {/* Compact Feature Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-[11px] font-bold">
                    ⚡ Instant Results
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-[11px] font-bold">
                    🎁 100% Free
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-[11px] font-bold">
                    🎯 Latest GST Rates (5%, 12%, 18%, 28%)
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-[11px] font-bold">
                    📱 Retailer Friendly
                  </span>
                </div>
              </div>

              {/* Right Column: Compact & Sleek Mobile App Mockup */}
              <div className="lg:col-span-4 relative flex flex-col items-center justify-center">
                {/* Ambient Soft Glow Behind Phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-gradient-to-tr from-teal-400/20 via-emerald-300/15 to-transparent rounded-full blur-2xl pointer-events-none" />

                <div className="relative animate-float-slow">
                  {/* Floating Pill: Official App (Top Left) */}
                  <div className="absolute -top-2.5 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md border border-teal-200/90 py-1 px-2.5 rounded-xl shadow-md flex items-center gap-1.5 pointer-events-none select-none animate-float-reverse">
                    <span className="text-xs">📱</span>
                    <span className="text-[11px] font-extrabold text-slate-800">DukanHisab App</span>
                  </div>

                  {/* Compact Smartphone Bezel & Screen Frame */}
                  <div className="relative w-[155px] sm:w-[175px] rounded-[2rem] p-1.5 bg-slate-900 border-2 border-slate-700/80 shadow-xl shadow-slate-900/30 hover:scale-102 transition-transform duration-300">
                    
                    {/* Screen Container */}
                    <div className="relative rounded-[1.6rem] overflow-hidden bg-white shadow-inner aspect-[459/1024]">
                      <Image
                        src="/images/dukanhisab-mobile-dashboard.png"
                        alt="DukanHisab Mobile App Real Dashboard"
                        width={459}
                        height={1024}
                        priority
                        className="w-full h-full object-cover select-none block"
                      />

                      {/* Glass reflection gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none">
                      <div className="w-12 h-0.5 bg-slate-700/80 rounded-full" />
                    </div>
                  </div>

                  {/* Floating Pill: Live App Sync (Bottom Right) */}
                  <div className="absolute -bottom-2 -right-2 sm:-right-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-200/90 py-1 px-2.5 rounded-xl shadow-md flex items-center gap-1.5 pointer-events-none select-none animate-float-reverse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-extrabold text-emerald-800">Live Dashboard ✓</span>
                  </div>

                  {/* Grounding drop shadow pedestal */}
                  <div className="w-28 h-2.5 bg-slate-900/10 rounded-[100%] blur-xs mx-auto mt-1" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== INTERACTIVE GST CALCULATOR ===================== */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Calculator Input Form (Span 6) */}
              <div className="md:col-span-6 bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                      <CalculatorIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Calculate GST</h2>
                      <p className="text-xs text-slate-500">Enter the amount and select GST rate to calculate instantly.</p>
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div className="space-y-2 mb-5">
                    <label className="text-xs font-bold text-slate-700">Amount (₹)</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="e.g. 1000"
                      className="w-full p-3 text-sm font-semibold rounded-xl border border-slate-200 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-white"
                    />
                    <span className="text-[11px] text-slate-400">Enter amount (with or without GST)</span>
                  </div>

                  {/* GST Rate */}
                  <div className="space-y-2 mb-5">
                    <label className="text-xs font-bold text-slate-700">GST Rate</label>
                    <select
                      value={gstRate}
                      onChange={(e) => setGstRate(e.target.value)}
                      className="w-full p-3 text-sm font-semibold rounded-xl border border-slate-200 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-white"
                    >
                      <option value="5">5% (Essential items)</option>
                      <option value="12">12% (Packaged goods)</option>
                      <option value="18">18% (Standard rate)</option>
                      <option value="28">28% (Luxury &amp; Automobiles)</option>
                    </select>
                    <span className="text-[11px] text-slate-400">Select applicable GST rate</span>
                  </div>

                  {/* Calculation Type Toggle */}
                  <div className="space-y-2 mb-6">
                    <label className="text-xs font-bold text-slate-700">Calculation Type</label>
                    <div className="space-y-2 pt-1">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="calcType"
                          checked={calcType === "add"}
                          onChange={() => setCalcType("add")}
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-xs font-bold text-slate-800">Add GST (Amount is without GST)</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="calcType"
                          checked={calcType === "remove"}
                          onChange={() => setCalcType("remove")}
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="text-xs font-bold text-slate-800">Remove GST (Amount is with GST)</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#036272] hover:bg-[#024f5c] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <CalculatorIcon className="w-4 h-4" />
                    <span>Calculate</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="py-3 px-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-all"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Right Column: Calculation Result (Span 6) with Unique Interactive Animations */}
              <div className="md:col-span-6 relative flex flex-col justify-between">
                {/* Ambient Soft Glow Aura (Pulsing behind card) */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500/20 via-emerald-400/25 to-teal-600/20 rounded-[2.5rem] blur-xl animate-pulse pointer-events-none" />

                {/* Floating Micro-Badge Top Right */}
                <div className="absolute -top-3.5 -right-2 sm:-right-3 z-30 bg-white/95 backdrop-blur-md border border-teal-200/90 py-1 px-3 rounded-2xl shadow-lg flex items-center gap-1.5 pointer-events-none select-none animate-float-slow">
                  <span className="text-xs">⚡</span>
                  <span className="text-[11px] font-extrabold text-teal-800">Auto 50:50 CGST/SGST</span>
                </div>

                {/* Floating Micro-Badge Bottom Left */}
                <div className="absolute -bottom-3 -left-2 sm:-left-3 z-30 bg-white/95 backdrop-blur-md border border-emerald-200/90 py-1 px-3 rounded-2xl shadow-lg flex items-center gap-1.5 pointer-events-none select-none animate-float-reverse">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-extrabold text-emerald-800">100% Tax Compliant ✓</span>
                </div>

                {/* Main Card Container */}
                <div className="relative bg-white border-2 border-teal-500/40 rounded-3xl p-6 sm:p-7 shadow-xl overflow-hidden flex flex-col justify-between h-full z-10 transition-all duration-300 hover:shadow-2xl">
                  
                  {/* Subtle Laser Scan Beam running down periodically */}
                  <div className="absolute inset-x-0 h-10 pointer-events-none z-20 animate-laser bg-gradient-to-b from-teal-400/10 via-emerald-400/20 to-transparent" />

                  <div>
                    {/* Header with live indicator & Copy Button */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white flex items-center justify-center shadow-xs">
                          <ZapIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">Calculation Breakdown</h3>
                          <p className="text-[11px] text-slate-500">Live GST breakdown &amp; tax split</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Live Ping Badge */}
                        <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-emerald-800">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span>Live Active</span>
                        </div>

                        {/* Copy Button */}
                        <button
                          type="button"
                          onClick={handleCopyResult}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            copied
                              ? "bg-emerald-600 text-white shadow-xs scale-102"
                              : "bg-slate-100 hover:bg-slate-200/80 text-slate-700 active:scale-95"
                          }`}
                          title="Copy Calculation Summary"
                        >
                          {copied ? (
                            <>
                              <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-3.5 h-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Dynamic Tax Distribution Ratio Progress Bar */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-slate-50 via-teal-50/40 to-slate-50 rounded-2xl border border-slate-200/70">
                      <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-700 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
                          Tax Distribution Ratio
                        </span>
                        <span className="font-mono text-slate-500 text-[10px]">100% Total</span>
                      </div>
                      
                      {/* Segmented Bar with smooth transitions */}
                      <div className="h-2.5 w-full bg-slate-200/80 rounded-full overflow-hidden flex shadow-inner p-0.5 gap-0.5">
                        <div 
                          style={{ width: `${basePct}%` }} 
                          className="bg-slate-700 h-full rounded-l-full transition-all duration-700 ease-out" 
                          title={`Base Amount: ${basePct}%`}
                        />
                        <div 
                          style={{ width: `${cgstPct}%` }} 
                          className="bg-teal-500 h-full transition-all duration-700 ease-out" 
                          title={`CGST: ${cgstPct}%`}
                        />
                        <div 
                          style={{ width: `${sgstPct}%` }} 
                          className="bg-emerald-500 h-full rounded-r-full transition-all duration-700 ease-out" 
                          title={`SGST: ${sgstPct}%`}
                        />
                      </div>

                      {/* Legend pills */}
                      <div className="flex items-center justify-between text-[10px] font-bold mt-2 text-slate-600">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-xs bg-slate-700 inline-block"></span>
                          Base ({basePct}%)
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-xs bg-teal-500 inline-block"></span>
                          CGST ({cgstPct}%)
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-xs bg-emerald-500 inline-block"></span>
                          SGST ({sgstPct}%)
                        </span>
                      </div>
                    </div>

                    {/* Breakdown Rows */}
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600 font-medium">Base Amount (Without GST)</span>
                        <span className="text-sm font-bold text-slate-900 font-mono">
                          ₹{baseAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600 font-medium">GST Rate Applied</span>
                        <span className="text-xs font-extrabold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-lg border border-teal-200/60 font-mono">
                          {rate}% ({calcType === "add" ? "Added" : "Included"})
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1 text-xs text-slate-500 pl-2.5 border-l-2 border-teal-400">
                        <span>CGST (Central Tax: {(rate / 2).toFixed(1)}%)</span>
                        <span className="font-semibold text-teal-800 font-mono">
                          +₹{cgstAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1 text-xs text-slate-500 pl-2.5 border-l-2 border-emerald-400">
                        <span>SGST (State Tax: {(rate / 2).toFixed(1)}%)</span>
                        <span className="font-semibold text-emerald-800 font-mono">
                          +₹{sgstAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1.5 border-b border-slate-100 font-semibold text-slate-700">
                        <span>Total Tax Amount ({rate}%)</span>
                        <span className="text-sm font-bold text-teal-700 font-mono">
                          ₹{gstAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      {/* Total Highlight Card with Shimmer Animation */}
                      <div className="relative overflow-hidden mt-2.5 p-3.5 rounded-2xl bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border-2 border-teal-500/50 flex items-center justify-between shadow-xs">
                        {/* Shimmer Light Beam */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

                        <div className="relative z-10">
                          <span className="text-[10px] font-black text-teal-900 uppercase tracking-wider block">
                            Total Amount {calcType === "add" ? "(With GST)" : "(Gross)"}
                          </span>
                          <span className="text-[10px] text-slate-500">Final Payable Bill</span>
                        </div>
                        <span className="relative z-10 text-xl sm:text-2xl font-black text-[#036272] font-mono tracking-tight">
                          ₹{totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer status / feedback */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 text-teal-800 font-semibold">
                      <CheckIcon className="w-4 h-4 text-teal-600 stroke-[3] shrink-0" />
                      <span className="text-[11px]">Zero math errors • Ready for invoice</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyResult}
                      className="text-[11px] font-bold text-teal-700 hover:text-teal-900 hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Share</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== COMMON GST RATES IN INDIA ===================== */}
        <section className="py-8 sm:py-10 bg-[#f8faf9] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Common GST Rates in India
              </h2>
              <p className="mt-0.5 text-slate-500 text-xs">
                Different products and services have different GST tax slabs.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs text-center">
                <span className="text-2xl font-black text-teal-600 block">5%</span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Essential goods</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">(food items, tea, edible oils)</p>
              </div>

              <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs text-center">
                <span className="text-2xl font-black text-blue-600 block">12%</span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Consumer goods</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">(packaged food, apparel &lt; ₹1k)</p>
              </div>

              <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs text-center">
                <span className="text-2xl font-black text-amber-500 block">18%</span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Standard rate</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">(most items, electronics, IT)</p>
              </div>

              <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs text-center">
                <span className="text-2xl font-black text-rose-600 block">28%</span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Luxury &amp; sin goods</h3>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">(automobiles, luxury items)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== EXAMPLE CALCULATION ===================== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Example breakdown */}
              <div className="lg:col-span-7 bg-slate-50 p-7 rounded-3xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Example Calculation</h3>
                <p className="text-xs text-slate-500 mb-6">See how it works with a real example:</p>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">Product Price (Without GST)</span>
                    <span className="font-bold text-slate-900">₹5,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">GST Rate</span>
                    <span className="font-bold text-slate-900">18%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-600">GST Amount (5,000 × 18 / 100)</span>
                    <span className="font-bold text-teal-700">₹900</span>
                  </div>
                  <div className="flex justify-between pt-3 text-base font-black text-slate-900">
                    <span>Total Price (with GST)</span>
                    <span className="text-teal-700">₹5,900</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Unique Interactive Animated GST Tax Invoice Slip */}
              <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
                {/* Ambient Soft Glow Pulsing Behind Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-teal-400/25 via-emerald-300/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

                {/* Floating Micro-Badge Top Right */}
                <div className="absolute -top-3.5 right-2 sm:right-6 z-30 bg-white/95 backdrop-blur-md border border-teal-200/90 py-1.5 px-3 rounded-2xl shadow-lg flex items-center gap-1.5 pointer-events-none select-none animate-float-slow">
                  <span className="text-xs">✨</span>
                  <span className="text-[11px] font-extrabold text-teal-800">Auto Tax Split</span>
                </div>

                {/* Floating Micro-Badge Bottom Left */}
                <div className="absolute -bottom-3.5 left-2 sm:left-6 z-30 bg-white/95 backdrop-blur-md border border-emerald-200/90 py-1 px-3 rounded-2xl shadow-lg flex items-center gap-1.5 pointer-events-none select-none animate-float-reverse">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-extrabold text-emerald-800">GST Council 2026 Ready ✓</span>
                </div>

                {/* Main Interactive Floating Receipt Card */}
                <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative w-full max-w-sm mx-auto z-10 group overflow-hidden">
                  
                  {/* Subtle Laser Scan Beam running down */}
                  <div className="absolute inset-x-0 h-8 pointer-events-none z-20 animate-laser bg-gradient-to-b from-teal-400/10 via-emerald-400/20 to-transparent" />

                  {/* Receipt Top Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-dashed border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white flex items-center justify-center font-black text-xs shadow-xs group-hover:scale-105 transition-transform">
                        DH
                      </div>
                      <div>
                        <span className="text-xs font-black text-slate-900 block leading-tight">Live Tax Invoice Preview</span>
                        <span className="text-[10px] text-slate-400 font-mono">INV-2026-0042</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                      <span>Compliant</span>
                    </span>
                  </div>

                  {/* Interactive Rate Switcher Bar */}
                  <div className="my-3 pt-1">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1.5">
                      <span>Click Rate to Recalculate:</span>
                      <span className="text-teal-700 font-mono">{exampleRate}% Active</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100/80 rounded-xl border border-slate-200/60">
                      {[5, 12, 18, 28].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setExampleRate(r)}
                          className={`py-1 text-center rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                            exampleRate === r
                              ? "bg-teal-600 text-white shadow-xs scale-102"
                              : "text-slate-600 hover:text-slate-900 hover:bg-white active:scale-95"
                          }`}
                        >
                          {r}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Line Items & Tax Split Breakdown (Animated dynamically) */}
                  <div className="py-3 space-y-2 text-xs border-y border-dashed border-slate-200/80">
                    <div className="flex justify-between text-slate-700">
                      <span>Item Base Amount</span>
                      <span className="font-bold text-slate-900">₹5,000.00</span>
                    </div>
                    <div className="flex justify-between text-slate-500 text-[11px] pl-2 border-l-2 border-teal-400 transition-colors">
                      <span>CGST ({(exampleRate / 2).toFixed(1)}%)</span>
                      <span className="font-semibold text-teal-700 font-mono">
                        +₹{((5000 * exampleRate) / 200).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-500 text-[11px] pl-2 border-l-2 border-teal-400 transition-colors">
                      <span>SGST ({(exampleRate / 2).toFixed(1)}%)</span>
                      <span className="font-semibold text-teal-700 font-mono">
                        +₹{((5000 * exampleRate) / 200).toFixed(2)}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex justify-between font-bold text-slate-800">
                      <span>Total Tax Amount ({exampleRate}%)</span>
                      <span className="text-teal-700 font-extrabold font-mono">
                        ₹{((5000 * exampleRate) / 100).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Final Total Highlight Banner with Shimmer */}
                  <div className="relative overflow-hidden my-3 p-3.5 rounded-2xl bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/90 flex items-center justify-between shadow-2xs">
                    {/* Shimmer Light Beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

                    <div className="relative z-10">
                      <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider block">Final Bill Total</span>
                      <span className="text-[10px] text-slate-500">Auto calculated</span>
                    </div>
                    <span className="relative z-10 text-xl font-black text-teal-800 font-mono transition-all">
                      ₹{(5000 + (5000 * exampleRate) / 100).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>

                  {/* WhatsApp Delivery Simulator Footer */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>WhatsApp Bill Delivery</span>
                    </span>
                    <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                      <span className="text-blue-500 font-black">✓✓</span> 1-Sec Sync
                    </span>
                  </div>
                </div>

                {/* Floating Micro-Badge Bottom Left */}
                <div className="absolute -bottom-3.5 left-2 sm:left-6 z-30 bg-white/95 backdrop-blur-md border border-emerald-200/90 py-1.5 px-3 rounded-2xl shadow-lg flex items-center gap-1.5 pointer-events-none select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-extrabold text-emerald-800">0% Math Errors ✓</span>
                </div>

                <span className="text-xs font-black text-teal-800 italic font-serif mt-5 text-center">
                  Har Bill Ka Sahi Hisab, Sahi Munafa! 📈
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== EXPLORE MORE SOLUTIONS ===================== */}
        <section className="py-8 sm:py-10 bg-[#f8faf9] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Explore DukanHisab Billing Solutions</h3>
                <p className="text-[11px] sm:text-xs text-slate-500">Automate your entire shop accounting and invoicing.</p>
              </div>
              <Link href="/features" className="text-xs font-bold text-teal-700 hover:underline">
                View All Features →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { title: "GST Billing Software", desc: "Create GST-compliant invoices with automatic tax splits.", href: "/gst-billing", icon: "🧾" },
                { title: "Mobile & Counter POS", desc: "Rapid 3-second billing with barcode & WhatsApp slips.", href: "/billing-software", icon: "📱" },
                { title: "Inventory Management", desc: "Real-time stock tracking with low-stock alerts.", href: "/inventory-management", icon: "📦" },
                { title: "Khata & Udhar Ledger", desc: "Track customer credit with automated payment reminders.", href: "/khata-accounting", icon: "📒" },
              ].map((tool, idx) => (
                <Link
                  key={idx}
                  href={tool.href}
                  className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs hover:border-teal-300 hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xl mb-1.5 block">{tool.icon}</span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700">{tool.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{tool.desc}</p>
                  </div>
                  <span className="text-[11px] font-bold text-teal-700 mt-2.5 flex items-center gap-1">
                    Explore Feature <ArrowRightIcon className="w-2.5 h-2.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQS ===================== */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-slate-500 text-xs sm:text-sm">
                Get answers to common questions about GST calculation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-teal-300 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-slate-900 text-sm gap-2"
                  >
                    <span>{faq.q}</span>
                    <span className="text-teal-700 text-base font-black shrink-0">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-200 leading-relaxed animate-in fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== GREEN CTA BANNER ===================== */}
        <CtaBanner
          title="Manage Your Complete Business with DukanHisab"
          subtitle="Simple. Smart. Reliable."
          description="Calculate GST, create invoices, manage inventory, track expenses and much more — all in one app."
          slogan="Apni Dukaan Ka Hisab, Ab Digital!"
          secondaryButtonText="Explore All Features"
          secondaryButtonHref="/features"
          imageSrc="/images/app-splash-screen.png"
        />
      </main>

      <Footer />
    </div>
  );
}
