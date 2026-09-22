import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InteractiveShopSimulator from "./components/InteractiveShopSimulator";
import BusinessNetworkMap from "./components/BusinessNetworkMap";
import BusinessTypes from "./components/BusinessTypes";
import TrustSection from "./components/TrustSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { ArrowRightIcon, BarcodeIcon, ClockIcon, SmartphoneIcon, MonitorIcon, CheckIcon, ShieldCheckIcon } from "./components/Icons";

export const metadata = {
  title: "DukanHisab — Your Business Has a Memory | Connected Shop Accounting & POS",
  description: "DukanHisab connects every sale, purchase, barcode scan, customer, supplier, payment, and expense in one smart ecosystem with Mobile App and Web Panel.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Shop Counter */}
        <Hero />

        {/* 2. Interactive 7-Step Shop Simulator */}
        <InteractiveShopSimulator />

        {/* 3. Multi-Page Quick Access Teaser Cards */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Explore the System
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Everything Connected Across Your Business.
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Take a deep dive into each part of DukanHisab:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1: How It Works */}
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-emerald-400 hover:bg-emerald-50/20 transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shadow-xs">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Workflow Story
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    A Day Inside Your Shop
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Walk through an actual retail day from 8:30 AM opening to 9:30 PM closing. See the Rice 25kg product journey and automatic data pipeline.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-emerald-800"
                  >
                    <span>Explore How It Works</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Features & Modules */}
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-emerald-400 hover:bg-emerald-50/20 transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4 shadow-xs">
                    <BarcodeIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                    Modules & POS
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Features & Barcode POS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    High-speed barcode billing, customer-specific pricing, supplier payables, dual money flow, return management, and WhatsApp invoice sharing.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 group-hover:text-indigo-800"
                  >
                    <span>View All Features</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Mobile & Web Panel */}
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-emerald-400 hover:bg-emerald-50/20 transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center mb-4 shadow-xs">
                    <MonitorIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Synchronized Devices
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    Mobile App & Web Panel
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Run fast everyday counter operations from your pocket, and examine deep financial audit trails and Excel reports on the browser web panel.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <Link
                    href="/ecosystem"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-emerald-700"
                  >
                    <span>Explore App & Web Sync</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 12-Node Business Relationship Map */}
        <BusinessNetworkMap />

        {/* 5. Business Types (Kirana, Hardware, Agro, Medical, Mobile, Retail) */}
        <BusinessTypes />

        {/* 6. Ground Realities & Trust Section */}
        <TrustSection />

        {/* 7. Final Twilight CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
