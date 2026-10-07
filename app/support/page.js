"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import { 
  SearchIcon, 
  ArrowRightIcon, 
  GooglePlayIcon, 
  WhatsAppIcon, 
  HeadphonesIcon, 
  ClockIcon, 
  CheckIcon 
} from "../components/Icons";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("support@dukanhisab.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const supportCategories = [
    {
      title: "Getting Started",
      desc: "Learn the basics and set up your account.",
      icon: "🚀",
      color: "bg-teal-50 text-teal-700",
    },
    {
      title: "Billing & Payments",
      desc: "Subscription, payment issues, refunds.",
      icon: "💳",
      color: "bg-amber-50 text-amber-700",
    },
    {
      title: "Invoices & GST",
      desc: "Create invoices, GST settings, print & share.",
      icon: "📑",
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Inventory",
      desc: "Add products, manage stock, stock alerts.",
      icon: "📦",
      color: "bg-orange-50 text-orange-700",
    },
    {
      title: "Customers & Suppliers",
      desc: "Manage customer and supplier data.",
      icon: "👥",
      color: "bg-teal-50 text-teal-700",
    },
    {
      title: "Reports",
      desc: "Sales reports, purchase reports, profit & loss.",
      icon: "📊",
      color: "bg-purple-50 text-purple-700",
    },
    {
      title: "App & Account",
      desc: "Login, device issues, backup & restore.",
      icon: "⚙️",
      color: "bg-rose-50 text-rose-700",
    },
    {
      title: "Technical Issues",
      desc: "Facing an error? Get troubleshooting steps.",
      icon: "🛠️",
      color: "bg-sky-50 text-sky-700",
    },
    {
      title: "Feature Requests",
      desc: "Suggest a feature or share feedback.",
      icon: "💡",
      color: "bg-yellow-50 text-yellow-700",
    },
  ];

  const popularSearches = [
    "Create Invoice",
    "GST Setting",
    "Add Product",
    "Reports",
    "Backup Data",
    "Subscription",
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

  const filteredCategories = supportCategories.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <span className="text-teal-700">Support</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#115e59] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight shadow-xs">
                  <span>SUPPORT</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  We&apos;re Here to Help! <br />
                  <span className="text-[#0d9488]">Your Success is Our Priority.</span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                  Get quick answers, step-by-step guides, or reach out to our team. We&apos;re always ready to support you.
                </p>

                {/* 4 Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">⚡</span>
                    <span>Quick Support (Fast response)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">🛡️</span>
                    <span>Trusted Help (Expert team)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">👥</span>
                    <span>Real People (Friendly support)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">🤝</span>
                    <span>For Every Shopkeeper</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Graphic with Shopkeeper & Phone */}
              <div className="lg:col-span-5 relative flex justify-center items-end">
                <div className="absolute top-2 left-2 z-20 bg-white/90 backdrop-blur-xs border border-teal-200 px-3 py-1.5 rounded-xl shadow-md hidden sm:block">
                  <span className="text-xs font-black text-teal-800 italic font-serif">
                    Koi Bhi Sawal Ho,<br />Hum Hamesha Saath Hain! 🤝
                  </span>
                </div>

                <div className="relative flex items-end justify-center w-full max-w-md">
                  <div className="relative w-64 sm:w-72 h-auto z-10">
                    <Image
                      src="/images/shopkeeper-man.png"
                      alt="Shopkeeper"
                      width={320}
                      height={305}
                      priority
                      className="w-full h-auto object-contain drop-shadow-xl"
                    />
                  </div>

                  <div className="relative -ml-16 mb-4 w-44 sm:w-50 z-20 drop-shadow-2xl">
                    <Image
                      src="/images/phone-feature-hero.png"
                      alt="DukanHisab Interface"
                      width={190}
                      height={295}
                      priority
                      className="w-full h-auto object-contain rounded-3xl"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== LIVE SEARCH BAR & PILLS ===================== */}
        <section className="py-8 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <SearchIcon className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for help... (e.g. billing, invoice, GST, inventory, etc.)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 text-sm rounded-2xl border border-slate-200 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-slate-50/50 font-medium"
                />
              </div>
              <button
                type="button"
                className="bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-sm px-6 py-3.5 rounded-2xl transition-colors"
              >
                Search
              </button>
            </div>

            {/* Popular searches pills */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-xs font-bold text-slate-500 mr-1">Popular searches:</span>
              {popularSearches.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(pill)}
                  className="text-xs font-semibold bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 px-3 py-1.5 rounded-xl transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== HOW CAN WE HELP YOU & CONTACT BOX ===================== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left 9 Category Cards (Span 8) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    How Can We Help You?
                  </h2>
                  <p className="mt-1 text-slate-500 text-xs sm:text-sm">
                    Choose a category to find the right support.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredCategories.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform`}>
                          {c.icon}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {c.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {c.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-50 flex justify-end">
                        <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Still Need Help? (Span 4) */}
              <div id="contact" className="lg:col-span-4 space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Still Need Help?</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Our support team is here for you. Choose the best way to reach us.
                    </p>
                  </div>

                  {/* WhatsApp Box */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center text-xl shrink-0">
                        <WhatsAppIcon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">WhatsApp Support</h4>
                        <p className="text-[11px] text-slate-500">Get quick help on WhatsApp</p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/919876543210?text=Hello%20DukanHisab%20Support%20Team"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shadow-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  {/* Email Box */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">
                        ✉️
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Email Support</h4>
                        <p className="text-[11px] text-slate-500">Send us your query anytime</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-slate-700">
                      <span>support@dukanhisab.com</span>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="text-[11px] font-sans font-bold text-teal-700 hover:underline"
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>

                  {/* Support Hours */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-xl shrink-0">
                      <ClockIcon className="w-5 h-5 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Support Hours</h4>
                      <p className="text-[11px] text-slate-500">
                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                        (1st &amp; 3rd Saturday Holiday)
                      </p>
                    </div>
                  </div>

                  {/* Response Guarantee Badge */}
                  <div className="bg-teal-50/70 border border-teal-200 p-4 rounded-2xl flex items-center gap-3">
                    <span className="text-2xl">🎧</span>
                    <span className="text-xs font-black text-teal-800 italic font-serif">
                      We usually respond within 2–4 hours! ⚡
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== COMPREHENSIVE FREQUENTLY ASKED QUESTIONS ===================== */}
        <section id="faq" className="py-16 bg-[#f8faf9] border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-slate-500 text-xs sm:text-sm">
                Quick answers to common questions about DukanHisab.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-teal-300 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-slate-900 text-sm gap-2"
                  >
                    <span>{faq.q}</span>
                    <span className="text-teal-700 text-base font-black shrink-0">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed animate-in fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== GREEN CTA BANNER ===================== */}
        <CtaBanner
          title="Still have questions?"
          subtitle="Download the DukanHisab app."
          description="Download the DukanHisab app and explore all features. Our support team is always here to help you."
          slogan="Apni Dukaan Ka Hisab, Ab Digital!"
          secondaryButtonText="Contact Support"
          secondaryButtonHref="#contact"
          checks={["Easy to Use", "Secure & Reliable", "Regular Updates", "Dedicated Support"]}
        />
      </main>

      <Footer />
    </div>
  );
}
