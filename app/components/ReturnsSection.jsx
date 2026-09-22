"use client";

import React, { useState } from "react";
import { RotateCcwIcon, CheckIcon, ReceiptIcon, TruckIcon, PackageIcon, RupeeIcon } from "./Icons";

export default function ReturnsSection() {
  const [returnType, setReturnType] = useState("sale"); // "sale" or "purchase"

  const saleReturnSteps = [
    { title: "Sale Made", desc: "Customer bought Fortune Oil 5L yesterday." },
    { title: "Item Returned", desc: "Customer brings back unopened sealed can with bill." },
    { title: "Quantity & Reason", desc: "1 Can inspected. Return reason logged: Exchanged for Rice." },
    { title: "Refund / Credit", desc: "₹820 refunded to customer or credited to khata balance." },
    { title: "Stock Restored", desc: "Inventory count automatically increments: 23 → 24 Cans." },
    { title: "Record Updated", desc: "Return note #SR-102 created and linked to original bill." },
  ];

  const purchaseReturnSteps = [
    { title: "Purchase Delivered", desc: "Supplier ABC Traders delivered 20 Bags of Rice." },
    { title: "Defect Identified", desc: "2 bags found torn or with moisture during godown check." },
    { title: "Return Logged", desc: "Purchase Return #PR-22 created in DukanHisab." },
    { title: "Stock Decreased", desc: "Inventory count drops 20 → 18 Bags automatically." },
    { title: "Debit Note Issued", desc: "₹2,200 deducted from ABC Traders pending balance." },
    { title: "Account Reconciled", desc: "Supplier statement updated with zero dispute." },
  ];

  const currentSteps = returnType === "sale" ? saleReturnSteps : purchaseReturnSteps;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <RotateCcwIcon className="w-3.5 h-3.5 text-orange-700" />
            Seamless Return Handling
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Because Every Sale Doesn't End With a Sale.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Returns happen in real shops every single day. DukanHisab handles both customer returns and supplier returns with automatic stock and money adjustments.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setReturnType("sale")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                returnType === "sale"
                  ? "bg-white text-slate-900 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ReceiptIcon className="w-4 h-4 text-emerald-600" />
              <span>Sale Return (Customer Return)</span>
            </button>
            <button
              onClick={() => setReturnType("purchase")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                returnType === "purchase"
                  ? "bg-white text-slate-900 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <TruckIcon className="w-4 h-4 text-indigo-600" />
              <span>Purchase Return (Supplier Return)</span>
            </button>
          </div>
        </div>

        {/* Step Flow Grid */}
        <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Automatic Workflow Chain
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                {returnType === "sale" ? "Customer Sale Return Flow" : "Supplier Purchase Return Flow"}
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
              Zero Stock Desync
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentSteps.map((st, i) => (
              <div
                key={st.title}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    STAGE 0{i + 1}
                  </span>
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{st.title}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <span className="font-semibold text-slate-800">
              ✓ Stock and Khata automatically sync in both directions.
            </span>
            <span className="text-emerald-700 font-bold">
              Original invoices remain audit-compliant.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
