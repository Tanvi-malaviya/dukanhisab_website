"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarcodeIcon,
  ReceiptIcon,
  RupeeIcon,
  UsersIcon,
  TruckIcon,
  WalletIcon,
  LandmarkIcon,
  WhatsAppIcon,
  PrinterIcon,
  CheckIcon,
  ClockIcon,
  SearchIcon,
  TagIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  PackageIcon,
  StoreIcon,
  CloudSyncIcon,
  RotateCcwIcon,
  GlobeIcon
} from "./Icons";

// Real modules scanned from Dukanhisab Architecture Manual
const webAppModules = [
  {
    id: "pos",
    name: "Sales (POS) Billing",
    tagline: "High-Speed Counter Billing with Barcode Gun & Custom Rates",
    badge: "Core Billing Engine",
    icon: BarcodeIcon,
    accent: "teal",
    description: "Built for peak retail counter rush. Scan barcodes with USB/Bluetooth scanners, apply customer-specific negotiated prices, accept split payments (Cash + UPI + Khata), and print 80mm/58mm thermal receipts in under 2 seconds.",
    keyCapabilities: [
      "Instant barcode scan with 0.18s recognition (USB & Bluetooth)",
      "Customer-specific saved rates ('Cust Rate' auto-applied)",
      "Payment splitting: Cash, Bank Account / UPI QR, and Khata Udhar",
      "Thermal printer (80mm/58mm/A4) & WhatsApp PDF invoices",
      "Sales Return & Credit Notes with automatic inventory restocking",
      "Bill Cancellation with automatic cash drawer reversal entries",
    ],
    samplePreview: {
      type: "list",
      title: "Active Counter Bill #DH-4029",
      items: [
        { name: "Kolam Rice 25kg", qty: "1 Bag", rate: "₹1,180 (Cust Rate)", total: "₹1,180" },
        { name: "Fortune Oil 5L", qty: "1 Can", rate: "₹795 (Saved)", total: "₹795" },
        { name: "Tata Salt 1kg", qty: "2 Pouches", rate: "₹26", total: "₹52" },
      ],
      total: "₹2,027",
      tax: "₹101 (5% GST)",
      grand: "₹2,128",
      customer: "Rahul Patel (Udhar: ₹4,200)",
      mode: "Cash / UPI / Khata Split",
    },
    routeLink: "/billing-software",
    routeLabel: "Explore Billing Features",
  },
  {
    id: "website",
    name: "Make Website (Online Storefront)",
    tagline: "1-Click Digital Storefront Synced in Real Time with POS Stock",
    badge: "Standout Innovation",
    icon: GlobeIcon,
    accent: "teal",
    description: "Turn your physical shop's POS catalog into a branded e-commerce website in seconds. Real-time stock status prevents overselling, while customers order directly on WhatsApp or phone with zero cart drop-off.",
    keyCapabilities: [
      "Dedicated custom subdomain: dukanhisab.com/store/your-shop",
      "Single source of truth: sell at counter, website stock auto-decrements",
      "Custom theme colors (Teal, Blue, Purple, Red, Amber) & shop banner",
      "Conversational ordering: 1-click WhatsApp order pre-filled with product name",
      "Direct phone call dialing & customer inquiry submission form",
      "SEO metadata & social media links (WhatsApp, Instagram, Facebook)",
    ],
    samplePreview: {
      type: "storefront",
      title: "Live Storefront: dukanhisab.com/store/uma-stationery",
      items: [
        { name: "Classmate Notebook 172 Pgs (6 Pack)", qty: "In Stock (42 left)", rate: "Stationery", total: "₹240" },
        { name: "Parker Vector Roller Ball Pen", qty: "In Stock (18 left)", rate: "Pens", total: "₹320" },
        { name: "Casio Desktop Calculator MJ-120D", qty: "Out of Stock (0 left)", rate: "Office", total: "₹525" },
      ],
      total: "Live Catalog: 320 Products",
      tax: "Theme: Brand Teal (#036272)",
      grand: "1-Click WhatsApp Ordering",
      customer: "Uma Stationery & Xerox",
      mode: "Synced Live with POS",
    },
    routeLink: "#make-website",
    routeLabel: "Inspect Online Storefront",
  },
  {
    id: "cashbook",
    name: "Cash Book & Daily Register Closure",
    tagline: "Galla Drawer Tally, Bank Contra Transfers & Denomination Counter",
    badge: "Cash & Bank Balance",
    icon: WalletIcon,
    accent: "emerald",
    description: "Reconcile every rupee in your counter cash drawer. Track Deposit/Withdraw contra transfers between Cash and Bank, and use the Denomination Calculator at day-end to catch any cash drawer discrepancies.",
    keyCapabilities: [
      "Real-time cash drawer (Galla) inflow & outflow entries",
      "Daily Register Closure Denomination Calculator (₹2000 to coins)",
      "Expected cash vs physical cash discrepancy detection",
      "Single Bank Account contra transfers: Deposit Cash & Withdraw Cash",
      "Operating expenses strictly separated from inventory purchases",
    ],
    samplePreview: {
      type: "denomination",
      title: "Daily Register Closure: 09:30 PM",
      items: [
        { name: "₹500 Notes", qty: "24 Notes", rate: "x ₹500", total: "₹12,000" },
        { name: "₹200 Notes", qty: "15 Notes", rate: "x ₹200", total: "₹3,000" },
        { name: "₹100 Notes", qty: "32 Notes", rate: "x ₹100", total: "₹3,200" },
        { name: "₹50 & Coins", qty: "Coins/Small", rate: "Mixed", total: "₹450" },
      ],
      total: "Physical Count: ₹18,650",
      tax: "Expected POS Cash: ₹18,650",
      grand: "Discrepancy: ₹0 (Reconciled ✓)",
      customer: "Shop Counter Drawer",
      mode: "Galla Closed Cleanly",
    },
    routeLink: "/khata-accounting",
    routeLabel: "Explore Cashbook & Ledgers",
  },
  {
    id: "customers",
    name: "Customer & Supplier Khata",
    tagline: "Track Every Rupee of Udhar with 1-Click WhatsApp Payment Collection",
    badge: "Zero Udhar Loss",
    icon: UsersIcon,
    accent: "amber",
    description: "Replace paper Khata notebooks. See live due balances, customer purchase history, set credit limits to prevent bad debt, and send automated WhatsApp reminders with instant dynamic UPI payment links.",
    keyCapabilities: [
      "Dual tracking: Due Amount (Udhar) vs Advance Credit balance",
      "Set customer credit limits to prevent unpaid defaults",
      "Customer-specific pricing rules saved and loaded automatically",
      "1-Click WhatsApp payment reminders with dynamic UPI QR link",
      "Supplier ledger for inward purchase bills, dues, and debit notes",
      "Complete customer transaction statements downloadable as PDF",
    ],
    samplePreview: {
      type: "list",
      title: "Customer Ledger: Rahul Patel (+91 98250 12345)",
      items: [
        { name: "Opening Khata Balance", qty: "12 Mar", rate: "Balance", total: "₹4,500" },
        { name: "Sale Bill #DH-4029", qty: "Today 11:15 AM", rate: "+Bill", total: "+₹2,128" },
        { name: "Cash Received at Counter", qty: "Today 11:20 AM", rate: "-Payment", total: "-₹2,500" },
      ],
      total: "Net Due: ₹4,128",
      tax: "Credit Limit: ₹10,000",
      grand: "WhatsApp UPI Reminder Ready",
      customer: "Rahul Patel",
      mode: "Payment Link Active",
    },
    routeLink: "/customer-management",
    routeLabel: "Explore Customer Khata",
  },
  {
    id: "inventory",
    name: "Stock Catalogue & Audit Trail",
    tagline: "Real-Time Stock Counts, Barcodes & Immutable Movement Trail",
    badge: "Smart Warehouse",
    icon: PackageIcon,
    accent: "blue",
    description: "Keep complete control over your stock catalogue. Every sale auto-deducts inventory, every supplier inward bill auto-increments stock, and an immutable stock_movements audit trail logs every piece with timestamps.",
    keyCapabilities: [
      "Cost Price vs MRP vs Selling Price tracking with profit margins",
      "Low-stock threshold alerts with warning badges",
      "Multi-unit support: Pcs, Bags, Kg, Ltr, Cans, Boxes",
      "Immutable stock_movements log: sale, return, purchase, adjustment",
      "Barcode generation, SKU search, and label thermal printing",
    ],
    samplePreview: {
      type: "list",
      title: "Live Inventory & Stock Health",
      items: [
        { name: "Kolam Rice 25kg Bag", qty: "18 left", rate: "Min: 5", total: "Stock OK" },
        { name: "Fortune Refined Oil 5L", qty: "12 left", rate: "Min: 4", total: "Stock OK" },
        { name: "Amul Butter 500g", qty: "3 left", rate: "Min: 10", total: "LOW STOCK!" },
        { name: "Tata Salt 1kg", qty: "45 left", rate: "Min: 10", total: "Stock OK" },
      ],
      total: "Total SKUs: 1,420",
      tax: "Valuation: ₹3.8 Lakh",
      grand: "2 Items Need Reorder",
      customer: "Central Dukan Store",
      mode: "Auto-Deducting Live",
    },
    routeLink: "/inventory-management",
    routeLabel: "Explore Inventory Management",
  },
  {
    id: "containers",
    name: "Returnable Containers Tracking",
    tagline: "Track 20L Water Jars, Milk Cans, Gas Cylinders & Beverage Crates",
    badge: "Unique Retail Feature",
    icon: RotateCcwIcon,
    accent: "indigo",
    description: "Specialized module for businesses dealing in returnable assets (water jars, milk cans, gas cylinders, beverage crates). Track containers issued vs returned per customer so assets never get lost.",
    keyCapabilities: [
      "Track issued vs returned containers during POS checkout",
      "Customer-wise container balance statement (e.g. 5 Jars pending)",
      "Deposit amount recording for returnable packaging",
      "Works for Mineral Water, Dairy/Milk, Gas Agencies, Beverage Distributors",
      "Zero asset leakage and zero lost crates",
    ],
    samplePreview: {
      type: "list",
      title: "Returnable Asset Ledger: Rakesh Sharma",
      items: [
        { name: "20L RO Water Jar", qty: "4 Issued", rate: "Delivery", total: "+4 Jars" },
        { name: "Empty 20L Jar Returned", qty: "2 Collected", rate: "Return", total: "-2 Jars" },
        { name: "Deposit Balance Held", qty: "Security", rate: "₹150 / Jar", total: "₹600" },
      ],
      total: "Pending With Customer: 2 Jars",
      tax: "Deposit Held: ₹600",
      grand: "Asset Reconciled ✓",
      customer: "Rakesh Sharma (Delivery)",
      mode: "Asset Protected",
    },
    routeLink: "/features",
    routeLabel: "Explore Container Tracking",
  },
  {
    id: "offline",
    name: "Offline-First Mobile Sync Engine",
    tagline: "Zero Interruption Billing with Idempotent Batch Sync",
    badge: "Offline-First Architecture",
    icon: CloudSyncIcon,
    accent: "purple",
    description: "Never let poor internet stop your shop counter. The mobile app operates 100% offline using local SQLite/IndexedDB. When internet restores, POST /api/v1/sync/batch syncs transactions with idempotency protection.",
    keyCapabilities: [
      "Zero billing freeze: scan barcodes and print receipts without internet",
      "POST /api/v1/sync/batch syncs sales, expenses, and khata in background",
      "Idempotency safeguarding (X-Idempotency-Key & UUIDs) prevents duplicate entries",
      "Incremental sync with ?updated_since=TIMESTAMP fetches only mutated records",
      "Multi-counter sync across mobile devices and web backoffice",
    ],
    samplePreview: {
      type: "list",
      title: "Sync Gateway Protocol (api/v1/sync/batch)",
      items: [
        { name: "Offline Sales Queue", qty: "14 Invoices", rate: "Cached Locally", total: "Queued" },
        { name: "Khata Payments Collected", qty: "3 Receipts", rate: "UUID Verified", total: "Queued" },
        { name: "Idempotency Handshake", qty: "X-Idempotency-Key", rate: "Guaranteed 1x", total: "PASSED ✓" },
      ],
      total: "17 Records Synced",
      tax: "Network: Reconnected",
      grand: "Zero Duplicate Entry Risk",
      customer: "DukanHisab Sync Service",
      mode: "Auto-Synced to Cloud",
    },
    routeLink: "/ecosystem",
    routeLabel: "Explore App & Web Sync",
  },
  {
    id: "reports",
    name: "GST Filing & Financial Reports",
    tagline: "Net Profit = Sales - Purchases - Operating Expenses with GSTR Summaries",
    badge: "CA-Ready Audit",
    icon: ReceiptIcon,
    accent: "rose",
    description: "Generate CA-ready tax reports and accurate profit & loss statements. Operating expenses are strictly isolated from inventory procurement to ensure cost of goods sold is never double-counted.",
    keyCapabilities: [
      "GSTR-1 (Outward supplies) & GSTR-3B tax summaries",
      "Accurate P&L: Net Profit = Sales - Purchases - Operating Expenses",
      "Item-wise sales & top-selling products report",
      "Export to Excel & CSV with 1-click for tax filing",
      "Trilingual interface: English, Gujarati (ગુજરાતી), and Hindi (हिंदी)",
    ],
    samplePreview: {
      type: "list",
      title: "Tax & Financial Analytics (Current Month)",
      items: [
        { name: "Total Gross Sales", qty: "482 Invoices", rate: "Revenue", total: "₹4,18,500" },
        { name: "Stock Purchases (COGS)", qty: "18 Inward Bills", rate: "Inventory", total: "-₹3,12,000" },
        { name: "Operating Expenses (Shop)", qty: "Rent, Power, Tea", rate: "Overhead", total: "-₹22,400" },
        { name: "Net Shop Profit", qty: "Real Earnings", rate: "Margin: 20%", total: "+₹84,100" },
      ],
      total: "GSTR-1 & 3B Ready",
      tax: "Output GST: ₹20,925",
      grand: "1-Click Export to Excel",
      customer: "CA Audit Statement",
      mode: "Trilingual: EN / GU / HI",
    },
    routeLink: "/gst-billing",
    routeLabel: "Explore GST & Reports",
  },
];

