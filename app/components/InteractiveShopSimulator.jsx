"use client";

import React, { useState } from "react";
import { 
  PackageIcon, 
  BarcodeIcon, 
  ReceiptIcon, 
  RupeeIcon, 
  CheckIcon, 
  ArrowRightIcon, 
  RotateCcwIcon,
  SparklesIcon,
  StoreIcon
} from "./Icons";

export default function InteractiveShopSimulator() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      stepNumber: 1,
      title: "Receive Purchase",
      actionDesc: "You receive 20 Rice Bags from ABC Traders @ ₹1,100/bag.",
      metricHighlight: "+20 Rice Bags added to Inward Stock",
      systemRecord: "Purchase bill PB-104 saved. Supplier payable +₹22,000. Warehouse count = 20 Bags.",
      icon: PackageIcon,
    },
    {
      stepNumber: 2,
      title: "Scan Product",
      actionDesc: "A customer walks in. You point your barcode scanner at the Rice 25kg bag.",
      metricHighlight: "Instant Barcode Recognition: #890123",
      systemRecord: "Product found: Fortune Kolam Rice 25kg. Regular MRP ₹1,300 • Counter Price ₹1,200.",
      icon: BarcodeIcon,
    },
    {
      stepNumber: 3,
      title: "Create Sale",
      actionDesc: "Customer asks for 2 bags. You add 2 bags to the counter bill.",
      metricHighlight: "2 Bags × ₹1,200 = ₹2,400",
      systemRecord: "Invoice #DH-1002 generated. Tax & subtotal calculated in 0.1s.",
      icon: ReceiptIcon,
    },
    {
      stepNumber: 4,
      title: "Receive Payment",
      actionDesc: "Customer hands over ₹2,400 in cash.",
      metricHighlight: "₹2,400 Cash Received at Drawer",
      systemRecord: "Cash In Hand increases by ₹2,400. Bill marked 100% PAID.",
      icon: RupeeIcon,
    },
    {
      stepNumber: 5,
      title: "Inventory Updates",
      actionDesc: "The system automatically adjusts stock without any manual tally sheets.",
      metricHighlight: "Rice 25kg Stock: 20 → 18 Bags",
      systemRecord: "2 Bags deducted from batch. Low stock warning threshold updated.",
      icon: PackageIcon,
    },
    {
      stepNumber: 6,
      title: "Customer Record Updates",
      actionDesc: "Purchase is logged in customer Rahul Patel's permanent ledger.",
      metricHighlight: "Rahul Patel: +₹2,400 Purchases added to history",
      systemRecord: "Customer total lifetime orders updated. Last visited timestamp set to today.",
      icon: StoreIcon,
    },
    {
      stepNumber: 7,
      title: "Day Summary",
      actionDesc: "The evening closes with a spotless, fully balanced business tally.",
      metricHighlight: "Complete Shop Day Reconciled",
      systemRecord: "Today's Sales: ₹2,400 • Purchases: ₹22,000 • Items Sold: 2 • Cash: ₹2,400 • Stock: 18 Bags ✓",
      icon: CheckIcon,
    },
  ];

  const current = steps[currentStep - 1];

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <section id="interactive-demo" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
            Interactive Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Try a Day With DukanHisab.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-300">
            Click through a simulated shop workflow and experience how every step connects automatically.
          </p>
        </div>

        {/* Step Indicator Bubbles */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-7 gap-2">
            {steps.map((s) => {
              const isPast = s.stepNumber < currentStep;
              const isCurrent = s.stepNumber === currentStep;
              return (
                <button
                  key={s.stepNumber}
                  onClick={() => setCurrentStep(s.stepNumber)}
                  className={`flex flex-col items-center p-2 rounded-xl border transition-all text-center ${
                    isCurrent
                      ? "bg-emerald-600 border-emerald-400 shadow-lg shadow-emerald-900/60 scale-105"
                      : isPast
                      ? "bg-slate-800/90 border-emerald-600/60 text-emerald-400"
                      : "bg-slate-800/40 border-slate-700/60 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  <span className="text-xs font-bold">Step {s.stepNumber}</span>
                  <span className="text-[10px] hidden sm:block truncate w-full mt-0.5 opacity-90">
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Simulation Console */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-700/80">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Step {current.stepNumber} of 7
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {current.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-slate-200 transition-colors"
              >
                <RotateCcwIcon className="w-3.5 h-3.5" />
                Reset Simulator
              </button>
            </div>
          </div>

          {/* Action Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 items-stretch">
            {/* User Action */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-700/70 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  What You Do In the Shop
                </span>
                <p className="mt-3 text-lg font-bold text-slate-100 leading-snug">
                  {current.actionDesc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{current.metricHighlight}</span>
              </div>
            </div>

            {/* DukanHisab Automatic Link */}
            <div className="bg-gradient-to-br from-emerald-950/90 to-slate-900 rounded-2xl p-6 border border-emerald-700/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                    What DukanHisab Connects
                  </span>
                  <span className="text-[10px] bg-emerald-900/80 text-emerald-200 px-2 py-0.5 rounded font-mono">
                    Instant Memory
                  </span>
                </div>
                <p className="mt-3 text-sm sm:text-base font-mono text-emerald-200 leading-relaxed">
                  "{current.systemRecord}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-900/80 flex items-center justify-between text-xs text-slate-300">
                <span>Manual duplicate ledger entry:</span>
                <span className="font-bold text-rose-400 line-through">Not needed</span>
              </div>
            </div>
          </div>

          {/* If Step 7: Show Full Reconciled Summary */}
          {currentStep === 7 && (
            <div className="mb-8 p-6 bg-emerald-950/70 border border-emerald-500/80 rounded-2xl">
              <div className="text-center mb-5">
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  That's DukanHisab.
                </h4>
                <p className="text-sm text-emerald-200 mt-1">
                  At 9:30 PM, your day's tally is 100% accounted for without sitting with 4 different notebooks.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-800/60">
                  <span className="text-[11px] text-slate-400 font-medium">Today's Sales</span>
                  <p className="text-base font-extrabold text-white mt-1">₹2,400</p>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-800/60">
                  <span className="text-[11px] text-slate-400 font-medium">Purchases</span>
                  <p className="text-base font-extrabold text-white mt-1">₹22,000</p>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-800/60">
                  <span className="text-[11px] text-slate-400 font-medium">Items Sold</span>
                  <p className="text-base font-extrabold text-white mt-1">2 Bags</p>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-800/60">
                  <span className="text-[11px] text-slate-400 font-medium">Cash Received</span>
                  <p className="text-base font-extrabold text-emerald-400 mt-1">₹2,400</p>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-slate-900/80 p-3 rounded-xl border border-emerald-800/60">
                  <span className="text-[11px] text-slate-400 font-medium">Inventory</span>
                  <p className="text-base font-extrabold text-emerald-400 mt-1">Updated ✓</p>
                </div>
              </div>
            </div>
          )}

          {/* Stepper Control Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-700/80">
            <p className="text-xs text-slate-400">
              {currentStep < 7 
                ? `Click button to simulate Step ${currentStep + 1} (${steps[currentStep].title}) →` 
                : "Simulator cycle finished. Click Reset to run through again."}
            </p>

            {currentStep < 7 ? (
              <button
                onClick={handleNext}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-900/50 transition-all active:scale-95"
              >
                <span>Simulate Next Step ({steps[currentStep].title})</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-900/50 transition-all"
              >
                <RotateCcwIcon className="w-4 h-4" />
                <span>Restart Shop Simulator</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
