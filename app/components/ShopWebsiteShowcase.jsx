"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  StoreIcon,
  GlobeIcon,
  WhatsAppIcon,
  CheckIcon,
  SmartphoneIcon,
  MonitorIcon,
  ArrowRightIcon,
  SparklesIcon,
  SearchIcon,
  TagIcon,
  ShieldCheckIcon
} from "./Icons";

export default function ShopWebsiteShowcase() {
  // Interactive state for the storefront simulator
  const [subdomain, setSubdomain] = useState("uma-stationery");
  const [themeColor, setThemeColor] = useState("#0F766E"); // Default Teal from docs
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductForWhatsApp, setSelectedProductForWhatsApp] = useState(null);

  const themeOptions = [
    { name: "Teal (Signature)", hex: "#0F766E", bgClass: "bg-[#0F766E]", textClass: "text-[#0F766E]" },
    { name: "Royal Blue", hex: "#2563EB", bgClass: "bg-[#2563EB]", textClass: "text-[#2563EB]" },
    { name: "Purple", hex: "#7C3AED", bgClass: "bg-[#7C3AED]", textClass: "text-[#7C3AED]" },
    { name: "Crimson Red", hex: "#DC2626", bgClass: "bg-[#DC2626]", textClass: "text-[#DC2626]" },
    { name: "Warm Amber", hex: "#D97706", bgClass: "bg-[#D97706]", textClass: "text-[#D97706]" },
  ];

  const sampleProducts = [
    { id: 1, name: "Classmate Notebook 172 Pgs (Pack of 6)", category: "Notebooks", price: "₹240", stock: "In Stock", inStock: true, image: "📓" },
    { id: 2, name: "Parker Vector Roller Ball Pen (Blue)", category: "Pens", price: "₹320", stock: "In Stock", inStock: true, image: "🖊️" },
    { id: 3, name: "A4 Copier Paper 75 GSM (500 Sheets Ream)", category: "Office Supplies", price: "₹290", stock: "In Stock", inStock: true, image: "📄" },
    { id: 4, name: "Faber-Castell Connector Pens (25 Shades)", category: "Art & Craft", price: "₹180", stock: "Low Stock (3 left)", inStock: true, image: "🎨" },
    { id: 5, name: "Casio MJ-120D Plus Desktop Calculator", category: "Office Supplies", price: "₹525", stock: "Out of Stock", inStock: false, image: "🧮" },
    { id: 6, name: "Doms Neon Graphite Pencils (Box of 10)", category: "Stationery", price: "₹60", stock: "In Stock", inStock: true, image: "✏️" },
  ];

  const categories = ["All", "Notebooks", "Pens", "Office Supplies", "Art & Craft", "Stationery"];

  const filteredProducts = sampleProducts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="make-website" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-slate-200 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <GlobeIcon className="w-4 h-4 text-teal-700" />
            <span>Exclusive "Make Website" Feature</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Turn Your Physical Dukan into an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
              Online Digital Store in 1-Click.
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            No hosting fees, no Shopify plugins, and zero manual syncing. Your DukanHisab POS inventory automatically publishes a branded, mobile-first e-commerce catalog with live stock status and direct WhatsApp ordering.
          </p>

          {/* 3 Core Value Pillars */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 p-4 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                <span>Single Source of Truth</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Sell an item at your physical counter, and your website stock updates in real time automatically.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 p-4 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                <span>Zero Drop-Off Cart</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Customers order straight to your WhatsApp with pre-formatted product details and 1-tap phone dialing.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 p-4 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                <span>Your Brand & Subdomain</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Get your own custom URL: <code className="text-teal-700 font-mono text-[11px]">dukanhisab.com/store/your-shop</code> with custom theme color.
              </p>
            </div>
          </div>
        </div>

        {/* Live Interactive Dual Panel Showcase: Config on Left, Live Storefront on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Merchant Settings Panel (Simulating /shop/settings -> Website Settings) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-200/50 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                  <StoreIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Shop Settings</h4>
                  <p className="text-[11px] text-slate-400 font-mono">/shop/settings → Website Settings</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                Store Live
              </span>
            </div>

            {/* Subdomain Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                Custom Store Subdomain & URL
              </label>
              <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 overflow-hidden focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 text-xs">
                <span className="px-3 text-slate-400 font-mono bg-slate-100 py-2.5 border-r border-slate-200 shrink-0 select-none">
                  dukanhisab.com/store/
                </span>
                <input
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                  placeholder="your-shop-name"
                  className="w-full px-3 py-2.5 bg-transparent font-bold text-slate-900 outline-none"
                />
              </div>
              <p className="text-[11px] text-slate-400">Share this link directly on your WhatsApp Status and Business Cards.</p>
            </div>

            {/* Theme Brand Color Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Storefront Brand Theme Color
              </label>
              <div className="flex items-center gap-2">
                {themeOptions.map((opt) => (
                  <button
                    key={opt.hex}
                    onClick={() => setThemeColor(opt.hex)}
                    title={opt.name}
                    className={`w-8 h-8 rounded-full transition-transform cursor-pointer flex items-center justify-center ${opt.bgClass} ${
                      themeColor === opt.hex ? "scale-115 ring-3 ring-offset-2 ring-slate-400 shadow-md" : "hover:scale-105 opacity-80 hover:opacity-100"
                    }`}
                  >
                    {themeColor === opt.hex && <CheckIcon className="w-4 h-4 text-white" />}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-500 block">
                Active: <strong style={{ color: themeColor }}>{themeOptions.find((t) => t.hex === themeColor)?.name}</strong>
              </span>
            </div>

            {/* Shop Bio & Details */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                Business Bio / About Us
              </label>
              <textarea
                rows={2}
                readOnly
                value="Quality stationery, office supplies & school books in Surat since 2012. Genuine products with fast local delivery."
                className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-600 outline-none resize-none font-medium"
              />
            </div>

            {/* Social & Contact Toggles */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block">Storefront Features Enabled</span>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2.5 text-slate-700 font-semibold cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4" />
                  <span>Show Live Real-Time Stock Availability</span>
                </label>
                <label className="flex items-center gap-2.5 text-slate-700 font-semibold cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4" />
                  <span>Enable 1-Click WhatsApp Ordering Button</span>
                </label>
                <label className="flex items-center gap-2.5 text-slate-700 font-semibold cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4" />
                  <span>Show Store Location, GSTIN & Timings</span>
                </label>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-900 flex items-start gap-2.5">
              <SparklesIcon className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <span>
                <strong>Zero double data entry:</strong> When you add products in your POS, they appear instantly here. No separate uploads required.
              </span>
            </div>
          </div>

          {/* RIGHT: Live Public Storefront Preview (/store/{subdomain}) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-800">
              
              {/* Browser Mockup Chrome Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                
                {/* Browser Address Bar */}
                <div className="flex items-center gap-2 bg-slate-800/90 text-slate-300 px-4 py-1.5 rounded-full text-xs font-mono max-w-sm truncate border border-slate-700">
                  <span className="text-emerald-400">🔒</span>
                  <span>https://dukanhisab.com/store/</span>
                  <strong className="text-white font-bold">{subdomain || "your-shop"}</strong>
                </div>

                <div className="text-[10px] text-slate-400 font-semibold uppercase">
                  Customer View
                </div>
              </div>

              {/* The Rendered Public Storefront Itself */}
              <div className="bg-white rounded-2xl mt-2 overflow-hidden shadow-inner text-slate-900">
                
                {/* Storefront Header with Dynamic Theme Color */}
                <div
                  className="px-5 py-4 text-white flex flex-wrap items-center justify-between gap-4 transition-colors"
                  style={{ backgroundColor: themeColor }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-lg border border-white/30">
                      US
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-extrabold text-base sm:text-lg tracking-tight leading-tight">
                          Uma Stationery & Xerox
                        </h3>
                        <span className="bg-white/25 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Verified Dukan
                        </span>
                      </div>
                      <p className="text-xs text-white/85">Stationery • Books • Xerox • Surat, Gujarat</p>
                    </div>
                  </div>

                  {/* Header Fast Action Buttons */}
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+919876543210"
                      className="bg-white/15 hover:bg-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/25 transition-all"
                    >
                      📞 Call Shop
                    </a>
                    <button
                      onClick={() => alert("Pre-filled WhatsApp message:\n'Hello, I am visiting your DukanHisab website and would like to place an order.'")}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Search & Category Filter Bar */}
                <div className="p-4 bg-slate-50 border-b border-slate-200/80 space-y-3">
                  <div className="relative">
                    <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search books, pens, registers, paper..."
                      className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-teal-500"
                    />
                  </div>

                  {/* Horizontal Scrollable Category Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all cursor-pointer ${
                          activeCategory === cat
                            ? "text-white shadow-xs"
                            : "bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200"
                        }`}
                        style={{
                          backgroundColor: activeCategory === cat ? themeColor : undefined,
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Catalog Grid */}
                <div className="p-4 sm:p-5 max-h-[380px] overflow-y-auto space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                    <span>Showing <strong>{filteredProducts.length}</strong> items in live catalog</span>
                    <span className="text-[11px] text-teal-700 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Real-time inventory synced
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-2xl p-2 rounded-xl bg-slate-50 border border-slate-100">
                              {prod.image}
                            </span>
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                                prod.inStock
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-rose-50 text-rose-700 border border-rose-200"
                              }`}
                            >
                              {prod.stock}
                            </span>
                          </div>

                          <div>
                            <h5 className="font-bold text-xs text-slate-900 leading-snug line-clamp-2">
                              {prod.name}
                            </h5>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {prod.category}
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 uppercase font-bold block">Price</span>
                            <span className="text-sm font-black text-slate-900 font-mono">
                              {prod.price}
                            </span>
                          </div>

                          {/* 1-Click WhatsApp Order Pre-fill Button */}
                          <button
                            onClick={() => {
                              setSelectedProductForWhatsApp(prod);
                              alert(`Pre-filled WhatsApp Order sent to shopkeeper:\n\n"Hello Uma Stationery, I want to order '${prod.name}' priced at ${prod.price} from your DukanHisab website catalog."`);
                            }}
                            className="flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all shadow-xs cursor-pointer hover:opacity-95"
                            style={{ backgroundColor: themeColor }}
                          >
                            <WhatsAppIcon className="w-3.5 h-3.5" />
                            <span>Order</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Storefront Footer / Verified Bar */}
                <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheckIcon className="w-3.5 h-3.5 text-teal-600" />
                    <span>Powered by <strong>DukanHisab E-Commerce Storefront</strong></span>
                  </div>
                  <div>
                    <span>GSTIN: <strong>24AAAPU1234A1Z5</strong> • Open: 9 AM - 9 PM</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Fast Highlights Bar */}
        <div className="mt-12 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-black text-slate-900">
              Ready to give your retail shop a professional online catalog?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              The "Make Website" add-on comes included with Shop Pro & Business Growth plans, or as a standalone lifetime add-on.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Get Website Add-on</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
