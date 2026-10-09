import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CounterDemoTerminal from "../components/CounterDemoTerminal";
import Link from "next/link";
import { ArrowRightIcon } from "../components/Icons";

export const metadata = {
  title: "Live Interactive Demo — DukanHisab Counter & POS Simulator",
  description: "Experience the real DukanHisab retail POS counter interface. Add items, scan barcodes, manage customer khata, and generate instant GST invoices.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-teal-700 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#036272] font-bold">Interactive POS Demo</span>
          </div>

          {/* Interactive POS Counter Component */}
          <CounterDemoTerminal />

        </div>
      </main>

      <Footer />
    </div>
  );
}
