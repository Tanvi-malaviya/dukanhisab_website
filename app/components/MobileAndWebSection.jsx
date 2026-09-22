"use client";

import React from "react";
import { 
  SmartphoneIcon, 
  MonitorIcon, 
  BarcodeIcon, 
  CheckIcon, 
  FileSpreadsheetIcon, 
  CloudSyncIcon, 
  ShieldCheckIcon,
  ReceiptIcon,
  PackageIcon,
  UsersIcon,
  TruckIcon,
  RupeeIcon
} from "./Icons";

export default function MobileAndWebSection() {
  const mobileFeatures = [
    { title: "Fast Counter POS", desc: "Scan barcode and bill in under 3 seconds", icon: BarcodeIcon },
    { title: "WhatsApp Billing", desc: "Share invoices directly with customer's WhatsApp", icon: ReceiptIcon },
    { title: "Pocket Khata", desc: "View customer pending balance right at counter", icon: UsersIcon },
    { title: "Quick Expenses", desc: "Log tea, tempo, and packaging on the spot", icon: RupeeIcon },
    { title: "Camera Barcode Scanner", desc: "Scan items anywhere in the aisle with your phone", icon: BarcodeIcon },
    { title: "Offline Resilience", desc: "Keep billing even when internet temporarily drops", icon: ShieldCheckIcon },
  ];

  const webFeatures = [
    { title: "Complete Business History", desc: "Auditable transaction logs searchable by date & user", icon: ShieldCheckIcon },
    { title: "Bulk Product Management", desc: "Import/export 10,000+ products via Excel/CSV", icon: FileSpreadsheetIcon },
    { title: "Deep Financial Ledgers", desc: "Customer statements, supplier debit notes & P&L", icon: MonitorIcon },
    { title: "Multi-Counter & Shop Control", desc: "Manage multiple cash drawers and counters seamlessly", icon: CloudSyncIcon },
    { title: "Excel Data Export", desc: "One-click export for tax filing and accountant review", icon: FileSpreadsheetIcon },
    { title: "Automated Cloud Backup", desc: "Zero risk of data loss even if phone is stolen or damaged", icon: CloudSyncIcon },
  ];

  return (
    <section id="mobile-web" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CloudSyncIcon className="w-3.5 h-3.5 text-emerald-700" />
            Synchronized Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your Shop in Your Pocket. <br />
            <span className="text-emerald-600">Your Business on Your Screen.</span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Run fast everyday operations from your mobile app. Sit down in the evening and understand the full picture on the web panel.
          </p>
        </div>

        {/* Central Visual Sync Pipeline Pill */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-5 py-2.5 rounded-full shadow-lg text-xs font-bold tracking-wide">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <SmartphoneIcon className="w-4 h-4" />
              MOBILE APP
            </span>
            <span className="text-slate-500 font-mono">⟷</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CloudSyncIcon className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '12s' }} />
              DUKANHISAB CLOUD MEMORY
            </span>
            <span className="text-slate-500 font-mono">⟷</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <MonitorIcon className="w-4 h-4" />
              WEB PANEL
            </span>
          </div>
        </div>

        {/* 2-Column Split: Mobile App vs Web Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Mobile App */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <SmartphoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Counter & Floor Mobility
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">Mobile App</h3>
                </div>
              </div>

              <div className="p-3 bg-emerald-100/70 border border-emerald-300/80 rounded-2xl text-emerald-900 font-bold text-sm mb-6">
                "Built for everyday shop operations."
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Designed for speed at the physical counter. No lag, no complicated menus. Add items with 1 barcode beep, select customer, and hand over the goods in 3 seconds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {mobileFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-emerald-600" />
                        <h4 className="text-xs font-bold text-slate-900">{f.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-tight">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Android & iOS compatible</span>
              <span className="font-bold text-emerald-700">Instant counter sync ✓</span>
            </div>
          </div>

          {/* Column 2: Web Panel */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center shadow-md">
                  <MonitorIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Office & Deep Business Control
                  </span>
                  <h3 className="text-2xl font-black text-white">Web Panel</h3>
                </div>
              </div>

              <div className="p-3 bg-slate-800 border border-slate-700 rounded-2xl text-emerald-300 font-bold text-sm mb-6">
                "Built for understanding and managing the bigger picture."
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Open on your laptop or home computer. Review monthly sales trends, download Excel statements, reconcile bank deposits, and audit historical invoices with zero hassle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {webFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="bg-slate-800/90 p-3.5 rounded-2xl border border-slate-700 shadow-2xs">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-xs font-bold text-white">{f.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Any browser (Chrome, Safari, Edge)</span>
              <span className="font-bold text-emerald-400">100% cloud secure ✓</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
