"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import {
  ArrowRightIcon,
  GooglePlayIcon,
  CheckIcon,
  StoreIcon,
  SmartphoneIcon,
  MonitorIcon,
  ChevronDownIcon
} from "../components/Icons";
import FunctionalityLottieAnimation from "../components/FunctionalityLottieAnimation";


export default function BusinessTypesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeModuleId, setActiveModuleId] = useState("pos");

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };


  const faqs = [
    {
      q: "Do I need separate software or settings for different business types?",
      a: "No! DukanHisab is a universal, clean, and flexible retail software. Whether you run a Kirana, Garment shop, Mobile store, Hardware, Medical store, or Wholesale business, you can start billing immediately without complicated setups, industry modules, or staff training.",
    },
    {
      q: "Does it work offline when the shop internet stops working?",
      a: "Yes! You can scan barcodes, generate bills, and record transactions without internet. The moment your device connects to the internet, all records sync automatically to the cloud and web panel.",
    },
    {
      q: "Can I print bills on standard Bluetooth thermal printers?",
      a: "Yes, DukanHisab works with all standard 2-inch and 3-inch Bluetooth thermal printers, USB desktop printers, and regular A4 printers. You can also send instant digital receipts directly to customers via WhatsApp.",
    },
    {
      q: "How does customer Khata & Udhar recovery work?",
      a: "Every customer gets a dedicated digital Khata ledger. You can record credit sales, partial payments, and send 1-click WhatsApp reminders with your UPI QR code attached for 3x faster udhar recovery.",
    },
    {
      q: "Can I manage multiple shops or counter staff logins?",
      a: "Yes! With our Premium and Lifetime plans, you can manage multiple branches and assign cashier staff logins from a single mobile login or PC web dashboard.",
    },
    {
      q: "Is GST billing available for all businesses?",
      a: "Yes, you can generate both GST and Non-GST compliant invoices with accurate HSN codes, CGST, SGST, IGST tax breakdown, and instant print/PDF export.",
    },
  ];

  const coreModules = [
    {
      id: "pos",
      tabLabel: "Counter POS",
      label: "Counter POS Billing",
      emoji: "⚡",
      badge: "0.5s Fast Billing",
      headline: "Point-and-Shoot Barcode Scanning & Instant Receipts",
      desc: "Scan products with your mobile camera or barcode gun in under 0.5 seconds. Fast item search, split payments (Cash & UPI), instant discounts, and print 2-inch/3-inch Bluetooth thermal receipts with zero lag.",
      stats: [
        { label: "Scan Speed", val: "< 0.5s Camera / Gun" },
        { label: "Invoice Format", val: "Thermal & WhatsApp" },
        { label: "Offline Mode", val: "100% Without Net" },
      ],
      terminalUrl: "dukanhisab.in/shop • Counter POS Billing",
      subhead: "Fast Counter POS & Barcode Scanner",
      statusPill: "#BILL-4091",
      contextText: "Counter 1 (Walk-in Customer)",
      col1Title: "Items Scanned",
      col2Title: "Rate",
      items: [
        { name: "Fortune Sunlite Oil 1L", desc: "1 Pcs (Barcode #89012)", val: "₹175" },
        { name: "Tata Salt 1kg Pack", desc: "2 Pkts (Barcode #89045)", val: "₹56" },
        { name: "Amul Butter 100g", desc: "2 Pcs (Barcode #89091)", val: "₹116" },
      ],
      footerSub: "Cash Received: ₹500 (Change: ₹153)",
      tag: "Thermal Printer Connected ✓",
      footerLabel: "Total Amount",
      footerTotal: "₹347",
      bottomBadge: "WhatsApp Bill & Thermal Print Ready",
    },
    {
      id: "khata",
      tabLabel: "Customer Khata",
      label: "Customer Khata & Udhar",
      emoji: "📒",
      badge: "Recover Udhar 3x Faster",
      headline: "Replace Paper Khatabook with 1-Click WhatsApp Reminders",
      desc: "Never lose track of customer credit again. See live customer balances, record part payments, set credit limits, and send polite automated WhatsApp payment reminders with your UPI QR code attached.",
      stats: [
        { label: "Recovery", val: "3x Faster via WhatsApp" },
        { label: "Payment Links", val: "Instant UPI QR" },
        { label: "History", val: "100% Lifetime Record" },
      ],
      terminalUrl: "dukanhisab.in/shop • Customer Khata Ledger",
      subhead: "Digital Khata & Automated UPI Collection",
      statusPill: "Khata Active",
      contextText: "Rahul Patel (+91 98765 43210)",
      col1Title: "Transaction History",
      col2Title: "Amount",
      items: [
        { name: "Grocery Purchase (Bill #3019)", desc: "10 Oct • Credit Added to Khata", val: "+₹1,450" },
        { name: "Cash Payment Received", desc: "08 Oct • Counter Payment", val: "-₹1,000" },
        { name: "Milk & Daily Items", desc: "05 Oct • Credit Added to Khata", val: "+₹620" },
      ],
      footerSub: "1-Tap 'Send WhatsApp Reminder' Button Active",
      tag: "WhatsApp Reminder with UPI QR Sent ✓",
      footerLabel: "Total Due Balance",
      footerTotal: "₹1,070",
      bottomBadge: "Automated WhatsApp Payment Reminder",
    },
    {
      id: "stock",
      tabLabel: "Stock & Inventory",
      label: "Stock & Inventory",
      emoji: "📦",
      badge: "Zero Stock-Outs",
      headline: "Real-Time Stock Deduction & Automated Low-Stock Alerts",
      desc: "Track live quantities across your entire shop in real time. Quantities deduct automatically when you bill. Get instant low-stock alerts before items run out, and track product profit margins easily.",
      stats: [
        { label: "Stock Sync", val: "Auto on Every Sale" },
        { label: "Low Stock Alert", val: "Instant Warning" },
        { label: "Profit Margins", val: "Live Per-Item" },
      ],
      terminalUrl: "dukanhisab.in/shop • Inventory Stock Manager",
      subhead: "Live Shelf Stock & Product Quantities",
      statusPill: "Inventory Live",
      contextText: "Main Warehouse & Counter Shelf",
      col1Title: "Product & Stock Status",
      col2Title: "Stock Level",
      items: [
        { name: "Fortune Oil 5L Can", desc: "In Stock: 24 Cans • Purchase: ₹710", val: "Healthy Stock" },
        { name: "Tata Tea Gold 500g", desc: "⚠️ Reorder Warning: Only 2 Pkts Left", val: "LOW STOCK" },
        { name: "Kolam Rice 25kg Bag", desc: "In Stock: 14 Bags • Purchase: ₹1,050", val: "Healthy Stock" },
      ],
      footerSub: "Stock Value: ₹1,85,400 across 340 Items",
      tag: "Stock Auto-Decrements with Billing ✓",
      footerLabel: "Total Catalog",
      footerTotal: "340 SKUs",
      bottomBadge: "Instant Low-Stock Alert Notifications",
    },
    {
      id: "website",
      tabLabel: "Shop Website",
      label: "1-Click Shop Website",
      emoji: "🌐",
      badge: "Free Online Storefront",
      headline: "Publish an Online Catalog & Receive Direct WhatsApp Orders",
      desc: "Turn your physical shop into an online e-commerce website with 1 click. Zero hosting fees. Customers browse your products on their phone and place orders directly to your WhatsApp with quantities and addresses pre-formatted.",
      stats: [
        { label: "Setup Time", val: "Instant 1-Click" },
        { label: "Customer Orders", val: "Direct to WhatsApp" },
        { label: "Hosting Cost", val: "₹0 Forever" },
      ],
      terminalUrl: "dukanhisab.in/shree-ganesh-store • Online Catalog",
      subhead: "Branded Digital Storefront for Customers",
      statusPill: "Store Online",
      contextText: "Share Link: dukanhisab.in/your-shop",
      col1Title: "Featured Products Online",
      col2Title: "Price",
      items: [
        { name: "Pure Cow Ghee 1L Jar", desc: "In Stock • 1-Click WhatsApp Order", val: "₹650" },
        { name: "Organic Jaggery Powder 1kg", desc: "In Stock • 1-Click WhatsApp Order", val: "₹95" },
        { name: "Premium Almonds 500g Pouch", desc: "In Stock • 1-Click WhatsApp Order", val: "₹450" },
      ],
      footerSub: "Customers Order Directly to Your WhatsApp 24/7",
      tag: "Zero Commission & Free Web Hosting ✓",
      footerLabel: "Catalog Status",
      footerTotal: "Active",
      bottomBadge: "Instant WhatsApp Order Notifications",
    },
    {
      id: "webpanel",
      tabLabel: "Web Panel",
      label: "Web Command Panel",
      emoji: "💻",
      badge: "Big Screen PC & Laptop",
      headline: "Full-Screen Web Dashboard & Bulk Excel Product Uploads",
      desc: "Manage your shop from any PC or laptop browser at dukanhisab.in/shop. Bulk upload thousands of items with Excel in seconds, monitor multiple cashier staff logins, and access multi-branch controls effortlessly.",
      stats: [
        { label: "Browser Access", val: "Chrome, Safari, Edge" },
        { label: "Bulk Upload", val: "Excel Sheets in 1s" },
        { label: "Multi-Store", val: "Up to 5 Branches" },
      ],
      terminalUrl: "dukanhisab.in/shop • Web Admin Dashboard",
      subhead: "Desktop Command Center for PC & Laptop",
      statusPill: "Cloud Active",
      contextText: "Branch: Surat Main Branch (#01)",
      col1Title: "Web Dashboard Operations",
      col2Title: "Status",
      items: [
        { name: "Today's Gross Sales (All Counters)", desc: "148 Invoices Generated Across 2 Tills", val: "₹48,950" },
        { name: "Active Cashier Staff Logins", desc: "Counter 1, Counter 2 & Store Admin", val: "3 Active" },
        { name: "Excel Product Catalog Import", desc: "5,000 SKUs Processed and Synced", val: "Completed" },
      ],
      footerSub: "Zero Software Installation Needed on PC",
      tag: "Live Cloud Synced Across All Devices ✓",
      footerLabel: "Counters",
      footerTotal: "Live 2/2",
      bottomBadge: "Accessible from Any Computer Browser",
    },
    {
      id: "cashbook",
      tabLabel: "Cashbook & Reports",
      label: "Cashbook & Reports",
      emoji: "📈",
      badge: "Zero Error Cash Tally",
      headline: "Daily Cash Galla Balancing & Clear Net Profit Insights",
      desc: "Close your shop at night with complete peace of mind. DukanHisab automatically calculates opening cash, cash sales, UPI collections, supplier payouts, and exact cash in your drawer with zero math mistakes.",
      stats: [
        { label: "Closing Tally", val: "Zero Error Math" },
        { label: "Profit Tracking", val: "Live Net Margins" },
        { label: "Reports", val: "PDF & Excel Export" },
      ],
      terminalUrl: "dukanhisab.in/shop • Daily Cash Galla Closing",
      subhead: "Cash Drawer Reconciliation & Profit/Loss",
      statusPill: "Reconciled",
      contextText: "Today's Cash Drawer Evening Tally",
      col1Title: "Cash Flow Inflow & Outflow",
      col2Title: "Tally",
      items: [
        { name: "Morning Opening Cash in Drawer", desc: "Cash In Hand at Shop Opening", val: "₹5,000" },
        { name: "Cash Counter Sales Today", desc: "+ Cash Collected from Invoices", val: "+₹18,450" },
        { name: "Khata Udhar Recovered in Cash", desc: "+ Customer Udhar Received", val: "+₹4,200" },
        { name: "Supplier Payouts & Shop Expenses", desc: "- Cash Paid out from Drawer", val: "-₹6,800" },
      ],
      footerSub: "Exact Cash in Galla Drawer (100% Balanced)",
      tag: "Zero-Stress Evening Shutter Closing ✓",
      footerLabel: "Cash in Drawer",
      footerTotal: "₹20,850",
      bottomBadge: "Daily Closing Cash Report Generated",
    },
  ];

  const currentModule = coreModules.find((m) => m.id === activeModuleId) || coreModules[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf7f2] via-[#f2fbf7] to-white pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-16 border-b border-slate-200/90">

          {/* Subtle Ambient Glowing Mesh */}
          <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Top Eyebrow Pill + Headline */}
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-emerald-100/90 border border-emerald-300/80 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-black tracking-wide uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>EVERY TOOL YOUR SHOP NEEDS IN ONE SYSTEM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                One Simple Platform for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800">
                  Every Retail &amp; Wholesale Counter.
                </span>
              </h1>

              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-medium max-w-2xl mx-auto">
                No complex training or complicated setups. From rapid barcode billing and digital customer Khata to real-time inventory, web management, and automated evening cash tally — run your entire store effortlessly.
              </p>
            </div>

            {/* Modern Segmented Feature Switcher Tabs */}
            <div className="max-w-6xl mx-auto mb-10 px-2 sm:px-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 p-1.5 sm:p-2 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md">
                {coreModules.map((m) => {
                  const isActive = m.id === activeModuleId;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setActiveModuleId(m.id)}
                      className={`group relative flex items-center justify-center gap-2 py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer text-center select-none active:scale-95 ${
                        isActive
                          ? "bg-[#036272] text-white shadow-md shadow-teal-950/20 scale-[1.02]"
                          : "text-slate-600 hover:text-[#036272] hover:bg-slate-100/80"
                      }`}
                    >
                      <span className="text-base sm:text-lg leading-none shrink-0 group-hover:scale-110 transition-transform">
                        {m.emoji}
                      </span>
                      <span className="whitespace-nowrap tracking-tight">
                        {m.tabLabel || m.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left Column: Feature Details, Fast Highlights, CTAs & Badges */}
              <div className="lg:col-span-6 space-y-6 text-left">

                {/* Active Module Banner Pill */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{currentModule.emoji}</span>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
                      {currentModule.badge}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                      {currentModule.headline}
                    </h2>
                  </div>
                </div>

                {/* Module Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {currentModule.desc}
                </p>

                {/* 3 Module Highlights / Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  {currentModule.stats.map((s, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-tight">
                        {s.label}
                      </div>
                      <div className="text-sm sm:text-base font-black text-emerald-700 mt-0.5">
                        {s.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-700/25 hover:shadow-xl transition-all active:scale-98 group cursor-pointer"
                  >
                    <GooglePlayIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span>Download App</span>
                  </a>

                  <a
                    href="https://dukanhisab.in/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-slate-300 shadow-2xs hover:border-emerald-500 hover:text-emerald-700 transition-all cursor-pointer group"
                  >
                    <MonitorIcon className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <span>Open Web Panel</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-emerald-600 transition-transform" />
                  </a>

                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 py-2 px-2 transition-colors cursor-pointer"
                  >
                    <span>See How It Works</span>
                    <span>↓</span>
                  </a>
                </div>

                {/* 4 Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-200/90 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Zero Training</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Offline</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>GST &amp; Non-GST</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Multi-Device Sync</span>
                  </div>
                </div>

              </div>

              {/* Right Column: High-Polished Interactive Terminal / Feature Mockup */}
              <div className="lg:col-span-6 relative">

                {/* Floating Top Badge */}
                <div className="absolute -top-3.5 -right-2 z-20 bg-slate-900 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700 flex items-center gap-1.5 hidden sm:flex">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{currentModule.label}</span>
                </div>

                {/* Terminal Mockup Window */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden transition-all duration-300">

                  {/* Terminal Header Bar */}
                  <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      <span className="ml-2 text-xs font-mono text-slate-300 font-bold truncate max-w-[220px] sm:max-w-none">
                        {currentModule.terminalUrl}
                      </span>
                    </div>

                    <span className="text-[10px] uppercase font-black tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-700/60 px-2 py-0.5 rounded-full shrink-0">
                      Live Preview
                    </span>
                  </div>

                  {/* Module Banner & Header */}
                  <div className="relative px-5 py-3.5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 flex items-center justify-between border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-emerald-200/60 flex items-center justify-center p-1.5 shrink-0 overflow-hidden text-2xl">
                        {currentModule.emoji}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs sm:text-sm font-black text-slate-900">
                            {currentModule.label}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-800">
                          {currentModule.subhead}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Status</span>
                      <span className="text-xs font-mono font-black text-emerald-800 bg-white px-2.5 py-0.5 rounded-lg border border-emerald-200 shadow-2xs inline-block">
                        {currentModule.statusPill}
                      </span>
                    </div>
                  </div>

                  {/* Live Module Display Card */}
                  <div className="p-4 sm:p-6 bg-slate-50/70 space-y-4">

                    {/* Header Info */}
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-slate-500 font-medium">{currentModule.contextText}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>Active System</span>
                      </div>
                    </div>

                    {/* Line Items Table */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>{currentModule.col1Title}</span>
                        <span>{currentModule.col2Title}</span>
                      </div>

                      {currentModule.items.map((item, i) => (
                        <div key={i} className="flex items-start justify-between text-xs bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                          <div>
                            <div className="font-bold text-slate-800">{item.name}</div>
                            <div className="text-[11px] text-slate-500 font-mono mt-0.5">{item.desc}</div>
                          </div>
                          <span className="font-black text-slate-900 shrink-0 ml-3">{item.val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Total & Summary Row */}
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between bg-emerald-50/80 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-4 border-t-2 border-emerald-500">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-600">
                          {currentModule.footerSub}
                        </div>
                        <div className="text-[11px] font-black text-emerald-800 mt-0.5 flex items-center gap-1">
                          <span>{currentModule.tag}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">{currentModule.footerLabel}</span>
                        <span className="text-xl sm:text-2xl font-black text-emerald-700">
                          {currentModule.footerTotal}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-3 -left-3 z-20 bg-white border border-emerald-200/90 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 hidden sm:flex">
                  <span className="text-emerald-600">✓</span>
                  <span>{currentModule.bottomBadge}</span>
                </div>

              </div>

            </div>

            {/* Quick 15-Trade Ticker Ribbon Below Hero */}
            {/* <div className="mt-12 pt-6 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-medium text-slate-600">
                <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mr-1">
                  Supported Trades:
                </span>
                {[
                  "Kirana Store", "Mobile Shop", "Hardware", "Garments", "Electrical",
                  "Medical Store", "Computer Shop", "Electronics", "Furniture", "Marble & Tiles",
                  "Automobile", "Wholesale", "Trading", "Packaging", "Any Business"
                ].map((tradeName, idx) => (
                  <a
                    key={idx}
                    href="#choose-business"
                    onClick={() => {
                      const match = allBusinessTypes.find(b => b.name.toLowerCase().includes(tradeName.toLowerCase()));
                      if (match) setSearchQuery(match.name);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors shadow-2xs cursor-pointer"
                  >
                    {tradeName}
                  </a>
                ))}
              </div>
            </div> */}

          </div>
        </section>

        {/* ===================== JOIN THOUSANDS OF SHOPKEEPERS ACROSS INDIA ===================== */}
        <section id="how-it-works" className="py-10 sm:py-12 bg-[#f8faf9] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: Stats & Description */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Join Thousands of <br />Shopkeepers Across India
                </h2>
                <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
                  From small retail shops to large wholesale businesses, DukanHisab is trusted by shopkeepers in every industry.
                </p>

                {/* 4 Stats */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-slate-900">10K+</div>
                    <div className="text-xs text-slate-500 font-medium">Happy Businesses</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-amber-500">4.8 ★</div>
                    <div className="text-xs text-slate-500 font-medium">Play Store Rating</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-teal-700">100%</div>
                    <div className="text-xs text-slate-500 font-medium">Made for India</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-slate-900">All Types</div>
                    <div className="text-xs text-slate-500 font-medium">of Businesses</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#036272] hover:bg-[#024f5c] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <GooglePlayIcon className="w-4 h-4 text-white" />
                    <span>Download App</span>
                  </a>
                  <Link
                    href="/resources#stories"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-5 py-3 rounded-xl border border-slate-200 transition-all"
                  >
                    <span>See Success Stories</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Live Interactive Functionality Simulation & Animation */}
              <div className="lg:col-span-7 space-y-4">
                <FunctionalityLottieAnimation />

                {/* Cities Ticker Pill */}
                <div className="bg-emerald-950 text-white rounded-2xl p-3.5 px-4 flex items-center justify-between gap-3 text-xs shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-bold text-emerald-300">Live in 120+ Indian Cities:</span>
                    <span className="text-slate-300 text-[11px] hidden sm:inline">Surat, Ahmedabad, Rajkot, Vadodara, Jaipur, Indore, Pune &amp; more</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-900 text-emerald-200 px-2 py-1 rounded-md shrink-0">
                    10,000+ Active Dukans
                  </span>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* ===================== FREQUENTLY ASKED QUESTIONS ===================== */}
        <section className="py-10 sm:py-14 bg-slate-50/70 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* FAQ Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-800 text-xs font-black uppercase tracking-wider shadow-2xs">
                <span>HELP &amp; COMMON QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-medium leading-relaxed">
                Clear, straightforward answers about how DukanHisab adapts to your daily counter operations.
              </p>
            </div>

            {/* Single-Column Premium Accordion List */}
            <div className="space-y-3 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-teal-500/60 shadow-md shadow-teal-900/5 ring-2 ring-teal-500/10"
                        : "bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left p-4 sm:p-5 gap-4 cursor-pointer select-none transition-colors"
                    >
                      <span className={`text-sm sm:text-base font-extrabold leading-snug transition-colors ${
                        isOpen ? "text-[#036272]" : "text-slate-900"
                      }`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#036272] text-white rotate-180 shadow-xs"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}>
                        <ChevronDownIcon className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Still Have Questions? Banner */}
            <div className="mt-10 max-w-3xl mx-auto bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Still have questions about your shop setup?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Our team is available 7 days a week to help you get started.
                </p>
              </div>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 bg-[#036272] hover:bg-[#02505d] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all shrink-0 active:scale-95 cursor-pointer"
              >
                <span>Chat with Support</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* ===================== GREEN CTA BANNER WITH SPLASH SCREEN ===================== */}
        <CtaBanner
          title="Ready to Digitize Your Business?"
          subtitle="No matter what business you run."
          description="No matter what business you run, DukanHisab is here to help. Start today and experience the difference!"
          slogan="Apni Dukaan Ka Hisab, Ab Digital!"
          secondaryButtonText="Explore Features"
          secondaryButtonHref="/features"
          checks={["Free Plan Available", "Works Offline", "Secure & Reliable", "Made for Indian Businesses"]}
          imageSrc="/images/app-splash-screen.png"
        />
      </main>

      <Footer />
    </div>
  );
}
