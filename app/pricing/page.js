import Link from "next/link";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { RupeeIcon, CheckIcon, ShieldCheckIcon } from "../components/Icons";

export const metadata = {
  title: "DukanHisab Pricing — Clear, Transparent Plans for Every Retail Shop",
  description: "Explore simple, honest plans for DukanHisab. Start free with core POS features, or unlock full barcode scanning, custom pricing, and web panel management.",
};

export default function PricingPage() {
  const comparisonFeatures = [
    { name: "Counter POS Billing & Receipts", free: "Yes", pro: "Yes", biz: "Yes" },
    { name: "Product Catalog Limit", free: "Up to 200", pro: "Unlimited", biz: "Unlimited" },
    { name: "Customer Khata & Ledgers", free: "Yes", pro: "Yes", biz: "Yes" },
    { name: "WhatsApp & PDF Invoices", free: "Yes", pro: "Yes", biz: "Yes" },
    { name: "Barcode Scanning (Laser / Camera)", free: "Basic", pro: "Full Speed", biz: "Full Speed" },
    { name: "Customer-Specific Pricing", free: "No", pro: "Yes", biz: "Yes" },
    { name: "Supplier Purchases & Debit Notes", free: "No", pro: "Yes", biz: "Yes" },
    { name: "Sale & Purchase Returns", free: "No", pro: "Yes", biz: "Yes" },
    { name: "Web Panel Browser Access", free: "No", pro: "Yes", biz: "Yes" },
    { name: "Everyday Expense Tracking", free: "No", pro: "Yes", biz: "Yes" },
    { name: "Excel Data Export", free: "No", pro: "Yes", biz: "Yes" },
    { name: "Multi-Counter / Multi-Device Billing", free: "1 Mobile", pro: "1 Mobile + 1 Web", biz: "Unlimited Devices" },
    { name: "Staff Permissions & Roles", free: "No", pro: "No", biz: "Yes" },
    { name: "Priority Support & Onboarding", free: "Standard", pro: "Priority WhatsApp", biz: "Dedicated Manager" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="pt-12 pb-8 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <RupeeIcon className="w-3.5 h-3.5 text-emerald-700" />
              Transparent Shop Tiers
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Invest in Your Shop's Memory. <br />
              <span className="text-emerald-600">Zero Hidden Surcharges.</span>
            </h1>
            <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Transparent plans designed to pay for themselves by stopping forgotten khatas, pricing errors, and lost expense records.
            </p>
          </div>
        </section>

        {/* 1. Core Pricing Cards */}
        <PricingSection />

        {/* 2. Detailed Comparison Matrix Table */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Detailed Plan Comparison
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Everything you get in each tier at a glance.
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-3xl shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold">
                  <tr>
                    <th className="py-4 px-5">Capability / Feature</th>
                    <th className="py-4 px-4 text-center">Starter Core</th>
                    <th className="py-4 px-4 text-center text-emerald-700 bg-emerald-50/70 font-extrabold">Shop Pro</th>
                    <th className="py-4 px-4 text-center">Business Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonFeatures.map((row) => (
                    <tr key={row.name} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-slate-800">{row.name}</td>
                      <td className="py-3.5 px-4 text-center text-slate-600 font-medium">{row.free}</td>
                      <td className="py-3.5 px-4 text-center text-emerald-700 bg-emerald-50/30 font-bold">{row.pro}</td>
                      <td className="py-3.5 px-4 text-center text-slate-900 font-bold">{row.biz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Satisfaction Guarantee Banner */}
            <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheckIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Try DukanHisab completely risk-free
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Start with the free tier to test counter billing on your phone. When you upgrade, you can cancel or switch anytime with zero cancellation fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pricing FAQ preview */}
        <FAQSection />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
