"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CtaBanner from "../../components/CtaBanner";
import { 
  CheckIcon, 
  ArrowRightIcon, 
  GooglePlayIcon, 
  CalculatorIcon, 
  TrendingUpIcon, 
  RupeeIcon,
  ChevronDownIcon,
  ZapIcon
} from "../../components/Icons";

export default function ProfitMarginCalculatorPage() {
  const [costPrice, setCostPrice] = useState("400");
  const [sellingPrice, setSellingPrice] = useState("500");
  const [calcMode, setCalcMode] = useState("sp"); // "sp" (enter CP + SP) or "target" (enter CP + desired Margin %)
  const [targetMargin, setTargetMargin] = useState("20");
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  const numCP = parseFloat(costPrice) || 0;
  const numSP = parseFloat(sellingPrice) || 0;
  const numTargetMargin = parseFloat(targetMargin) || 0;

  let calculatedSP = 0;
  let grossProfit = 0;
  let profitMargin = 0;
  let markupPct = 0;

  if (calcMode === "sp") {
    calculatedSP = numSP;
    grossProfit = calculatedSP - numCP;
    profitMargin = calculatedSP > 0 ? (grossProfit / calculatedSP) * 100 : 0;
    markupPct = numCP > 0 ? (grossProfit / numCP) * 100 : 0;
  } else {
    // Mode Target Margin: SP = CP / (1 - Margin%/100)
    const marginFrac = numTargetMargin / 100;
    if (marginFrac < 1) {
      calculatedSP = numCP / (1 - marginFrac);
      grossProfit = calculatedSP - numCP;
      profitMargin = numTargetMargin;
      markupPct = numCP > 0 ? (grossProfit / numCP) * 100 : 0;
    }
  }

  const isProfit = grossProfit >= 0;

  const handleCopySummary = () => {
    const summary = `DukanHisab Profit Margin Calculation:
Cost Price: ₹${numCP.toFixed(2)}
Selling Price: ₹${calculatedSP.toFixed(2)}
Gross Profit: ₹${grossProfit.toFixed(2)}
Profit Margin: ${profitMargin.toFixed(2)}%
Markup: ${markupPct.toFixed(2)}%
Calculated free on https://dukanhisab.in/tools/profit-margin-calculator`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const presetMargins = [10, 15, 20, 25, 30, 40, 50];

  const faqs = [
    {
      q: "What is the difference between Profit Margin and Markup?",
      a: "Markup is the percentage added on top of your Cost Price (CP) to reach your Selling Price (SP). Profit Margin is the percentage of your Selling Price (SP) that is actual profit. For example, if Cost is ₹100 and you sell at ₹125: your Profit is ₹25, your Markup is 25% (₹25/₹100), but your Profit Margin is 20% (₹25/₹125).",
    },
    {
      q: "What is a healthy profit margin for an Indian retail shop?",
      a: "Healthy margins vary by industry: Kirana & FMCG typically operates on 8% to 15% margins with high turnover; Garments & Footwear usually make 30% to 50%; Mobile & Tech accessories range from 20% to 45%; and Hardware stores often average 15% to 25%.",
    },
    {
      q: "How do I calculate Selling Price if I know my target margin?",
      a: "Use the formula: Selling Price = Cost Price ÷ (1 - (Target Margin % ÷ 100)). For example, if an item costs ₹400 and you want a 20% margin: ₹400 ÷ (1 - 0.20) = ₹400 ÷ 0.80 = ₹500 Selling Price.",
    },
    {
      q: "Does this calculator include GST?",
      a: "This calculator measures pre-tax gross profit. If your products have GST, ensure both Cost Price and Selling Price either include GST or exclude GST consistently to get an accurate true margin.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO / CALCULATOR SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-12 border-b border-slate-200/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 sm:mb-6">
              <Link href="/" className="hover:text-teal-700">Home</Link>
              <span>›</span>
              <Link href="/tools" className="hover:text-teal-700">Tools</Link>
              <span>›</span>
              <span className="text-[#036272] font-bold">Profit Margin Calculator</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Heading, Explanation, Feature Tags */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <TrendingUpIcon className="w-3.5 h-3.5 text-teal-700" />
                  <span>Free Retail Profit Calculator</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Profit Margin &amp; <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800">
                    Retail Markup Calculator
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Never underprice your products again. Instantly calculate your exact gross profit, profit margin percentage, and markup to protect your shop's bottom line.
                </p>

                {/* 3 Value Badges */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Margin %</div>
                    <div className="text-base sm:text-lg font-black text-[#036272] mt-0.5">
                      {profitMargin.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Markup %</div>
                    <div className="text-base sm:text-lg font-black text-emerald-700 mt-0.5">
                      {markupPct.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Profit ₹</div>
                    <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                      ₹{grossProfit.toFixed(0)}
                    </div>
                  </div>
                </div>

                {/* Formula Highlight Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs space-y-2">
                  <div className="font-extrabold text-slate-800 flex items-center gap-1.5">
                    <ZapIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span>Essential Retail Formulas:</span>
                  </div>
                  <div className="text-slate-600 font-mono text-[11px] space-y-1">
                    <div>• <strong>Profit Margin</strong> = (Profit ÷ Selling Price) × 100</div>
                    <div>• <strong>Markup</strong> = (Profit ÷ Cost Price) × 100</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Calculator Box */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 p-6 sm:p-8 space-y-6">
                  
                  {/* Calculation Mode Selector Tabs */}
                  <div className="flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200/80">
                    <button
                      type="button"
                      onClick={() => setCalcMode("sp")}
                      className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        calcMode === "sp"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Know Cost &amp; Sale Price
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcMode("target")}
                      className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        calcMode === "target"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Target a Desired Margin %
                    </button>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Cost Price */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Purchase / Cost Price (₹)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          type="number"
                          min="0"
                          value={costPrice}
                          onChange={(e) => setCostPrice(e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                          placeholder="e.g. 400"
                        />
                      </div>
                    </div>

                    {/* Mode SP: Selling Price Input */}
                    {calcMode === "sp" ? (
                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                          Selling Price (₹)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                          <input
                            type="number"
                            min="0"
                            value={sellingPrice}
                            onChange={(e) => setSellingPrice(e.target.value)}
                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                            placeholder="e.g. 500"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Mode Target: Target Margin Input */
                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                          Target Profit Margin (%)
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            max="99"
                            value={targetMargin}
                            onChange={(e) => setTargetMargin(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                            placeholder="e.g. 20"
                          />
                          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Preset Margin Buttons (Mode Target) */}
                  {calcMode === "target" && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase mr-1">Quick Presets:</span>
                      {presetMargins.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setTargetMargin(p.toString())}
                          className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                            targetMargin === p.toString()
                              ? "bg-[#036272] text-white shadow-xs"
                              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                          }`}
                        >
                          {p}%
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Profit Result Display Board */}
                  <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/90 p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-teal-200/70">
                      <div>
                        <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block">
                          Gross Profit Amount
                        </span>
                        <div className={`text-2xl sm:text-3xl font-black mt-0.5 ${isProfit ? "text-emerald-700" : "text-rose-600"}`}>
                          ₹{grossProfit.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block">
                          Recommended Selling Price
                        </span>
                        <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 font-mono">
                          ₹{calculatedSP.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>

                    {/* Dual Percentage Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="bg-white/90 p-3 rounded-xl border border-teal-200/60 shadow-2xs">
                        <span className="text-[10px] font-bold uppercase text-slate-500 block">Profit Margin</span>
                        <span className="text-xl font-black text-[#036272]">
                          {profitMargin.toFixed(2)}%
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">of Selling Price</span>
                      </div>
                      <div className="bg-white/90 p-3 rounded-xl border border-teal-200/60 shadow-2xs">
                        <span className="text-[10px] font-bold uppercase text-slate-500 block">Markup Percentage</span>
                        <span className="text-xl font-black text-emerald-700">
                          {markupPct.toFixed(2)}%
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">added to Cost</span>
                      </div>
                    </div>

                    {/* Margin Health Bar */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between text-[11px] font-bold">
                        <span className="text-slate-600">Margin Health:</span>
                        <span className={profitMargin >= 25 ? "text-emerald-700" : profitMargin >= 10 ? "text-teal-700" : "text-amber-700"}>
                          {profitMargin >= 25 ? "Healthy Margin ✓" : profitMargin >= 10 ? "Moderate Margin" : "Low Margin ⚠️"}
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-600 transition-all duration-300"
                          style={{ width: `${Math.min(Math.max(profitMargin, 0), 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Copy Summary Button */}
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-slate-500 font-medium">
                      Calculated instantly for retail invoices.
                    </span>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-800 transition-colors cursor-pointer"
                    >
                      <span>{copied ? "Copied ✓" : "Copy Summary"}</span>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== RETAIL MARGIN BENCHMARK TABLE ===================== */}
        <section className="py-14 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Margin vs. Markup Comparison Table
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                See how different profit margins translate into markup percentages for standard retail pricing:
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200">
                    <th className="py-3 px-4 sm:px-6">Desired Margin</th>
                    <th className="py-3 px-4">Equivalent Markup</th>
                    <th className="py-3 px-4">Cost Price (CP)</th>
                    <th className="py-3 px-4">Selling Price (SP)</th>
                    <th className="py-3 px-4">Profit ₹</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {[
                    { margin: 10, markup: 11.11, cp: 100, sp: 111.11, profit: 11.11 },
                    { margin: 15, markup: 17.65, cp: 100, sp: 117.65, profit: 17.65 },
                    { margin: 20, markup: 25.00, cp: 100, sp: 125.00, profit: 25.00 },
                    { margin: 25, markup: 33.33, cp: 100, sp: 133.33, profit: 33.33 },
                    { margin: 30, markup: 42.86, cp: 100, sp: 142.86, profit: 42.86 },
                    { margin: 40, markup: 66.67, cp: 100, sp: 166.67, profit: 66.67 },
                    { margin: 50, markup: 100.0, cp: 100, sp: 200.00, profit: 100.0 },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-[#036272]">{row.margin}% Margin</td>
                      <td className="py-3 px-4 font-bold text-emerald-700">{row.markup}% Markup</td>
                      <td className="py-3 px-4 font-mono">₹{row.cp.toFixed(2)}</td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">₹{row.sp.toFixed(2)}</td>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-700">+₹{row.profit.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section className="py-10 sm:py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Understanding pricing, margin management, and shopkeeper profitability.
              </p>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-teal-500/60 shadow-md shadow-teal-900/5 ring-2 ring-teal-500/10"
                        : "bg-white border-slate-200/90 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left p-4 sm:p-5 gap-4 cursor-pointer select-none"
                    >
                      <span className={`text-sm sm:text-base font-extrabold ${isOpen ? "text-[#036272]" : "text-slate-900"}`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "bg-[#036272] text-white rotate-180" : "bg-slate-100 text-slate-500"
                      }`}>
                        <ChevronDownIcon className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== EXPLORE OTHER TOOLS RIBBON ===================== */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-6">
              More Free Business Tools for Shopkeepers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/tools/gst-calculator"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="text-2xl mb-2">📊</div>
                <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#036272]">GST Calculator</div>
                <div className="text-xs text-slate-500 mt-1">Add or remove GST with 5%, 12%, 18%, 28% breakdown.</div>
              </Link>
              <Link
                href="/tools/discount-calculator"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="text-2xl mb-2">🏷️</div>
                <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#036272]">Discount Calculator</div>
                <div className="text-xs text-slate-500 mt-1">Calculate final price, savings, and stacked promo coupons.</div>
              </Link>
              <Link
                href="/tools/barcode-generator"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="text-2xl mb-2">📦</div>
                <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#036272]">Barcode Generator</div>
                <div className="text-xs text-slate-500 mt-1">Create free Code128 / EAN barcodes &amp; print product labels.</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          title="Track Live Profit on Every Bill with DukanHisab"
          subtitle="Real-time margin calculation directly at your billing counter."
          description="DukanHisab automatically calculates purchase cost and sales margin for each item as you bill. Stop guessing profits and run a smarter shop."
          slogan="Apni Dukaan Ka Hisab, Ab Digital!"
          secondaryButtonText="Explore POS Features"
          secondaryButtonHref="/features"
          checks={["Live Margin Per Bill", "Automatic Low Stock Alert", "Free Mobile App", "No Credit Card Needed"]}
          imageSrc="/images/app-splash-screen.png"
        />
      </main>

      <Footer />
    </div>
  );
}
