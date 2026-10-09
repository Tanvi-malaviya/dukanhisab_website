"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import {
  GooglePlayIcon,
  PlayIcon,
  CheckIcon,
  UsersIcon,
  HeartIcon,
  RupeeIcon,
  TagIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChevronDownIcon,
  SmartphoneIcon,
  SparklesIcon,
} from "../components/Icons";

export default function CustomerManagementPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);

  const coreFeatures = [
    {
      id: "lookup",
      tag: "SPEED AT COUNTER",
      title: "3-Second Customer Lookup",
      desc: "Type just the last 4 digits of a mobile number or start of a name. The customer's full profile, recent purchases, and credit balance appear instantly.",
      icon: "⚡",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200/60",
      accent: "from-teal-500 to-emerald-600",
      bullets: [
        "No typing full 10-digit number every single time",
        "Auto-suggests frequent buyers in 1 tap",
        "Works 100% offline without internet connection",
      ],
    },
    {
      id: "khata",
      tag: "DIGITAL UDHAR",
      title: "Digital Udhar Khata Ledger",
      desc: "Say goodbye to torn paper diaries and calculation disputes. Every credit bill is timestamped and linked to exact itemized purchase receipts.",
      icon: "📒",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/60",
      accent: "from-emerald-500 to-teal-600",
      bullets: [
        "Itemized bill attached to every Udhar entry",
        "Clear statement of debits, credits, and net dues",
        "Encrypted cloud backup ensures records never get lost",
      ],
    },
    {
      id: "whatsapp",
      tag: "FAST COLLECTIONS",
      title: "WhatsApp Reminder + UPI QR",
      desc: "Send polite, formatted payment reminders on WhatsApp with 1 tap. Customers receive their statement and a dynamic UPI QR link (GPay, PhonePe, Paytm).",
      icon: "💬",
      badgeColor: "bg-green-50 text-green-800 border-green-200/60",
      accent: "from-green-500 to-emerald-600",
      bullets: [
        "Collect payments 3x faster without awkward phone calls",
        "Customers click link to pay directly from their phone",
        "Instant confirmation alert when payment is recorded",
      ],
    },
    {
      id: "pricing",
      tag: "PRICE LOCKING",
      title: "Customer-Specific Price Locking",
      desc: "Lock negotiated wholesale or VIP rates for specific regular buyers. During counter billing, DukanHisab auto-calculates their saved price.",
      icon: "🏷️",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200/60",
      accent: "from-amber-500 to-orange-600",
      bullets: [
        "Staff cannot accidentally overcharge or undercharge VIPs",
        "Previous purchase price visible right on billing screen",
        "Protects your profit margins with custom discount caps",
      ],
    },
  ];

  const comparisonRows = [
    {
      feature: "Data Safety & Backup",
      oldWay: "Pages tear, get wet, or diary gets misplaced. Zero recovery.",
      dukanWay: "Encrypted automatic cloud backup. 100% safe forever even if phone is lost.",
    },
    {
      feature: "Customer Disputes & Trust",
      oldWay: "Customers argue: 'I never bought this item or date is wrong'.",
      dukanWay: "Exact itemized bill, date, and time attached to every single entry.",
    },
    {
      feature: "Udhar Payment Collection",
      oldWay: "Awkward phone calls or waiting for customer to visit shop.",
      dukanWay: "1-Tap polite WhatsApp reminder with instant UPI QR (GPay, PhonePe).",
    },
    {
      feature: "Counter Billing Speed",
      oldWay: "Flipping through paper pages while long customer queue waits.",
      dukanWay: "Type last 4 digits of phone number — profile loads in 1.2 seconds.",
    },
    {
      feature: "Special Negotiated Rates",
      oldWay: "Shopkeeper has to remember custom rates in memory or staff makes error.",
      dukanWay: "System auto-locks saved prices for regular and wholesale customers.",
    },
  ];

  const customerFaqs = [
    {
      q: "Do I need to type the customer's phone number every time they visit?",
      a: "No! As you start typing the customer's name or even the last 3-4 digits of their phone number, DukanHisab auto-suggests their profile. Once selected, their previous balance, recent purchases, and custom discount rates appear automatically.",
    },
    {
      q: "How does the customer pay using the WhatsApp reminder?",
      a: "When you tap 'Send Reminder', DukanHisab formats a professional WhatsApp message containing their current balance, statement summary, and a direct UPI payment link. When the customer taps the link on their phone, it directly opens Google Pay, PhonePe, or Paytm with the exact amount pre-filled.",
    },
    {
      q: "Can I set credit limits to prevent excessive Udhar?",
      a: "Yes! You can assign a maximum credit limit (e.g. ₹5,000 or ₹10,000) for any customer. If their outstanding balance exceeds this limit during a new bill, the system warns the counter operator and requests owner PIN permission to proceed.",
    },
    {
      q: "Can I import my existing customer contacts from Excel or my phonebook?",
      a: "Yes! You can sync contacts directly from your smartphone address book with one tap, or upload an Excel / CSV spreadsheet from the DukanHisab web panel to import hundreds of customer names and phone numbers in seconds.",
    },
    {
      q: "Is my customer data confidential and private?",
      a: "100% Yes. Your customer data, phone numbers, and transaction ledgers belong solely to you. They are encrypted with 256-bit bank-grade security and are never shared, sold, or accessible by third parties.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f1faf9] to-[#f8faf9] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-22 border-b border-teal-100/70">
          
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-teal-400/20 via-emerald-300/20 to-teal-500/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal-700 transition-colors">
                Home
              </Link>
              <span className="text-slate-400">›</span>
              <span className="text-slate-500">Features</span>
              <span className="text-slate-400">›</span>
              <span className="text-teal-700 font-bold">Customer Management &amp; Khata</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (Span 7): Pitch & Value Prop */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-teal-800 text-xs font-black px-4 py-1.5 rounded-full border border-teal-200/70 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <span className="tracking-wide uppercase">
                    SMART RETAIL CRM &amp; DIGITAL KHATA LEDGER
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                  Turn One-Time Walk-ins into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-600">
                    Lifelong Loyal Customers.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Track individual purchase histories, manage digital Udhar credit balances with automated WhatsApp payment links, and lock customer-specific pricing for your regular patrons.
                </p>

                {/* 4 Feature Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-1 max-w-lg">
                  <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-teal-100 shadow-2xs text-xs font-bold text-slate-800">
                    <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                      ⚡
                    </span>
                    <span>3-Second Phone Lookup</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-teal-100 shadow-2xs text-xs font-bold text-slate-800">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      ₹
                    </span>
                    <span>Digital Udhar Khata</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-teal-100 shadow-2xs text-xs font-bold text-slate-800">
                    <span className="w-6 h-6 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                      💬
                    </span>
                    <span>WhatsApp Bill &amp; UPI QR</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-teal-100 shadow-2xs text-xs font-bold text-slate-800">
                    <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                      🏷️
                    </span>
                    <span>Customer Price Locking</span>
                  </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-900/20 hover:shadow-xl transition-all active:scale-95"
                  >
                    <GooglePlayIcon className="w-5 h-5 text-white" />
                    <span>Download App Free</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-slate-200/90 shadow-2xs transition-all cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <PlayIcon className="w-3 h-3 text-teal-800 ml-0.5" />
                    </span>
                    <span>Watch 2-Min Demo</span>
                  </button>
                </div>

                {/* Support note */}
                <div className="text-xs text-slate-500 font-medium flex items-center gap-2 pt-1">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>100% Free Setup Support available all 7 days on WhatsApp</span>
                </div>

              </div>

              {/* Right Column (Span 5): Interactive Real App CRM Showcase */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                
                {/* Glowing Backdrop Circle */}
                <div className="absolute w-72 h-72 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

                {/* Floating Badge Top: Happy Customers */}
                <div className="absolute -top-4 -left-4 sm:-left-6 z-30 bg-white/95 backdrop-blur-md border border-teal-200/90 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2.5">
                  <span className="text-xl">❤️</span>
                  <div className="text-left">
                    <div className="text-xs font-black text-slate-900">Happy Customers</div>
                    <div className="text-[10px] font-semibold text-teal-700">3x Faster Repeat Sales</div>
                  </div>
                </div>

                {/* Phone Container with Real App CRM Screenshot */}
                <div className="relative z-20 w-60 sm:w-68 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative rounded-[2rem] p-2 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 border-2 sm:border-4 border-slate-700/80 shadow-2xl overflow-hidden ring-1 ring-white/20">
                    
                    {/* Dynamic Island Pill */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mr-1" />
                      <div className="w-4 h-1 rounded-full bg-slate-800" />
                    </div>

                    {/* Authentic App Splash Screen */}
                    <div className="relative rounded-[1.6rem] overflow-hidden bg-white shadow-inner aspect-[459/1024]">
                      <Image
                        src="/images/app-splash-screen.png"
                        alt="DukanHisab Mobile App Splash Screen"
                        width={488}
                        height={1024}
                        priority
                        className="w-full h-full object-cover block"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                    </div>

                    {/* Bottom Home Indicator */}
                    <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none">
                      <div className="w-10 h-0.5 bg-slate-700/80 rounded-full" />
                    </div>
                  </div>

                  {/* Floating Metric Card Bottom: WhatsApp Statement Sent */}
                  <div className="absolute -bottom-5 -right-4 sm:-right-8 z-30 bg-white/95 backdrop-blur-md border border-emerald-200/90 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs font-black text-slate-900">₹1,850 Due Reminder</div>
                      <div className="text-[10px] font-bold text-emerald-700">UPI Link Sent on WhatsApp ✓</div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ===================== 4 CORE SUPER-POWERS ===================== */}
        <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
                RETAIL CRM SUPERPOWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Everything You Need to Manage Shop Customers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Designed specifically for Indian dukandaars — faster checkout, zero Udhar disputes, and higher customer loyalty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreFeatures.map((feat) => (
                <div
                  key={feat.id}
                  className="group relative rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-teal-300 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/5 flex flex-col justify-between"
                >
                  {/* Top Bar */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl p-2.5 rounded-2xl bg-white shadow-xs border border-slate-100 group-hover:scale-110 transition-transform">
                        {feat.icon}
                      </span>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${feat.badgeColor}`}>
                        {feat.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-teal-900 transition-colors">
                      {feat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {feat.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-200/60 space-y-2">
                      {feat.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckIcon className="w-2.5 h-2.5" />
                          </span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================== PAPER KHATA VS DIGITAL KHATA (COMPARISON) ===================== */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-teal-50/30 to-white border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 px-3 py-1 rounded-full">
                WHY UPGRADE YOUR SHOP?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Purani Paper Diary vs. DukanHisab Smart Khata
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                See why over 10,000+ Indian retail shops have moved away from physical diaries to DukanHisab digital customer ledger.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 font-black text-xs sm:text-sm uppercase tracking-wider">
                <div className="md:col-span-4 hidden md:block">Feature / Aspect</div>
                <div className="md:col-span-4 text-rose-300">❌ Purani Paper Diary / Register</div>
                <div className="md:col-span-4 text-teal-300">✅ DukanHisab Digital Khata</div>
              </div>

              <div className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-teal-50/20 transition-colors"
                  >
                    <div className="md:col-span-4 font-black text-sm text-slate-900">
                      {row.feature}
                    </div>
                    <div className="md:col-span-4 text-xs sm:text-sm text-rose-700/90 bg-rose-50/60 p-3 rounded-xl border border-rose-100 font-medium">
                      {row.oldWay}
                    </div>
                    <div className="md:col-span-4 text-xs sm:text-sm text-teal-900 bg-teal-50/70 p-3 rounded-xl border border-teal-200/70 font-semibold">
                      {row.dukanWay}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ===================== SIMULATED WHATSAPP INVOICING DEMO ===================== */}
        <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Simulated WhatsApp Message Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-[28px] bg-[#ece5dd] border-4 border-slate-800 shadow-2xl p-4 relative overflow-hidden">
                  
                  {/* WhatsApp Chat Header */}
                  <div className="bg-[#075e54] text-white p-3 rounded-2xl flex items-center gap-3 shadow-sm mb-4">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                      RP
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate">Rajesh Patel (Customer)</div>
                      <div className="text-[10px] text-teal-100 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Online</span>
                      </div>
                    </div>
                    <WhatsAppIcon className="w-5 h-5 text-emerald-300" />
                  </div>

                  {/* Chat Bubble Sent from Shopkeeper */}
                  <div className="bg-[#dcf8c6] rounded-2xl p-4 shadow-xs text-xs text-slate-800 space-y-2.5 max-w-[92%] ml-auto border border-emerald-200/60">
                    <div className="font-bold text-slate-900 border-b border-emerald-300/60 pb-1.5 flex items-center justify-between">
                      <span>Patel Super Store</span>
                      <span className="text-[10px] text-slate-500 font-mono">11:42 AM</span>
                    </div>

                    <p className="leading-relaxed">
                      Namaste Rajeshbhai! 🙏<br />
                      Thank you for visiting today. Your Bill #DH-1048 for <strong>₹1,420</strong> has been generated.
                    </p>

                    {/* Credit Status Card inside WhatsApp */}
                    <div className="bg-white/90 rounded-xl p-2.5 border border-emerald-200 text-[11px] space-y-1">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Net Khata Balance:</span>
                        <span className="text-rose-600 font-black">₹1,850</span>
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Includes today&apos;s Udhar items.
                      </div>
                    </div>

                    {/* UPI Payment Action */}
                    <div className="bg-emerald-600 text-white rounded-xl p-2 text-center font-black text-[11px] shadow-xs">
                      👉 Tap to Pay via UPI (GPay / PhonePe)
                    </div>

                    <div className="text-[10px] text-slate-500 flex justify-end items-center gap-1">
                      <span>11:42 AM</span>
                      <span className="text-blue-500 font-bold">✓✓</span>
                    </div>
                  </div>

                  <div className="text-center pt-3 text-[11px] text-slate-500 font-medium">
                    ⚡ Formatted &amp; sent in 1-click from DukanHisab
                  </div>
                </div>
              </div>

              {/* Right Column: Invoicing & Payment Collection Pitch */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
                  SEAMLESS WHATSAPP AUTOMATION
                </span>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Faster Bill Invoicing, <br />
                  <span className="text-teal-700">Zero Awkward Credit Follow-Ups.</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Indian shop owners lose thousands every month because following up on pending Udhar is awkward. DukanHisab makes payment collection respectful, transparent, and digital.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">1-Tap WhatsApp Invoicing Without Saving Contacts</h4>
                      <p className="text-xs text-slate-600 mt-0.5">No need to save hundreds of walk-in customer numbers into your personal phone book.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Direct Dynamic UPI QR Code (GPay, PhonePe, Paytm)</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Customers can tap to pay immediately from their sofa, crediting directly to your shop bank account.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Complete PDF Statement Download</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Customers can open and audit every past purchase bill anytime, eliminating all disputes.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all"
                  >
                    <span>Try WhatsApp Invoicing Free</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ===================== CUSTOMER CRM FAQS ===================== */}
        <section className="py-10 sm:py-14 bg-[#f8faf9] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 px-3 py-1 rounded-full">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions About Customer Management
              </h2>
            </div>

            <div className="space-y-3.5">
              {customerFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-300 overflow-hidden bg-white ${
                      isOpen
                        ? "border-2 border-teal-500 shadow-md"
                        : "border border-slate-200/90 hover:border-teal-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                        {faq.q}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isOpen ? "rotate-180 bg-teal-600 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDownIcon className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ===================== COMPACT REAL APP CTA BANNER ===================== */}
        <CtaBanner
          title="Start Managing Your Customers Today"
          subtitle="Simple. Smart. Reliable."
          description="Join thousands of shopkeepers who build customer trust and collect Udhar faster with DukanHisab."
          slogan="Khush Customer Hamesha Wapas Aata Hai! 😊"
          secondaryButtonText="Explore All Features"
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
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-black cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Customer Management &amp; Khata Guide
            </h3>
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
