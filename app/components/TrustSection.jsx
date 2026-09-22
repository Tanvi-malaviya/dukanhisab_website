"use client";

import React from "react";
import { ShieldCheckIcon, CheckIcon, StoreIcon, SmartphoneIcon, MonitorIcon } from "./Icons";

export default function TrustSection() {
  const trustPoints = [
    {
      title: "Simple Enough for Everyday Shop Work",
      desc: "Anyone who can use WhatsApp can bill on DukanHisab. No lengthy accounting training required.",
    },
    {
      title: "Powerful Enough for Complete Business Records",
      desc: "From individual counter sales to vendor balance sheets and annual tax reports, nothing is left out.",
    },
    {
      title: "Designed Around Real Shop Workflows",
      desc: "Built by understanding counter rushes, credit khatas, tempo expenses, and messy returned items.",
    },
    {
      title: "True Mobile + Web Synchronization",
      desc: "Carry your shop in your pocket on your phone, and review the deep records on your home or office laptop.",
    },
    {
      title: "Clear, Jargon-Free Interface",
      desc: "Clean language in plain English with everyday retail terms. No confusing debit/credit double-entry headaches.",
    },
    {
      title: "Centralized Business Memory",
      desc: "Every transaction, customer quote, and supplier payment lives in one secure, connected ecosystem.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-700" />
            Ground Realities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Made for Real Shop Owners.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            No complex accounting degrees required. DukanHisab is built around the exact reality of running a shop in India.
          </p>
        </div>

        {/* 6 Clean Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trustPoints.map((tp) => (
            <div
              key={tp.title}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all shadow-xs"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 font-bold shadow-2xs">
                <CheckIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{tp.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{tp.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
