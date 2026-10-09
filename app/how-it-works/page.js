import Link from "next/link";
import Navbar from "../components/Navbar";
import HowItWorksHero from "../components/HowItWorksHero";
import ConnectedRecordsFlow from "../components/ConnectedRecordsFlow";
import BusinessMemoryStory from "../components/BusinessMemoryStory";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { 
  ArrowRightIcon, 
  BarcodeIcon, 
  UsersIcon, 
  PackageIcon, 
  CheckIcon, 
  SparklesIcon 
} from "../components/Icons";

export const metadata = {
  title: "How DukanHisab Works — Connected Business Memory for Your Shop",
  description: "Experience how DukanHisab connects everyday shop operations: opening float, barcode scans, sales, customer khata, supplier deliveries, and daily closing balance.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* Unique Interactive Page Hero */}
        <HowItWorksHero />

        {/* 1. One Sale, Multiple Records Connected Flow */}
        <ConnectedRecordsFlow />

        {/* 2. Permanent Business Memory & Audit Trail */}
        {/* <BusinessMemoryStory /> */}

        {/* ===================== FEATURE DISCOVERY & NEXT STEPS ===================== */}
        <section className="py-10 sm:py-12 bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold mb-3 shadow-2xs">
                  <SparklesIcon className="w-3.5 h-3.5 text-teal-600" />
                  <span>The Complete Shop Control Suite</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Ready to Supercharge <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">
                    Your Daily Counter Operations?
                  </span>
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Every tool is crafted specifically for Indian retail and wholesale business models — fast, offline-capable, and simple to use.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 bg-[#036272] hover:bg-[#024f5c] text-white font-extrabold text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View All Features</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-5 py-3 rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span>Check Pricing Plans</span>
                </Link>
              </div>
            </div>

            {/* 3 Interactive Feature Discovery Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Fast Billing */}
              <Link
                href="/billing-software"
                className="group relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-teal-50/40 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-teal-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 group-hover:scale-110 transition-transform shadow-xs">
                      <BarcodeIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 border border-teal-200/60 px-2.5 py-0.5 rounded-full">
                      5-Sec Counter Speed
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    GST & Non-GST Billing
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Lightning-fast barcode scanning, thermal printing (2-inch, 3-inch, A4), and instant WhatsApp PDF receipts.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Barcode scanner ready</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Customer-specific custom rates</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-bold text-teal-700 group-hover:text-teal-900">
                  <span>Explore Billing POS</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 2: Khata Accounting */}
              <Link
                href="/khata-accounting"
                className="group relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/40 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-emerald-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform shadow-xs">
                      <UsersIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                      3x Faster Recovery
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Customer & Supplier Udhar
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Automated WhatsApp payment reminders with UPI QR codes. Digital ledgers that eliminate awkward follow-ups.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Automated gentle reminders</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Zero ledger disputes</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                  <span>Explore Khata Ledger</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 3: Stock Management */}
              <Link
                href="/inventory-management"
                className="group relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-indigo-50/40 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-indigo-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100 group-hover:scale-110 transition-transform shadow-xs">
                      <PackageIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-indigo-800 bg-indigo-50 border border-indigo-200/60 px-2.5 py-0.5 rounded-full">
                      Zero Dead Stock
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                    Live Stock & Godown Control
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Real-time stock deduction on every bill, low-stock threshold alerts, batch numbers, and expiry tracking.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>Low-stock automated alerts</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>Wholesale vs retail margins</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-bold text-indigo-700 group-hover:text-indigo-900">
                  <span>Explore Inventory Control</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

            </div>

          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
