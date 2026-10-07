"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BillingCtaSection from "../components/BillingCtaSection";
import BillingLottieShowcase from "../components/BillingLottieShowcase";
import { 
  GooglePlayIcon, 
  CheckIcon, 
  ReceiptIcon, 
  PrinterIcon, 
  WhatsAppIcon, 
  SearchIcon, 
  BarcodeIcon, 
  RupeeIcon,
  TagIcon,
  UsersIcon,
  ClockIcon
} from "../components/Icons";

export default function BillingSoftwarePage() {
  const topFeatures = [
    { title: "Create Bills in Seconds", icon: "⚡", bg: "bg-teal-50 text-teal-700" },
    { title: "GST & Non-GST Support", icon: "📑", bg: "bg-amber-50 text-amber-700" },
    { title: "Print & Share Instantly", icon: "🖨️", bg: "bg-purple-50 text-purple-700" },
    { title: "Apply Discounts & Offers", icon: "%", bg: "bg-blue-50 text-blue-700" },
    { title: "Add Customers Easily", icon: "👤", bg: "bg-rose-50 text-rose-700" },
  ];

  const previewActions = [
    { title: "Product Search", icon: SearchIcon, bg: "bg-teal-50 text-teal-700" },
    { title: "Barcode Scan", icon: BarcodeIcon, bg: "bg-teal-50 text-teal-700" },
    { title: "Quick Add", icon: TagIcon, bg: "bg-teal-100 text-teal-800" },
    { title: "Hold Bill", icon: ClockIcon, bg: "bg-teal-100 text-teal-800" },
    { title: "Multiple Payment", icon: RupeeIcon, bg: "bg-teal-50 text-teal-700" },
    { title: "Print / Share", icon: PrinterIcon, bg: "bg-teal-50 text-teal-700" },
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
              <span className="text-teal-700">Billing Software</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#115e59] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-xs">
                  <span>BILLING SOFTWARE</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Fast Billing <br />
                  <span className="text-[#0d9488]">For Smarter Business</span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Create professional bills in seconds and keep your business running smoothly without making customers wait in line.
                </p>

                {/* 3 Badges */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">⚡</span>
                    <span>Quick &amp; Easy Billing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">📑</span>
                    <span>GST &amp; Non-GST Invoices</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">☁️</span>
                    <span>Print, PDF &amp; Share</span>
                  </div>
                </div>

                {/* Download CTA Button */}
                <div className="pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-700/20 hover:shadow-xl transition-all active:scale-95"
                  >
                    <GooglePlayIcon className="w-5 h-5 text-white" />
                    <span>Download App</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Graphic with Shopkeeper, Phone & POS Terminal */}
              <div className="lg:col-span-5 relative flex items-end justify-center pt-4 lg:pt-0">
                {/* Ambient Soft Glow Behind Mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-teal-400/20 via-emerald-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative w-full max-w-lg lg:max-w-xl flex justify-center items-end">
                  <Image
                    src="/images/billing-hero-seamless.png"
                    alt="DukanHisab Billing Software Shopkeeper with Mobile App & POS Terminal"
                    width={544}
                    height={502}
                    priority
                    className="w-full h-auto object-contain drop-shadow-xl hover:scale-101 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 5 TOP CARDS ===================== */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {topFeatures.map((f, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-teal-50/50 hover:border-teal-200 transition-all text-center flex flex-col items-center justify-center shadow-xs"
                >
                  <span className="text-2xl mb-2">{f.icon}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {f.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== LIVE APP PREVIEW ===================== */}
        <section className="py-20 bg-[#f7faf8] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Live App Preview Copy */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0d9488]">
                    LIVE APP PREVIEW
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                    Complete Billing <br />In Your Hands
                  </h2>
                  <p className="mt-1 text-teal-700 font-bold text-sm">
                    Simple. Fast. Powerful.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    "Search products quickly by name or barcode",
                    "Auto calculate totals, discounts & GST rates",
                    "Apply discount & tax per line item or overall bill",
                    "Print or share instant receipts on WhatsApp",
                    "Save billing history with zero paperwork"
                  ].map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">{check}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <GooglePlayIcon className="w-4 h-4 text-white" />
                    <span>Download App</span>
                  </a>
                </div>
              </div>

              {/* Center Column: Interactive Retail Billing Lottie Showcase */}
              <div className="lg:col-span-4 flex justify-center w-full">
                <BillingLottieShowcase />
              </div>

              {/* Right Column: 6 Interactive Action Tiles */}
              <div className="lg:col-span-4 space-y-4">
                <div className="text-right mb-2">
                  <span className="text-xs font-black text-teal-800 italic font-serif">
                    From Products to Profit! 💰
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {previewActions.map((act, idx) => {
                    const IconComp = act.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs hover:border-teal-300 transition-all flex flex-col items-center justify-center text-center group"
                      >
                        <div className={`w-11 h-11 rounded-xl ${act.bg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">
                          {act.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== BESPOKE BILLING CTA SECTION ===================== */}
        <BillingCtaSection />
      </main>

      <Footer />
    </div>
  );
}
