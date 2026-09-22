"use client";

import React, { useState } from "react";
import { 
  ClockIcon, 
  StoreIcon, 
  PackageIcon, 
  BarcodeIcon, 
  ReceiptIcon, 
  RupeeIcon, 
  TruckIcon, 
  RotateCcwIcon, 
  LandmarkIcon, 
  CheckIcon,
  ShieldCheckIcon
} from "./Icons";

export default function ShopDayTimeline() {
  const [activeStep, setActiveStep] = useState(3);

  const timelineEvents = [
    {
      time: "8:30 AM",
      title: "Shop Opens",
      category: "Day Start",
      icon: StoreIcon,
      action: "Shutter opened. Cash counter drawer verified with opening balance.",
      recordCreated: "Day Session #D-249 opened with ₹3,500 Opening Cash Drawer.",
      connected: "Cash Management • Shop Session",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    },
    {
      time: "9:15 AM",
      title: "New Purchase Added",
      category: "Inward Stock",
      icon: TruckIcon,
      action: "Tempo arrived from ABC Traders delivering 20 Bags of Kolam Rice.",
      recordCreated: "Purchase #PB-104 recorded: ₹22,000 payable. Stock auto-credited +20 Bags.",
      connected: "Purchases • Inventory • Supplier Ledger",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      time: "10:03 AM",
      title: "Barcode Scanned",
      category: "Fast POS",
      icon: BarcodeIcon,
      action: "Customer brings Rice bag to counter. Barcode 890123 beeped in 0.4s.",
      recordCreated: "Product identified instantly. Customer-specific price of ₹1,250 automatically loaded.",
      connected: "Barcode POS • Custom Pricing",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      time: "10:05 AM",
      title: "Sale Completed",
      category: "Billing",
      icon: ReceiptIcon,
      action: "Bill printed and sent via WhatsApp to Rahul Patel.",
      recordCreated: "Invoice #DH-4029 saved. Stock reduced: 20 → 18 Bags. ₹1,250 cash added.",
      connected: "Sales • WhatsApp Bill • Stock • Cash",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    },
    {
      time: "11:20 AM",
      title: "Customer Payment Received",
      category: "Khata Deposit",
      icon: RupeeIcon,
      action: "Regular customer comes in to clear past month's pending balance.",
      recordCreated: "Payment Receipt #PR-882: ₹2,500 Cash collected. Rahul's balance reduced.",
      connected: "Customer Khata • Cash In Hand",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    },
    {
      time: "1:30 PM",
      title: "Expense Added",
      category: "Outflow",
      icon: TruckIcon,
      action: "Tempo driver paid ₹350 cash for morning godown shifting.",
      recordCreated: "Expense #EX-092: ₹350 under 'Transport'. Cash drawer automatically synced.",
      connected: "Expense Tracker • Daily P&L",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      time: "3:45 PM",
      title: "Sale Return Recorded",
      category: "Returns",
      icon: RotateCcwIcon,
      action: "Customer returns 1 unopened oil packet bought yesterday with receipt.",
      recordCreated: "Sale Return #SR-12: ₹180 refunded. 1 unit added back to inventory safely.",
      connected: "Sale Returns • Stock Restoration",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      time: "5:10 PM",
      title: "Supplier Payment Made",
      category: "Vendor Khata",
      icon: LandmarkIcon,
      action: "Online NEFT transfer of ₹15,000 sent to ABC Traders via HDFC Bank.",
      recordCreated: "Supplier Payment #SP-402: Pending balance drops from ₹26,500 to ₹11,500.",
      connected: "Bank Ledger • Supplier Balance",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    },
    {
      time: "7:45 PM",
      title: "Evening Rush Hour Sales",
      category: "Peak Billing",
      icon: BarcodeIcon,
      action: "Continuous customer stream. 42 bills generated within 60 minutes.",
      recordCreated: "Each item scanned instantly decrements live stock and tallies revenue.",
      connected: "High-Speed POS • Real-Time Stock",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    },
    {
      time: "9:30 PM",
      title: "Day Complete",
      category: "Daily Tally",
      icon: ShieldCheckIcon,
      action: "Shutters closed. One-tap day closing report compares physical cash with system memory.",
      recordCreated: "Daily Summary generated: ₹24,850 Total Sales • Exact Cash & Stock match.",
      connected: "Business Intelligence • Cloud Backup",
      badgeColor: "bg-slate-900 text-white border-slate-900",
    },
  ];

  const current = timelineEvents[activeStep];
  const IconComponent = current.icon;

  return (
    <section id="day-in-shop" className="py-20 lg:py-28 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ClockIcon className="w-3.5 h-3.5 text-emerald-600" />
            Signature Timeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Day Inside Your Shop.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Every day creates hundreds of small records. DukanHisab keeps them connected.
          </p>
        </div>

        {/* Interactive Horizontal Hour Scroller for Mobile/Desktop */}
        <div className="mb-10 overflow-x-auto pb-4 pt-1 no-scrollbar">
          <div className="flex items-center justify-between min-w-[850px] px-2 relative">
            {/* Background connecting bar */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 -translate-y-1/2 -z-0"></div>
            
            {/* Active filled progress bar */}
            <div 
              className="absolute top-1/2 left-4 h-1 bg-emerald-500 -translate-y-1/2 transition-all duration-300 -z-0"
              style={{ width: `${(activeStep / (timelineEvents.length - 1)) * 96}%` }}
            ></div>

            {timelineEvents.map((event, idx) => {
              const isSelected = activeStep === idx;
              const isPast = idx < activeStep;
              return (
                <button
                  key={event.time}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex flex-col items-center group focus:outline-hidden`}
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 shadow-sm ${
                    isSelected 
                      ? "bg-emerald-600 text-white ring-4 ring-emerald-100 scale-110" 
                      : isPast
                      ? "bg-emerald-100 text-emerald-800 border-2 border-emerald-500"
                      : "bg-white text-slate-500 border-2 border-slate-300 group-hover:border-slate-400"
                  }`}>
                    {idx + 1}
                  </div>
                  <span className={`mt-2 text-xs font-bold transition-colors ${
                    isSelected ? "text-emerald-700 font-extrabold" : "text-slate-600"
                  }`}>
                    {event.time}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium max-w-[70px] truncate text-center">
                    {event.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Event Record Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/60 p-6 sm:p-10 transition-all">
            
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-xs">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-black text-slate-900">
                      {current.time} — {current.title}
                    </span>
                  </div>
                  <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md border mt-1 ${current.badgeColor}`}>
                    {current.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40"
                >
                  ← Earlier
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(timelineEvents.length - 1, prev + 1))}
                  disabled={activeStep === timelineEvents.length - 1}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-40"
                >
                  Later →
                </button>
              </div>
            </div>

            {/* Action vs Digital Memory Record */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  What Happens in the Shop
                </span>
                <p className="mt-2 text-base font-semibold text-slate-800 leading-relaxed">
                  {current.action}
                </p>
                <div className="mt-4 text-xs text-slate-500 font-medium">
                  Real retail workflow at the counter or delivery shutter.
                </div>
              </div>

              <div className="bg-emerald-950 text-white rounded-2xl p-5 border border-emerald-900 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    DukanHisab Memory Record Created
                  </span>
                  <span className="text-[10px] bg-emerald-900 text-emerald-200 font-mono px-2 py-0.5 rounded">
                    Auto-Linked
                  </span>
                </div>
                <p className="mt-2 text-sm sm:text-base font-medium text-emerald-100 leading-relaxed font-mono">
                  "{current.recordCreated}"
                </p>
                <div className="mt-4 pt-3 border-t border-emerald-800/80 flex items-center justify-between text-xs text-emerald-300">
                  <span>Connected Subsystems:</span>
                  <span className="font-semibold text-white">{current.connected}</span>
                </div>
              </div>
            </div>

            {/* Final Statement Banner */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 text-center">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Nothing Gets Lost.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Whether it's a 10-rupee transport tea or a 20-bag truckload, DukanHisab remembers the exact rupee and unit.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
