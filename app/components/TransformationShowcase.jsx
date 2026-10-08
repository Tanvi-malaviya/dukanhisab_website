"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckIcon } from "./Icons";

export default function TransformationShowcase() {
  const [activeTab, setActiveTab] = useState("digital"); // "traditional" | "digital"

  const traditionalPainPoints = [
    {
      title: "Lost or Damaged Red Bahi-Khata Diaries",
      desc: "Water spills, torn pages, or misplaced registers lead to permanently lost customer debt records.",
      icon: "📕",
    },
    {
      title: "Awkward Payment Follow-Ups",
      desc: "Calling customers repeatedly feels uncomfortable and damages neighborhood relationships.",
      icon: "📞",
    },
    {
      title: "Manual Calculator & Math Errors",
      desc: "Adding 50 grocery items by hand on rough paper slips results in daily cash mismatches and lost profit.",
      icon: "🧮",
    },
    {
      title: "No Stock Visibility",
      desc: "Unaware of running out of stock until an angry customer walks away to a competitor shop.",
      icon: "📦",
    },
  ];

  const digitalAdvantanges = [
    {
      title: "100% Cloud + Offline Safe Memory",
      desc: "Every paisa recorded. Even if your phone is lost or damaged, your complete shop memory restores in 10 seconds.",
      icon: "☁️",
    },
    {
      title: "Automated WhatsApp Reminders with UPI",
      desc: "Polite, professional payment reminders with direct UPI link sent on WhatsApp. Recover money 3x faster.",
      icon: "📲",
    },
    {
      title: "Instant 5-Second Barcode Invoices",
      desc: "Scan barcodes using your phone camera or barcode gun. Automatic GST, discounts, and print in seconds.",
      icon: "⚡",
    },
    {
      title: "Smart Low-Stock & Expiry Warnings",
      desc: "Real-time stock alerts ensure you never lose a customer due to out-of-stock items.",
      icon: "🔔",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>THE REAL TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Say Goodbye to Lost Diaries. <br />
            <span className="text-[#036272]">Welcome to Connected Shop Memory.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            See how Indian retailers are upgrading from messy paper registers to DukanHisab.
          </p>

          {/* Toggle pill buttons */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300">
            <button
              type="button"
              onClick={() => setActiveTab("digital")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === "digital"
                  ? "bg-[#036272] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>✨ The DukanHisab Way</span>
              <span className="bg-teal-700/60 text-[10px] px-1.5 py-0.5 rounded-full text-teal-100">
                Recommended
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("traditional")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === "traditional"
                  ? "bg-rose-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>❌ Old Paper Diary Way</span>
            </button>
          </div>
        </div>

        {/* Content Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Showcase Graphic */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 border border-slate-200 shadow-xl transition-all duration-300">
              
              {activeTab === "digital" ? (
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800">
                        Live DukanHisab Connected Cloud
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                      Sync: Active
                    </span>
                  </div>

                  <div className="py-6 flex flex-col items-center">
                    <div className="relative w-48 sm:w-56 drop-shadow-2xl hover:scale-105 transition-transform">
                      <Image
                        src="/images/phone-khata-hero.png"
                        alt="DukanHisab Customer Khata and CRM screen"
                        width={220}
                        height={360}
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                    <div className="mt-4 p-3 bg-teal-50 border border-teal-200 rounded-xl w-full text-center">
                      <div className="text-xs font-bold text-teal-900">
                        ₹48,250 Total Khata Managed
                      </div>
                      <div className="text-[11px] text-teal-700 mt-0.5">
                        WhatsApp payment reminders sent automatically with 1 click
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500" />
                      <span className="text-xs font-bold text-slate-800">
                        Old Bahi-Khata Notebook
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
                      High Risk of Loss
                    </span>
                  </div>

                  <div className="py-6 flex flex-col items-center">
                    <div className="relative w-48 sm:w-56 grayscale contrast-125 opacity-90">
                      <Image
                        src="/images/notebook-khata.png"
                        alt="Traditional Red Bahi Khata register"
                        width={220}
                        height={260}
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                    <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl w-full text-center">
                      <div className="text-xs font-bold text-rose-900">
                        Unclear Handwriting & Missing Debts
                      </div>
                      <div className="text-[11px] text-rose-700 mt-0.5">
                        Over 23% of customer credit remains uncollected due to lost notes
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Feature List Column */}
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            {(activeTab === "digital" ? digitalAdvantanges : traditionalPainPoints).map((item, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  activeTab === "digital"
                    ? "bg-white hover:bg-teal-50/50 border-slate-200 hover:border-teal-300 shadow-xs"
                    : "bg-white hover:bg-rose-50/40 border-slate-200 hover:border-rose-300 shadow-xs"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                      activeTab === "digital"
                        ? "bg-teal-100 text-teal-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-base font-bold ${
                        activeTab === "digital" ? "text-slate-900" : "text-rose-950"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
