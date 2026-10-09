"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheckIcon,
  CheckIcon,
  StoreIcon,
  SmartphoneIcon,
  MonitorIcon,
  SparklesIcon,
  ArrowRightIcon,
  ClockIcon,
  BarcodeIcon,
  WalletIcon,
  ReceiptIcon,
  UsersIcon
} from "./Icons";

const realityStories = [
  {
    id: "01",
    tag: "The Jargon Myth",
    title: "Zero Debit/Credit Confusion. Plain Dukan Language.",
    merchantQuote: "“Mare koi CA banvu nathi! Mane bas e jove chhe ke aaje ketla aavya ane baki ketla chhe.”",
    merchantName: "Rameshbhai Patel",
    merchantShop: "Shree Ganesh Kirana, Anand",
    merchantImg: "/images/shopkeeper-man.png",
    oldWay: "Double-entry journal vouchers, ledger balance balancing, complex debit/credit rules.",
    dukanHisabWay: "Plain retail words: 'Cash In Hand', 'Pending Due', 'Received', 'Gave'. Anyone who can send a WhatsApp message can run your counter from day one.",
    statHighlight: "0 Days Training Needed",
    accent: "teal",
  },
  {
    id: "02",
    tag: "The Evening Rush",
    title: "0.18s Barcode Billing That Never Freezes During Peak Hours.",
    merchantQuote: "“At 7:30 PM there are 12 customers at my counter. I don't have 40 seconds to wait for software to load a single invoice.”",
    merchantName: "Pooja Varma",
    merchantShop: "Pooja Provision Store, Ahmedabad",
    merchantImg: "/images/shopkeeper-woman.png",
    oldWay: "Slow clunky desktop software that hangs on every search, causing customer queues to spill out of the shop.",
    dukanHisabWay: "Point-and-shoot USB/Bluetooth barcode scanner gun support. Scan 10 items in 3 seconds, tap Cash, print 80mm thermal receipt instantly.",
    statHighlight: "< 2 Seconds Per Bill",
    accent: "emerald",
  },
  {
    id: "03",
    tag: "The Real World Mess",
    title: "Handles 'Half Cash, Half Khata' & Messy Returns Effortlessly.",
    merchantQuote: "“Real shops don't have textbook transactions. A regular customer pays ₹500 cash, puts ₹650 on Khata, and returns an old bottle all at once.”",
    merchantName: "Imran Mansuri",
    merchantShop: "National Auto Spares, Vadodara",
    merchantImg: "/images/shopkeeper-lady-phone.png",
    oldWay: "Fails on split payments, requiring manual calculations and separate notebook scribbles.",
    dukanHisabWay: "Split tender built into the core: Cash + UPI + Khata in one single bill. Item returns instantly rollback inventory and deduct customer ledger in real-time.",
    statHighlight: "100% Flexible Payments",
    accent: "cyan",
  },
  {
    id: "04",
    tag: "The Device Freedom",
    title: "Runs Smoothly On Any ₹7,000 Phone or Existing Laptop.",
    merchantQuote: "“I didn't want to buy an expensive ₹45,000 computer and large UPS just to print bills.”",
    merchantName: "Kishorbhai Prajapati",
    merchantShop: "Jay Ambe Hardware, Surat",
    merchantImg: "/images/shopkeeper-man.png",
    oldWay: "Forced expensive hardware, bulky desktop towers, expensive Windows server setups, and AMC charges.",
    dukanHisabWay: "Use any device you already own: Android phone, tablet, iPad, Mac or old Windows PC. Seamless real-time two-way synchronization between your counter phone and home laptop.",
    statHighlight: "Works on Any Device",
    accent: "indigo",
  },
  {
    id: "05",
    tag: "Customer Memory",
    title: "Instant Customer History & Automatically Saved Special Rates.",
    merchantQuote: "“When a loyal customer walks in, asking 'Kem bhai, tamne aagal ketla ma aapyu hatu?' looks unprofessional.”",
    merchantName: "Vikram Chauhan",
    merchantShop: "Chauhan Sanitary & Electricals, Rajkot",
    merchantImg: "/images/shopkeeper-woman.png",
    oldWay: "Searching through dusty paper ledger books while the customer waits awkwardly at the counter.",
    dukanHisabWay: "Select the customer name: their pending balance, last purchased items, and their saved custom discount rate pop up automatically.",
    statHighlight: "Zero Customer Disputes",
    accent: "amber",
  },
  {
    id: "06",
    tag: "Night Closing Peace",
    title: "Close Shop At 9:30 PM With The Cash Galla 100% Balanced.",
    merchantQuote: "“I used to sit till 11:30 PM every night with a pocket calculator finding where ₹450 went missing. Now I close in 2 minutes.”",
    merchantName: "Sanjay Shah",
    merchantShop: "Mahalaxmi Supermarket, Mehsana",
    merchantImg: "/images/shopkeeper-lady-phone.png",
    oldWay: "Hours of manual ledger calculation, recounting receipts, and stressful end-of-day discrepancy hunts.",
    dukanHisabWay: "Every sale, supplier payment, and shop expense automatically reconciled into your Daily Cashbook. Open the drawer: physical cash matches digital cashbook exactly.",
    statHighlight: "2-Minute Day-End Closing",
    accent: "teal",
  },
];

