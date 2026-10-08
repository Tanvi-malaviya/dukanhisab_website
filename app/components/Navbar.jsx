"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  StoreIcon, 
  MenuIcon, 
  XIcon, 
  ArrowRightIcon, 
  GlobeIcon 
} from "./Icons";
import { Download, ChevronDown, Monitor } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Business Types", href: "/business-types" },
    { name: "Pricing", href: "/pricing" },
    { name: "GST Calculator", href: "/tools/gst-calculator" },
    { name: "Resources", href: "/resources" },
    { name: "Support", href: "/support" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "gu", label: "ગુજરાતી" },
    { code: "hi", label: "हिंदी" },
  ];

  return (
    <header className="sticky top-2 sm:top-4 z-50 px-3 sm:px-6 max-w-7xl mx-auto w-full transition-all duration-300">
      {/* Floating Island Capsule Bar */}
      <nav className="relative backdrop-blur-2xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-900/5 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between transition-all">
        
        {/* Official DukanHisab HD Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-md shadow-teal-950/20 group-hover:scale-105 transition-transform shrink-0 border border-teal-700/30 bg-[#036272] flex items-center justify-center p-0.5">
            <Image
              src="/images/dukanhisab-app-icon.png"
              alt="DukanHisab Official Logo"
              width={88}
              height={88}
              priority
              quality={100}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none">
                Dukan<span className="text-[#036272]">Hisab</span>
              </span>
              <span className="relative flex h-2 w-2 ml-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 tracking-tight leading-none hidden md:block mt-0.5">
              Dukan Ka Hisab, Bilkul Aasan
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-bold transition-all py-1.5 px-3 rounded-full ${
                  isActive
                    ? "text-emerald-900 bg-white shadow-xs font-black border border-slate-200/70"
                    : "text-slate-600 hover:text-emerald-700 hover:bg-white/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Language Selector Dropdown Pill */}
          {/* <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 text-[11px] font-bold text-slate-700 px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200/70 transition-all cursor-pointer"
              aria-label="Select Language"
            >
              <GlobeIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">{currentLang}</span>
              <span className="sm:hidden">{currentLang === "English" ? "EN" : currentLang === "ગુજરાતી" ? "GU" : "HI"}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 text-xs font-semibold overflow-hidden">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setCurrentLang(l.label);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 hover:bg-emerald-50 transition-colors flex items-center justify-between cursor-pointer ${
                      currentLang === l.label ? "text-emerald-700 font-bold bg-emerald-50/60" : "text-slate-700"
                    }`}
                  >
                    <span>{l.label}</span>
                    {currentLang === l.label && <span className="text-emerald-600 font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div> */}

          {/* Web Panel CTA Pill */}
          {/* <a
            href="https://dukanhisab.in/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 font-bold text-xs px-3.5 py-1.5 rounded-full border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/60 transition-all cursor-pointer"
          >
            <Monitor className="w-3.5 h-3.5 text-emerald-600" />
            <span>Web Panel</span>
            <span className="text-[9px] bg-emerald-100 text-emerald-800 font-black px-1.5 py-0.2 rounded-full uppercase">
              Shop
            </span>
          </a> */}

          {/* Download App Modern Pill */}
          <a
            href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#036272] via-[#0a7a8d] to-[#02515e] hover:from-[#02515e] hover:to-[#01353e] text-white font-black text-xs sm:text-[13px] px-3.5 sm:px-4.5 py-2 rounded-full shadow-md shadow-[#036272]/25 hover:shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            <span>Download <span className="hidden sm:inline">App</span></span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>

        </div>

      </nav>

      {/* Floating Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 p-4 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-500 font-semibold px-1">
            <span>DukanHisab Navigation</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live App
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-bold py-2 px-3 rounded-xl transition-colors ${
                    isActive
                      ? "text-emerald-800 bg-emerald-100/70 font-black border border-emerald-200/70"
                      : "text-slate-700 hover:text-emerald-600 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://dukanhisab.in/shop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl shadow-xs text-xs"
            >
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span>Open Web Panel (dukanhisab.in/shop)</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#036272] to-[#02515e] text-white font-bold py-2.5 rounded-xl shadow-md text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Mobile App (Google Play)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
