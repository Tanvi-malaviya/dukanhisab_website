"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KhataHeroTypographic from "../components/KhataHeroTypographic";
import KhataWaveCtaSection from "../components/KhataWaveCtaSection";
import { 
  GooglePlayIcon, 
  PlayIcon, 
  CheckIcon, 
  UsersIcon, 
  TruckIcon, 
  RupeeIcon, 
  LayersIcon, 
  ShieldCheckIcon 
} from "../components/Icons";

export default function KhataAccountingPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const topCards = [
    { title: "Customer Management", icon: "👥", bg: "bg-teal-50 text-teal-700" },
    { title: "Supplier Management", icon: "🚚", bg: "bg-purple-50 text-purple-700" },
    { title: "Expense Tracking", icon: "👛", bg: "bg-amber-50 text-amber-700" },
    { title: "Payment Reminders", icon: "🔄", bg: "bg-blue-50 text-blue-700" },
    { title: "Financial Reports", icon: "📊", bg: "bg-rose-50 text-rose-700" },
  ];

  const businessTypes = [
    { name: "Retail Store", icon: "🛒" },
    { name: "Wholesale", icon: "🏢" },
    { name: "Trading Business", icon: "⚙️" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Medical Store", icon: "💊" },
    { name: "Garment Shop", icon: "👕" },
    { name: "And Many More", icon: "•••" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== UNIQUE TYPOGRAPHIC HERO SHOWPIECE ===================== */}
        <KhataHeroTypographic />

        {/* ===================== 5 TOP CARDS ===================== */}
        <section className="pt-6 pb-12 sm:pt-8 sm:pb-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {topCards.map((c, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-teal-50/50 hover:border-teal-200 transition-all text-center flex flex-col items-center justify-center shadow-xs"
                >
                  <span className="text-2xl mb-2">{c.icon}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {c.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== DIGITAL KHATA FOR MODERN BUSINESSES ===================== */}
        <section className="py-20 bg-[#f7faf8] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Authentic Shopkeeper with Digital Khata & Traditional Register */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-slate-100">
                  <Image
                    src="/images/khata-digital-shopkeeper.jpg"
                    alt="Indian shopkeeper using DukanHisab digital khata app alongside traditional bahi khata register"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle soft gradient overlay at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Micro Badge: "Old Bahi Khata ➔ 100% Digital" */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-teal-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center font-black text-sm shrink-0">
                        ✓
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-tight text-slate-900 block leading-tight">
                          Old Bahi Khata ➔ 100% Digital
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 block leading-tight mt-0.5">
                          Smart Udhar &amp; Payment Ledger
                        </span>
                      </div>
                    </div>
                    <span className="bg-[#ccfbf1] text-[#115e59] text-[10px] font-black px-2.5 py-1 rounded-full shrink-0">
                      Auto Synced
                    </span>
                  </div>
                </div>

                {/* Ambient Soft Glow Behind */}
                <div className="absolute -top-4 -left-4 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Center Column: Digital Khata Details */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0d9488]">
                    STAY ORGANIZED
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                    Digital Khata <br />For Modern Businesses
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    No more registers. No more confusion. Keep your accounts safe, accurate and accessible anytime.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    "Track all customer and supplier transactions automatically",
                    "View total outstanding balance at a single glance",
                    "Send 1-click WhatsApp payment reminders with UPI links",
                    "Access ledger from anywhere on phone and computer",
                    "100% safe & secure encrypted cloud backup"
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

              {/* Right Column: Safe & Cloud Backup Cards */}
              <div className="lg:col-span-3 space-y-4">
                <div className="text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-xs">
                  <span className="text-2xl">🛡️</span>
                  <h4 className="text-xs font-bold text-slate-900 mt-1">Your Business Data is Always Safe with Us</h4>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-base shrink-0">☁️</span>
                    <span className="text-xs font-bold text-slate-800">Cloud Backup</span>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-base shrink-0">🔒</span>
                    <span className="text-xs font-bold text-slate-800">Secure &amp; Private</span>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-base shrink-0">📱</span>
                    <span className="text-xs font-bold text-slate-800">Access Anywhere</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== BUILT FOR EVERY SHOPKEEPER ===================== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0d9488]">
                BUILT FOR EVERY SHOPKEEPER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Perfect for All Types of Businesses
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {businessTypes.map((bt, idx) => (
                <Link
                  key={idx}
                  href="/business-types"
                  className="p-4 rounded-2xl bg-teal-50/50 hover:bg-teal-100 border border-teal-100 text-center transition-all group flex flex-col items-center justify-center"
                >
                  <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">{bt.icon}</span>
                  <span className="text-xs font-bold text-slate-800 leading-tight">{bt.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== WAVE CONTOUR CTA SHOWCASE ===================== */}
        <KhataWaveCtaSection />
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
            <h3 className="text-lg font-bold text-slate-900 mb-4">Khata Accounting Walkthrough</h3>
            <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
              <PlayIcon className="w-12 h-12 text-teal-400 mb-2 animate-pulse" />
              <p className="text-sm font-semibold">How to Manage Khata in DukanHisab</p>
              <p className="text-xs text-slate-400 mt-1">
                Learn how to record customer udhaar, receive payments, and send automatic WhatsApp reminder receipts.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
