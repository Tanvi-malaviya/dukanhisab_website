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

export default function DiscountCalculatorPage() {
  const [activeTab, setActiveTab] = useState("standard"); // "standard" or "buyxgety"
  
  // Standard Discount States
  const [originalPrice, setOriginalPrice] = useState("1200");
  const [discountType, setDiscountType] = useState("pct"); // "pct" or "flat"
  const [discountVal, setDiscountVal] = useState("20");
  const [extraDiscountPct, setExtraDiscountPct] = useState("0");
  const [quantity, setQuantity] = useState("1");

  // Buy X Get Y States
  const [buyQty, setBuyQty] = useState("2");
  const [getFreeQty, setGetFreeQty] = useState("1");
  const [unitPrice, setUnitPrice] = useState("500");

  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  // Standard Calculations
  const numMRP = parseFloat(originalPrice) || 0;
  const numDiscVal = parseFloat(discountVal) || 0;
  const numExtraPct = parseFloat(extraDiscountPct) || 0;
  const numQty = parseInt(quantity) || 1;

  let firstDiscountAmount = 0;
  if (discountType === "pct") {
    firstDiscountAmount = (numMRP * numDiscVal) / 100;
  } else {
    firstDiscountAmount = Math.min(numDiscVal, numMRP);
  }

  const priceAfterFirstDisc = Math.max(0, numMRP - firstDiscountAmount);
  const extraDiscountAmount = (priceAfterFirstDisc * numExtraPct) / 100;
  const finalSinglePrice = Math.max(0, priceAfterFirstDisc - extraDiscountAmount);
  const totalSingleSavings = numMRP - finalSinglePrice;
  const totalPayable = finalSinglePrice * numQty;
  const totalSavings = totalSingleSavings * numQty;
  const effectiveDiscountPct = numMRP > 0 ? (totalSingleSavings / numMRP) * 100 : 0;

  // Buy X Get Y Calculations
  const numBuy = parseInt(buyQty) || 1;
  const numFree = parseInt(getFreeQty) || 0;
  const numUnit = parseFloat(unitPrice) || 0;
  const totalItemsReceived = numBuy + numFree;
  const totalPaidBOGO = numBuy * numUnit;
  const normalTotalCost = totalItemsReceived * numUnit;
  const bogoSavings = normalTotalCost - totalPaidBOGO;
  const bogoEffectiveDiscountPct = normalTotalCost > 0 ? (bogoSavings / normalTotalCost) * 100 : 0;
  const pricePerItemEffective = totalItemsReceived > 0 ? totalPaidBOGO / totalItemsReceived : 0;

  const handleCopySummary = () => {
    let summary = "";
    if (activeTab === "standard") {
      summary = `DukanHisab Discount Summary:
Original MRP: ₹${numMRP.toFixed(2)}
Discount: ${discountType === "pct" ? `${numDiscVal}%` : `₹${numDiscVal}`}
${numExtraPct > 0 ? `Extra Discount: ${numExtraPct}%\n` : ""}Final Price: ₹${finalSinglePrice.toFixed(2)} (Qty ${numQty}: Total ₹${totalPayable.toFixed(2)})
Total You Save: ₹${totalSavings.toFixed(2)} (${effectiveDiscountPct.toFixed(1)}% OFF)
Calculated free on https://dukanhisab.in/tools/discount-calculator`;
    } else {
      summary = `DukanHisab Buy ${numBuy} Get ${numFree} Free Summary:
Total Items Received: ${totalItemsReceived}
Total Amount Payable: ₹${totalPaidBOGO.toFixed(2)}
Effective Cost Per Item: ₹${pricePerItemEffective.toFixed(2)} (Original ₹${numUnit.toFixed(2)})
Effective Discount: ${bogoEffectiveDiscountPct.toFixed(1)}% OFF (You Save ₹${bogoSavings.toFixed(2)})
Calculated free on https://dukanhisab.in/tools/discount-calculator`;
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const presetDiscounts = [10, 15, 20, 25, 30, 40, 50, 70];

  const faqs = [
    {
      q: "How is a percentage discount calculated?",
      a: "To calculate a percentage discount: Multiply the original MRP by the discount percentage, then divide by 100. Subtract this discount amount from the original price to get the final sale price. For example: 20% off on ₹1,200 is (1200 × 20) / 100 = ₹240. The final price is ₹1,200 - ₹240 = ₹960.",
    },
    {
      q: "How does stacked or double discount work (e.g. 20% + 5% extra)?",
      a: "Stacked discounts do not simply add up to 25%. First, the 20% discount is applied to the original price (₹1,000 becomes ₹800). Then, the extra 5% is calculated on the discounted ₹800 (5% of 800 = ₹40). So the final price is ₹760, which equals an effective 24% total discount, not 25%.",
    },
    {
      q: "What is the actual discount in a 'Buy 2 Get 1 Free' offer?",
      a: "In a 'Buy 2 Get 1 Free' deal, you receive 3 items for the price of 2. Your effective discount is (1 free item ÷ 3 total items) × 100 = 33.33% off. In a 'Buy 1 Get 1 Free' deal, your discount is (1 ÷ 2) × 100 = 50% off.",
    },
    {
      q: "Can I apply custom discounts during billing on DukanHisab?",
      a: "Yes! On DukanHisab's POS billing app and web panel, you can apply line-item percentage discounts, bill-level flat discounts, or reward loyal customers with saved custom pricing in 1 touch.",
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
              <span className="text-[#036272] font-bold">Discount Calculator</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Heading, Explanation, Quick Badges */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <span>🏷️ Free Retail Pricing Tool</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Discount &amp; Sale <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800">
                    Price Calculator
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Calculate exact sale prices, customer savings, and stacked coupon discounts. Supports flat ₹ off, % off, and Buy-X-Get-Y-Free retail deals.
                </p>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">You Pay</div>
                    <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                      ₹{activeTab === "standard" ? totalPayable.toFixed(0) : totalPaidBOGO.toFixed(0)}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">You Save</div>
                    <div className="text-base sm:text-lg font-black text-emerald-700 mt-0.5">
                      ₹{activeTab === "standard" ? totalSavings.toFixed(0) : bogoSavings.toFixed(0)}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Total Off</div>
                    <div className="text-base sm:text-lg font-black text-[#036272] mt-0.5">
                      {activeTab === "standard" ? `${effectiveDiscountPct.toFixed(1)}%` : `${bogoEffectiveDiscountPct.toFixed(1)}%`}
                    </div>
                  </div>
                </div>

                {/* Quick Tip Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs space-y-1.5">
                  <div className="font-extrabold text-slate-800 flex items-center gap-1.5">
                    <ZapIcon className="w-3.5 h-3.5 text-amber-600" />
                    <span>Shopkeeper Pro Tip:</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Offering "₹200 OFF" on low-ticket items sounds bigger than "15% OFF". For expensive items, showing percentage discounts often converts faster. Test both to see what works for your customers!
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Discount Calculator Box */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 p-6 sm:p-8 space-y-6">
                  
                  {/* Mode Switcher Tabs */}
                  <div className="flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200/80">
                    <button
                      type="button"
                      onClick={() => setActiveTab("standard")}
                      className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        activeTab === "standard"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Standard % or ₹ Off
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("buyxgety")}
                      className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                        activeTab === "buyxgety"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Buy X Get Y Free Deal
                    </button>
                  </div>

                  {activeTab === "standard" ? (
                    /* Standard Discount Form */
                    <div className="space-y-4">
                      {/* Original Price */}
                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                          Original Price / MRP (₹)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                          <input
                            type="number"
                            min="0"
                            value={originalPrice}
                            onChange={(e) => setOriginalPrice(e.target.value)}
                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                            placeholder="e.g. 1200"
                          />
                        </div>
                      </div>

                      {/* Discount Value + Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                            Discount Amount / %
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="number"
                              min="0"
                              value={discountVal}
                              onChange={(e) => setDiscountVal(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                              placeholder="e.g. 20"
                            />
                            {/* % or ₹ Toggle */}
                            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-300 shrink-0">
                              <button
                                type="button"
                                onClick={() => setDiscountType("pct")}
                                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                                  discountType === "pct" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"
                                }`}
                              >
                                %
                              </button>
                              <button
                                type="button"
                                onClick={() => setDiscountType("flat")}
                                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                                  discountType === "flat" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"
                                }`}
                              >
                                ₹
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Extra Stacked Coupon Discount */}
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                            Extra Coupon / Payment Discount (%)
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={extraDiscountPct}
                              onChange={(e) => setExtraDiscountPct(e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                              placeholder="Optional e.g. 5"
                            />
                            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</span>
                          </div>
                        </div>
                      </div>

                      {/* Preset Percent Buttons */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase mr-1">Presets:</span>
                        {presetDiscounts.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => {
                              setDiscountType("pct");
                              setDiscountVal(p.toString());
                            }}
                            className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                              discountType === "pct" && discountVal === p.toString()
                                ? "bg-[#036272] text-white shadow-xs"
                                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                            }`}
                          >
                            {p}%
                          </button>
                        ))}
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3 pt-1">
                        <span className="text-xs font-bold text-slate-600">Quantity:</span>
                        <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1 border border-slate-200">
                          <button
                            type="button"
                            onClick={() => setQuantity(Math.max(1, numQty - 1).toString())}
                            className="w-7 h-7 rounded-lg bg-white font-black text-slate-700 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-3 text-xs font-bold font-mono">{numQty}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity((numQty + 1).toString())}
                            className="w-7 h-7 rounded-lg bg-white font-black text-slate-700 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Buy X Get Y Free Form */
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                            Buy Quantity (Paid)
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={buyQty}
                            onChange={(e) => setBuyQty(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                            placeholder="e.g. 2"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                            Get Free Quantity
                          </label>
                          <input
                            type="number"
                            min="1"
                            value={getFreeQty}
                            onChange={(e) => setGetFreeQty(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                            placeholder="e.g. 1"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                          Price Per Single Item (₹)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                          <input
                            type="number"
                            min="0"
                            value={unitPrice}
                            onChange={(e) => setUnitPrice(e.target.value)}
                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 font-black text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-slate-50/50"
                            placeholder="e.g. 500"
                          />
                        </div>
                      </div>

                      {/* Quick BOGO Deals */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase mr-1">Popular Offers:</span>
                        {[
                          { b: "1", f: "1", label: "Buy 1 Get 1 (50% Off)" },
                          { b: "2", f: "1", label: "Buy 2 Get 1 (33% Off)" },
                          { b: "3", f: "2", label: "Buy 3 Get 2 (40% Off)" },
                        ].map((deal, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setBuyQty(deal.b);
                              setGetFreeQty(deal.f);
                            }}
                            className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                              buyQty === deal.b && getFreeQty === deal.f
                                ? "bg-[#036272] text-white shadow-xs"
                                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                            }`}
                          >
                            {deal.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Result Showcase Card */}
                  <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/90 p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-teal-200/70">
                      <div>
                        <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block">
                          Final Customer Price
                        </span>
                        <div className="text-2xl sm:text-4xl font-black text-[#036272] mt-0.5 font-mono">
                          ₹{activeTab === "standard"
                            ? totalPayable.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                            : totalPaidBOGO.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                          }
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block">
                          Total Discount
                        </span>
                        <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-0.5">
                          {activeTab === "standard" ? `${effectiveDiscountPct.toFixed(1)}% OFF` : `${bogoEffectiveDiscountPct.toFixed(1)}% OFF`}
                        </div>
                      </div>
                    </div>

                    {/* Breakdown Details */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="bg-white/90 p-3 rounded-xl border border-teal-200/60 shadow-2xs">
                        <span className="text-[10px] font-bold uppercase text-slate-500 block">Total Money Saved</span>
                        <span className="text-lg font-black text-emerald-700 font-mono">
                          ₹{activeTab === "standard"
                            ? totalSavings.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                            : bogoSavings.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                          }
                        </span>
                      </div>
                      <div className="bg-white/90 p-3 rounded-xl border border-teal-200/60 shadow-2xs">
                        <span className="text-[10px] font-bold uppercase text-slate-500 block">
                          {activeTab === "standard" ? "Price Per Unit" : "Effective Unit Rate"}
                        </span>
                        <span className="text-lg font-black text-slate-900 font-mono">
                          ₹{activeTab === "standard"
                            ? finalSinglePrice.toFixed(2)
                            : pricePerItemEffective.toFixed(2)
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-slate-500 font-medium">Ready for retail sales bills.</span>
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

        {/* ===================== FAQ SECTION ===================== */}
        <section className="py-10 sm:py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Discount Calculation FAQs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Common questions about retail sale pricing and promotion discounts.
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

        {/* ===================== OTHER TOOLS RIBBON ===================== */}
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
                href="/tools/profit-margin-calculator"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="text-2xl mb-2">📈</div>
                <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#036272]">Profit Margin Calculator</div>
                <div className="text-xs text-slate-500 mt-1">Calculate gross profit margin, markup %, and cost price.</div>
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
          title="Instant Automated Discounts on DukanHisab Billing"
          subtitle="Apply custom discounts, festival offers, and customer loyalty rates in 1 click."
          description="DukanHisab POS lets you apply item-level or bill-level discounts instantly while protecting minimum profit margins. Print clean receipts with savings clearly highlighted for your customers."
          slogan="Apni Dukaan Ka Hisab, Ab Digital!"
          secondaryButtonText="Explore POS Features"
          secondaryButtonHref="/features"
          checks={["Instant % or Flat Discount", "Customer-Specific Pricing", "Receipt Thermal Print Ready", "Free Android App"]}
          imageSrc="/images/app-splash-screen.png"
        />
      </main>

      <Footer />
    </div>
  );
}