export default function WebAppFeatures() {
  const [selectedModule, setSelectedModule] = useState(webAppModules[0]);

  return (
    <section className="py-10 lg:py-14 bg-white border-y border-slate-200 relative overflow-hidden">
      {/* Decorative Subtle Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-2xs mb-3.5">
            <StoreIcon className="w-3.5 h-3.5 text-teal-600" />
            <span>Complete DukanHisab Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Every Feature Built for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
              Real Shop Operations.
            </span>
          </h2>

          <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Directly modeled on the production DukanHisab system. Click any module below to inspect its real workflow logic, capabilities, and live data models.
          </p>

          {/* Regional Languages Pill */}
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
            <span>🌐 Available in 3 Languages:</span>
            <span className="text-teal-700 font-bold">English</span>
            <span className="text-slate-300">•</span>
            <span className="text-teal-700 font-bold">ગુજરાતી</span>
            <span className="text-slate-300">•</span>
            <span className="text-teal-700 font-bold">हिंदी</span>
          </div>
        </div>

        {/* Top Interactive Module Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {webAppModules.map((mod) => {
            const isSelected = selectedModule.id === mod.id;
            const IconComponent = mod.icon;

            return (
              <button
                key={mod.id}
                onClick={() => setSelectedModule(mod)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-teal-600 text-white shadow-md shadow-teal-700/20 scale-[1.02]"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isSelected ? "text-white" : "text-teal-600"}`} />
                <span>{mod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Deep-Dive Showcase Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & Capabilities */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700 bg-teal-100 border border-teal-200 px-3 py-1 rounded-full">
                  {selectedModule.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">DukanHisab Module</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {selectedModule.name}
              </h3>

              <p className="text-sm sm:text-base font-semibold text-teal-800 leading-snug">
                {selectedModule.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedModule.description}
              </p>

              {/* Key Bullet Capabilities */}
              <div className="pt-2 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Module Capabilities:
                </p>
                <div className="space-y-2">
                  {selectedModule.keyCapabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3 text-teal-600" />
                      </div>
                      <span className="leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <Link
                  href={selectedModule.routeLink}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-sm group cursor-pointer"
                >
                  <span>{selectedModule.routeLabel}</span>
                  <ArrowRightIcon className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Live Data Simulation Widget */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-5 sm:p-6 space-y-4">
                
                {/* Header of Preview Box */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping"></span>
                    <span className="text-xs font-bold text-slate-900 truncate max-w-[280px]">
                      {selectedModule.samplePreview.title}
                    </span>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded-md shrink-0">
                    {selectedModule.samplePreview.mode}
                  </span>
                </div>

                {/* Table / List of Preview Items */}
                <div className="divide-y divide-slate-100 text-xs">
                  {selectedModule.samplePreview.items.map((it, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between gap-2">
                      <div className="pr-2 truncate">
                        <p className="font-bold text-slate-800 truncate">{it.name}</p>
                        <p className="text-[10px] text-slate-400">{it.qty}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-slate-500 block">{it.rate}</span>
                        <span className="font-extrabold text-slate-900 font-mono">{it.total}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Summary Strip */}
                <div className="pt-3 border-t border-slate-200 bg-slate-50/80 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      {selectedModule.samplePreview.tax}
                    </span>
                    <span className="font-black text-slate-900 text-sm">
                      {selectedModule.samplePreview.total}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-teal-600 font-bold block">
                      System Status
                    </span>
                    <span className="font-extrabold text-teal-700 font-mono text-xs">
                      {selectedModule.samplePreview.grand}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 6 Quick Module Metric Pills */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: "POS Speed", val: "0.18s", sub: "Scan to Print" },
            { label: "Online Storefront", val: "1-Click", sub: "Live Stock Sync" },
            { label: "Galla Closure", val: "Denominations", sub: "₹2000 to Coins" },
            { label: "Udhar Loss", val: "0%", sub: "WhatsApp Reminders" },
            { label: "Offline Mode", val: "100%", sub: "Batch Sync Protocol" },
            { label: "Languages", val: "EN / GU / HI", sub: "Trilingual Engine" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-2xl text-center shadow-2xs hover:border-teal-300 transition-colors"
            >
              <span className="text-base sm:text-lg font-black text-slate-900 block font-mono">
                {stat.val}
              </span>
              <span className="text-xs font-bold text-teal-700 block mt-0.5">
                {stat.label}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
