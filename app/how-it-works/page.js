import Link from "next/link";
import Navbar from "../components/Navbar";
import ShopDayTimeline from "../components/ShopDayTimeline";
import ConnectedRecordsFlow from "../components/ConnectedRecordsFlow";
import ProductJourney from "../components/ProductJourney";
import BusinessMemoryStory from "../components/BusinessMemoryStory";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { ClockIcon, ArrowRightIcon, CheckIcon } from "../components/Icons";

export const metadata = {
  title: "How DukanHisab Works — A Day Inside Your Shop & Connected Memory",
  description: "Experience how DukanHisab connects everyday shop activities: 8:30 AM opening, barcode scans, sales, customer khata, supplier deliveries, and 9:30 PM closing balance.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="pt-12 pb-14 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <ClockIcon className="w-3.5 h-3.5 text-emerald-700" />
              Story of an Actual Shop Day
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Whatever Happens in Your Shop, <br />
              <span className="text-emerald-600">The Record Stays Connected.</span>
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Follow real shop workflows: from morning shutter opening, truck inward deliveries, customer billing, and tempo expenses to evening closure.
            </p>
          </div>
        </section>

        {/* 1. Interactive Signature Timeline: 8:30 AM to 9:30 PM */}
        <ShopDayTimeline />

        {/* 2. One Sale, Multiple Records Connected Flow */}
        <ConnectedRecordsFlow />

        {/* 3. Product Journey: Rice 25kg from Supplier to Bill */}
        <ProductJourney />

        {/* 4. Emotional Centerpiece: Your Business Has a Memory */}
        <BusinessMemoryStory />

        {/* Navigation to Features */}
        <section className="py-16 bg-white border-y border-slate-200 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ready to explore all counter features?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              See barcode scanning in action, customer-specific pricing, supplier ledgers, and WhatsApp invoices.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all"
              >
                <span>View All Features & POS</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl transition-all"
              >
                <span>Check Pricing Plans</span>
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
