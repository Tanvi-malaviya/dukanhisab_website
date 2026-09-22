"use client";

import React, { useState } from "react";
import { MonitorIcon, ReceiptIcon, UsersIcon, PackageIcon, TruckIcon, SearchIcon, CheckIcon } from "./Icons";

export default function WebPanelShowcase() {
  const [activeTab, setActiveTab] = useState("sales");

  const views = {
    sales: {
      title: "Sales Records & Counter Activity",
      desc: "Live stream of invoices generated across all counters with instant PDF/WhatsApp export.",
      headers: ["Invoice #", "Customer", "Items", "Amount", "Mode", "Status"],
      rows: [
        ["DH-4029", "Rahul Patel", "2 Items (Rice 25kg, Oil 5L)", "₹2,070", "Cash", "Completed"],
        ["DH-4028", "Suresh Bhai", "1 Item (Sugar 10kg)", "₹480", "UPI QR", "Completed"],
        ["DH-4027", "Meena Ben", "4 Items (Grains & Masala)", "₹1,320", "Cash", "Completed"],
        ["DH-4026", "Walk-in Customer", "1 Item (Sunflower Oil)", "₹850", "Cash", "Completed"],
      ],
    },
    customers: {
      title: "Customer Khata & Balance Directory",
      desc: "Instant ledger overview of who owes money and when they last purchased.",
      headers: ["Customer Name", "Phone", "Total Bought", "Outstanding Khata", "Last Visit", "Action"],
      rows: [
        ["Rahul Patel", "+91 98765 43210", "₹48,500", "₹9,500 (Due)", "Today", "Send WhatsApp"],
        ["Mahesh Shah", "+91 98251 22334", "₹22,100", "₹0 (Clear)", "Yesterday", "Statement"],
        ["Kiran Kumar", "+91 98980 11223", "₹14,350", "₹3,200 (Due)", "15 Sep 2026", "Send WhatsApp"],
        ["Jayesh Bhai", "+91 97240 55667", "₹65,800", "₹12,400 (Due)", "12 Sep 2026", "Send WhatsApp"],
      ],
    },
    products: {
      title: "Inventory & Warehouse Master",
      desc: "Real-time stock balance, low inventory warnings, and customer pricing rules.",
      headers: ["Product Name", "Barcode", "MRP", "Counter Price", "In Stock", "Alert"],
      rows: [
        ["Fortune Kolam Rice 25kg", "8901030382012", "₹1,300", "₹1,250", "18 Bags", "Normal"],
        ["Fortune Sunflower Oil 5L", "8901233001824", "₹875", "₹820", "24 Cans", "Normal"],
        ["Madhur Sugar 10kg", "8901455209110", "₹510", "₹460", "12 Bags", "Low Stock Warning"],
        ["Tata Salt 1kg", "8901058852314", "₹28", "₹26", "64 Pkts", "Normal"],
      ],
    },
    suppliers: {
      title: "Supplier Purchases & Vendor Ledgers",
      desc: "Log of goods received, agreed purchase prices, and outstanding supplier payments.",
      headers: ["Supplier Name", "Category", "Total Inward", "Paid", "Pending Balance", "Status"],
      rows: [
        ["ABC Traders", "Grains & Edible Oil", "₹1,24,500", "₹98,000", "₹26,500", "Payment Due"],
        ["Gujarat FMCG Depot", "Packaged Goods", "₹82,400", "₹82,400", "₹0", "Settled"],
        ["Shree Hari Agro", "Sugar & Flours", "₹45,900", "₹30,000", "₹15,900", "Payment Due"],
        ["Sunrise Packaging", "Plastic & Jute Bags", "₹12,000", "₹12,000", "₹0", "Settled"],
      ],
    },
  };

  const current = views[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MonitorIcon className="w-3.5 h-3.5 text-emerald-700" />
            Complete Business Record Center
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Web Panel: Your Business Command Center.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Not just an admin page. It is your complete business record center with zero hidden calculations.
          </p>
        </div>

        {/* Browser Mockup Window */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-slate-200">
          
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="ml-3 text-xs font-mono text-slate-400">
                https://app.dukanhisab.com/portal
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Shop Web Portal Connected</span>
            </div>
          </div>

          {/* Interactive Navigation Tabs inside the Mockup */}
          <div className="flex flex-wrap items-center gap-2 p-4 bg-slate-900 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400 mr-2 uppercase tracking-wide">
              Click Hotspot to Test:
            </span>
            <button
              onClick={() => setActiveTab("sales")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "sales"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <ReceiptIcon className="w-4 h-4" />
              <span>Sales Records</span>
            </button>
            <button
              onClick={() => setActiveTab("customers")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "customers"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <UsersIcon className="w-4 h-4" />
              <span>Customer Balances</span>
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "products"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <PackageIcon className="w-4 h-4" />
              <span>Products & Inventory</span>
            </button>
            <button
              onClick={() => setActiveTab("suppliers")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "suppliers"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <TruckIcon className="w-4 h-4" />
              <span>Supplier Purchases</span>
            </button>
          </div>

          {/* Active View Table Content */}
          <div className="p-6 bg-slate-900/90">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
              <div>
                <h3 className="text-lg font-black text-white">{current.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{current.desc}</p>
              </div>
              <span className="text-[10px] font-mono bg-slate-800 text-emerald-400 px-3 py-1 rounded-lg border border-slate-700">
                Live Data Synchronized
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 uppercase font-bold text-[10px] tracking-wider border-b border-slate-800">
                  <tr>
                    {current.headers.map((h) => (
                      <th key={h} className="py-3 px-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  {current.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/60 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-3.5 px-4 font-medium">
                          {cIdx === 0 ? (
                            <span className="font-bold text-white">{cell}</span>
                          ) : cell.includes("Due") ? (
                            <span className="text-rose-400 font-bold">{cell}</span>
                          ) : cell.includes("Warning") ? (
                            <span className="text-amber-400 font-bold">{cell}</span>
                          ) : cell.includes("Completed") || cell.includes("Settled") || cell.includes("Clear") ? (
                            <span className="text-emerald-400 font-bold">{cell}</span>
                          ) : (
                            <span>{cell}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
              <span>Showing real-time records • Searchable by date, invoice, or phone</span>
              <span className="text-emerald-400 font-semibold cursor-pointer hover:underline">
                Export to Excel / CSV →
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
