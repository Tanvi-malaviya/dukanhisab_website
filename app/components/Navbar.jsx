"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform shrink-0">
              <StoreIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Dukan<span className="text-emerald-600">Hisab</span>
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-tight leading-none hidden sm:block">
                Apni Dukaan Ka Hisaab, Ab App Mein
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-1.5 px-2.5 rounded-lg ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 font-bold"
                      : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar: Language Selector & Primary Download App CTA */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 px-3 py-2 rounded-xl transition-colors cursor-pointer"
                aria-label="Select Language"
              >
                <GlobeIcon className="w-3.5 h-3.5 text-emerald-600" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50 text-xs font-semibold">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setCurrentLang(l.label);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 hover:bg-emerald-50 transition-colors flex items-center justify-between ${
                        currentLang === l.label ? "text-emerald-700 font-bold bg-emerald-50/60" : "text-slate-700"
                      }`}
                    >
                      <span>{l.label}</span>
                      {currentLang === l.label && <span className="text-emerald-600 font-bold">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Web Panel CTA */}
            <a
              href="https://dukanhisab.in/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-700 hover:text-emerald-700 font-bold text-sm px-3.5 py-2 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/60 transition-all cursor-pointer"
            >
              <Monitor className="w-4 h-4 text-emerald-600" />
              <span>Web Panel</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-black px-1.5 py-0.5 rounded-full uppercase">Shop</span>
            </a>

            {/* Primary Download App CTA */}
            <a
              href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm px-4.5 py-2.5 rounded-xl shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all active:scale-98 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://dukanhisab.in/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 text-xs font-bold px-2.5 py-2 rounded-xl border border-slate-200 sm:hidden flex items-center gap-1"
            >
              <Monitor className="w-3.5 h-3.5 text-emerald-600" />
              <span>Web</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-xl sm:hidden flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>App</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs text-slate-500 font-medium">
            <span>Apni Dukaan Ka Hisaab</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              App Mein
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50 font-bold"
                      : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://dukanhisab.in/shop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3 rounded-xl shadow-sm text-sm"
            >
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span>Open Web Panel (dukanhisab.in/shop)</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md text-sm"
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
