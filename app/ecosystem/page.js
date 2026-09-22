import Link from "next/link";
import Navbar from "../components/Navbar";
import MobileAndWebSection from "../components/MobileAndWebSection";
import WebPanelShowcase from "../components/WebPanelShowcase";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { MonitorIcon, SmartphoneIcon, CloudSyncIcon, CheckIcon, ArrowRightIcon } from "../components/Icons";

export const metadata = {
  title: "DukanHisab Ecosystem — Mobile App & Web Panel Synchronized",
  description: "Experience how the DukanHisab mobile app at your shop counter synchronizes instantly with the comprehensive web panel on your laptop or office computer.",
};

export default function EcosystemPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="pt-12 pb-14 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <CloudSyncIcon className="w-3.5 h-3.5 text-emerald-700" />
              Connected Devices
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Shop in Your Pocket. <br />
              <span className="text-emerald-600">Your Business on Your Screen.</span>
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Use your phone for fast barcode scans and counter bills during the day. Open your laptop in the evening to review profit, download Excel reports, and reconcile accounts.
            </p>
          </div>
        </section>

        {/* 1. Mobile App vs Web Panel Split Showcase */}
        <MobileAndWebSection />

        {/* 2. Interactive Web Panel Mockup with Clickable Hotspots */}
        <WebPanelShowcase />

        {/* Multi-Counter & Multi-Device Sync Explanation Banner */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Reliability Under Pressure
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
                  What happens when internet fluctuates at the shop?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Your billing never stops. DukanHisab's mobile app continues operating locally so customer queues keep moving. The moment your Wi-Fi or mobile data reconnects, all records sync automatically to your web panel and cloud storage.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero counter stoppage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Automatic background sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Safe from phone damage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
