import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WebAppFeatures from "./components/WebAppFeatures";
import ShopWebsiteShowcase from "./components/ShopWebsiteShowcase";
import BusinessNetworkMap from "./components/BusinessNetworkMap";
import BusinessTypes from "./components/BusinessTypes";
import TrustSection from "./components/TrustSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { ArrowRightIcon, BarcodeIcon, ClockIcon, SmartphoneIcon, MonitorIcon, CheckIcon, ShieldCheckIcon } from "./components/Icons";

export const metadata = {
  title: "DukanHisab — Retail POS, Khata, Inventory & E-Commerce Storefront",
  description: "DukanHisab connects every sale, purchase, barcode scan, customer, supplier, payment, cash drawer closure, and 1-click digital shop website in one smart ecosystem.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Authentic DukanHisab Web-App & POS Showcase */}
        <Hero />

        {/* 2. Real DukanHisab Web-App & ERP Features Showcase (POS, Website, Cashbook, Inventory, Containers, Offline Sync) */}
        <WebAppFeatures />

        {/* 3. Standout 'Make Website' Public Storefront & WhatsApp Commerce Showcase */}
        <ShopWebsiteShowcase />

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
