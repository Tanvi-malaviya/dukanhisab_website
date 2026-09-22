"use client";

import React, { useState } from "react";
import { 
  ShoppingBagIcon, 
  BarcodeIcon, 
  ReceiptIcon, 
  PackageIcon, 
  UsersIcon, 
  RupeeIcon, 
  LandmarkIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckIcon
} from "./Icons";

export default function ConnectedRecordsFlow() {
  const [activeNode, setActiveNode] = useState(2);

  const flowNodes = [
    {
      id: 0,
      title: "Customer Buys Product",
      short: "Counter Request",
      icon: ShoppingBagIcon,
      detail: "Customer places 2 Bags of Rice on your shop counter.",
      recordImpact: "Counter clerk initiates quick sale on POS screen.",
    },
    {
      id: 1,
      title: "Product Added to Sale",
      short: "Barcode / Search",
      icon: BarcodeIcon,
      detail: "Scanned in 0.3 seconds. Customer-specific price of ₹1,200 automatically verified.",
      recordImpact: "Line item attached to live order session.",
    },
    {
      id: 2,
      title: "Invoice Created",
      short: "Digital & Paper Bill",
      icon: ReceiptIcon,
      detail: "Bill #DH-4029 generated with GST calculation, HSN codes, and shop header.",
      recordImpact: "Ready to print or send directly to customer's WhatsApp.",
    },
    {
      id: 3,
      title: "Stock Decreases",
      short: "Inventory Balance",
      icon: PackageIcon,
      detail: "Stock level for Fortune Rice 25kg automatically moves from 20 Bags to 18 Bags.",
      recordImpact: "Warehouse balance updated in real-time across both mobile and web.",
    },
    {
      id: 4,
      title: "Customer History Updates",
      short: "Khata Ledger",
      icon: UsersIcon,
      detail: "Sale is tied to Rahul Patel's profile. Lifetime purchase value increases to ₹50,900.",
      recordImpact: "Customer loyalty & credit limit tracking updated.",
    },
    {
      id: 5,
      title: "Payment Recorded",
      short: "Cash or Credit",
      icon: RupeeIcon,
      detail: "Customer pays ₹2,400 in full cash. Bill tagged as 100% Settled.",
      recordImpact: "Pending credit amount remains ₹0 for this transaction.",
    },
    {
      id: 6,
      title: "Cash / Bank Updated",
      short: "Drawer Reconciliation",
      icon: LandmarkIcon,
      detail: "Physical counter cash drawer increases by ₹2,400. Digital audit trail logged.",
      recordImpact: "Daily closing balance matches physical currency in drawer.",
    },
    {
      id: 7,
      title: "Complete Transaction Stored",
      short: "Permanent Business Memory",
      icon: ShieldCheckIcon,
      detail: "Transaction is indexed permanently with date, time, clerk, items, and tax.",
      recordImpact: "Available 5 years from now in 1 search query.",
    },
  ];

  return (
    <section id="connected-flow" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
            Zero Redundant Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Sale. Multiple Records. <br />
            <span className="text-emerald-600">Automatically Connected.</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            In ordinary shops, one sale means updating 3 different books or software screens. In DukanHisab, one action handles everything.
          </p>
        </div>

        {/* Connected Node Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {flowNodes.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNode === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 relative ${
                  isSelected
                    ? "bg-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/20 -translate-y-1"
                    : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                {/* Step pill */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    0{node.id + 1}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{node.short}</span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{node.title}</h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {node.detail}
                </p>

                {isSelected && (
                  <div className="mt-3 pt-3 border-t border-emerald-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Auto-Linked in DukanHisab</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Node Detailed Explanation Banner */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-emerald-200 p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              {React.createElement(flowNodes[activeNode].icon, { className: "w-7 h-7" })}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Pipeline Node #{activeNode + 1}
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                {flowNodes[activeNode].title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {flowNodes[activeNode].recordImpact}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveNode((prev) => (prev > 0 ? prev - 1 : flowNodes.length - 1))}
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700"
              aria-label="Previous step"
            >
              ← Prev
            </button>
            <button
              onClick={() => setActiveNode((prev) => (prev < flowNodes.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs"
            >
              Next Step →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
