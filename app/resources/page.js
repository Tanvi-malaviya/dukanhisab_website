"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResourcesCtaSection from "../components/ResourcesCtaSection";
import { 
  ArrowRightIcon, 
  GooglePlayIcon, 
  ReceiptIcon, 
  BookOpenIcon, 
  ShoppingBagIcon, 
  UsersIcon 
} from "../components/Icons";

export default function ResourcesPage() {
  const freeRetailTools = [
    {
      title: "GST Calculator",
      icon: "📊",
      badge: "5%, 12%, 18%, 28%",
      badgeBg: "bg-emerald-100 text-emerald-800",
      description: "Quickly calculate GST inclusive and exclusive pricing with detailed CGST, SGST, and IGST tax breakdowns.",
      features: [
        "Add or remove GST in 1 click",
        "Dual rate preview (Inclusive/Exclusive)",
        "Instant copy summary for invoices"
      ],
      href: "/tools/gst-calculator",
      tag: "Tax & Compliance",
    },
    {
      title: "Profit Margin & Markup",
      icon: "📈",
      badge: "Margin Health Bar",
      badgeBg: "bg-blue-100 text-blue-800",
      description: "Find gross profit margin %, markup %, and ideal selling price from purchase cost to protect store profits.",
      features: [
        "Margin vs markup comparison",
        "Target selling price calculator",
        "Low, Moderate & Healthy indicators"
      ],
      href: "/tools/profit-margin-calculator",
      tag: "Pricing & Profit",
    },
    {
      title: "Discount & Sale Calculator",
      icon: "🏷️",
      badge: "BOGO & Bulk Deals",
      badgeBg: "bg-amber-100 text-amber-800",
      description: "Calculate festival promotional discounts, stackable coupon savings, and Buy X Get Y Free retail margins.",
      features: [
        "Flat ₹ and percentage % discounts",
        "Stackable secondary bank coupons",
        "BOGO (Buy 2 Get 1) profit breakdown"
      ],
      href: "/tools/discount-calculator",
      tag: "Sales & Promotions",
    },
    {
      title: "Barcode & Label Maker",
      icon: "⚡",
      badge: "Code 128 / HD SVG",
      badgeBg: "bg-teal-100 text-teal-800",
      description: "Generate 100% scannable product barcodes and custom price stickers ready for thermal printer rolls.",
      features: [
        "Auto SKU generator for loose items",
        "High-DPI SVG & PNG download",
        "Direct thermal sticker roll print"
      ],
      href: "/tools/barcode-generator",
      tag: "Inventory & POS",
    },
  ];


  const blogPosts = [
    {
      title: "5 Simple Tips to Manage Your Shop Finances Better",
      desc: "Learn easy ways to keep your business finances organized and grow your profits.",
      tag: "Business Tips",
      date: "Sep 15, 2025",
      img: "/images/blog/blog-finance.jpg",
    },
    {
      title: "A Complete Guide to GST for Small Businesses",
      desc: "Everything you need to know about GST, filing and compliance in simple language.",
      tag: "GST",
      date: "Sep 10, 2025",
      img: "/images/blog/blog-gst.jpg",
    },
    {
      title: "How to Manage Inventory Like a Pro",
      desc: "Reduce stockouts, avoid overstocking and keep track of your products easily.",
      tag: "Inventory",
      date: "Sep 5, 2025",
      img: "/images/blog/blog-inventory.jpg",
    },
    {
      title: "What's New in DukanHisab v4.0.0",
      desc: "Explore the latest features, new design and improvements to make your business management even easier.",
      tag: "Feature Update",
      date: "Aug 28, 2025",
      img: "/images/blog/blog-app.jpg",
    },
  ];

  const popularGuides = [
    {
      title: "Getting Started with DukanHisab",
      desc: "Step-by-step onboarding to set up your business profile, invoice format, and tax rates in 2 minutes.",
      icon: "🚀",
      category: "Quick Setup",
      readTime: "3 min read",
      href: "/how-it-works",
    },
    {
      title: "Fast GST & Non-GST Billing",
      desc: "Learn how to generate tax invoices, apply festive discounts, and share thermal receipts on WhatsApp.",
      icon: "🧾",
      category: "Billing & POS",
      readTime: "4 min read",
      href: "/billing-software",
    },
    {
      title: "Smart Inventory & Stock Alerts",
      desc: "Track real-time stock quantities, batch expiries, low-stock notifications, and auto-purchase requisitions.",
      icon: "📦",
      category: "Stock Control",
      readTime: "5 min read",
      href: "/inventory-management",
    },
    {
      title: "Customer Udhar & Payment Recovery",
      desc: "Record customer credit ledgers, send free automated payment reminders, and get paid 3x faster.",
      icon: "👥",
      category: "Khata Book",
      readTime: "4 min read",
      href: "/khata-accounting",
    },
  ];

  const testimonials = [
    {
      name: "Rakesh Patel",
      role: "Kirana Store, Ahmedabad",
      quote: "DukanHisab has made my billing and stock management so easy. Now I can focus more on growing my business.",
      avatar: "/images/testimonials/ramesh.png",
    },
    {
      name: "Neha Shah",
      role: "Garment Shop, Surat",
      quote: "The app is simple and very useful. I can manage customers, suppliers and reports all in one place.",
      avatar: "/images/testimonials/pooja.png",
    },
    {
      name: "Imran Khan",
      role: "Electronics Shop, Rajkot",
      quote: "GST billing and inventory management is now hassle-free. Highly recommended for small businesses!",
      avatar: "/images/testimonials/imran.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-24 pb-6 sm:pt-28 sm:pb-6 lg:pt-32 lg:pb-6 border-b border-teal-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb & Live Status Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Link href="/" className="hover:text-teal-700">Home</Link>
                <span>›</span>
                <span className="text-[#036272] font-bold">Resources &amp; Hub</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#115e59] px-3.5 py-1 rounded-full text-xs font-bold tracking-tight shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#036272] animate-pulse"></span>
                <span>Updated Weekly • 100% Free Business Guides</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
               

                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.15]">
                  Learn. Grow. Manage Better. <br />
                  <span className="text-[#036272]">Smart Guides &amp; Tools For Shopkeepers.</span>
                </h1>

                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-medium">
                  Free business calculators, step-by-step GST filing guides, Kirana profit strategies, and merchant success stories — curated to help your shop thrive.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/tools/gst-calculator"
                    className="inline-flex items-center gap-2 bg-[#036272] hover:bg-[#024f5c] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-700/20 hover:shadow-xl transition-all active:scale-95"
                  >
                    <span>Explore Free Tools</span>
                    <ArrowRightIcon className="w-4 h-4 text-white" />
                  </Link>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-slate-200 shadow-xs transition-all"
                  >
                    <GooglePlayIcon className="w-4 h-4 text-slate-700" />
                    <span>Download App</span>
                  </a>
                </div>

              </div>

              {/* Right Column (5 cols): Authentic Shopkeeper Growth Photo with Floating Badges */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                
                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative w-full max-w-lg">
                  
                  {/* Photo Container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                    <Image
                      src="/images/resources-growth-hub.jpg"
                      alt="Indian shopkeeper family in grocery store using digital business resources and reports"
                      width={640}
                      height={480}
                      priority
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Floating Badge: 100% Free Resources */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-teal-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#ccfbf1] text-[#036272] flex items-center justify-center font-black text-sm shrink-0">
                          ✓
                        </div>
                        <div>
                          <span className="text-[11px] font-black uppercase tracking-tight text-slate-900 block leading-tight">
                            Free Knowledge Hub
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 block leading-tight mt-0.5">
                            Guides • Tax Tools • Success Playbooks
                          </span>
                        </div>
                      </div>
                      <span className="bg-[#ccfbf1] text-[#115e59] text-[10px] font-black px-2.5 py-1 rounded-full shrink-0">
                        Always Free
                      </span>
                    </div>
                  </div>

                  {/* Top-Right Floating Growth Tag */}
                  <div className="absolute -top-3 -right-2 sm:-right-4 bg-white rounded-2xl px-3.5 py-2 shadow-xl border border-teal-100 flex items-center gap-2 animate-bounce-subtle z-20">
                    <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">
                      📈
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-slate-900 block leading-tight">
                        +36% Profit Margin
                      </span>
                      <span className="text-[9px] font-semibold text-emerald-600 block leading-tight">
                        Average Member Growth
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ===================== FREE INTERACTIVE TOOLS & UTILITIES ===================== */}
        <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-teal-800 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#036272]"></span>
                  <span>100% Free Retail Utilities</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Free Interactive <span className="text-[#036272]">Business Tools</span>
                </h2>
                <p className="mt-1.5 text-slate-600 text-sm sm:text-base font-medium">
                  Simplify your everyday retail math with our high-speed, zero-login tools built for shopkeepers and growing merchants.
                </p>
              </div>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-900 border border-teal-200 bg-teal-50/50 hover:bg-teal-100/60 px-4 py-2.5 rounded-xl transition-all shadow-2xs hover:shadow-sm"
              >
                <span>View All Free Tools Hub</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Specialized Tool Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {freeRetailTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 hover:border-teal-400 bg-white hover:bg-teal-50/20 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${tool.badgeBg}`}>
                        {tool.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-teal-800 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                      {tool.description}
                    </p>

                    {/* 3 Key Feature Bullets */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                      {tool.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-700 font-semibold leading-tight">
                          <span className="text-[#036272] font-black shrink-0">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action & Tag */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {tool.tag}
                    </span>
                    <Link
                      href={tool.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#036272] group-hover:text-teal-900 group-hover:translate-x-1 transition-all"
                    >
                      <span>Open Tool</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================== LATEST BLOG POSTS ===================== */}
        <section id="blog" className="py-10 sm:py-12 bg-[#f8faf9] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Latest Blog Posts
                </h2>
                <p className="mt-1 text-slate-500 text-xs sm:text-sm">
                  Stay updated with the latest tips, feature updates and business insights.
                </p>
              </div>

             
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-teal-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header */}
                    <div className="h-44 sm:h-48 w-full relative overflow-hidden bg-slate-100">
                      <Image
                        src={post.img}
                        alt={post.title}
                        width={480}
                        height={270}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-[#036272] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        {post.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {post.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between text-xs text-slate-400">
                    <span>{post.date}</span>
                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== POPULAR GUIDES & FREE TOOLS ===================== */}
        <section id="guides" className="py-10 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-semibold mb-3">
                  <span>📚</span>
                  <span>Practical Knowledge & Walkthroughs</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Popular Step-by-Step Guides
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-2xl">
                  Clear, easy walkthroughs designed to help Indian retail and wholesale shop owners master digital operations.
                </p>
              </div>

              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-teal-700 border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors w-fit"
              >
                <span>View All Guides</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Guides Grid - 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularGuides.map((guide, idx) => (
                <Link
                  key={idx}
                  href={guide.href}
                  className="group bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Row: Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-xs flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {guide.icon}
                      </div>
                      <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-0.5 rounded-full">
                        {guide.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>

                  {/* Footer: Read time & Link */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">
                      {guide.readTime}
                    </span>
                    <span className="text-xs font-bold text-teal-700 group-hover:text-teal-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Read Guide
                      <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Featured Free Utility: GST Calculator (Single dedicated spotlight, no duplicate tools) */}
            <div className="mt-12 bg-gradient-to-br from-slate-900 via-[#0b2420] to-[#042f2e] text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-teal-800/40 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Left info */}
                <div className="max-w-2xl space-y-3">
                  <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-3 py-1 rounded-full">
                    <span>🧮</span>
                    <span>100% Free Online Business Utility</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                    Instant GST Calculator for Indian Businesses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Calculate accurate CGST, SGST, IGST and inclusive vs exclusive price breakdown for standard 5%, 12%, 18%, and 28% tax slabs. No signup or download required.
                  </p>
                  
                  {/* Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[11px] bg-white/10 text-slate-200 px-3 py-1 rounded-lg border border-white/10 font-medium">
                      ✓ Inclusive & Exclusive Tax
                    </span>
                    <span className="text-[11px] bg-white/10 text-slate-200 px-3 py-1 rounded-lg border border-white/10 font-medium">
                      ✓ Instant WhatsApp Share
                    </span>
                    <span className="text-[11px] bg-white/10 text-slate-200 px-3 py-1 rounded-lg border border-white/10 font-medium">
                      ✓ Mobile & Desktop Friendly
                    </span>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link
                    href="/tools/gst-calculator"
                    className="inline-flex items-center justify-center gap-2 bg-[#036272] hover:bg-[#024f5c] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-teal-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Open Free GST Calculator</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <p className="text-[11px] text-slate-400 text-center lg:text-left">
                    Direct access • No login or credit card required
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== SUCCESS STORIES ===================== */}
        <section id="stories" className="py-10 sm:py-12 bg-[#f8faf9] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Success Stories
                </h2>
                <p className="mt-1 text-slate-500 text-xs sm:text-sm">
                  See how shopkeepers across India are growing their business with DukanHisab.
                </p>
              </div>

              <Link href="/business-types" className="text-xs font-bold text-slate-700 border border-slate-200 bg-white px-3.5 py-2 rounded-xl hover:bg-slate-50">
                View All Stories →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-slate-100">
                    <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-teal-500/30">
                      <Image src={t.avatar} alt={t.name} width={45} height={45} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">{t.name}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== UNIQUE RESOURCES GROWTH CTA ===================== */}
        <ResourcesCtaSection />
      </main>

      <Footer />
    </div>
  );
}
