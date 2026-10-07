"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsBar from "../components/StatsBar";
import CtaBanner from "../components/CtaBanner";
import GstInvoiceInteractiveShowcase from "../components/GstInvoiceInteractiveShowcase";
import {
  GooglePlayIcon,
  PlayIcon,
  CheckIcon,
  ReceiptIcon,
  TagIcon,
  LayersIcon,
  FilePdfIcon,
  ShieldCheckIcon
} from "../components/Icons";

export default function GstBillingPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-6 pb-14 lg:pt-10 lg:pb-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal-700">Home</Link>
              <span>›</span>
              <span className="text-teal-700">GST Billing Software</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#115e59] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse" />
                  <span>GST BILLING SOFTWARE</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                  GST Billing <br />
                  <span className="text-[#0d9488]">Made Simple &amp; Fast</span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Create 100% compliant GST invoices in 3 seconds. Automatic CGST, SGST &amp; IGST tax calculation, thermal printing, and instant 1-click WhatsApp delivery without needing expensive accounting software.
                </p>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">🛡️</span>
                    <span>100% GST Compliant</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">📑</span>
                    <span>Auto CGST / SGST Split</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">⚡</span>
                    <span>3-Sec Instant Billing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">📱</span>
                    <span>WhatsApp Bill Delivery</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-700/20 hover:shadow-xl transition-all active:scale-95"
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

                  <Link
                    href="/tools/gst-calculator"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline px-2 py-1"
                  >
                    <span>Free GST Calculator →</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Graphic (Matching Customer Management Photo Style) */}
              <div className="lg:col-span-5 relative flex items-end justify-center pt-4 lg:pt-0">
                {/* Ambient Soft Glow Behind Mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-teal-400/20 via-emerald-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative w-full max-w-lg lg:max-w-xl flex justify-center items-end">
                  <Image
                    src="/images/customer-hero-seamless.png"
                    alt="DukanHisab Shopkeeper with Mobile App"
                    width={562}
                    height={502}
                    priority
                    className="w-full h-auto object-contain drop-shadow-xl hover:scale-101 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== PROFESSIONAL GST INVOICES ===================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: 4 Feature Highlights */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0d9488]">
                    PROFESSIONAL GST INVOICES
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                    Create. Share. <br />Stay Compliant.
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    Generate GST bills, share with customers and keep your business tax-ready.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center text-lg shrink-0">📊</span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Auto GST Calculation</h4>
                      <p className="text-[11px] text-slate-500">Split CGST &amp; SGST automatically</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center text-lg shrink-0">🖨️</span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Print or Share Invoices</h4>
                      <p className="text-[11px] text-slate-500">Instant PDF &amp; WhatsApp</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center text-lg shrink-0">☁️</span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Keep Digital Records</h4>
                      <p className="text-[11px] text-slate-500">Audit trail anytime anywhere</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center text-lg shrink-0">📈</span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Ready for GST Filing</h4>
                      <p className="text-[11px] text-slate-500">Export GSTR-1 ready Excel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column: Unique Interactive GST Invoice Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <GstInvoiceInteractiveShowcase />
              </div>

              {/* Right Column: 4 Side Cards & Slogan */}
              <div className="lg:col-span-3 space-y-4">
                <div className="text-right mb-2">
                  <span className="text-xs font-black text-teal-800 italic font-serif">
                    GST Ready Business<br />Happy Business! 😊
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center text-base shrink-0">📄</span>
                    <span className="text-xs font-bold text-slate-800">GST Reports</span>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-base shrink-0">📊</span>
                    <span className="text-xs font-bold text-slate-800">HSN-wise Sales</span>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-base shrink-0">👥</span>
                    <span className="text-xs font-bold text-slate-800">Customer GST Details</span>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-base shrink-0">📗</span>
                    <span className="text-xs font-bold text-slate-800">Easy Export (Excel/PDF)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/tools/gst-calculator"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0d9488] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md hover:bg-[#0f766e] transition-colors"
                  >
                    <span>Use Free GST Calculator</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== STATS BAR ===================== */}
        <StatsBar />

        {/* ===================== GREEN CTA BANNER ===================== */}
        <CtaBanner
          title="Go Digital with DukanHisab"
          subtitle="Simple. Smart. Reliable."
          description="Start creating GST bills today and manage your business the smarter way."
          slogan="Chhota Business Nahi, Bada Sapna!"
          secondaryButtonText="Free GST Calculator"
          secondaryButtonHref="/tools/gst-calculator"
          imageSrc="/images/app-splash-screen.png"
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
            <h3 className="text-lg font-bold text-slate-900 mb-4">GST Invoicing Guide</h3>
            <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
              <PlayIcon className="w-12 h-12 text-teal-400 mb-2 animate-pulse" />
              <p className="text-sm font-semibold">How to Generate GST Invoices</p>
              <p className="text-xs text-slate-400 mt-1">
                Learn how to enter HSN codes, calculate CGST/SGST, and print thermal receipts.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
