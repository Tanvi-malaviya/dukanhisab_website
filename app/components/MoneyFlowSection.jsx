"use client";

import React, { useState } from "react";
import { 
  RupeeIcon, 
  UsersIcon, 
  TruckIcon, 
  WalletIcon, 
  LandmarkIcon, 
  ArrowRightIcon, 
  TrendingUpIcon, 
  CheckIcon 
} from "./Icons";

export default function MoneyFlowSection() {
  const [activeExpenseFilter, setActiveExpenseFilter] = useState("all");

  const expenses = [
    { title: "Tempo / Transport", amount: "₹350", category: "Logistics", date: "Today 1:30 PM", drawer: "Cash" },
    { title: "Electricity Bill", amount: "₹2,400", category: "Utilities", date: "Yesterday", drawer: "HDFC Bank" },
    { title: "Packaging & Bags", amount: "₹850", category: "Supplies", date: "16 Sep", drawer: "Cash" },
    { title: "Tea & Shop Snacks", amount: "₹120", category: "Daily", date: "Today 4:00 PM", drawer: "Cash" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <RupeeIcon className="w-3.5 h-3.5 text-emerald-700" />
            Complete Cash & Bank Transparency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Track Money Coming In. <br />
            <span className="text-emerald-600">Track Money Going Out.</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Every rupee in your cash drawer and bank account is connected to an actual transaction.
          </p>
        </div>

        {/* Dual Money Flow Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Money Coming In (Green theme) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/90 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-wide">
                  Money Coming In
                </h3>
              </div>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Revenue & Khata Inflow
              </span>
            </div>

            {/* Visual Step-by-Step Flow */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/80">
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center font-bold shadow-xs">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700">Source 01</span>
                  <p className="text-sm font-bold text-slate-900">Customer Purchase or Khata Clearance</p>
                  <p className="text-xs text-slate-600 mt-0.5">Counter sale generated or past pending credit paid.</p>
                </div>
              </div>

              <div className="flex justify-center -my-2 text-emerald-600">
                ↓
              </div>

              <div className="flex items-center gap-4 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/80">
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center font-bold shadow-xs">
                  <RupeeIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700">Source 02</span>
                  <p className="text-sm font-bold text-slate-900">Payment Verified (Cash or UPI)</p>
                  <p className="text-xs text-slate-600 mt-0.5">Customer pays via physical cash, GPay/PhonePe, or bank transfer.</p>
                </div>
              </div>

              <div className="flex justify-center -my-2 text-emerald-600">
                ↓
              </div>

              <div className="flex items-center gap-4 bg-emerald-600 text-white p-4 rounded-2xl shadow-md">
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold">
                  <WalletIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-200">Destination</span>
                  <p className="text-sm font-bold">Cash Drawer / Bank Ledger Credited</p>
                  <p className="text-xs text-emerald-100 mt-0.5">Instant match with physical counter cash or bank statement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Money Going Out (Slate/Rose theme) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-wide">
                  Money Going Out
                </h3>
              </div>
              <span className="text-xs font-extrabold text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                Vendor & Shop Outflow
              </span>
            </div>

            {/* Visual Step-by-Step Flow */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-slate-700 flex items-center justify-center font-bold shadow-xs">
                  <TruckIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Destination 01</span>
                  <p className="text-sm font-bold text-slate-900">Supplier Inward or Shop Expense</p>
                  <p className="text-xs text-slate-600 mt-0.5">Paying ABC Traders or recording tempo/packaging bills.</p>
                </div>
              </div>

              <div className="flex justify-center -my-2 text-slate-400">
                ↓
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-slate-700 flex items-center justify-center font-bold shadow-xs">
                  <RupeeIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Destination 02</span>
                  <p className="text-sm font-bold text-slate-900">Payment Method Disbursed</p>
                  <p className="text-xs text-slate-600 mt-0.5">Deducted from drawer cash or issued via NEFT/Cheque.</p>
                </div>
              </div>

              <div className="flex justify-center -my-2 text-slate-400">
                ↓
              </div>

              <div className="flex items-center gap-4 bg-slate-900 text-white p-4 rounded-2xl shadow-md">
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold">
                  <LandmarkIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Result</span>
                  <p className="text-sm font-bold">Vendor Debit Note & Cash Balanced</p>
                  <p className="text-xs text-slate-300 mt-0.5">Supplier pending balance drops accurately. Zero missing notes.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 15: Everyday Expenses Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                <WalletIcon className="w-3.5 h-3.5 text-amber-700" />
                Everyday Expenses
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Small Expenses Add Up.
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Record everyday expenses in 5 seconds so they don't disappear from your business history.
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Today's Recorded Expenses
              </span>
              <p className="text-2xl font-black text-slate-900">₹3,720</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {expenses.map((ex) => (
              <div key={ex.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="font-bold text-slate-500">{ex.category}</span>
                  <span className="text-[10px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-700">
                    {ex.drawer}
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-900">{ex.title}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-black text-emerald-700">{ex.amount}</span>
                  <span className="text-[11px] text-slate-400">{ex.date}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500 text-center">
            At the end of the month, your profit calculation accounts for every tea, tempo, and bulb. No surprise shortages.
          </p>
        </div>

      </div>
    </section>
  );
}
