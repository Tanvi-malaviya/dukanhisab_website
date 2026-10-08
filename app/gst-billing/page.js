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
  ShieldCheckIcon,
  WhatsAppIcon,
  ArrowRightIcon
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

              {/* Left Column (Span 6) */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#d6eff2] text-[#013e48] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#036272] animate-pulse" />
                  <span>GST BILLING SOFTWARE</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                  GST Billing <br />
                  <span className="text-[#036272]">Made Simple &amp; Fast</span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Create 100% compliant GST invoices in 3 seconds. Automatic CGST, SGST &amp; IGST tax calculation, thermal printing, and instant 1-click WhatsApp delivery without needing expensive accounting software.
                </p>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center shrink-0">🛡️</span>
                    <span>100% GST Compliant</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center shrink-0">📑</span>
                    <span>Auto CGST / SGST Split</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center shrink-0">⚡</span>
                    <span>3-Sec Instant Billing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center shrink-0">📱</span>
                    <span>WhatsApp Bill Delivery</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#036272] hover:bg-[#024f5c] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-[#036272]/20 hover:shadow-xl transition-all active:scale-95"
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

              {/* Right Column (Span 6): 100% Unique Digital GST Tax Invoice Showcase */}
              <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
                
                {/* Ambient Soft Glow Behind Invoice */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-gradient-to-tr from-teal-300/25 via-emerald-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative w-full max-w-md lg:max-w-lg">
                  
                  {/* Floating Badge 1: 100% GST Compliant (Top Right) */}
                  <div className="absolute -top-4 -right-2 sm:-right-4 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-teal-200/80 flex items-center gap-2.5 animate-bounce [animation-duration:5s]">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-black text-sm">
                      🛡️
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-[11px] font-black text-slate-900">100% GST Compliant</div>
                      <div className="text-[9px] font-semibold text-teal-700">Auto CGST &amp; SGST Split</div>
                    </div>
                  </div>

                  {/* Main Visual: Official Digital Tax Invoice Document Card */}
                  <div className="relative z-20 bg-white rounded-3xl p-5 sm:p-6 shadow-2xl shadow-teal-950/10 border-2 border-slate-200/90 text-left space-y-4 hover:border-teal-400 transition-colors">
                    
                    {/* Invoice Top Header */}
                    <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-teal-700 text-white flex items-center justify-center text-xs font-black">
                            DH
                          </span>
                          <span className="font-black text-sm text-slate-900 tracking-tight">
                            TAX INVOICE
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                          Original for Recipient • Reverse Charge: No
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono font-bold bg-teal-50 text-teal-800 border border-teal-200/70 px-2 py-0.5 rounded-md block">
                          #INV-2026-0842
                        </span>
                        <span className="text-[9px] text-slate-400 font-mono mt-0.5 block">
                          Date: 08 Oct 2026
                        </span>
                      </div>
                    </div>

                    {/* Shop details & Customer details sub-grid */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                      <div>
                        <span className="font-bold text-slate-500 block uppercase text-[9px]">Billed By:</span>
                        <strong className="text-slate-900 block truncate">Patel Hardware &amp; Electricals</strong>
                        <span className="text-slate-500 font-mono text-[9px] block">GSTIN: 24AAACP1234M1Z2</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-500 block uppercase text-[9px]">Billed To:</span>
                        <strong className="text-slate-900 block truncate">Royal Construction &amp; Co.</strong>
                        <span className="text-slate-500 font-mono text-[9px] block">State: 24 (Gujarat)</span>
                      </div>
                    </div>

                    {/* Items table */}
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between font-bold text-slate-400 uppercase text-[9px] border-b border-slate-100 pb-1">
                        <span>Item Description</span>
                        <span>Rate &amp; Tax</span>
                        <span>Total</span>
                      </div>

                      <div className="flex justify-between items-center py-0.5">
                        <div className="truncate pr-2">
                          <div className="font-bold text-slate-800">Havells 2.5mm Wire (90m)</div>
                          <div className="text-[9px] text-slate-400 font-mono">HSN: 8544 • 2 Coils</div>
                        </div>
                        <div className="text-center text-[10px] text-slate-500">
                          ₹1,850 <span className="text-teal-700 font-bold">(18%)</span>
                        </div>
                        <div className="font-mono font-black text-slate-900 text-right">
                          ₹4,366.00
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-0.5">
                        <div className="truncate pr-2">
                          <div className="font-bold text-slate-800">Polycab Modular Switch</div>
                          <div className="text-[9px] text-slate-400 font-mono">HSN: 8538 • 6 Pcs</div>
                        </div>
                        <div className="text-center text-[10px] text-slate-500">
                          ₹320 <span className="text-teal-700 font-bold">(18%)</span>
                        </div>
                        <div className="font-mono font-black text-slate-900 text-right">
                          ₹2,265.60
                        </div>
                      </div>
                    </div>

                    {/* Calculation Summary Highlight Box */}
                    <div className="bg-gradient-to-r from-teal-50/80 to-emerald-50/80 rounded-2xl p-3 border border-teal-200/80 space-y-1 text-xs">
                      <div className="flex justify-between text-slate-600 text-[11px]">
                        <span>Taxable Value:</span>
                        <span className="font-mono font-bold text-slate-800">₹5,620.00</span>
                      </div>
                      <div className="flex justify-between text-slate-600 text-[11px]">
                        <span>CGST (9.0%):</span>
                        <span className="font-mono font-bold text-teal-800">+ ₹505.80</span>
                      </div>
                      <div className="flex justify-between text-slate-600 text-[11px]">
                        <span>SGST (9.0%):</span>
                        <span className="font-mono font-bold text-teal-800">+ ₹505.80</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-teal-200 pt-1.5 mt-1 font-black text-sm">
                        <span className="text-slate-900">Total Invoice Amount:</span>
                        <span className="text-teal-900 font-mono text-base font-black">
                          ₹6,631.60
                        </span>
                      </div>
                    </div>

                    {/* Bottom Validation Ribbon */}
                    <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                        <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Digitally Signed &amp; Verified</span>
                      </div>
                      <span className="font-mono text-slate-400">⚡ Generated in 1.4s</span>
                    </div>

                  </div>

                  {/* Floating Badge 2: WhatsApp PDF Delivery (Bottom Left) */}
                  <div className="absolute -bottom-5 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-200/90 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center font-black text-sm">
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-[11px] font-black text-slate-900">Instant WhatsApp PDF</div>
                      <div className="text-[9px] font-semibold text-emerald-700">Sent with UPI QR Link ✓</div>
                    </div>
                  </div>

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
                  <span className="text-xs font-bold uppercase tracking-wider text-[#036272]">
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
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#036272] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md hover:bg-[#024f5c] transition-colors"
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
