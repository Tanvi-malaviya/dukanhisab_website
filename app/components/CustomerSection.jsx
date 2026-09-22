"use client";

import React, { useState } from "react";
import { UsersIcon, CheckIcon, ReceiptIcon, RupeeIcon, TagIcon, ArrowRightIcon } from "./Icons";

export default function CustomerSection() {
  const [selectedTier, setSelectedTier] = useState("rahul"); // "walkin" or "rahul"

  const products = [
    { name: "Kolam Rice 25kg Bag", regularPrice: 1300, customerPrice: 1250, unit: "Bag" },
    { name: "Fortune Sunflower Oil 5L", regularPrice: 850, customerPrice: 820, unit: "Can" },
    { name: "Madhur Pure Sugar 10kg", regularPrice: 480, customerPrice: 460, unit: "Bag" },
  ];

  const totalBill = products.reduce((acc, p) => {
    return acc + (selectedTier === "rahul" ? p.customerPrice : p.regularPrice);
  }, 0);

  const totalSavings = products.reduce((acc, p) => {
    return acc + (p.regularPrice - p.customerPrice);
  }, 0);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 10: Customer Profile & Khata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <UsersIcon className="w-3.5 h-3.5 text-emerald-700" />
              Customer Relationship Memory
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Know More Than Your Customer's Name.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              When a customer stands before you, you shouldn't have to flip through paper khatas or guess their credit balance. DukanHisab remembers their entire relationship in one tap.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span><strong>Instant Outstanding Balance:</strong> Clear visibility of pending khata before issuing new goods.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span><strong>Complete Transaction History:</strong> Every purchase, return, and payment receipt linked to their mobile number.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span><strong>1-Click WhatsApp Payment Reminder:</strong> Send respectful, professional balance statements directly to their phone.</span>
              </li>
            </ul>
          </div>

          {/* Customer Profile Card Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/80">
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                    RP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Rahul Patel</h3>
                    <p className="text-xs text-slate-500 font-medium">+91 98765 43210 • Regular Customer</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  Active Khata
                </span>
              </div>

              {/* Financial Snapshot */}
              <div className="grid grid-cols-3 gap-3 my-5">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                  <span className="text-[11px] text-slate-500 font-medium">Total Purchases</span>
                  <p className="text-base font-extrabold text-slate-900 mt-0.5">₹48,500</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                  <span className="text-[11px] text-slate-500 font-medium">Total Paid</span>
                  <p className="text-base font-extrabold text-emerald-600 mt-0.5">₹39,000</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                  <span className="text-[11px] text-amber-800 font-bold">Pending Khata</span>
                  <p className="text-base font-extrabold text-amber-700 mt-0.5">₹9,500</p>
                </div>
              </div>

              {/* Specific metadata */}
              <div className="space-y-2.5 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-600">
                <div className="flex justify-between">
                  <span className="font-medium">Last Purchase Date:</span>
                  <span className="font-bold text-slate-800">18 Sep 2026 (Bill #DH-3991)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saved Custom Pricing:</span>
                  <span className="font-bold text-emerald-700">12 Products Configured</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Credit Limit:</span>
                  <span className="font-bold text-slate-800">₹15,000 (Safe)</span>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between text-xs">
                <span className="text-slate-400">DukanHisab Customer Memory</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  View Full Statement →
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Section 11: Customer-Specific Pricing */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <TagIcon className="w-3.5 h-3.5 text-emerald-700" />
              Smart Pricing Engine
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Not Every Customer Pays the Same Price.
            </h3>
            <p className="mt-2 text-slate-600 text-sm sm:text-base font-medium">
              Save customer-specific prices once. When billing, DukanHisab remembers and applies their special rate automatically.
            </p>
          </div>

          {/* Interactive Pricing Toggle */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              Test Customer Selection at Counter:
            </span>
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setSelectedTier("walkin")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedTier === "walkin"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Walk-in Customer (Regular MRP)
              </button>
              <button
                onClick={() => setSelectedTier("rahul")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedTier === "rahul"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Rahul Patel (Saved Customer Price)
              </button>
            </div>
          </div>

          {/* Pricing Comparison Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 uppercase font-semibold text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Product</th>
                  <th className="py-3.5 px-4 text-center">Regular Price</th>
                  <th className="py-3.5 px-4 text-center">Rahul Patel's Saved Price</th>
                  <th className="py-3.5 px-4 text-right">Applied At Billing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {products.map((prod) => {
                  const applied = selectedTier === "rahul" ? prod.customerPrice : prod.regularPrice;
                  return (
                    <tr key={prod.name} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        {prod.name}
                        <span className="text-[11px] text-slate-400 font-normal block">Per {prod.unit}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-medium text-slate-500">
                        ₹{prod.regularPrice}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-emerald-600">
                        ₹{prod.customerPrice}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className={`inline-block font-extrabold px-2.5 py-1 rounded-lg ${
                          selectedTier === "rahul" 
                            ? "bg-emerald-100 text-emerald-900" 
                            : "bg-slate-100 text-slate-900"
                        }`}>
                          ₹{applied}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-slate-50 border-t border-slate-200 font-bold">
                <tr>
                  <td colSpan="3" className="py-3.5 px-4 text-slate-700">
                    Grand Total for Counter Bill:
                  </td>
                  <td className="py-3.5 px-4 text-right text-base text-emerald-700 font-extrabold">
                    ₹{totalBill}
                    {selectedTier === "rahul" && (
                      <span className="block text-[10px] text-emerald-600 font-semibold">
                        (₹{totalSavings} saved via custom pricing)
                      </span>
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="mt-4 text-xs text-slate-500 flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-emerald-600" />
            No manual discount calculations or remembering separate price lists on sticky notes.
          </p>

        </div>

      </div>
    </section>
  );
}
