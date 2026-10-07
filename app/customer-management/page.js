"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsBar from "../components/StatsBar";
import CtaBanner from "../components/CtaBanner";
import { 
  GooglePlayIcon, 
  PlayIcon, 
  CheckIcon, 
  UsersIcon, 
  HeartIcon, 
  RupeeIcon, 
  TagIcon, 
  WhatsAppIcon 
} from "../components/Icons";

export default function CustomerManagementPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const topCards = [
    { title: "Easy Customer Registration", desc: "Add names & phone numbers in 5 seconds", icon: "👥", color: "bg-teal-50 text-teal-700" },
    { title: "View Purchase History", desc: "Know past bought items and pricing history", icon: "⏱️", color: "bg-blue-50 text-blue-700" },
    { title: "Track Outstanding Payments", desc: "Instant udhaar balance tracking & reminders", icon: "₹", color: "bg-teal-50 text-teal-700" },
    { title: "Add Notes & Special Discounts", desc: "Tag preferred items, GSTIN and custom rates", icon: "🏷️", color: "bg-amber-50 text-amber-700" },
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
              <span className="text-teal-700">Customer Management</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#115e59] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-xs">
                  <span>CUSTOMER MANAGEMENT</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Build Stronger <br />
                  <span className="text-[#0d9488]">Customer Relationships</span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Keep your customers happy, track their purchases and grow your business with personalized service and automated payment receipts.
                </p>

                {/* 4 Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">👥</span>
                    <span>Customer Database</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">❤️</span>
                    <span>Purchase History</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">💳</span>
                    <span>Outstanding Payments</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">⭐</span>
                    <span>Loyalty &amp; Personal Notes</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
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
                </div>
              </div>

              {/* Right Column: Lady Shopkeeper & Phone Mockup */}
              <div className="lg:col-span-5 relative flex justify-center items-end">
                <div className="absolute top-2 left-2 z-20 bg-white/90 backdrop-blur-xs border border-teal-200 px-3 py-1.5 rounded-xl shadow-md hidden sm:block">
                  <span className="text-xs font-black text-teal-800 italic font-serif">
                    Happy Customers<br />Bigger Business! ❤️
                  </span>
                </div>

                <div className="relative flex items-end justify-center w-full max-w-md">
                  <div className="relative w-64 sm:w-72 h-auto z-10">
                    <Image
                      src="/images/shopkeeper-woman.png"
                      alt="Smiling Shopkeeper Woman"
                      width={280}
                      height={280}
                      priority
                      className="w-full h-auto object-contain drop-shadow-xl"
                    />
                  </div>

                  <div className="relative -ml-16 mb-4 w-44 sm:w-50 z-20 drop-shadow-2xl">
                    <Image
                      src="/images/phone-customer-hero.png"
                      alt="Customer CRM mobile app screen"
                      width={235}
                      height={255}
                      priority
                      className="w-full h-auto object-contain rounded-3xl"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== 4 TOP CARDS ===================== */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topCards.map((c, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-teal-50/50 hover:border-teal-200 transition-all text-center flex flex-col items-center justify-center shadow-xs group"
                >
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{c.icon}</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== KNOW YOUR CUSTOMERS SHOWCASE ===================== */}
        <section className="py-20 bg-[#f7faf8] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Customer Profile Mockup */}
              <div className="lg:col-span-5 flex justify-center relative">
                <div className="w-full max-w-sm relative drop-shadow-2xl hover:scale-102 transition-transform">
                  <div className="absolute -top-4 -left-4 z-10 bg-white/90 backdrop-blur-xs border border-teal-200 px-3 py-1 rounded-xl shadow-xs text-xs font-black text-teal-800 italic">
                    Turn First-Time Buyers into Lifelong Customers! 🛍️
                  </div>
                  <Image
                    src="/images/phone-customer-crm.png"
                    alt="Customer details mobile screen: Rajesh Patel, Orders, Outstanding, WhatsApp, Call"
                    width={265}
                    height={260}
                    className="w-full h-auto object-contain rounded-3xl"
                  />
                </div>
              </div>

              {/* Center Column: Value Proposition */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0d9488]">
                    MORE THAN JUST SALES
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                    Know Your Customers <br />Grow Your Business
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    Get complete insights about your customers and give them a better buying experience.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    "View complete purchase and order history in 1 click",
                    "Track outstanding payments and due dates accurately",
                    "Add personal notes (e.g. favorite brand, home address)",
                    "Offer special custom discounts to regular patrons",
                    "Identify your most profitable high-volume buyers",
                    "Build long-term trust and repeat footfall"
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

              {/* Right Column: Loyalty Modules */}
              <div className="lg:col-span-3 space-y-3">
                <div className="text-center p-3 bg-white rounded-2xl border border-slate-100 shadow-xs mb-2">
                  <span className="text-xs font-bold text-slate-900">Loyal Customers Bring More Sales 📈</span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-base shrink-0">❤️</span>
                  <span className="text-xs font-bold text-slate-800">Customer Rewards</span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-base shrink-0">✉️</span>
                  <div>
                    <span className="text-xs font-bold text-slate-800">Send Offers</span>
                    <span className="ml-1 text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold">Soon</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-base shrink-0">🔔</span>
                  <span className="text-xs font-bold text-slate-800">Payment Reminders</span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-base shrink-0">📊</span>
                  <span className="text-xs font-bold text-slate-800">Customer Reports</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== STATS BAR ===================== */}
        <StatsBar />

        {/* ===================== GREEN CTA BANNER ===================== */}
        <CtaBanner
          title="Manage Your Customers Today"
          subtitle="Simple. Smart. Reliable."
          description="Join thousands of shopkeepers and grow your business with DukanHisab."
          slogan="Khush Customer Hamesha Wapas Aata Hai! 😊"
          secondaryButtonText="Explore Features"
          secondaryButtonHref="/features"
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
            <h3 className="text-lg font-bold text-slate-900 mb-4">Customer Management Guide</h3>
            <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
              <PlayIcon className="w-12 h-12 text-teal-400 mb-2 animate-pulse" />
              <p className="text-sm font-semibold">How to Manage Customers in DukanHisab</p>
              <p className="text-xs text-slate-400 mt-1">
                Learn how to save customer contacts, review transaction histories, and send reminders.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
