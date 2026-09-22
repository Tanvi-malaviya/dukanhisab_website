"use client";

import React from "react";
import { TruckIcon, CheckIcon, LandmarkIcon, RupeeIcon, PackageIcon } from "./Icons";

export default function SupplierSection() {
  const purchaseBills = [
    { id: "PB-104", date: "19 Sep 2026", items: "Kolam Rice 25kg (20 Bags)", amount: 22000, status: "Pending" },
    { id: "PB-092", date: "12 Sep 2026", items: "Fortune Oil 5L (30 Cans)", amount: 24600, status: "Paid via Bank" },
    { id: "PB-081", date: "02 Sep 2026", items: "Madhur Sugar 10kg (40 Bags)", amount: 18400, status: "Paid Cash" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Supplier Card Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl">
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white font-black text-lg flex items-center justify-center shadow-md">
                    ABC
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">ABC Traders</h3>
                    <p className="text-xs text-slate-500 font-medium">Wholesale Distributor • Grain & Oil</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                  Key Vendor
                </span>
              </div>

              {/* Vendor Ledger Summary */}
              <div className="grid grid-cols-3 gap-3 my-5">
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium">Total Inward</span>
                  <p className="text-base font-extrabold text-slate-900 mt-0.5">₹1,24,500</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium">Amount Paid</span>
                  <p className="text-base font-extrabold text-emerald-600 mt-0.5">₹98,000</p>
                </div>
                <div className="bg-rose-50 p-3 rounded-xl border border-rose-200 text-center shadow-xs">
                  <span className="text-[11px] text-rose-800 font-bold">To Pay</span>
                  <p className="text-base font-extrabold text-rose-700 mt-0.5">₹26,500</p>
                </div>
              </div>

              {/* Recent Inward Bills */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Recent Purchase Bills
                </span>
                {purchaseBills.map((b) => (
                  <div key={b.id} className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{b.id}</span>
                        <span className="text-slate-400 font-medium">• {b.date}</span>
                      </div>
                      <p className="text-slate-600 mt-0.5">{b.items}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-slate-900">₹{b.amount.toLocaleString()}</span>
                      <span className={`block text-[10px] font-semibold ${
                        b.status.includes("Pending") ? "text-rose-600" : "text-emerald-600"
                      }`}>
                        {b.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Saved Purchase Rates: 18 items</span>
                <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                  Record Supplier Payment →
                </span>
              </div>

            </div>
          </div>

          {/* Supplier Explanation Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
              <TruckIcon className="w-3.5 h-3.5 text-indigo-700" />
              Vendor & Purchase Intelligence
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Keep Your Supplier Records Just as Clear.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Never pay twice for the same delivery. Never lose track of supplier credit terms or wholesale purchase rates.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span><strong>Accurate Payables Ledger:</strong> Know exactly what you owe to ABC Traders versus XYZ Distributors before writing a cheque.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span><strong>Saved Purchase Prices:</strong> DukanHisab remembers the exact rate your supplier quoted last time so you can spot unexpected price hikes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span><strong>Instant Inward Stock Updates:</strong> Entering a purchase bill automatically increases your live inventory without any double entry.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
