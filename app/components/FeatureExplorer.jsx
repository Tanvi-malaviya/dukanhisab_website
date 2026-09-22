"use client";

import React, { useState } from "react";
import { 
  ReceiptIcon, 
  TruckIcon, 
  PackageIcon, 
  TrendingUpIcon, 
  ShieldCheckIcon,
  BarcodeIcon,
  CheckIcon,
  ArrowRightIcon
} from "./Icons";

export default function FeatureExplorer() {
  const [activeCategory, setActiveCategory] = useState("sell");

  const categories = [
    { id: "sell", label: "Sell", icon: ReceiptIcon, tag: "Counter Operations" },
    { id: "buy", label: "Buy", icon: TruckIcon, tag: "Inward & Vendors" },
    { id: "manage", label: "Manage", icon: PackageIcon, tag: "Catalog & Money" },
    { id: "track", label: "Track", icon: TrendingUpIcon, tag: "Ledger & Balances" },
    { id: "share", label: "Share & Protect", icon: ShieldCheckIcon, tag: "PDF & Cloud" },
  ];

  const categoryFeatures = {
    sell: [
      { name: "POS Billing", desc: "Super-fast checkout designed for long customer queues." },
      { name: "Barcode Scanning", desc: "Compatible with laser guns, Bluetooth scanners, and phone cameras." },
      { name: "Quick Product Search", desc: "Find any product by item name, SKU, or custom code in milliseconds." },
      { name: "Customer Selection", desc: "Attach sales to customer profiles or create quick walk-in bills." },
      { name: "Flexible Payment Methods", desc: "Accept Cash, UPI, Bank Transfer, or record directly to Khata." },
      { name: "Instant Invoices", desc: "Ready-to-share GST and non-GST itemized bills." },
    ],
    buy: [
      { name: "Inward Purchases", desc: "Log vendor bills to auto-increment godown inventory." },
      { name: "Supplier Selection", desc: "Choose registered suppliers and verify their previous quote." },
      { name: "Purchase Pricing Memory", desc: "Stores last agreed supplier rates for every product." },
      { name: "Purchase History", desc: "Search past supplier invoices by date, bill number, or distributor." },
      { name: "Purchase Returns", desc: "Log defective or damaged goods with automatic debit note creation." },
      { name: "Payable Tracking", desc: "Track unpaid supplier balances so you know what's due." },
    ],
    manage: [
      { name: "Product Master", desc: "SKU, MRP, custom customer pricing, and tax brackets." },
      { name: "Inventory Balance", desc: "Live stock count with low stock indicator alerts." },
      { name: "Customer Directory", desc: "Complete customer database with phone numbers and credit limits." },
      { name: "Supplier Directory", desc: "Vendor details, contact persons, and supply terms." },
      { name: "Cash Drawer", desc: "Live physical cash tracking matched against daily sales." },
      { name: "Bank Accounts", desc: "Log online UPI payments and direct bank settlements." },
      { name: "Shop Expenses", desc: "Log tempo, packaging, electricity, and shop maintenance." },
    ],
    track: [
      { name: "Complete Transaction Logs", desc: "Auditable chronological record of every bill and payment." },
      { name: "Payment Receipts", desc: "History of partial and full customer payments with timestamps." },
      { name: "Return Records", desc: "Track all customer returns and supplier returns in one place." },
      { name: "Outstanding Khata", desc: "Total customer credit receivable summary." },
      { name: "Supplier Payables", desc: "Total vendor amount pending payout." },
      { name: "Business Day Reports", desc: "Opening balance, daily turnover, and closing drawer balance." },
    ],
    share: [
      { name: "PDF Invoices", desc: "Crisp vector invoices formatted for thermal or A4 printers." },
      { name: "WhatsApp Sharing", desc: "Send bills to customer's WhatsApp in 1 click." },
      { name: "Email Invoices", desc: "Send invoices with automated PDF attachments." },
      { name: "Excel Data Export", desc: "Export customer lists, sales ledgers, and purchases for accountants." },
      { name: "Automated Cloud Backup", desc: "Continuous encrypted sync so you never lose your records." },
      { name: "Multi-Device Access", desc: "View your business records simultaneously on phone and laptop." },
    ],
  };

  const currentList = categoryFeatures[activeCategory];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <PackageIcon className="w-3.5 h-3.5 text-emerald-700" />
            Shop Control Center
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore DukanHisab Capabilities.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Everything a shop owner needs to sell, buy, manage, track, share and protect their business records.
          </p>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl border font-bold text-sm transition-all ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-700/20 scale-102"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
                <span className={`text-[10px] font-normal px-2 py-0.5 rounded-full ${
                  isSelected ? "bg-emerald-700 text-emerald-100" : "bg-slate-200 text-slate-600"
                }`}>
                  {cat.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feature Cards Grid for Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {currentList.map((item) => (
            <div
              key={item.name}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all shadow-xs group"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shadow-2xs group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <CheckIcon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
