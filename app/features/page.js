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
import FeaturesCtaSection from "../components/FeaturesCtaSection";
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

        {/* Distinctive Features Page Bento Launchpad CTA */}
        <FeaturesCtaSection />
      </main>

      <Footer />
    </div>
  );
}

