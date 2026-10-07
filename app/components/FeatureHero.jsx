"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  ArrowRightIcon,
  ReceiptIcon,
  PackageIcon,
  UsersIcon,
  TruckIcon,
  WalletIcon,
  TrendingUpIcon,
  GlobeIcon,
  StoreIcon,
  SparklesIcon,
  GooglePlayIcon,
  MonitorIcon
} from "./Icons";

export default function FeatureHero() {
  const quickFeatureCards = [
    {
      id: "billing",
      title: "Billing",
      desc: "Create professional bills with GST or non-GST.",
      icon: ReceiptIcon,
      bg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accent: "emerald",
      href: "#barcode",
    },
    {
      id: "inventory",
      title: "Inventory",
      desc: "Track stock, get low stock alerts.",
      icon: PackageIcon,
      bg: "bg-amber-50 text-amber-600 border-amber-100",
      accent: "amber",
      href: "#manage",
    },
    {
      id: "customers",
      title: "Customers",
      desc: "Manage customer details and udhaar.",
      icon: UsersIcon,
      bg: "bg-teal-50 text-teal-600 border-teal-100",
      accent: "teal",
      href: "#customer-pricing",
    },
    {
      id: "suppliers",
      title: "Suppliers",
      desc: "Track purchases and supplier payments.",
      icon: TruckIcon,
      bg: "bg-blue-50 text-blue-600 border-blue-100",
      accent: "blue",
      href: "#suppliers",
    },
    {
      id: "expenses",
      title: "Expenses",
      desc: "Manage all your everyday business expenses.",
      icon: WalletIcon,
      bg: "bg-rose-50 text-rose-600 border-rose-100",
      accent: "rose",
      href: "#money-flow",
    },
    {
      id: "reports",
      title: "Business Reports",
      desc: "Get clear insights into your business.",
      icon: TrendingUpIcon,
      bg: "bg-purple-50 text-purple-600 border-purple-100",
      accent: "purple",
      href: "#track",
    },
    {
      id: "website",
      title: "Shop Website",
      desc: "Show your products online in minutes.",
      icon: GlobeIcon,
      bg: "bg-sky-50 text-sky-600 border-sky-100",
      accent: "sky",
      href: "/#make-website",
    },
    {
      id: "multishop",
      title: "Multi-Shop",
      desc: "Manage multiple shops from one account.",
      icon: StoreIcon,
      bg: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "amber",
      href: "/pricing",
    },
  ];

  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-b from-[#eaf6f2] via-[#f1fbf7] to-white border-b border-slate-200/90 pt-8 lg:pt-12 pb-16">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 2-Column Grid: Left Content, Right Shopkeeper & Smartphone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, 4 Badges & 2 CTA Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <SparklesIcon className="w-3.5 h-3.5 text-teal-700" />
              <span>DUKANHISAB FEATURES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.14]">
              Everything Your <br />
              <span className="text-teal-600">
                Shop Needs in One App
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              From billing to inventory, customers to reports — DukanHisab gives you all the tools to manage your business easily and professionally.
            </p>

            {/* 4 Circular Checkmark Badges */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              {[
                { label: "Easy to Use" },
                { label: "Works Offline" },
                { label: "Secure & Reliable" },
                { label: "Made for Indian Shops" },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Fast Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md shadow-teal-600/25 hover:shadow-lg transition-all active:scale-98 cursor-pointer group"
              >
                <GooglePlayIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Download App</span>
              </a>

              <a
                href="https://dukanhisab.in/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-300 shadow-2xs hover:border-teal-500 hover:text-teal-700 transition-all cursor-pointer group"
              >
                <MonitorIcon className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
                <span>Open Web Panel</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-teal-600 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Always-Visible High-Res Product Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <Image
                src="/images/feature_hero_seamless_2x.png"
                alt="DukanHisab - Simple Features. Big Support for Shopkeepers!"
                width={1148}
                height={610}
                priority
                className="w-full h-auto object-contain block drop-shadow-xl select-none pointer-events-none"
              />
            </div>
          </div>

        </div>

        {/* Powerful Features for Your Business Section Header */}
        <div id="powerful-features" className="mt-16 pt-10 border-t border-slate-200/80 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Powerful Features for Your Business
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Explore all the features that make DukanHisab the perfect business management app for shopkeepers.
          </p>
        </div>

        {/* 8 Feature Cards Grid (Exact Replica of Feature.png) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickFeatureCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={card.href}
                className="bg-white hover:bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all group flex items-start gap-3.5 cursor-pointer hover:border-teal-300"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${card.bg} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-teal-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>

    </section>
  );
}
