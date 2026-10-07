"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  GooglePlayIcon, 
  CheckIcon, 
  MonitorIcon, 
  WhatsAppIcon,
  ShieldCheckIcon 
} from "./Icons";

export default function BillingCtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Sober Premium Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#042f2e] via-[#064e3b] to-[#042f2e] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-teal-600/20 overflow-hidden">
          
          {/* Subtle ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Sober Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-400/30 text-teal-200 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Simple • Fast • Reliable</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Simplify Your <br />
                <span className="text-emerald-300">Daily Shop Billing?</span>
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed max-w-xl font-normal">
                Join thousands of retail shopkeepers across India who create bills, track payments, and manage their business in seconds with DukanHisab.
              </p>

              {/* Clean Checklist (No clutter) */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3 text-sm text-teal-50">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span>Instant GST & Non-GST billing in less than 30 seconds</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-teal-50">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span>Works with any Bluetooth thermal printer or regular PC printer</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-teal-50">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <span>100% offline mode — keep billing even without internet</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-teal-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <GooglePlayIcon className="w-4 h-4 text-teal-900" />
                  <span>Download Mobile App</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-teal-800/60 hover:bg-teal-800 border border-teal-500/40 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
                  <span>Request Free Demo</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 text-xs text-teal-200/80 pt-1 font-medium">
                <span>✓ Free Starter Plan</span>
                <span>•</span>
                <span>✓ No Setup Fees</span>
                <span>•</span>
                <span>🇮🇳 Made for Indian Shops</span>
              </div>

            </div>

            {/* Right Side: Clean & Sober App Mockup Showcase (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                
                {/* Subtle soft backdrop glow */}
                <div className="absolute inset-0 bg-teal-400/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none"></div>

                {/* Sleek Minimal Smartphone Frame */}
                <div className="relative w-56 sm:w-64 rounded-[2.2rem] p-2.5 bg-slate-900/90 border border-teal-500/30 shadow-2xl drop-shadow-2xl">
                  
                  {/* Phone screen */}
                  <div className="relative rounded-[1.8rem] overflow-hidden aspect-[459/920] bg-white">
                    <Image
                      src="/images/dukanhisab-mobile-dashboard.png"
                      alt="DukanHisab Mobile Billing App"
                      width={459}
                      height={920}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Clean Badge */}
                  <div className="absolute -bottom-4 -left-6 bg-white text-slate-900 rounded-xl px-4 py-2.5 shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      ⚡
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">0.8s Quick Bill</div>
                      <div className="text-[10px] text-slate-500">Fast Counter Speed</div>
                    </div>
                  </div>

                  {/* Floating Right Badge */}
                  <div className="absolute -top-3 -right-5 bg-white text-slate-900 rounded-xl px-3.5 py-2 shadow-lg border border-slate-100 flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-600">✓ 100% Safe</span>
                    <span className="text-[10px] text-slate-400">Cloud Sync</span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
