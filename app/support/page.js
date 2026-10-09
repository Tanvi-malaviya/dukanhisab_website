"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupportHeroLottie from "../components/SupportHeroLottie";
import { 
  SearchIcon, 
  ArrowRightIcon, 
  GooglePlayIcon, 
  WhatsAppIcon, 
  ClockIcon, 
  CheckIcon,
  CopyIcon,
  ZapIcon,
  ShieldCheckIcon,
  UsersIcon,
  HeartIcon
} from "../components/Icons";

export default function SupportPage() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(1);

  const copyEmail = () => {
    navigator.clipboard.writeText("info@dukanhisab.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const supportCategories = [
    {
      id: "01",
      tag: "Store Setup",
      title: "Getting Started",
      desc: "Step-by-step account setup, store profile, and staff permissions.",
      icon: "🚀",
      gradient: "from-teal-500 to-emerald-600",
      pillColor: "bg-teal-50 text-teal-700 border-teal-200/60",
      href: "/how-it-works",
      cta: "Setup Guide",
    },
    {
      id: "02",
      tag: "GST Billing",
      title: "Invoices & GST",
      desc: "GST tax slabs, thermal print setup, and WhatsApp bill sharing.",
      icon: "📄",
      gradient: "from-blue-500 to-cyan-600",
      pillColor: "bg-blue-50 text-blue-700 border-blue-200/60",
      href: "/gst-billing",
      cta: "Billing Help",
    },
    {
      id: "03",
      tag: "Stock Control",
      title: "Inventory Management",
      desc: "Barcode scanning, bulk product import & low-stock warnings.",
      icon: "📦",
      gradient: "from-orange-500 to-rose-600",
      pillColor: "bg-orange-50 text-orange-700 border-orange-200/60",
      href: "/inventory-management",
      cta: "Stock Guide",
    },
    {
      id: "04",
      tag: "Customer Khata",
      title: "Customer & Udhaar",
      desc: "Digital customer ledger, Udhaar reminders & supplier balance.",
      icon: "👥",
      gradient: "from-emerald-500 to-teal-600",
      pillColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      href: "/customer-management",
      cta: "Khata Setup",
    },
    {
      id: "05",
      tag: "Cloud Backup",
      title: "Shop Security & Backup",
      desc: "Seamless cloud sync, automatic daily backup & PIN security.",
      icon: "🛡️",
      gradient: "from-slate-700 to-slate-900",
      pillColor: "bg-slate-100 text-slate-700 border-slate-200",
      href: "/shop-management",
      cta: "Backup Help",
    },
    {
      id: "06",
      tag: "Subscription",
      title: "Billing & Plans",
      desc: "Plan renewals, UPI payments, receipts & lifetime upgrades.",
      icon: "💳",
      gradient: "from-amber-500 to-orange-600",
      pillColor: "bg-amber-50 text-amber-700 border-amber-200/60",
      href: "/pricing",
      cta: "Plans & Receipts",
    },
  ];

  const faqs = [
    {
      q: "How do I create an invoice?",
      a: "Open DukanHisab, tap the '+' button or 'Sales', select or scan products, choose payment mode (Cash/UPI/Udhaar), and tap 'Create Bill'. You can then print or share it directly over WhatsApp.",
    },
    {
      q: "How can I take a data backup?",
      a: "DukanHisab automatically creates secure cloud backups whenever your phone is connected to the internet. You can also manually trigger a backup in Settings > Backup & Restore.",
    },
    {
      q: "Is DukanHisab free to use?",
      a: "Yes! The Free plan gives you complete billing, stock management, and customer khata forever without requiring any payment or credit card.",
    },
    {
      q: "How do I upgrade to Premium?",
      a: "Tap your profile icon in the app, select 'Upgrade Plan', and choose either the ₹365/year or ₹999 Lifetime plan. Payments can be made via UPI, Google Pay, or Card.",
    },
    {
      q: "How do I set up GST in my account?",
      a: "Go to Settings > Business Profile > Tax Settings. Enter your 15-digit GSTIN, business legal name, and default tax slabs (e.g. 18%).",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all UPI apps (Google Pay, PhonePe, Paytm, BHIM), Net Banking, RuPay, Visa, and MasterCard through Razorpay.",
    },
    {
      q: "Can I use DukanHisab on multiple devices?",
      a: "Yes! With our Premium and Lifetime plans, you can access your shop accounts across multiple Android smartphones and on your desktop web browser synchronously.",
    },
    {
      q: "What should I do if the app is not working?",
      a: "First check if you have the latest update from Google Play Store. If an error persists, reach out directly to our WhatsApp support team at +91 98765 43210.",
    },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16 border-b border-teal-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal-700 transition-colors">Home</Link>
              <span>›</span>
              <span className="text-teal-700 font-bold">Support</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (Span 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#d6eff2] text-[#013e48] px-3.5 py-1 rounded-full text-xs font-bold tracking-tight shadow-2xs">
                  <span>SUPPORT</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.12]">
                  We&apos;re Here to Help! <br />
                  <span className="text-[#036272]">Your Success is Our Priority.</span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Get quick answers, step-by-step guides, or reach out to our team. We&apos;re always ready to support you.
                </p>

                {/* 4 Official Badges from Design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3 border-t border-teal-200/50">
                  
                  {/* Badge 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#036272] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <ZapIcon className="w-4 h-4 fill-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 leading-tight">Quick Support</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Fast response time</p>
                    </div>
                  </div>

                  {/* Badge 2 */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#036272] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <ShieldCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 leading-tight">Trusted Help</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">From expert team</p>
                    </div>
                  </div>

                  {/* Badge 3 */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#036272] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <UsersIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 leading-tight">Real People</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Friendly &amp; professional</p>
                    </div>
                  </div>

                  {/* Badge 4 */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#036272] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <HeartIcon className="w-4 h-4 fill-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 leading-tight">For Every Shop</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">We&apos;re with you always</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Interactive Lottie Support Animation */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <SupportHeroLottie />
              </div>

            </div>
          </div>
        </section>

     

        {/* ===================== HOW CAN WE HELP YOU & STILL NEED HELP ===================== */}
        <section className="py-12 sm:py-10 sm:py-12 bg-gradient-to-b from-white via-[#f8faf9] to-white relative overflow-hidden">
          
          {/* Subtle ambient background glow */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-teal-200/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 text-[11px] font-black px-3 py-1 rounded-full border border-teal-200/60 shadow-2xs mb-2.5 uppercase tracking-wider">
                <span>💡 KNOWLEDGE BASE &amp; GUIDES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                How Can We Help You Today?
              </h2>
              <p className="mt-1.5 text-slate-600 text-xs sm:text-sm font-medium max-w-2xl">
                Choose a product guide below to learn quick steps, shortcuts, and solutions for your store.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left 6 Category Cards (Span 8) - Minor Small & Sleek */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  {supportCategories.map((c) => (
                    <Link
                      key={c.id}
                      href={c.href}
                      className="group relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-teal-50/20 border border-slate-200/85 hover:border-teal-400 rounded-2xl p-4 shadow-2xs hover:shadow-xl hover:shadow-teal-950/10 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 cursor-pointer"
                    >
                      {/* Top Accent Gradient Line */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                      {/* Corner Glow */}
                      <div className="absolute -top-8 -right-8 w-16 h-16 bg-teal-400/10 rounded-full blur-xl group-hover:bg-teal-400/20 transition-all pointer-events-none" />

                      <div>
                        {/* Header: Icon Podium + Tag + ID */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="relative">
                            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.gradient} text-white flex items-center justify-center text-base shadow-sm group-hover:scale-105 group-hover:rotate-2 transition-all duration-300`}>
                              <span>{c.icon}</span>
                            </div>
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${c.gradient} blur-md opacity-0 group-hover:opacity-35 transition-opacity -z-10`} />
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded-full border ${c.pillColor}`}>
                              {c.tag}
                            </span>
                            <span className="text-[11px] font-mono font-black text-slate-300 group-hover:text-teal-600/70 transition-colors">
                              #{c.id}
                            </span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-sm font-black text-slate-900 group-hover:text-teal-800 transition-colors tracking-tight leading-snug">
                          {c.title}
                        </h3>
                        <p className="text-[11.5px] text-slate-500 mt-1 leading-relaxed font-medium">
                          {c.desc}
                        </p>
                      </div>

                      {/* Footer CTA Strip */}
                      <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10.5px] font-bold text-slate-400 group-hover:text-teal-700 transition-colors">
                          {c.cta}
                        </span>
                        <div className="w-5.5 h-5.5 rounded-full bg-slate-100 group-hover:bg-[#036272] text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 shadow-2xs">
                          <ArrowRightIcon className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Side: Elevated Direct Help Console (Span 4) - Minor Small */}
              <div id="contact" className="lg:col-span-4 sticky top-6">
                <div className="relative bg-gradient-to-b from-[#f8faf9] via-white to-[#f8faf9] border border-teal-200/90 rounded-2xl p-5 sm:p-5.5 shadow-lg shadow-teal-950/5 space-y-3.5 overflow-hidden">
                  
                  {/* Decorative background glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Sidebar Header */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 text-[9.5px] font-black px-2 py-0.5 rounded-full mb-1.5 tracking-wide uppercase border border-emerald-200/60 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      DIRECT HELP CONSOLE
                    </div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
                      Still Need Help?
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug font-medium">
                      Speak directly with our product team in Gujarati, Hindi, or English.
                    </p>
                  </div>

                  {/* 1. VIP WhatsApp Card */}
                  <div className="relative bg-white rounded-xl p-3.5 border border-emerald-200/90 shadow-2xs hover:shadow-sm transition-all group overflow-hidden">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <WhatsAppIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <h4 className="text-xs font-black text-slate-900 leading-tight">WhatsApp Support</h4>
                          <span className="text-[8.5px] bg-emerald-50 text-emerald-700 font-extrabold px-1 rounded border border-emerald-200">
                            FASTEST
                          </span>
                        </div>
                        <p className="text-[10.5px] text-slate-500 mt-0.5">Average reply in &lt; 5 mins</p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/916352709531?text=Hello%20DukanHisab%20Support%20Team"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white text-xs font-black py-2.5 px-3 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-98"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>Chat on WhatsApp →</span>
                    </a>
                  </div>

                  {/* 2. Email Direct Console */}
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all space-y-2 group">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        ✉️
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900 leading-tight">Email Support</h4>
                        <p className="text-[10.5px] text-slate-500 mt-0.5">Queries &amp; attachments</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200/90 rounded-lg px-2.5 py-1.5 text-[11px] font-mono font-bold text-slate-800">
                      <span className="truncate select-all">info@dukanhisab.in</span>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-1 text-[10px] font-sans font-bold text-teal-700 hover:text-teal-900 transition-colors ml-1.5 shrink-0 cursor-pointer bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs hover:bg-teal-50"
                      >
                        <CopyIcon className="w-3 h-3" />
                        <span>{copied ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  {/* 3. Support Hours Indicator - All 7 Days */}
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs mt-0.5">
                      <ClockIcon className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-black text-slate-900">Support Hours</h4>
                        <span className="inline-flex items-center gap-1 text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.2 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          ALL 7 DAYS
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-700 font-bold mt-1">
                        Monday – Sunday: 10:00 AM – 7:00 PM
                      </p>
                      {/* <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                        ✓ Open Every Day (No Holiday)
                      </p> */}
                    </div>
                  </div>

                  {/* 4. Support Response Guarantee Card - 100% Crisp Vector */}
                  <div className="relative bg-gradient-to-br from-[#ebf9f6] via-[#f2fbf9] to-[#e4f6f2] border border-teal-200/90 rounded-2xl p-4 shadow-sm overflow-hidden flex items-center justify-between gap-3 group">
                    {/* Left: Friendly Support Agent Vector Illustration */}
                    <div className="relative shrink-0 flex items-center justify-center">
                      <div className="w-13 h-13 rounded-2xl bg-white/95 shadow-xs border border-teal-200/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <svg className="w-9 h-9 text-[#036272]" viewBox="0 0 48 48" fill="none">
                          {/* Headset arc */}
                          <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24V26" stroke="#036272" strokeWidth="2.5" strokeLinecap="round" />
                          {/* Ear pads */}
                          <rect x="10" y="22" width="4" height="8" rx="2" fill="#036272" />
                          <rect x="34" y="22" width="4" height="8" rx="2" fill="#036272" />
                          {/* Head */}
                          <circle cx="24" cy="23" r="6.5" fill="#013e48" />
                          {/* Hair */}
                          <path d="M18.5 21C18.5 17.5 21 16.5 24 16.5C27 16.5 29.5 17.5 29.5 21C29.5 22 28.5 20.5 26.5 20.5C24.5 20.5 23.5 21.5 21.5 21.5C19.5 21.5 18.5 22 18.5 21Z" fill="#024f5c" />
                          {/* Mic */}
                          <path d="M35 27V29C35 31 33 32.5 30 32.5H27" stroke="#036272" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="26" cy="32.5" r="1.5" fill="#036272" />
                          {/* Body/Shoulders */}
                          <path d="M15 38C15 33.5817 18.5817 30 23 30H25C29.4183 30 33 33.5817 33 38V39H15V38Z" fill="#036272" />
                        </svg>
                      </div>
                      {/* Live pulse dot on agent */}
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
                      </span>
                    </div>

                    {/* Right: Crisp, Perfectly Fitted Text */}
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="inline-block">
                        <p className="text-sm font-black text-[#0f2d27] font-serif italic tracking-tight leading-snug">
                          We usually respond
                        </p>
                        <p className="text-xs font-black text-[#036272] font-serif italic tracking-tight -mt-0.5">
                          within 2–4 hours!
                        </p>
                        {/* Hand-drawn style underline curve */}
                        <svg className="w-24 h-2 text-emerald-500 mt-0.5" viewBox="0 0 100 8" fill="none">
                          <path d="M2 5C25 1.5 65 1.5 98 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== FREQUENTLY ASKED QUESTIONS (COMPLETELY REVAMPED UNIQUE DESIGN) ===================== */}
        <section id="faq" className="py-10 sm:py-14 bg-gradient-to-b from-[#f8faf9] via-white to-[#f8faf9] border-t border-slate-200/80 relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-200/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column (Span 4): Sticky FAQ Hub Briefing */}
              <div className="lg:col-span-4 sticky top-6 space-y-5">
                <div>
                  <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 text-[11px] font-black px-3 py-1 rounded-full border border-teal-200/60 shadow-2xs mb-3 uppercase tracking-wider">
                    <span>💡 INSTANT ANSWERS</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed font-medium">
                    Got doubts about GST billing, cloud backup, or multi-device sync? Here are quick, clear answers for shop owners.
                  </p>
                </div>

                {/* Helpful Direct Help Card */}
                <div className="relative bg-gradient-to-br from-[#024032] via-[#03513f] to-[#013529] rounded-3xl p-6 text-white shadow-xl shadow-teal-950/10 border border-teal-500/30 overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 space-y-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xl">
                      💬
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-white tracking-tight">
                        Can&apos;t find your question?
                      </h4>
                      <p className="text-xs text-teal-100/80 mt-1 leading-relaxed">
                        Our WhatsApp support team is available all 7 days to assist your shop.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/916352709531?text=Hello%20DukanHisab%20Team%2C%20I%20have%20a%20question"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1faa53] text-white text-xs font-black py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Ask Us on WhatsApp →</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors group"
                  >
                    <span>Browse full documentation &amp; knowledge base</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column (Span 8): Unique Interactive Accordion */}
              <div className="lg:col-span-8 space-y-3.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`group relative rounded-2xl transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-gradient-to-r from-teal-50/70 via-white to-white border-2 border-teal-500 shadow-xl shadow-teal-950/5 ring-4 ring-teal-500/10"
                          : "bg-white border border-slate-200/90 hover:border-teal-300 hover:shadow-md"
                      }`}
                    >
                      {/* Left accent color bar on open */}
                      <div className={`absolute top-0 bottom-0 left-0 w-1.5 transition-colors ${
                        isOpen ? "bg-teal-600" : "bg-transparent group-hover:bg-teal-200"
                      }`} />

                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full pl-5 pr-5 py-4.5 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Categorical Index Badge */}
                          <span className={`w-7 h-7 rounded-lg text-xs font-black font-mono shrink-0 flex items-center justify-center transition-colors ${
                            isOpen
                              ? "bg-teal-600 text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700"
                          }`}>
                            0{idx + 1}
                          </span>

                          <span className={`font-black text-sm sm:text-base leading-snug transition-colors ${
                            isOpen ? "text-teal-950" : "text-slate-900 group-hover:text-teal-900"
                          }`}>
                            {faq.q}
                          </span>
                        </div>

                        {/* Animated Toggle Button */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-teal-600 text-white rotate-180 shadow-md shadow-teal-600/20"
                            : "bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700"
                        }`}>
                          <svg className="w-4 h-4 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="pl-15 pr-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-teal-100/60 animate-in fade-in duration-200">
                          <p className="font-normal text-slate-600">
                            {faq.a}
                          </p>

                          {/* Was this helpful micro interaction */}
                          <div className="mt-4 pt-3 border-t border-slate-100/90 flex items-center justify-between text-[11px] text-slate-400">
                            <span className="font-medium text-slate-500">
                              Was this answer helpful?
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                className="px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/80 transition-colors font-bold flex items-center gap-1 cursor-pointer"
                              >
                                <span>👍 Yes</span>
                              </button>
                              <button
                                type="button"
                                className="px-2.5 py-1 rounded-lg bg-white hover:bg-rose-50 hover:text-rose-700 border border-slate-200/80 transition-colors font-bold flex items-center gap-1 cursor-pointer"
                              >
                                <span>👎 No</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* ===================== COMPACT MODERN CTA SECTION (REAL APP IMAGE) ===================== */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#01353e] via-[#036272] to-[#01353e] text-white p-6 sm:p-8 lg:p-9 shadow-xl border border-teal-600/30">
              
              {/* Subtle ambient glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                
                {/* Left: Compact Real App Phone Mockup */}
                <div className="shrink-0 flex justify-center">
                  <div className="relative w-[130px] sm:w-[145px] rounded-[1.8rem] p-1.5 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 border-2 border-slate-700/80 shadow-2xl overflow-hidden ring-1 ring-white/20">
                    {/* Speaker & camera pill */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-slate-800 mr-1" />
                      <div className="w-3.5 h-0.5 rounded-full bg-slate-800" />
                    </div>
                    {/* Screen Image with User's Real App Dashboard */}
                    <div className="relative rounded-[1.4rem] overflow-hidden bg-white shadow-inner aspect-[459/1024]">
                      <Image
                        src="/images/dukanhisab-mobile-dashboard.png"
                        alt="DukanHisab Mobile App"
                        width={488}
                        height={1024}
                        className="w-full h-full object-cover block"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                    </div>
                    {/* Home indicator bar */}
                    <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none">
                      <div className="w-8 h-0.5 bg-slate-700/80 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Center: Clean Headline, Subtitle & Action Buttons */}
                <div className="flex-1 text-center lg:text-left space-y-3">
                  <div className="inline-flex items-center gap-2 bg-teal-900/80 text-teal-200 text-[11px] font-bold px-3 py-0.5 rounded-full border border-teal-700/60">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Live Dukandaar Help (All 7 Days)</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    Still have questions about your shop?
                  </h3>

                  <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-normal max-w-xl">
                    Download DukanHisab or reach out on WhatsApp. Our support team helps you with free AnyDesk printer pairing and data setup.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    {/* Google Play Button */}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-black/90 hover:bg-black text-white px-4 py-2.5 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all active:scale-95 text-xs font-bold"
                    >
                      <GooglePlayIcon className="w-5 h-5 text-white shrink-0" />
                      <div className="text-left leading-none">
                        <span className="block text-[8px] uppercase tracking-wider text-slate-300">Get it on</span>
                        <span className="text-xs font-black">Google Play</span>
                      </div>
                    </a>

                    {/* WhatsApp Action Button */}
                    <a
                      href="https://wa.me/916352709531?text=Hello%20DukanHisab%20Team%2C%20I%20have%20a%20question"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    {/* Contact Link */}
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-white/15 transition-colors"
                    >
                      <span>Contact Support</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right: Quick Features & Slogan */}
                <div className="shrink-0 flex flex-col items-center lg:items-end justify-between space-y-4">
                  <div className="space-y-2 text-xs font-semibold text-teal-100">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-3 h-3 text-emerald-300" />
                      </div>
                      <span>100% Works Offline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-3 h-3 text-emerald-300" />
                      </div>
                      <span>Free Remote Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                        <CheckIcon className="w-3 h-3 text-emerald-300" />
                      </div>
                      <span>All 7 Days Support</span>
                    </div>
                  </div>

                  <div className="text-center lg:text-right pt-1">
                    <span className="text-base sm:text-lg font-black text-amber-300 italic font-serif tracking-wide block transform -rotate-2">
                      Apni Dukaan Ka Hisab, Ab Digital!
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
