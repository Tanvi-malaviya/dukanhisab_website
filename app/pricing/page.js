import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import ComparePlansTable from "../components/ComparePlansTable";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { RupeeIcon, CheckIcon, ShieldCheckIcon } from "../components/Icons";

export const metadata = {
  title: "DukanHisab Pricing — Clear, Transparent Plans for Every Retail Shop",
  description: "Explore simple, honest plans for DukanHisab. Start free with core POS features, or unlock full barcode scanning, custom pricing, and web panel management.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Ambient Store Background */}
        <section className="relative overflow-hidden w-full border-b border-slate-200/90 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 text-center bg-slate-100">
          {/* Background Image Container with Balanced Contrast */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pricing-hero-bg.jpg"
              alt="Indian Retail Store Background"
              fill
              priority
              className="object-cover object-center opacity-85 select-none pointer-events-none"
            />
            {/* Subtle, translucent overlay so store image is clearly visible while keeping text legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/35 to-slate-50/75" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/90 border border-teal-200 text-teal-800 text-xs font-black tracking-wider uppercase mb-5 shadow-2xs">
              <RupeeIcon className="w-3.5 h-3.5 text-teal-700" />
              <span>Simple, Honest Pricing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Simple Pricing <br className="hidden sm:inline" />
              <span className="text-teal-600">For Every Shopkeeper</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-700 font-semibold max-w-2xl mx-auto leading-relaxed">
              Powerful features. Affordable plans. No hidden charges. Designed to make shop accounting fast and stress-free.
            </p>

            {/* 4 Feature Badges (Centered Wrap) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {[
                "All essential features included",
                "Upgrade anytime",
                "No credit card required to start",
                "Trusted by Indian shopkeepers",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xs border border-slate-300/80 text-xs sm:text-sm font-bold text-slate-800 shadow-sm hover:border-teal-400 transition-colors"
                >
                  <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <CheckIcon className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Core Pricing Cards */}
        <PricingSection />

        {/* 2. Detailed Comparison Matrix Table */}
        <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Compare Plans
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                See what&apos;s included in each plan and choose what works best for you.
              </p>
            </div>

            <ComparePlansTable />

            {/* Satisfaction Guarantee Banner */}
            <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
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
