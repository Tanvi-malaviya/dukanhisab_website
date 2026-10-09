"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsBar from "../components/StatsBar";
import CtaBanner from "../components/CtaBanner";
import ShopManagementHeroVisual from "../components/ShopManagementHeroVisual";
import { 
  GooglePlayIcon, 
  PlayIcon, 
  CheckIcon, 
  StoreIcon, 
  ShoppingBagIcon, 
  UsersIcon, 
  LayersIcon, 
  ArrowRightIcon 
} from "../components/Icons";

export default function ShopManagementPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const pillars = [
    { title: "Sales & Purchase Management", desc: "Track every order, invoice and vendor bill effortlessly.", icon: "🛒", color: "bg-teal-100 text-teal-700" },
    { title: "Product & Stock Management", desc: "Real-time inventory levels, barcodes and low stock alerts.", icon: "📦", color: "bg-teal-100 text-teal-700" },
    { title: "Customer & Supplier Management", desc: "Keep clear udhaar ledgers and contact histories.", icon: "👥", color: "bg-blue-100 text-blue-700" },
    { title: "Business Reports & Insights", desc: "Daily profit, expense breakdown and tax summaries.", icon: "📊", color: "bg-purple-100 text-purple-700" },
  ];

  const quickTypes = [
    { name: "Retail Store", icon: "🏪" },
    { name: "Garment Shop", icon: "👕" },
    { name: "Mobile Shop", icon: "📱" },
    { name: "Computer Shop", icon: "💻" },
    { name: "Medical Store", icon: "💊" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal-700">Home</Link>
              <span>›</span>
              <span className="text-teal-700">Shop Management</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#d6eff2] text-[#013e48] px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide shadow-xs border border-teal-200/50">
                  <span className="text-teal-800">🏪</span>
                  <span>COMPLETE DUKAAN MANAGEMENT APP</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Manage Your Shop <br />
                  <span className="text-[#036272]">Smarter, Faster &amp; Digital</span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Track every sale, product inventory, customer udhaar khata, purchase entry, and daily profit in one seamless app. Built specially for Indian retailers and shopkeepers.
                </p>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white/70 p-2 rounded-xl border border-teal-100/60 shadow-2xs">
                    <span className="w-6 h-6 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center text-xs">🛒</span>
                    <span>Quick Sales &amp; Invoices</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white/70 p-2 rounded-xl border border-teal-100/60 shadow-2xs">
                    <span className="w-6 h-6 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center text-xs">📦</span>
                    <span>Live Stock &amp; Low Alert</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white/70 p-2 rounded-xl border border-teal-100/60 shadow-2xs">
                    <span className="w-6 h-6 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center text-xs">👥</span>
                    <span>Customer Udhaar Khata</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white/70 p-2 rounded-xl border border-teal-100/60 shadow-2xs">
                    <span className="w-6 h-6 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center text-xs">📊</span>
                    <span>Daily Profit &amp; Galla Tally</span>
                  </div>
                </div>

                {/* Buttons & Trust Metrics */}
                <div className="pt-2 space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-[#036272] hover:bg-[#024f5c] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-[#036272]/20 hover:shadow-xl transition-all active:scale-95"
                    >
                      <GooglePlayIcon className="w-5 h-5 text-white" />
                      <span>Download Free App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setVideoModalOpen(true)}
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-slate-200 shadow-sm transition-all"
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
                        <PlayIcon className="w-3 h-3 text-white ml-0.5" />
                      </span>
                      <span>Watch Demo</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium pt-1">
                    <div className="flex text-amber-400 text-sm">
                      ★★★★★
                    </div>
                    <span>
                      <strong className="text-slate-800 font-bold">4.8/5 Rating</strong> • 50,000+ Indian Dukaan Owners
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Smart Dukaan App & Operations Showcase (No Hardware POS) */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <ShopManagementHeroVisual />
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 4 CORE PILLARS ===================== */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-teal-300 hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                      {p.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== EVERYTHING YOU NEED TO MANAGE YOUR SHOP ===================== */}
        <section className="py-10 sm:py-12 bg-[#f7faf8] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Authentic Indian Store Owner */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-slate-100">
                  <Image
                    src="/images/shop-management-store-owner.jpg"
                    alt="Indian shopkeeper managing store from mobile with DukanHisab"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle soft gradient overlay at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-teal-800/90 backdrop-blur-md text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                    <span>🏪</span>
                    <span>Dukaan Ab Smart &amp; Digital</span>
                  </div>

                  {/* Bottom Floating Micro Badge: "All-In-One Counter App" */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-teal-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                        ✓
                      </span>
                      <div className="text-left">
                        <p className="text-xs font-black text-slate-900 leading-tight">All-In-One Counter App</p>
                        <p className="text-[10px] text-teal-700 font-semibold leading-tight">Billing • Stock • Udhar • Reports</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Column: Value Proposition */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#036272]">
                    YOUR SHOP. YOUR CONTROL
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                    Everything You Need <br />to Manage Your Shop
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    A simple and powerful app built for modern shopkeepers who value speed and clarity.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    "Easy billing and invoicing with custom shop headers",
                    "Track stock in real-time with low inventory alerts",
                    "Manage customers and suppliers with payment terms",
                    "Keep record of expenses and cash drawer tally",
                    "View daily reports and grow your business steadily"
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

              {/* Right Column: Business Categories List */}
              <div className="lg:col-span-3 space-y-3">
                {quickTypes.map((qt, idx) => (
                  <Link
                    key={idx}
                    href="/business-types"
                    className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between hover:border-teal-300 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{qt.icon}</span>
                      <span className="text-xs font-bold text-slate-800">{qt.name}</span>
                    </div>
                    <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}

                <Link
                  href="/business-types"
                  className="block text-center py-2.5 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline"
                >
                  And Many More →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== STATS BAR ===================== */}
        <StatsBar />

        {/* ===================== GREEN CTA BANNER ===================== */}
        <CtaBanner
          title="Start Managing Your Shop Today"
          subtitle="Simple. Smart. Reliable."
          description="Join thousands of shopkeepers and take your business to the next level with DukanHisab."
          slogan="Chhota Business Nahi, Bada Sapna!"
          secondaryButtonText="Explore Features"
          secondaryButtonHref="/features"
          imageSrc="/images/dukanhisab-mobile-dashboard.png"
        />
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
            <h3 className="text-lg font-bold text-slate-900 mb-4">Shop Management Walkthrough</h3>
            <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
              <PlayIcon className="w-12 h-12 text-teal-400 mb-2 animate-pulse" />
              <p className="text-sm font-semibold">Complete Retail Operation Demo</p>
              <p className="text-xs text-slate-400 mt-1">
                Watch how opening counter, making sales, and closing day works in 3 easy steps.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
