"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import { 
  ArrowRightIcon, 
  CalculatorIcon, 
  CheckIcon,
  ZapIcon,
  SparklesIcon,
  ShieldCheckIcon
} from "../components/Icons";

export default function ToolsHubPage() {
  const tools = [
    {
      id: "gst-calculator",
      title: "GST Calculator (5%, 12%, 18%, 28%)",
      badge: "Most Popular",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      emoji: "📊",
      href: "/tools/gst-calculator",
      desc: "Calculate inclusive or exclusive GST instantly with accurate CGST, SGST, and IGST breakdowns. Includes reverse GST removal mode.",
      tags: ["GST Invoice", "CGST / SGST", "Tax Calculation", "Reverse GST"],
      stat: "Instant Tax Breakup",
    },
    {
      id: "profit-margin-calculator",
      title: "Profit Margin & Markup Calculator",
      badge: "Retail Pricing",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      emoji: "📈",
      href: "/tools/profit-margin-calculator",
      desc: "Find exact gross profit, profit margin percentage, and markup on Cost Price (CP) vs Selling Price (SP). Never underprice products.",
      tags: ["Profit %", "Retail Markup", "Cost Price", "Gross Margin"],
      stat: "Margin Health Bar",
    },
    {
      id: "discount-calculator",
      title: "Discount & Sale Price Calculator",
      badge: "Offers & Sales",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      emoji: "🏷️",
      href: "/tools/discount-calculator",
      desc: "Calculate final payable price, money saved, stacked promo discounts, and Buy-X-Get-Y-Free promotional deals for customers.",
      tags: ["Percentage Off", "Flat Discount", "Buy 1 Get 1", "Savings"],
      stat: "BOGO & Bulk Math",
    },
    {
      id: "barcode-generator",
      title: "Free Product Barcode & Label Maker",
      badge: "Sticker Printing",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
      emoji: "📦",
      href: "/tools/barcode-generator",
      desc: "Generate 100% scannable Code 128 retail barcodes for unbranded FMCG, clothes, and hardware. Download SVG/PNG or print stickers directly.",
      tags: ["Code 128", "Thermal Stickers", "Product SKU", "Instant Print"],
      stat: "100% Scannable",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== UNIQUE SHOWCASE HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e3f6f5] via-[#f0faf9] to-white pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 border-b border-slate-200/90">
          
          {/* Subtle Ambient Radial Glows & Dot Texture */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-300/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#036272_0.75px,transparent_0.75px)] [background-size:22px_22px] opacity-[0.06] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal-700">Home</Link>
              <span>›</span>
              <span className="text-[#036272] font-bold">Free Tools</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Bold Value Pitch (Span 7) */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/90 border border-teal-300/60 text-[#036272] text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <CalculatorIcon className="w-3.5 h-3.5 text-[#036272]" />
                  <span>100% Free Online Retail Utilities • No Login Needed</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.12]">
                  Smart Business Math. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800">
                    Built for Indian Shopkeepers.
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                  Eliminate manual calculation errors. Accurately figure out GST tax splits, gross profit margins, promotional discounts, and generate scannable barcodes in seconds right from your browser.
                </p>

                {/* Quick-Jump Tool Pills */}
                <div className="pt-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                    Jump Directly To A Calculator:
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {tools.map((t) => (
                      <Link
                        key={t.id}
                        href={t.href}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 text-slate-800 hover:text-[#036272] text-xs font-bold shadow-xs hover:shadow-md transition-all group"
                      >
                        <span>{t.emoji}</span>
                        <span>{t.title.split("(")[0].trim()}</span>
                        <ArrowRightIcon className="w-3 h-3 text-slate-400 group-hover:text-[#036272] group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 3 Key Trust Highlights Strip */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-semibold">
                  <div className="flex items-center gap-1.5 text-emerald-800">
                    <CheckIcon className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    <span>Zero Sign-Up Required</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-800">
                    <CheckIcon className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    <span>2026 GST Slabs Compliant</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-800">
                    <CheckIcon className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    <span>100% Free Forever</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Unique Interactive Visual Hub Showcase (Span 5) */}
              <div className="lg:col-span-5 relative flex justify-center">
                
                {/* 3D Slanted Visual Showcase Container */}
                <div className="relative w-full max-w-md">
                  
                  {/* Glowing Backdrop Plate */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl" />

                  {/* Main Glassmorphic Retail Calculator Hub Card */}
                  <div className="relative bg-white/95 backdrop-blur-md rounded-3xl border border-teal-200/90 shadow-2xl p-6 sm:p-7 space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 text-[#036272] flex items-center justify-center font-black text-sm">
                          ⚡
                        </div>
                        <div>
                          <span className="text-xs font-black text-slate-900 block leading-tight">Live Counter Hub</span>
                          <span className="text-[10px] font-semibold text-slate-500 block leading-tight">Real-Time Retail Math</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        Active
                      </span>
                    </div>

                    {/* 4 Interactive Feature Previews inside the Card */}
                    <div className="grid grid-cols-2 gap-3">
                      
                      {/* Tool Preview 1: GST */}
                      <Link 
                        href="/tools/gst-calculator"
                        className="p-3 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-200/80 hover:border-teal-300 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl">📊</span>
                          <span className="text-[10px] font-bold text-teal-700 bg-teal-100/80 px-1.5 py-0.5 rounded">18% GST</span>
                        </div>
                        <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-[#036272]">GST Calc</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 font-medium">₹10,000 → ₹11,800</div>
                      </Link>

                      {/* Tool Preview 2: Margin */}
                      <Link 
                        href="/tools/profit-margin-calculator"
                        className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-300 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl">📈</span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded">25% Health</span>
                        </div>
                        <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-emerald-700">Profit Margin</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 font-medium">Buy ₹120 → Sell ₹160</div>
                      </Link>

                      {/* Tool Preview 3: Discount */}
                      <Link 
                        href="/tools/discount-calculator"
                        className="p-3 rounded-2xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200/80 hover:border-amber-300 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl">🏷️</span>
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-100/80 px-1.5 py-0.5 rounded">BOGO Deal</span>
                        </div>
                        <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-amber-700">Discounts</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 font-medium">Buy 2 Get 1 Free</div>
                      </Link>

                      {/* Tool Preview 4: Barcode */}
                      <Link 
                        href="/tools/barcode-generator"
                        className="p-3 rounded-2xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200/80 hover:border-purple-300 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl">📦</span>
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-100/80 px-1.5 py-0.5 rounded">Code 128</span>
                        </div>
                        <div className="mt-2 text-xs font-bold text-slate-900 group-hover:text-purple-700">Barcodes</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 font-medium">0.2s Laser Scan</div>
                      </Link>

                    </div>

                    {/* Bottom Quick-Launch Banner */}
                    <div className="p-3 rounded-2xl bg-[#036272] text-white flex items-center justify-between shadow-md">
                      <div>
                        <div className="text-[11px] font-extrabold">Instant Counter Math</div>
                        <div className="text-[9px] text-teal-100">Zero formula mistakes, 100% verified</div>
                      </div>
                      <span className="text-xs font-black bg-white/20 px-2 py-1 rounded-lg">
                        100% Free
                      </span>
                    </div>

                  </div>

                  {/* Floating Micro Badge 1 (Top Right) */}
                  <div className="absolute -top-3 -right-3 bg-white rounded-2xl px-3 py-1.5 shadow-lg border border-teal-200 flex items-center gap-1.5 text-slate-900 animate-bounce-subtle z-20">
                    <span className="text-xs">⚡</span>
                    <span className="text-[11px] font-black text-slate-800">0.2s Result</span>
                  </div>

                  {/* Floating Micro Badge 2 (Bottom Left) */}
                  <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl px-3 py-1.5 shadow-lg border border-emerald-200 flex items-center gap-1.5 text-slate-900 z-20">
                    <span className="text-xs">✓</span>
                    <span className="text-[11px] font-bold text-emerald-700">No Sign-Up</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ===================== TOOLS DIRECTORY GRID ===================== */}
        <section className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Featured Retail Utilities
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  Showing {tools.length} free business calculators crafted for Indian stores
                </span>
              </div>

              <span className="text-xs font-bold text-teal-800 bg-teal-100 px-3 py-1 rounded-full hidden sm:inline-block">
                Updated for 2026 Tax Rules
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all p-6 sm:p-7 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl sm:text-4xl">{t.emoji}</span>
                      <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${t.badgeColor}`}>
                        {t.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#036272] transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                        {t.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {t.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-lg">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                      <span>{t.stat}</span>
                    </span>

                    <Link
                      href={t.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#036272] hover:text-[#024f5c] group-hover:translate-x-1 transition-all"
                    >
                      <span>Open Tool</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================== WHY FREE TOOLS SECTION ===================== */}
        <section className="py-10 sm:py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Why DukanHisab Provides Free Tools
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Our mission is to help 1 Crore+ Indian retail dukandaars go digital with zero friction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-2xl">🔒</div>
                <div className="font-extrabold text-sm text-slate-900">Zero Sign-Up Required</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use every calculator directly in your mobile or computer browser without giving email, phone, or passwords.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-2xl">⚡</div>
                <div className="font-extrabold text-sm text-slate-900">100% Accurate &amp; Offline Ready</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Compliant with the latest GST council regulations, CGST/SGST splits, and retail margin standards.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-2xl">📱</div>
                <div className="font-extrabold text-sm text-slate-900">Built into DukanHisab App</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Need these features automatically on every bill? Download the DukanHisab app for 1-click counter POS automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          title="All These Tools &amp; Complete Counter Billing in One App"
          subtitle="DukanHisab — Billing, Khata, Inventory, and Free Shop Website."
          description="Transform your physical store into a modern digital retail business. Generate GST bills in 0.5s, track customer udhar, print thermal receipts, and sell online."
          slogan="Apni Dukaan Ka Hisab, Ab Digital!"
          secondaryButtonText="Explore All Features"
          secondaryButtonHref="/features"
          checks={["0.5s Fast POS Billing", "Works 100% Offline", "Automatic Cloud Backup", "Free Android App"]}
          imageSrc="/images/app-splash-screen.png"
        />
      </main>

      <Footer />
    </div>
  );
}
