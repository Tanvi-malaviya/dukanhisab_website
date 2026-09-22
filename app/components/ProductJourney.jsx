"use client";

import React, { useState } from "react";
import { 
  TruckIcon, 
  PackageIcon, 
  BarcodeIcon, 
  ReceiptIcon, 
  UsersIcon, 
  RupeeIcon, 
  CheckIcon, 
  ArrowRightIcon 
} from "./Icons";

export default function ProductJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      stage: "01. Supplier Delivery",
      title: "Supplier Delivery from ABC Traders",
      icon: TruckIcon,
      detail: "Tempo arrives with 20 Bags of Fortune Kolam Rice 25kg @ ₹1,100/bag.",
      systemEcho: "Supplier purchase PB-104 recorded. ₹22,000 added to ABC Traders ledger.",
    },
    {
      stage: "02. Inward Stock",
      title: "Warehouse Inventory Auto-Increases",
      icon: PackageIcon,
      detail: "Stock ledger automatically updates without manual counting mistakes.",
      systemEcho: "Kolam Rice 25kg batch tagged: +20 Bags in Godown.",
    },
    {
      stage: "03. Barcode Tagging",
      title: "Barcode Ready at Counter (#890123)",
      icon: BarcodeIcon,
      detail: "Product is indexed with MRP ₹1,300, base price ₹1,250, and HSN 100630.",
      systemEcho: "Scannable in 0.3s by mobile camera or wireless laser scanner.",
    },
    {
      stage: "04. Counter Sale",
      title: "Customer Requests 2 Bags",
      icon: ReceiptIcon,
      detail: "Customer walks up to counter. Clerk scans barcode twice.",
      systemEcho: "2 units attached to live counter cart. Stock reserved.",
    },
    {
      stage: "05. Customer Linked",
      title: "Rahul Patel Profile Selected",
      icon: UsersIcon,
      detail: "System detects Rahul's saved custom price of ₹1,200/bag instead of regular ₹1,250.",
      systemEcho: "Savings applied automatically. Zero manual calculator work.",
    },
    {
      stage: "06. Instant Payment",
      title: "₹2,400 Cash Received",
      icon: RupeeIcon,
      detail: "Customer hands over physical notes. Drawer balance updated.",
      systemEcho: "Cash drawer +₹2,400. Transaction marked Fully Paid.",
    },
    {
      stage: "07. WhatsApp Invoice & Stock Deduction",
      title: "Digital Receipt Shared & Stock Adjusted",
      icon: CheckIcon,
      detail: "WhatsApp bill DH-4029 delivered to Rahul's mobile. Stock drops to 18 bags.",
      systemEcho: "The cycle is complete. Not a single rupee or grain unaccounted for.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <PackageIcon className="w-3.5 h-3.5 text-emerald-700" />
            End-to-End Traceability
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Follow One Product Through Your Entire Business.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Take a single bag of <strong className="text-slate-900">Kolam Rice 25kg</strong> and watch how it touches every part of your shop without ever getting lost.
          </p>
        </div>

        {/* Stepper Timeline Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-8 no-scrollbar gap-2 max-w-5xl mx-auto">
          {journeySteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.stage}
                onClick={() => setActiveStep(idx)}
                className={`shrink-0 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-md scale-102"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {step.stage}
              </button>
            );
          })}
        </div>

        {/* Stage Presentation Showcase */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-xs">
                {React.createElement(journeySteps[activeStep].icon, { className: "w-7 h-7" })}
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  Step {activeStep + 1} of 7 • Rice 25kg Journey
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {journeySteps[activeStep].title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : journeySteps.length - 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold hover:bg-slate-100"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < journeySteps.length - 1 ? prev + 1 : 0))}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
              >
                Next →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                Physical Shop Action
              </span>
              <p className="mt-2 text-base font-semibold text-slate-800">
                {journeySteps[activeStep].detail}
              </p>
            </div>

            <div className="bg-emerald-950 text-white p-5 rounded-2xl border border-emerald-900 shadow-inner">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                DukanHisab Connected Record
              </span>
              <p className="mt-2 text-sm font-mono text-emerald-100">
                "{journeySteps[activeStep].systemEcho}"
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 text-center text-xs text-slate-500">
            From the moment the truck arrives to the moment the customer walks out, your inventory and finances are 100% matched.
          </div>
        </div>

      </div>
    </section>
  );
}
