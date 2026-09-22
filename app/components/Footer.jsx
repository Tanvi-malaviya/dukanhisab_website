"use client";

import React from "react";
import Link from "next/link";
import { StoreIcon, SmartphoneIcon, MonitorIcon, WhatsAppIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <StoreIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Dukan<span className="text-emerald-500">Hisab</span>
              </span>
            </Link>

            <p className="text-sm font-semibold text-slate-300">
              "Your Business Has a Memory."
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              DukanHisab connects every sale, purchase, payment, product, customer and expense into one unified, intelligent shop management ecosystem.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-mono">
              Every Sale. Every Purchase. Every Rupee. Remembered.
            </div>
          </div>

          {/* Core Pages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home Page</Link></li>
              <li><Link href="/how-it-works" className="hover:text-emerald-400 transition-colors">How It Works (Shop Day)</Link></li>
              <li><Link href="/features" className="hover:text-emerald-400 transition-colors">Features & Modules</Link></li>
              <li><Link href="/ecosystem" className="hover:text-emerald-400 transition-colors">Mobile App & Web Panel</Link></li>
              <li><Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing & Plans</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact & Demo Request</Link></li>
            </ul>
          </div>

          {/* Key Modules */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/features#barcode" className="hover:text-emerald-400 transition-colors">Barcode POS Billing</Link></li>
              <li><Link href="/features#customer-pricing" className="hover:text-emerald-400 transition-colors">Customer-Specific Pricing</Link></li>
              <li><Link href="/features#suppliers" className="hover:text-emerald-400 transition-colors">Supplier Purchases & Ledger</Link></li>
              <li><Link href="/features#money-flow" className="hover:text-emerald-400 transition-colors">Cash & Expense Tracking</Link></li>
              <li><Link href="/features#returns" className="hover:text-emerald-400 transition-colors">Sale & Purchase Returns</Link></li>
              <li><Link href="/features#invoices" className="hover:text-emerald-400 transition-colors">WhatsApp & PDF Invoices</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
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
