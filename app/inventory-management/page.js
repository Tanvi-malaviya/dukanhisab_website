"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InventoryCtaSection from "../components/InventoryCtaSection";
import { 
  GooglePlayIcon, 
  PlayIcon, 
  CheckIcon, 
  ShoppingBagIcon, 
  BarcodeIcon, 
  LayersIcon, 
  ClockIcon, 
  StoreIcon 
} from "../components/Icons";

export default function InventoryManagementPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const topCards = [
    { title: "Add Products Easily", desc: "Bulk upload or 1-click manual entry", icon: "📦", color: "bg-teal-50 text-teal-700" },
    { title: "Barcode Support", desc: "Scanner gun or camera barcode scan", icon: "║▌║", color: "bg-blue-50 text-blue-700" },
    { title: "Get Low Stock Alerts", desc: "Never run out of essential inventory", icon: "🔔", color: "bg-rose-50 text-rose-700" },
    { title: "Manage Categories & Variants", desc: "Sizes, colors, weights and brands", icon: "🗂️", color: "bg-purple-50 text-purple-700" },
  ];

  const shopTypes = [
    { name: "Kirana Store", icon: "🛒" },
    { name: "Mobile Shop", icon: "📱" },
    { name: "Computer Shop", icon: "💻" },
    { name: "Electronics Shop", icon: "📺" },
    { name: "Garment Shop", icon: "👕" },
    { name: "Medical Store", icon: "💊" },
    { name: "And Many More", icon: "•••" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-6 pb-16 lg:pt-10 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal-700">Home</Link>
              <span>›</span>
              <span className="text-teal-700">Inventory Management</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#115e59] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-xs">
                  <span>INVENTORY MANAGEMENT</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Total Control <br />
                  <span className="text-[#036272]">Over Your Stock</span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Track your products, manage stock and never run out again. Get timely low-stock alerts before your shelves go empty.
                </p>

                {/* 4 Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">📦</span>
                    <span>Real-time Stock Updates</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">🔔</span>
                    <span>Low Stock Alerts</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">📊</span>
                    <span>Stock Reports</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">🔄</span>
                    <span>Multi-Category Management</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#036272] hover:bg-[#024f5c] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-700/20 hover:shadow-xl transition-all active:scale-95"
                  >
                    <GooglePlayIcon className="w-5 h-5 text-white" />
                    <span>Download App</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-slate-200 shadow-sm transition-all"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
                      <PlayIcon className="w-3 h-3 text-white ml-0.5" />
                    </span>
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Real-Life In-Store Stock Audit & Barcode Scanning Showcase */}
              <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
                
                {/* Ambient Soft Glow Behind Photo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-gradient-to-tr from-teal-300/20 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative w-full max-w-lg lg:max-w-xl">
                  
                  {/* Main Authentic Photograph Card with Rounded Edges & Premium Frame */}
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/90 ring-1 ring-slate-200/80 bg-slate-100 group">
                    <Image
                      src="/images/inventory-person-using-app.jpg"
                      alt="DukanHisab Shopkeeper Scanning Barcodes & Managing Inventory in Supermarket"
                      width={1024}
                      height={768}
                      priority
                      className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    {/* Laser Scanner Visual Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Simulated Camera Scanning Laser Line */}
                    <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_8px_#ef4444] animate-pulse pointer-events-none" />

                    {/* Bottom Status Bar on Photo */}
                    <div className="absolute bottom-3 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl py-2 px-3.5 flex items-center justify-between text-white text-xs border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-semibold text-[11px]">Live Camera Barcode Scanner</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-300 font-bold">EAN-13 DETECTED</span>
                    </div>
                  </div>

                  {/* Floating Live Scanned Product HUD Card (Bottom Left) */}
                  <div className="absolute -bottom-6 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-slate-200/90 w-56 sm:w-64 text-left">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">📦</span>
                        <span className="text-xs font-black text-slate-900">Scanned Item</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        ✓ In Stock: 48 Pcs
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="font-extrabold text-xs text-slate-900 truncate">
                        Tata Tea Gold (500g Pack)
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-600 font-mono">
                        <span>Barcode: 890103038312</span>
                        <span className="font-bold text-slate-900">₹280</span>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Shelf: Aisle 3 • Rack B</span>
                      <span className="text-teal-700 font-bold">Auto-Logged</span>
                    </div>
                  </div>

                  {/* Floating Low-Stock Alert Warning Badge (Top Right) */}
                  <div className="absolute -top-4 -right-2 sm:-right-4 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-amber-200/80 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg shrink-0">
                      🔔
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs font-black text-slate-900">Low Stock Alert</div>
                      <div className="text-[10px] font-bold text-amber-700">Refill 12 Units Today</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 4 FEATURE CARDS ===================== */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-teal-50/50 hover:border-teal-200 transition-all text-center flex flex-col items-center justify-center shadow-xs group"
                >
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{card.icon}</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SMART INVENTORY SHOWCASE ===================== */}
        <section className="py-20 bg-[#f7faf8] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Person Using Inventory App in Store */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/80 group">
                  <Image
                    src="/images/inventory-person-using-app.jpg"
                    alt="Shopkeeper scanning product barcode using DukanHisab inventory app in store"
                    width={1200}
                    height={896}
                    className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Floating Micro Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[11px] font-bold text-slate-800">
                      ⚡ Camera Barcode Scan
                    </span>
                  </div>

                  {/* Floating Micro Badge - Bottom Right */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl shadow-lg border border-slate-700/60 flex items-center gap-1.5 text-[11px] font-bold">
                    <span className="text-emerald-400">✓</span>
                    <span>Instant Stock Update</span>
                  </div>
                </div>
              </div>

              {/* Center Column: Smart Inventory Copy */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#036272]">
                    SMART INVENTORY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                    Know Your Stock <br />At a Glance
                  </h2>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    "Track real-time stock levels with every sale",
                    "Set minimum stock limits to prevent shortages",
                    "Update stock with ease (purchase entry or bulk adjust)",
                    "View detailed stock in/out history & profit margin"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: 4 Feature Mini Cards */}
              <div className="lg:col-span-3 space-y-3">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-lg shrink-0">🔔</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Low Stock Alert</h4>
                    <p className="text-[10px] text-slate-500">Get notified before you run out</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg shrink-0">📦</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Multiple Categories</h4>
                    <p className="text-[10px] text-slate-500">Keep your products organized</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg shrink-0">║▌║</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Barcode Scanning</h4>
                    <p className="text-[10px] text-slate-500">Add products in seconds</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-lg shrink-0">⏱️</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Stock History</h4>
                    <p className="text-[10px] text-slate-500">Track every in and out item</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== MANAGE INVENTORY FOR ANY SHOP ===================== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#036272]">
                PERFECT FOR EVERY BUSINESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Manage Inventory for Any Shop
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {shopTypes.map((st, idx) => (
                <Link
                  key={idx}
                  href="/business-types"
                  className="p-4 rounded-2xl bg-teal-50/50 hover:bg-teal-100 border border-teal-100 text-center transition-all group flex flex-col items-center justify-center"
                >
                  <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">{st.icon}</span>
                  <span className="text-xs font-bold text-slate-800 leading-tight">{st.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== BESPOKE INVENTORY CTA SECTION ===================== */}
        <InventoryCtaSection />
      </main>

      <Footer />

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 relative">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-black"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Inventory Management Guide</h3>
            <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
              <PlayIcon className="w-12 h-12 text-teal-400 mb-2 animate-pulse" />
              <p className="text-sm font-semibold">How to Manage Stock in DukanHisab</p>
              <p className="text-xs text-slate-400 mt-1">
                Learn how to scan barcodes, set minimum thresholds, and adjust inventory quantities.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