export default function TrustSection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const activeStory = realityStories[activeStoryIndex];

  return (
    <section className="py-12 lg:py-10 sm:py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambient Cosmic Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheckIcon className="w-4 h-4 text-teal-400" />
            <span>The Ground Reality Manifesto</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Accounting Software Was Broken For Indian Shops.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200">
              So We Re-Engineered It From The Counter Up.
            </span>
          </h2>

          <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            No double-entry journals. No 3-month coaching classes. Just the actual ground reality of running an everyday shop in India.
          </p>
        </div>

        {/* ============================================================
            UNIQUE FLOW: Alternating Timeline Filament with Reality Nodes
            (NOT Cards, NOT Tables — An Organic Living Story River)
            ============================================================ */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Continuous Glowing Energy Beam running vertically through the center on desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-400 to-teal-500/30 opacity-70" />

          <div className="space-y-12 sm:space-y-16">
            {realityStories.map((story, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={story.id}
                  className="relative flex flex-col md:flex-row items-center gap-6 lg:gap-10 group"
                >
                  
                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 flex flex-col ${
                      isEven ? "md:items-end md:text-right" : "md:order-2 md:items-start md:text-left"
                    }`}
                  >
                    {/* Floating Reality Tag */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950/90 border border-teal-800/80 px-2.5 py-1 rounded-full">
                        {story.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        Pillar #{story.id}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-teal-300 transition-colors">
                      {story.title}
                    </h3>

                    {/* Merchant Quote Bubble */}
                    <div
                      className={`mt-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 relative ${
                        isEven ? "md:rounded-tr-xs" : "md:rounded-tl-xs"
                      }`}
                    >
                      <p className="italic font-medium leading-relaxed text-teal-200">
                        {story.merchantQuote}
                      </p>
                      <div
                        className={`mt-3 flex items-center gap-2.5 pt-2.5 border-t border-slate-800/80 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <div className="w-7 h-7 rounded-full overflow-hidden bg-teal-900 border border-teal-500/50 shrink-0">
                          <Image
                            src={story.merchantImg}
                            alt={story.merchantName}
                            width={28}
                            height={28}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-white text-[11px]">{story.merchantName}</p>
                          <p className="text-[10px] text-slate-400">{story.merchantShop}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Glowing Orbital Node on the timeline */}
                  <div className="relative z-10 shrink-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-teal-400 text-teal-300 flex items-center justify-center font-black text-sm font-mono shadow-[0_0_20px_rgba(20,184,166,0.35)] group-hover:scale-110 group-hover:border-white transition-all">
                      {story.id}
                    </div>
                  </div>

                  {/* Right Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 flex flex-col ${
                      isEven ? "md:order-2 md:items-start md:text-left" : "md:items-end md:text-right"
                    }`}
                  >
                    {/* Contrast Box: The Old Way vs The DukanHisab Way */}
                    <div className="w-full bg-slate-950/60 border border-slate-800/90 rounded-2xl p-4 sm:p-5 space-y-3.5 hover:border-teal-500/40 transition-colors">
                      {/* Old Way Pain */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                          The Traditional Software Pain:
                        </span>
                        <p className="text-xs text-slate-400 leading-relaxed pl-3 border-l border-rose-950">
                          {story.oldWay}
                        </p>
                      </div>

                      {/* DukanHisab Solution */}
                      <div className="pt-2 border-t border-slate-800/80 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                          <CheckIcon className="w-3.5 h-3.5 text-teal-400" />
                          The DukanHisab Reality:
                        </span>
                        <p className="text-xs text-slate-200 font-medium leading-relaxed pl-3 border-l border-teal-800">
                          {story.dukanHisabWay}
                        </p>
                      </div>

                      {/* Micro Metric Pill */}
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Result:</span>
                        <span className="font-extrabold text-teal-300 bg-teal-950/70 border border-teal-800/60 px-2 py-0.5 rounded-md">
                          ✓ {story.statHighlight}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Merchant Trust Oath Ribbon */}
        <div className="mt-20 lg:mt-28 bg-gradient-to-r from-teal-950/80 via-slate-950 to-cyan-950/80 border border-teal-500/30 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-teal-400" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-teal-300">
                  The DukanHisab Merchant Guarantee
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Never Lose a Transaction. Never Stare at a Confusing Screen.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Encrypted cloud backups, 100% offline billing resilience, and human WhatsApp support in Gujarati, Hindi & English whenever you need assistance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-600/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Start Free Trial</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

              <Link
                href="/support"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-2xl border border-slate-700 transition-all cursor-pointer"
              >
                <span>Talk to Our Team</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
