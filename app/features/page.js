import Link from "next/link";
import Navbar from "../components/Navbar";
import FeatureExplorer from "../components/FeatureExplorer";
import BarcodeSection from "../components/BarcodeSection";
import CustomerSection from "../components/CustomerSection";
import SupplierSection from "../components/SupplierSection";
import MoneyFlowSection from "../components/MoneyFlowSection";
import ReturnsSection from "../components/ReturnsSection";
import InvoiceShowcase from "../components/InvoiceShowcase";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { PackageIcon, ArrowRightIcon } from "../components/Icons";

export const metadata = {
  title: "DukanHisab Features — Barcode Billing, Khata, Pricing Engine & Ledgers",
  description: "Explore DukanHisab's retail features: fast barcode POS, customer-specific prices, supplier payables, dual money flow, return notes, and WhatsApp invoicing.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="pt-12 pb-14 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <PackageIcon className="w-3.5 h-3.5 text-emerald-700" />
              Complete Retail Toolset
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Powerful Modules. <br />
              <span className="text-emerald-600">Simple Everyday Shop Operations.</span>
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Every tool a shop owner needs to sell faster, track credit balances accurately, manage inward inventory, and stop losing money on unrecorded expenses.
            </p>
          </div>
        </section>

        {/* 1. Shop Control Center Category Explorer */}
        <FeatureExplorer />

        {/* 2. Barcode Scanning with Live Interactive Laser Simulator */}
        <div id="barcode">
          <BarcodeSection />
        </div>

        {/* 3. Customer Profile & Customer-Specific Pricing Engine */}
        <div id="customer-pricing">
          <CustomerSection />
        </div>

        {/* 4. Supplier Management & Inward Purchases */}
        <div id="suppliers">
          <SupplierSection />
        </div>

        {/* 5. Dual Money Flow & Everyday Expense Logging */}
        <div id="money-flow">
          <MoneyFlowSection />
        </div>

        {/* 6. Sale & Purchase Returns */}
        <div id="returns">
          <ReturnsSection />
        </div>

        {/* 7. Invoice Showcase & WhatsApp/PDF Share */}
        <div id="invoices">
          <InvoiceShowcase />
        </div>

        {/* Next step teaser: Mobile + Web */}
        <section className="py-16 bg-white border-y border-slate-200 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Works seamlessly on phone and computer
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              See how the mobile app at your counter syncs in real-time with the web panel in your office.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all"
              >
                <span>Explore Mobile App & Web Panel</span>
                <ArrowRightIcon className="w-4 h-4" />
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
