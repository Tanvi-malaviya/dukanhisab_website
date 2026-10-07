"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  Landmark, 
  Receipt, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRightLeft,
  Coins,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function MoneyFlowSection() {
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'inflow', 'outflow', 'closure'

  // Live real transactions modeled from DukanHisab Cashbook
  const inflowItems = [
    {
      id: "in-1",
      title: "Rahul Patel - Khata Due Clearance",
      source: "Customer Ledger Repayment",
      mode: "UPI / PhonePe",
      account: "HDFC Bank",
      time: "Today 11:45 AM",
      amount: "+₹2,500",
      status: "Verified",
    },
    {
      id: "in-2",
      title: "Counter POS Sale #DH-4029",
      source: "Walk-in Retail Cash Sale",
      mode: "Physical Cash",
      account: "Cash Drawer (Galla)",
      time: "Today 01:15 PM",
      amount: "+₹1,850",
      status: "In Drawer",
    },
    {
      id: "in-3",
      title: "Wholesale Grocery Order",
      source: "Invoice #DH-4030",
      mode: "Split: Cash + UPI",
      account: "Dual Split",
      time: "Today 03:20 PM",
      amount: "+₹4,200",
      status: "Reconciled",
    },
    {
      id: "in-4",
      title: "Returnable Jar Security Deposit",
      source: "Bisleri 20L Water Jars (4)",
      mode: "Physical Cash",
      account: "Cash Drawer (Galla)",
      time: "Today 04:10 PM",
      amount: "+₹600",
      status: "Asset Held",
    },
  ];

  const outflowItems = [
    {
      id: "out-1",
      title: "Supplier Purchase: ABC Traders",
      dest: "Stock Inward Bill #PB-881",
      type: "Inventory (COGS)",
      mode: "Bank NEFT",
      account: "HDFC Bank",
      time: "Today 12:30 PM",
      amount: "-₹6,500",
    },
    {
      id: "out-2",
      title: "Monthly Shop Electricity Bill",
      dest: "Torrent Power Bill #7721",
      type: "Operating Overhead",
      mode: "UPI Autopay",
      account: "HDFC Bank",
      time: "Yesterday",
      amount: "-₹2,400",
    },
    {
      id: "out-3",
      title: "Tempo Logistics & Unloading",
      dest: "Freight delivery charge",
      type: "Daily Expense",
      mode: "Physical Cash",
      account: "Cash Drawer (Galla)",
      time: "Today 02:00 PM",
      amount: "-₹450",
    },
    {
      id: "out-4",
      title: "Shop Tea & Staff Refreshments",
      dest: "Counter Daily Expense",
      type: "Daily Expense",
      mode: "Physical Cash",
      account: "Cash Drawer (Galla)",
      time: "Today 05:30 PM",
      amount: "-₹120",
    },
  ];

  const denominationTally = [
    { note: "₹500", count: 24, total: "₹12,000" },
    { note: "₹200", count: 15, total: "₹3,000" },
    { note: "₹100", count: 32, total: "₹3,200" },
    { note: "₹50 & Coins", count: "Mixed", total: "₹450" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative Subtle Background */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Coins className="w-3.5 h-3.5 text-emerald-600" />
            <span>Complete Cash & Bank Transparency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Track Money Coming In. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
              Track Money Going Out.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Every rupee in your counter cash drawer and bank account is connected to an actual verified transaction. Eliminate evening drawer shortages and double-counted expenses.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-2xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Today's Inflow</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                <span className="text-lg font-black text-emerald-700 font-mono">+₹9,150</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-2xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Today's Outflow</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <ArrowDownRight className="w-4 h-4 text-rose-600" />
                <span className="text-lg font-black text-rose-700 font-mono">-₹9,470</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-2xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Cash in Hand (Galla)</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Wallet className="w-4 h-4 text-teal-600" />
                <span className="text-lg font-black text-slate-900 font-mono">₹18,650</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-2xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Bank & UPI Balance</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Landmark className="w-4 h-4 text-blue-600" />
                <span className="text-lg font-black text-slate-900 font-mono">₹64,280</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Flow Cards: Inflow (Green) vs Outflow (Red/Slate) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
          
          {/* ================= LEFT: MONEY COMING IN (INFLOW) ================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/90 shadow-lg shadow-emerald-700/5 flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center font-bold shadow-xs">
                    <ArrowUpRight className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      Money Coming In
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Sales, Customer Khata & Advance Deposits</p>
                  </div>
                </div>
                <span className="text-xs font-black text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  Inflow
                </span>
              </div>

              {/* Transactions List */}
              <div className="space-y-3">
                {inflowItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-600 shrink-0">
                          {item.mode}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                        <span>{item.source}</span>
                        <span className="text-slate-300">•</span>
                        <span className="font-mono text-slate-400">{item.time}</span>
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-black text-emerald-700 font-mono block">
                        {item.amount}
                      </span>
                      <span className="text-[10px] text-emerald-600 font-bold">
                        {item.status} ✓
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inflow Bottom Summary Strip */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs bg-emerald-50/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 rounded-b-3xl">
              <div className="flex items-center gap-2 text-emerald-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Auto-Updated in Galla & Bank Ledgers</span>
              </div>
              <span className="font-mono font-black text-emerald-800 text-sm">
                +₹9,150 Total
              </span>
            </div>
          </div>

          {/* ================= RIGHT: MONEY GOING OUT (OUTFLOW) ================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-200/50 flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold border border-rose-100">
                    <ArrowDownRight className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      Money Going Out
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Distributor Purchases & Daily Shop Expenses</p>
                  </div>
                </div>
                <span className="text-xs font-black text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  Outflow
                </span>
              </div>

              {/* Transactions List */}
              <div className="space-y-3">
                {outflowItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-rose-50/30 hover:border-rose-200 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-600 shrink-0">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                        <span>{item.dest}</span>
                        <span className="text-slate-300">•</span>
                        <span className="font-mono text-slate-400">{item.time}</span>
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-black text-rose-700 font-mono block">
                        {item.amount}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {item.account}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outflow Bottom Summary Strip */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 rounded-b-3xl">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                <span>Expenses Isolated from Purchases (COGS Protection)</span>
              </div>
              <span className="font-mono font-black text-slate-900 text-sm">
                -₹9,470 Total
              </span>
            </div>
          </div>

        </div>

        {/* ================= 3RD SECTION: DAILY REGISTER CLOSURE & CONTRA TRANSFERS ================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Explanation of Register Closure & Contra Transfers */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Day-End Reconciled</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Daily Register Closure &amp; <br />
                <span className="text-emerald-600">Denomination Calculator</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you close your shop at night, enter the count of physical currency notes (₹500, ₹200, ₹100, ₹50, ₹20, ₹10 &amp; coins). DukanHisab instantly matches the drawer tally against all registered bills to flag any cash shortage.
              </p>

              {/* 2 Key Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">Zero Drawer Leakage</h5>
                    <p className="text-[11px] text-slate-500">
                      Calculates Expected Cash vs Physical Drawer count to show exact variance (+/- ₹0).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRightLeft className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">Bank Contra Transfers</h5>
                    <p className="text-[11px] text-slate-500">
                      Record <strong>Deposit Cash</strong> (Galla → Bank) and <strong>Withdraw Cash</strong> (Bank → Galla) without distorting business profit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Denomination Calculator Box */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-800 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-bold text-white tracking-wide">
                    Night Register Closure • 09:30 PM
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-slate-800 text-emerald-400 px-2 py-0.5 rounded-md border border-slate-700">
                  Galla Balanced ✓
                </span>
              </div>

              {/* Denomination Counter Table */}
              <div className="divide-y divide-slate-800 text-xs">
                {denominationTally.map((d, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-slate-300 w-24">{d.note}</span>
                      <span className="text-[11px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded-md">
                        {d.count} {typeof d.count === "number" ? "Notes" : ""}
                      </span>
                    </div>
                    <span className="font-mono font-black text-white">{d.total}</span>
                  </div>
                ))}
              </div>

              {/* Tally Math Result */}
              <div className="pt-3 border-t border-slate-800 bg-slate-800/60 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-3xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">
                    Expected POS Cash: ₹18,650
                  </span>
                  <span className="font-black text-white text-base font-mono">
                    Physical Count: ₹18,650
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-emerald-400 font-bold block uppercase tracking-wide">
                    Discrepancy (Shortage)
                  </span>
                  <span className="font-mono font-black text-emerald-400 text-sm">
                    ₹0 (100% Reconciled)
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
