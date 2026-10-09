"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StoreIcon, SmartphoneIcon, MonitorIcon, WhatsAppIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform bg-[#036272] flex items-center justify-center border border-teal-700/40">
                <Image
                  src="/images/dukanhisab-logo.png"
                  alt="DukanHisab Logo"
                  width={96}
                  height={96}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Dukan<span className="text-teal-400">Hisab</span>
              </span>
            </Link>

            <p className="text-sm font-semibold text-slate-300">
              "Dukan Ka Hisab, Bilkul Aasan"
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              DukanHisab connects every sale, purchase, payment, product, customer and expense into one unified, intelligent shop management ecosystem.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3 py-2 rounded-xl border border-slate-800 hover:border-teal-500 transition-all"
              >
                <SmartphoneIcon className="w-3.5 h-3.5 text-teal-400" />
                <span>Google Play App</span>
              </a>

              <a
                href="https://dukanhisab.in/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3 py-2 rounded-xl border border-slate-800 hover:border-teal-500 transition-all"
              >
                <MonitorIcon className="w-3.5 h-3.5 text-teal-400" />
                <span>Web Panel (Shop) ↗</span>
              </a>
            </div>

            <div className="pt-1 text-xs text-slate-500 font-mono">
              Every Sale. Every Purchase. Every Rupee. Remembered.
            </div>
          </div>

          {/* Core Pages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">Home Page</Link></li>
              <li><Link href="/how-it-works" className="hover:text-teal-400 transition-colors">How It Works (Shop Day)</Link></li>
              <li><Link href="/features" className="hover:text-teal-400 transition-colors">Features & Modules</Link></li>
              <li><Link href="/ecosystem" className="hover:text-teal-400 transition-colors">Mobile App & Web Panel</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-400 transition-colors">Pricing & Plans</Link></li>
              <li><Link href="/tools" className="text-teal-400 font-bold hover:underline transition-colors">Free Business Tools Hub</Link></li>
              <li><Link href="/tools/gst-calculator" className="hover:text-teal-400 transition-colors">GST Calculator (5-28%)</Link></li>
              <li><Link href="/tools/profit-margin-calculator" className="hover:text-teal-400 transition-colors">Profit Margin Calculator</Link></li>
              <li><Link href="/tools/discount-calculator" className="hover:text-teal-400 transition-colors">Discount &amp; Sale Calculator</Link></li>
              <li><Link href="/tools/barcode-generator" className="hover:text-teal-400 transition-colors">Free Barcode Generator</Link></li>
              <li>
                <a
                  href="https://dukanhisab.in/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Shop Web Panel</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Google Play App</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Key Modules */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/features#barcode" className="hover:text-teal-400 transition-colors">Barcode POS Billing</Link></li>
              <li><Link href="/features#customer-pricing" className="hover:text-teal-400 transition-colors">Customer-Specific Pricing</Link></li>
              <li><Link href="/features#suppliers" className="hover:text-teal-400 transition-colors">Supplier Purchases & Ledger</Link></li>
              <li><Link href="/features#money-flow" className="hover:text-teal-400 transition-colors">Cash & Expense Tracking</Link></li>
              <li><Link href="/features#returns" className="hover:text-teal-400 transition-colors">Sale & Purchase Returns</Link></li>
              <li><Link href="/features#invoices" className="hover:text-teal-400 transition-colors">WhatsApp & PDF Invoices</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-teal-400" />
                <span className="text-slate-300">WhatsApp: +91 98250 00000</span>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">support@dukanhisab.com</span>
              </li>
              <li className="pt-2 text-slate-500">
                Built with pride for Indian small business owners, kirana stores, and retail entrepreneurs.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} DukanHisab • Sathwara Infotech. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/faq" className="hover:text-slate-400 transition-colors">Help & FAQ</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact Us</Link>
            <Link href="/pricing" className="hover:text-slate-400 transition-colors">Pricing</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
