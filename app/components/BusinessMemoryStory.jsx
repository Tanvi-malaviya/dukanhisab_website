"use client";

import React, { useState } from "react";
import { ClockIcon, ShieldCheckIcon, CheckIcon, SparklesIcon, ReceiptIcon } from "./Icons";

export default function BusinessMemoryStory() {
  const [selectedDay, setSelectedDay] = useState("tuesday");

  const dayData = {
    monday: {
      day: "Monday",
      sales: "₹18,400",
      purchases: "12 Inward Bills",
      customers: "8 Regular Khatas Settled",
      highlightTransaction: {
        time: "11:15 AM",
        party: "Suresh Bhai (Kirana)",
        details: "10 Bags Sugar 10kg + 4 Cans Oil 5L",
        billId: "DH-3980",
        amount: "₹8,080 Paid via Cash",
      }
    },
    tuesday: {
      day: "Tuesday",
      sales: "₹21,250",
      purchases: "7 Inward Bills",
      customers: "14 Customer Transactions",
      highlightTransaction: {
        time: "3:40 PM",
        party: "Rahul Patel (Khata #4029)",
        details: "Rice 25kg (Fortune Kolam) × 1 Bag @ Special Rate",
        billId: "DH-4029",
        amount: "₹1,250 Paid via UPI",
      }
    },
    wednesday: {
      day: "Wednesday",
      sales: "₹16,850",
      purchases: "11 Inward Bills",
      customers: "19 Invoices Generated",
      highlightTransaction: {
        time: "6:20 PM",
        party: "Anand Hardware & Paints",
        details: "Bulk Delivery: Packaging Material + Cash Settlement",
        billId: "DH-4112",
        amount: "₹3,400 Paid via Cheque",
      }
    }
  };

  const current = dayData[selectedDay];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
            The Emotional Centerpiece
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Your Business Has a Memory.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-300 font-medium">
            Every transaction adds another piece to your shop's story.
          </p>
        </div>

        {/* Chronological Business History & Zoom-In */}
        <div className="max-w-5xl mx-auto">
          
          {/* Day Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {Object.keys(dayData).map((key) => {
              const d = dayData[key];
              const isSelected = selectedDay === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedDay(key)}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "bg-emerald-600 border-emerald-400 shadow-xl shadow-emerald-950/60 scale-[1.02]"
                      : "bg-slate-800/70 border-slate-700/80 hover:bg-slate-800 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-lg text-white">{d.day}</span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-emerald-700 text-emerald-100" : "bg-slate-700 text-slate-300"
                    }`}>
                      Archive
                    </span>
                  </div>
                  <p className="text-2xl font-black text-emerald-300">{d.sales}</p>
                  <div className="mt-2 text-xs text-slate-300/90 space-y-0.5">
                    <p>{d.purchases}</p>
                    <p>{d.customers}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Drill Down Card */}
          <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl backdrop-blur-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Transaction Deep Memory Drilldown
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Search Query Result: "{current.day} • {current.highlightTransaction.time}"
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
              <div>
                <span className="text-xs font-mono text-slate-400">INVOICE #{current.highlightTransaction.billId}</span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {current.highlightTransaction.party}
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  {current.highlightTransaction.details}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-700/80 px-3 py-1.5 rounded-xl text-emerald-300 font-bold text-sm">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  <span>{current.highlightTransaction.amount}</span>
                </div>
              </div>

              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700/80 text-xs text-slate-300 space-y-2">
                <p className="font-bold text-white text-sm">Why this matters to a shop owner:</p>
                <p className="leading-relaxed">
                  6 months from now, if Rahul Patel asks: <em className="text-emerald-300">"What rate did you charge me for rice on that Tuesday?"</em>, you don't guess.
                </p>
                <p className="leading-relaxed">
                  You pull up the exact timestamp in 2 seconds. Trust is preserved. Khata disputes vanish.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700/80 text-center">
              <p className="text-xl sm:text-2xl font-black text-white">
                DukanHisab keeps the story organized.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
