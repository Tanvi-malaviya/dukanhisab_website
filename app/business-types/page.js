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
  MonitorIcon
} from "../components/Icons";
import FunctionalityLottieAnimation from "../components/FunctionalityLottieAnimation";


export default function BusinessTypesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTradeId, setActiveTradeId] = useState("kirana");

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };


  const faqs = [
    {
      q: "Is DukanHisab suitable for my business type?",
      a: "Yes! DukanHisab is custom engineered to adapt to kirana, mobile shops, hardware, garments, electronics, pharmacies, and wholesale businesses with tailored product attributes and billing formats.",
    },
    {
      q: "Does it work offline?",
      a: "Yes, you can generate bills, add items to cart, and record customer transactions without internet. As soon as you connect online, all data securely backs up to the cloud.",
    },
    {
      q: "Can I manage multiple shops?",
      a: "Yes! With our Premium and Lifetime plans, you can manage up to 2 or 5 branches respectively from a single mobile login or web dashboard.",
    },
    {
      q: "Is GST billing available for all businesses?",
      a: "Yes, you can generate both GST and Non-GST compliant invoices with accurate HSN codes, CGST, SGST, IGST tax breakdown, and instant print/PDF export.",
    },
  ];

  const heroTrades = [
    {
      id: "kirana",
      label: "Kirana & FMCG",
      emoji: "🛒",
      img: "/images/business-types/kirana.png",
      badge: "Scale & Khata Ready",
      headline: "Loose Grams, Fast Barcode & Udhar Khata",
      desc: "Connect digital weighing scales, sell loose dal/rice by weight, scan Fortune & Parle barcodes instantly, and track monthly khata book with automatic WhatsApp reminders.",
      receipt: {
        billNo: "INV-9021",
        customer: "Ramesh Bhai (Regular)",
        items: [
          { name: "Fortune Kolam Rice (25kg Bag)", qty: "1 Bag", rate: "₹1,250" },
          { name: "Loose Jeera (Scale: 250g)", qty: "0.25 kg", rate: "₹95" },
          { name: "Tata Tea Gold (500g)", qty: "2 Pkts", rate: "₹380" },
        ],
        total: "₹1,725",
        khataBalance: "Previous Khata: ₹850 Due",
        tag: "Weighing Scale Auto-Synced ✓",
      },
      stats: [
        { label: "Billing Speed", val: "< 3 Sec" },
        { label: "Loose Items", val: "Scale Sync" },
        { label: "Udhar Reminders", val: "Free SMS/WA" },
      ],
    },
    {
      id: "mobile",
      label: "Mobile & Tech",
      emoji: "📱",
      img: "/images/business-types/mobile.png",
      badge: "IMEI & Warranty Tracking",
      headline: "Serial Numbers, Warranty Slips & Repair Jobs",
      desc: "Never lose track of phone serials. Scan IMEI at point of sale, generate manufacturer warranty slips with customer signatures, and manage mobile accessory margins easily.",
      receipt: {
        billNo: "MOB-4102",
        customer: "Ankit Sharma",
        items: [
          { name: "Redmi Note 13 5G (8/256GB)", qty: "IMEI: 863920104829104", rate: "₹18,499" },
          { name: "Tempered Glass + Poly Back Cover", qty: "1 Combo", rate: "₹399" },
        ],
        total: "₹18,898",
        khataBalance: "1-Yr Official Warranty Attached",
        tag: "Dual IMEI Verified ✓",
      },
      stats: [
        { label: "IMEI Scanner", val: "Camera / Gun" },
        { label: "Warranty Slips", val: "Auto PDF" },
        { label: "Accessory Margins", val: "High Profit View" },
      ],
    },
    {
      id: "garment",
      label: "Garments & Apparel",
      emoji: "👗",
      img: "/images/business-types/garment.png",
      badge: "Size & Color Matrix",
      headline: "Sizes (S/M/L/XL), Barcode Tags & Festive Sales",
      desc: "Manage multi-variant inventory effortlessly. Print thermal barcode stickers with size, color, brand, and MRP. Handle trial returns and festive discounts in one tap.",
      receipt: {
        billNo: "GAR-2831",
        customer: "Pooja Ben",
        items: [
          { name: "Cotton Kurti (Teal - Size L)", qty: "1 Pcs (Tag #8901)", rate: "₹899" },
          { name: "Rayon Leggings (Black - Free)", qty: "2 Pcs (Tag #8904)", rate: "₹598" },
        ],
        total: "₹1,497",
        khataBalance: "Exchange within 7 Days Allowed",
        tag: "Barcode Sticker Printed ✓",
      },
      stats: [
        { label: "Variant Matrix", val: "Size & Color" },
        { label: "Barcode Printing", val: "Thermal Tags" },
        { label: "GST Rate", val: "5% / 12% Auto" },
      ],
    },
    {
      id: "hardware",
      label: "Hardware & Paints",
      emoji: "🔧",
      img: "/images/business-types/hardware.png",
      badge: "Units, Feet & Contractor Ledgers",
      headline: "Multi-Unit Conversions, Contractor Rates & Challans",
      desc: "Sell in Bags, Bundles, Kgs, Liters, or Running Feet. Store contractor-specific rates and dispatch goods with delivery challans before converting to final tax invoice.",
      receipt: {
        billNo: "HDW-7740",
        customer: "Contractor Bharat Bhai",
        items: [
          { name: "UltraTech Super Cement", qty: "50 Bags @ ₹380", rate: "₹19,000" },
          { name: "Asian Paints Apex Exterior (20L)", qty: "2 Buckets", rate: "₹7,200" },
          { name: "Tata Tiscon 12mm TMT Bars", qty: "120 Kgs", rate: "₹7,800" },
        ],
        total: "₹34,000",
        khataBalance: "Contractor Ledger: ₹45,000 Outstanding",
        tag: "Contractor Rate (-5%) Applied ✓",
      },
      stats: [
        { label: "Units Handled", val: "Bags / Ft / Kg" },
        { label: "Contractor Khata", val: "Bulk Ledger" },
        { label: "Delivery Challan", val: "Instant Convert" },
      ],
    },
    {
      id: "medical",
      label: "Pharma & Chemist",
      emoji: "💊",
      img: "/images/business-types/medical.png",
      badge: "Batch & Expiry Guardian",
      headline: "Batch Numbers, Expiry Dates & HSN GST Billing",
      desc: "Stay completely compliant with drug regulations. Automatically track near-expiry tablets, log strip vs tablet cuts, and manage doctor referrals and wholesale supplier returns.",
      receipt: {
        billNo: "RX-5120",
        customer: "Dr. Kothari Ref - Walk-in",
        items: [
          { name: "Dolo 650mg (Batch: DL-902, Exp: 10/27)", qty: "2 Strips (30 Tabs)", rate: "₹68" },
          { name: "Azithral 500mg (Batch: AZ-411, Exp: 04/28)", qty: "1 Strip (5 Tabs)", rate: "₹119" },
        ],
        total: "₹187",
        khataBalance: "Schedule H Register Verified",
        tag: "Batch & Expiry Safe ✓",
      },
      stats: [
        { label: "Expiry Warning", val: "30-90 Days Alert" },
        { label: "Strip Cuts", val: "Per-Tab Math" },
        { label: "Drug Invoices", val: "HSN Compliant" },
      ],
    },
    {
      id: "wholesale",
      label: "Wholesale & Mandi",
      emoji: "📦",
      img: "/images/business-types/wholesale.png",
      badge: "Bulk Carton & Multi-Pricing",
      headline: "Carton Breakups, B2B Invoicing & Supplier Credit",
      desc: "Scale your high-volume distribution. Auto-calculate Carton-to-Unit breakdown, apply Tier-1/Tier-2/Tier-3 pricing tiers, and generate bulk e-invoices with transport vehicle info.",
      receipt: {
        billNo: "WHL-1092",
        customer: "Siddhi Traders (Retailer)",
        items: [
          { name: "Fortune Sunflower Oil 1L (Carton: 16)", qty: "10 Cartons (160 Pkts)", rate: "₹18,400" },
          { name: "Madhur Pure Sugar 50kg Jute Bag", qty: "8 Bags (400 Kgs)", rate: "₹16,800" },
        ],
        total: "₹35,200",
        khataBalance: "Credit Due Date: 15 Oct 2026",
        tag: "Tier-2 Distributor Margin Applied ✓",
      },
      stats: [
        { label: "Box to Unit", val: "Auto Split" },
        { label: "B2B Credit", val: "Due Date Tracker" },
        { label: "E-Way Invoicing", val: "Transport Ready" },
      ],
    },
  ];

  const currentHeroTrade = heroTrades.find((t) => t.id === activeTradeId) || heroTrades[0];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf7f2] via-[#f2fbf7] to-white pt-8 pb-14 lg:pt-12 lg:pb-16 border-b border-slate-200/90">

          {/* Subtle Ambient Glowing Mesh */}
          <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Top Eyebrow Pill + Headline */}
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-emerald-100/90 border border-emerald-300/80 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-black tracking-wide uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>TAILORED FOR 30+ INDIAN RETAIL &amp; WHOLESALE TRADES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Software That Truly Speaks <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800">
                  Your Trade &amp; Counter.
                </span>
              </h1>

              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-medium max-w-2xl mx-auto">
                No two businesses run the same. Whether you bill in loose grams, track mobile phones by IMEI, organize garments by size and color, or manage contractor credit in hardware — DukanHisab configures itself to your exact everyday workflow.
              </p>
            </div>

            {/* Interactive Industry Switcher Pill Tabs */}
            <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2 scrollbar-none">
              <div className="inline-flex items-center gap-1.5 p-1.5 bg-white/95 rounded-2xl border border-slate-200 shadow-md backdrop-blur-sm">
                {heroTrades.map((t) => {
                  const isActive = t.id === activeTradeId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTradeId(t.id)}
                      className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${isActive
                          ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-md shadow-emerald-700/25 scale-[1.02]"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                        }`}
                    >
                      <span className="text-base">{t.emoji}</span>
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Showcase Grid: Left Trade Capability, Right Live POS Terminal */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Left Column: Trade Details, Fast Features, CTAs & Trust Badges */}
              <div className="lg:col-span-6 space-y-6 text-left">

                {/* Active Trade Banner Pill */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{currentHeroTrade.emoji}</span>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
                      {currentHeroTrade.badge}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                      {currentHeroTrade.headline}
                    </h2>
                  </div>
                </div>

                {/* Trade Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {currentHeroTrade.desc}
                </p>

                {/* 3 Trade Highlights / Capability Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  {currentHeroTrade.stats.map((s, idx) => (
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

              {/* Right Column: High-Polished Interactive POS Terminal Mockup */}
              <div className="lg:col-span-6 relative">

                {/* Floating Top Badge */}
                <div className="absolute -top-3.5 -right-2 z-20 bg-slate-900 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700 flex items-center gap-1.5 hidden sm:flex">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Auto-Formatted for {currentHeroTrade.label}</span>
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
                        dukanhisab.in/shop • {currentHeroTrade.label} POS
                      </span>
                    </div>

                    <span className="text-[10px] uppercase font-black tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-700/60 px-2 py-0.5 rounded-full shrink-0">
                      Live Preview
                    </span>
                  </div>

                  {/* Business Category Banner & Header */}
                  <div className="relative px-5 py-3.5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 flex items-center justify-between border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-emerald-200/60 flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                        {currentHeroTrade?.img && currentHeroTrade.img.trim() !== "" ? (
                          <Image
                            src={currentHeroTrade.img}
                            alt={currentHeroTrade.label || "Counter"}
                            width={44}
                            height={44}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <StoreIcon className="w-6 h-6 text-emerald-700" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">{currentHeroTrade.emoji}</span>
                          <span className="text-xs sm:text-sm font-black text-slate-900">
                            {currentHeroTrade.label} Counter
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-800">
                          {currentHeroTrade.badge}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Bill Reference</span>
                      <span className="text-xs font-mono font-black text-emerald-800 bg-white px-2.5 py-0.5 rounded-lg border border-emerald-200 shadow-2xs inline-block">
                        #{currentHeroTrade.receipt.billNo}
                      </span>
                    </div>
                  </div>

                  {/* Live POS Receipt Card */}
                  <div className="p-4 sm:p-6 bg-slate-50/70 space-y-4">

                    {/* Bill Header Info */}
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                      <div>
                        <span className="text-slate-400 font-medium">Customer: </span>
                        <span className="font-bold text-slate-800">{currentHeroTrade.receipt.customer}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>POS Active</span>
                      </div>
                    </div>

                    {/* Line Items Table */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>Items Billed</span>
                        <span>Amount</span>
                      </div>

                      {currentHeroTrade.receipt.items.map((item, i) => (
                        <div key={i} className="flex items-start justify-between text-xs bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                          <div>
                            <div className="font-bold text-slate-800">{item.name}</div>
                            <div className="text-[11px] text-slate-500 font-mono mt-0.5">{item.qty}</div>
                          </div>
                          <span className="font-black text-slate-900 shrink-0 ml-3">{item.rate}</span>
                        </div>
                      ))}
                    </div>

                    {/* Total & Khata Status Row */}
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between bg-emerald-50/80 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-4 border-t-2 border-emerald-500">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-600">
                          {currentHeroTrade.receipt.khataBalance}
                        </div>
                        <div className="text-[11px] font-black text-emerald-800 mt-0.5 flex items-center gap-1">
                          <span>{currentHeroTrade.receipt.tag}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">Total Amount</span>
                        <span className="text-xl sm:text-2xl font-black text-emerald-700">
                          {currentHeroTrade.receipt.total}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-3 -left-3 z-20 bg-white border border-emerald-200/90 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 hidden sm:flex">
                  <span className="text-emerald-600">✓</span>
                  <span>WhatsApp Bill &amp; Thermal Print Ready</span>
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
        <section id="how-it-works" className="py-16 bg-[#f8faf9] border-t border-slate-200">
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
                    className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95"
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
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mt-1 text-slate-600 text-xs sm:text-sm">
                  Get answers to common questions about using DukanHisab for different businesses.
                </p>
              </div>

              <Link
                href="/support#faq"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 border border-slate-200 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <span>View All FAQs</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-teal-300 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-slate-900 text-sm gap-2"
                  >
                    <span>{faq.q}</span>
                    <span className="text-teal-700 text-base font-black shrink-0">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-200 leading-relaxed animate-in fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
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
