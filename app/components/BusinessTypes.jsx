"use client";

import React, { useState } from "react";
import { StoreIcon, PackageIcon, UsersIcon, TruckIcon, BarcodeIcon, CheckIcon } from "./Icons";

export default function BusinessTypes() {
  const [activeType, setActiveType] = useState("kirana");

  const businessTypes = [
    {
      id: "kirana",
      title: "Kirana & Grocery Store",
      focus: "Fast Billing • Loose Items • Customer Khata",
      highlight: "Sales • Stock • Customers • Suppliers",
      desc: "Handles fast evening rushes, barcode billing for packaged FMCG, customer khata credit tracking, and WhatsApp receipts for neighborhood regulars.",
      metrics: ["Fast Barcode Scanning", "WhatsApp Bills", "Customer Credit Books"],
    },
    {
      id: "hardware",
      title: "Hardware & Sanitary Shop",
      focus: "Large Catalog • Custom Rates • Multiple Units",
      highlight: "Products • Purchases • Inventory • Sales",
      desc: "Manage thousands of SKUs from pipes to screws. Set customer-specific pricing for contractors and builders, and track heavy bulk supplier deliveries.",
      metrics: ["Contractor Pricing", "Thousands of SKUs", "Supplier Inward Bills"],
    },
    {
      id: "agro",
      title: "Agro & Fertilizer Store",
      focus: "Farmer Ledgers • Seasonal Purchases • Outstanding Balances",
      highlight: "Stock • Suppliers • Customers • Payments",
      desc: "Built to handle farmer credit cycles, pesticide and seed inventory, supplier advance payments, and seasonal balance reconciliations.",
      metrics: ["Seasonal Credit Khata", "Supplier Advances", "Batch Stock Tracking"],
    },
    {
      id: "medical",
      title: "Medical & Chemist Store",
      focus: "Quick Medicine Search • Fast Billing • Regular Patients",
      highlight: "Products • Sales • Inventory • Customers",
      desc: "Fast product lookup by name or barcode, clear print receipts, customer purchase history for repeat prescriptions, and stock balance alerts.",
      metrics: ["Rapid Name/SKU Search", "Itemized Receipts", "Customer Purchase Log"],
    },
    {
      id: "mobile",
      title: "Mobile & Electronics Shop",
      focus: "Serial/Barcode Products • Accessories • Repairs & Payments",
      highlight: "Products • Sales • Customer Records • Payments",
      desc: "Track phones, covers, chargers, and accessories. Bill with serial numbers or barcodes, log customer warranty records, and record service payments.",
      metrics: ["Serial/Barcode Tracking", "Customer Warranty Logs", "Accessory Inventory"],
    },
    {
      id: "general",
      title: "General Retail & Gift Store",
      focus: "Varied Products • Expense Tracking • Total Records",
      highlight: "Sales • Purchases • Expenses • Complete Records",
      desc: "From toys to stationery, handle diverse product collections, daily shop expenses (transport, packaging), and keep complete end-of-day sales clarity.",
      metrics: ["Daily Expense Ledger", "Flexible Product Tags", "Complete Day Summary"],
    },
  ];

  const current = businessTypes.find((b) => b.id === activeType) || businessTypes[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <StoreIcon className="w-3.5 h-3.5 text-emerald-700" />
            Tailored For Indian Small Businesses
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built Around the Way Your Shop Works.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Whether you run a fast-paced grocery counter or manage thousands of hardware items, DukanHisab adapts naturally.
          </p>
        </div>

        {/* Business Type Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10 max-w-5xl mx-auto">
          {businessTypes.map((bt) => {
            const isSelected = activeType === bt.id;
            return (
              <button
                key={bt.id}
                onClick={() => setActiveType(bt.id)}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-md font-bold scale-102"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 font-medium"
                }`}
              >
                <p className="text-xs">{bt.title}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Business Profile Showcase */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Retail Specialization
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                {current.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {current.focus}
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-800">
              Connected: {current.highlight}
            </div>
          </div>

          <p className="mt-6 text-base text-slate-700 leading-relaxed">
            {current.desc}
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-3">
              Key Workflows Ready Out-Of-The-Box
            </span>
            <div className="flex flex-wrap gap-2.5">
              {current.metrics.map((m) => (
                <span
                  key={m}
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-2"
                >
                  <CheckIcon className="w-4 h-4 text-emerald-600" />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
