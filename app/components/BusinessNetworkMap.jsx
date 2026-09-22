"use client";

import React, { useState } from "react";
import { 
  StoreIcon, 
  ReceiptIcon, 
  PackageIcon, 
  UsersIcon, 
  TruckIcon, 
  WalletIcon, 
  LandmarkIcon, 
  RupeeIcon, 
  RotateCcwIcon, 
  FileTextIcon, 
  CheckIcon,
  SparklesIcon
} from "./Icons";

export default function BusinessNetworkMap() {
  const [activeNode, setActiveNode] = useState("Sales");

  const nodes = [
    {
      name: "Sales",
      icon: ReceiptIcon,
      connectedTo: ["Customers", "Invoices", "Inventory", "Cash", "Bank", "Payments"],
      summary: "Counter billing feeds straight into inventory reduction, customer balance and daily revenue.",
      category: "core",
    },
    {
      name: "Purchases",
      icon: TruckIcon,
      connectedTo: ["Suppliers", "Inventory", "Bank", "Cash", "Payments"],
      summary: "Inward stock deliveries increment warehouse stock and record supplier payables automatically.",
      category: "core",
    },
    {
      name: "Products",
      icon: PackageIcon,
      connectedTo: ["Inventory", "Sales", "Purchases", "Invoices"],
      summary: "SKU, MRP, custom prices, barcode identification and category tags.",
      category: "catalog",
    },
    {
      name: "Inventory",
      icon: PackageIcon,
      connectedTo: ["Products", "Sales", "Purchases", "Returns"],
      summary: "Real-time stock ledger that updates live with every counter scan or return.",
      category: "stock",
    },
    {
      name: "Customers",
      icon: UsersIcon,
      connectedTo: ["Sales", "Invoices", "Payments", "Cash", "Bank"],
      summary: "Khata records, lifetime sales history, pending balance, and custom customer pricing.",
      category: "people",
    },
    {
      name: "Suppliers",
      icon: TruckIcon,
      connectedTo: ["Purchases", "Payments", "Bank", "Cash"],
      summary: "Vendor history, purchase bills, payment terms, and pending debit balances.",
      category: "people",
    },
    {
      name: "Cash",
      icon: WalletIcon,
      connectedTo: ["Sales", "Expenses", "Payments", "Purchases"],
      summary: "Physical shop drawer balance matching every cash bill and tea/transport expense.",
      category: "money",
    },
    {
      name: "Bank",
      icon: LandmarkIcon,
      connectedTo: ["Sales", "Suppliers", "Payments", "Expenses"],
      summary: "Online UPI QR collections, NEFT vendor settlements, and account transfers.",
      category: "money",
    },
    {
      name: "Payments",
      icon: RupeeIcon,
      connectedTo: ["Customers", "Suppliers", "Sales", "Purchases", "Cash", "Bank"],
      summary: "Partial payments, advance deposits, and settlement logs.",
      category: "money",
    },
    {
      name: "Expenses",
      icon: WalletIcon,
      connectedTo: ["Cash", "Bank"],
      summary: "Daily out-of-pocket costs (Transport, electricity, packaging, tea) tracked for true profit.",
      category: "money",
    },
    {
      name: "Returns",
      icon: RotateCcwIcon,
      connectedTo: ["Sales", "Purchases", "Inventory", "Cash", "Suppliers"],
      summary: "Sale returns and supplier returns with automatic stock and khata reversal.",
      category: "stock",
    },
    {
      name: "Invoices",
      icon: ReceiptIcon,
      connectedTo: ["Sales", "Customers", "Products"],
      summary: "Instant professional bills formatted for thermal print, WhatsApp, and PDF export.",
      category: "core",
    },
  ];

  const currentNodeObj = nodes.find((n) => n.name === activeNode) || nodes[0];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-600" />
            Interactive Ecosystem Map
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your Business Isn't a List of Screens. <br />
            <span className="text-emerald-600">It's a Connected System.</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Hover or click any node to see how DukanHisab connects it across your whole shop.
          </p>
        </div>

        {/* Interactive Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center: Interactive Node Grid */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 relative">
            <div className="text-center mb-6">
              <span className="inline-block bg-emerald-600 text-white font-black text-sm px-4 py-1.5 rounded-full shadow-md">
                DUKANHISAB MEMORY HUB
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {nodes.map((node) => {
                const Icon = node.icon;
                const isSelected = activeNode === node.name;
                const isConnected = currentNodeObj.connectedTo.includes(node.name);

                return (
                  <button
                    key={node.name}
                    onClick={() => setActiveNode(node.name)}
                    onMouseEnter={() => setActiveNode(node.name)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-lg scale-105 z-10"
                        : isConnected
                        ? "bg-emerald-50 text-emerald-950 border-emerald-300 shadow-xs ring-2 ring-emerald-200/50"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isSelected ? "bg-white/20 text-white" : isConnected ? "bg-emerald-200 text-emerald-800" : "bg-slate-100 text-slate-600"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      {isConnected && !isSelected && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded">
                          Linked
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-xs sm:text-sm">{node.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs text-slate-500">
              Hover over any node to highlight linked subsystems in real-time.
            </div>
          </div>

          {/* Right: Active Node Detail & Connected Subsystems */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-11 h-11 rounded-xl bg-emerald-600/30 border border-emerald-500 text-emerald-400 flex items-center justify-center">
                {React.createElement(currentNodeObj.icon, { className: "w-5 h-5" })}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  SELECTED SUBSYSTEM
                </span>
                <h3 className="text-xl font-black text-white">{currentNodeObj.name}</h3>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              {currentNodeObj.summary}
            </p>

            <div className="mt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Directly Synchronized Records ({currentNodeObj.connectedTo.length})
              </span>
              <div className="flex flex-wrap gap-2">
                {currentNodeObj.connectedTo.map((cName) => (
                  <span
                    key={cName}
                    className="text-xs font-semibold bg-slate-800 border border-slate-700 text-emerald-300 px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                  >
                    <CheckIcon className="w-3 h-3 text-emerald-400" />
                    {cName}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 leading-normal">
              No disconnected silos. If something changes in <strong className="text-white">{currentNodeObj.name}</strong>, all {currentNodeObj.connectedTo.length} linked records reflect the update instantaneously.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
