import Link from "next/link";
import Navbar from "../components/Navbar";
import FeatureHero from "../components/FeatureHero";
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
  title: "DukanHisab Features — Everything Your Shop Needs in One App",
  description: "From billing to inventory, customer khata to business reports — DukanHisab gives you all the tools to manage your retail business easily and professionally.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* Unique Feature Hero with authentic shopkeeper & smartphone mockup + 8 quick cards */}
        <FeatureHero />

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
        {/* <div id="money-flow">
          <MoneyFlowSection />
        </div> */}

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
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all"
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
