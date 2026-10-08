"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, GooglePlayIcon, ArrowRightIcon, MonitorIcon } from "./Icons";

export default function CtaBanner({
  title = "Start Managing Your Business Today!",
  subtitle = "Simple. Smart. Reliable.",
  description = "Join thousands of shopkeepers who are already managing their business with DukanHisab.",
  secondaryButtonText = "Explore Pricing",
  secondaryButtonHref = "/pricing",
  slogan = "Chhota Business Nahi, Bada Sapna!",
  checks = ["Easy to Use", "Secure & Reliable", "Made for Indian Shops"],
  imageSrc = "/images/dukanhisab-mobile-dashboard.png"
}) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#01353e] via-[#036272] to-[#01353e] text-white p-8 sm:p-12 shadow-xl">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left: Phone mockup peek */}
            <div className="flex justify-center md:items-center shrink-0">
                {imageSrc && imageSrc.trim() !== "" ? (
                  imageSrc === "/images/dukanhisab-mobile-dashboard.png" || imageSrc === "/images/app-splash-screen.png" ? (
                    <div className="relative w-[155px] sm:w-[175px] rounded-[2rem] p-1.5 sm:p-2 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 border-2 sm:border-4 border-slate-700/80 shadow-2xl overflow-hidden ring-1 ring-white/20 animate-float-slow hover:scale-102 transition-transform duration-300">
                      {/* Speaker & camera dynamic island pill */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mr-1"></div>
                        <div className="w-5 h-1 rounded-full bg-slate-800"></div>
                      </div>
                      {/* Screen Image */}
                      <div className="relative rounded-[1.6rem] overflow-hidden bg-white shadow-inner aspect-[459/1024]">
                        <Image
                          src={imageSrc}
                          alt="DukanHisab Mobile App"
                          width={488}
                          height={1024}
                          className="w-full h-full object-cover block"
                        />
                        {/* Glass reflection gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                      </div>
                      {/* Bottom home indicator bar */}
                      <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none">
                        <div className="w-10 h-0.5 bg-slate-700/80 rounded-full" />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={imageSrc}
                      alt="DukanHisab Mobile App"
                      width={200}
                      height={150}
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                  )
                ) : null}

            </div>

            {/* Center: Headline and CTAs */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <span className="text-[11px] font-bold tracking-wider uppercase bg-teal-800/80 text-teal-200 px-3 py-1 rounded-full border border-teal-700/50">
                Join 50,000+ Shopkeepers
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {title}
              </h2>
              <p className="text-teal-100/90 text-sm sm:text-base max-w-xl font-medium">
                {description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-5 py-3 rounded-2xl shadow-lg hover:bg-slate-100 transition-all active:scale-95 text-xs sm:text-sm"
                >
                  <GooglePlayIcon className="w-5 h-5 text-teal-700" />
                  <div className="text-left leading-none">
                    <span className="block text-[9px] uppercase font-semibold text-slate-500">Get it on</span>
                    <span className="text-sm font-black">Google Play</span>
                  </div>
                </a>

                <a
                  href="https://dukanhisab.in/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-950/70 hover:bg-emerald-900 text-white font-bold px-5 py-3 rounded-2xl border border-teal-500/50 shadow-md transition-all text-xs sm:text-sm"
                >
                  <MonitorIcon className="w-4 h-4 text-teal-300" />
                  <span>Web Panel</span>
                </a>

                {secondaryButtonText && (
                  <Link
                    href={secondaryButtonHref}
                    className="inline-flex items-center gap-2 bg-teal-800/70 hover:bg-teal-800 text-white font-bold px-4 py-3 rounded-2xl border border-teal-600/60 transition-all text-xs sm:text-sm"
                  >
                    <span>{secondaryButtonText}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right: Feature bullet checks & handwritten slogan */}
            <div className="shrink-0 flex flex-col items-center lg:items-end space-y-5">
              <div className="space-y-2.5">
                {checks.map((check, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-teal-50">
                    <div className="w-5 h-5 rounded-full bg-teal-500/30 flex items-center justify-center text-teal-300">
                      <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{check}</span>
                  </div>
                ))}
              </div>

              {/* Hand-written styled slogan */}
              {slogan && (
                <div className="text-right pt-2">
                  <span className="inline-block transform -rotate-2 text-teal-300 text-lg sm:text-xl font-black italic tracking-wide font-serif drop-shadow-md">
                    {slogan}
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
