"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { ChevronDownIcon, WhatsAppIcon, MailIcon, ArrowRightIcon, CheckIcon } from "../components/Icons";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIdx, setOpenIdx] = useState(0);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "hardware", label: "Hardware & Printers" },
    { id: "offline", label: "Offline & Sync" },
    { id: "billing", label: "Billing & Khata" },
    { id: "security", label: "Security & Cloud" },
  ];

  const faqData = [
    {
      category: "offline",
      q: "Can I bill customers if the shop internet stops working?",
      a: "Yes! The DukanHisab mobile app is designed to continue counter billing offline. You can scan barcodes, generate bills, and update local inventory without interruption. As soon as your internet reconnects, all records sync automatically to the cloud and web panel.",
    },
    {
      category: "hardware",
      q: "What kind of barcode scanner do I need for my shop?",
      a: "DukanHisab is compatible with almost any standard 1D or 2D scanner. You can plug in an ordinary USB laser gun to your computer or phone (via OTG), connect a wireless Bluetooth handheld scanner, or simply use your smartphone camera to scan barcodes directly.",
    },
    {
      category: "hardware",
      q: "Can I connect my thermal receipt printer?",
      a: "Yes. DukanHisab works with standard 2-inch and 3-inch Bluetooth thermal printers, USB receipt printers, and regular A4 office printers. You can customize header details (Shop name, address, GSTIN) and print receipts in one touch.",
    },
    {
      category: "billing",
      q: "How does customer-specific pricing work during billing?",
      a: "You can save a custom price for any product on a customer's profile (for example, offering Rice @ ₹1,200 instead of ₹1,250 to a regular buyer). During billing, the moment you select that customer, DukanHisab automatically calculates the bill using their saved price. No mental math or manual overrides required.",
    },
    {
      category: "security",
      q: "What happens to my data if my phone gets stolen or broken?",
      a: "Your shop records are safe in DukanHisab's encrypted cloud memory. Simply download the app on your new phone or log into the web panel on any computer with your registered mobile number, and your entire history, customer balances, and inventory will be restored instantly.",
    },
    {
      category: "billing",
      q: "Is DukanHisab easy for staff who don't know English well?",
      a: "Absolutely. The interface uses clear visual icons, large buttons, and simple retail terminology (Sales, Purchases, Khata, Cash, Stock). If your counter staff can use WhatsApp, they can generate bills on DukanHisab within 5 minutes of introduction.",
    },
    {
      category: "billing",
      q: "Can I share bills on WhatsApp without typing customer numbers each time?",
      a: "Yes. Once you add a customer to your contacts in DukanHisab, the app automatically pre-populates their WhatsApp number and prepares a clean bill message with PDF attachment in 1 click.",
    },
    {
      category: "security",
      q: "Can I export my data to Excel for my accountant or tax filing?",
      a: "Yes. On the DukanHisab web panel, you can download one-click Excel/CSV spreadsheets of all sales invoices, customer ledgers, supplier bills, and expense reports anytime you want.",
    },
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqData 
    : faqData.filter(f => f.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="pt-12 pb-12 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Knowledge & Help
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
              Frequently Asked Questions.
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
              Everything you need to know about setting up DukanHisab in your shop.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCategory(c.id);
                    setOpenIdx(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === c.id
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.q}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 bg-slate-50 hover:bg-slate-100/70 flex items-center justify-between gap-4 transition-colors"
                  >
                    <span className="font-bold text-base text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "rotate-180 bg-emerald-600 text-white border-emerald-600" : "text-slate-500"
                    }`}>
                      <ChevronDownIcon className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need more help contact card */}
          <div className="mt-14 bg-white border border-emerald-200 rounded-3xl p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Still have questions about your specific shop?
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Our support team is available on WhatsApp to guide you through setup and hardware compatibility.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md shrink-0 transition-all"
            >
              <span>Contact Support</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
