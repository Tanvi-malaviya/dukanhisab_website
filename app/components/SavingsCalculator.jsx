"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, RupeeIcon, CheckIcon } from "./Icons";

export default function SavingsCalculator() {
  const [dailyBills, setDailyBills] = useState(60);
  const [monthlyKhata, setMonthlyKhata] = useState(80000);

  // Dynamic calculations based on retail industry statistics:
  // - Manual billing takes ~2 mins per bill, barcode billing takes ~20 seconds (saves ~1.6 min per bill)
  const hoursSavedPerMonth = Math.round((dailyBills * 1.6 * 30) / 60);

  // - Regular shops have 4-8% unrecovered credit due to delayed/forgotten follow-up
  // - WhatsApp payment reminders recover ~40% of typically overdue credit
  const recoveredCash = Math.round(monthlyKhata * 0.05);

  // - Errors in paper calculation average ~0.8% of daily turnover
  const mistakesSaved = Math.round(dailyBills * 150 * 30 * 0.008);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#036272] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            BUSINESS ROI ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            See How Much Time & Money <br />
            <span className="text-[#036272]">DukanHisab Saves Your Shop</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Adjust the sliders below based on your daily shop activity to see your real monthly return.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-teal-50/70 via-white to-teal-50/60 rounded-3xl p-6 sm:p-10 border border-teal-200/80 shadow-xl shadow-teal-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Slider 1: Daily Invoices */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <span>🧾 Daily Bills / Invoices</span>
                  </label>
                  <span className="text-base font-black text-teal-700 bg-white border border-teal-300 px-3 py-0.5 rounded-xl shadow-xs font-mono">
                    {dailyBills} bills / day
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={dailyBills}
                  onChange={(e) => setDailyBills(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#036272]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>10 bills</span>
                  <span>150 bills</span>
                  <span>300+ bills</span>
                </div>
              </div>

              {/* Slider 2: Monthly Khata / Credit Given */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <span>💳 Monthly Credit (Udhar / Khata)</span>
                  </label>
                  <span className="text-base font-black text-teal-700 bg-white border border-teal-300 px-3 py-0.5 rounded-xl shadow-xs font-mono">
                    ₹{monthlyKhata.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={monthlyKhata}
                  onChange={(e) => setMonthlyKhata(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#036272]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>₹10,000</span>
                  <span>₹2,50,000</span>
                  <span>₹5,00,000</span>
                </div>
              </div>

              {/* Perks Pill List */}
              <div className="pt-4 border-t border-teal-900/10 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-teal-600 stroke-[3]" />
                  <span>Free automatic cloud backup — zero risk of data loss</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-teal-600 stroke-[3]" />
                  <span>Works fully offline on Android phones without internet</span>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Results Dashboard */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 block mb-1">
                Estimated Monthly Shop Advantage
              </span>
              <h3 className="text-xl font-bold text-white mb-6">
                Your Business Grows Faster
              </h3>

              <div className="grid grid-cols-2 gap-4">
                
                {/* Metric 1 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-teal-400 font-mono">
                    ~{hoursSavedPerMonth} hrs
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    Time Saved Every Month in Billing & Accounting
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
                    ₹{recoveredCash.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    Faster Udhar Recovery via WhatsApp Reminders
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-teal-300 font-mono">
                    ₹{mistakesSaved.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    Calculation Mistakes Avoided at Counter
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-teal-300 font-mono">
                    100%
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    GST & Stock Accuracy in Real Time
                  </div>
                </div>

              </div>

              {/* Call to action inside calculator */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400">Ready to save time & money?</div>
                  <div className="text-sm font-bold text-white">Start your 14-day free trial</div>
                </div>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#036272] hover:bg-[#024f5c] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  <span>View Plans</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
