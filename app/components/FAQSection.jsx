"use client";

import React, { useState } from "react";
import { ChevronDownIcon, CheckIcon } from "./Icons";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Can I bill customers if the shop internet stops working?",
      a: "Yes! The DukanHisab mobile app is designed to continue counter billing offline. You can scan barcodes, generate bills, and update local inventory without interruption. As soon as your internet reconnects, all records sync automatically to the cloud and web panel.",
    },
    {
      q: "What kind of barcode scanner do I need?",
      a: "DukanHisab is compatible with almost any standard 1D or 2D scanner. You can plug in an ordinary USB laser gun to your computer or phone (via OTG), connect a wireless Bluetooth handheld scanner, or simply use your smartphone camera to scan barcodes directly.",
    },
    {
      q: "Can I connect my thermal receipt printer?",
      a: "Yes. DukanHisab works with standard 2-inch and 3-inch Bluetooth thermal printers, USB receipt printers, and regular A4 office printers. You can customize header details (Shop name, address, GSTIN) and print receipts in one touch.",
    },
    {
      q: "How does customer-specific pricing work during billing?",
      a: "You can save a custom price for any product on a customer's profile (for example, offering Rice @ ₹1,200 instead of ₹1,250 to a regular buyer). During billing, the moment you select that customer, DukanHisab automatically calculates the bill using their saved price. No mental math or manual overrides required.",
    },
    {
      q: "What happens to my data if my phone gets stolen or broken?",
      a: "Your shop records are safe in DukanHisab's encrypted cloud memory. Simply download the app on your new phone or log into the web panel on any computer with your registered mobile number, and your entire history, customer balances, and inventory will be restored instantly.",
    },
    {
      q: "Is DukanHisab easy for staff who don't know English well?",
      a: "Absolutely. The interface uses clear visual icons, large buttons, and simple retail terminology (Sales, Purchases, Khata, Cash, Stock). If your counter staff can use WhatsApp, they can generate bills on DukanHisab within 5 minutes of introduction.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Questions Shop Owners Ask Us.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Clear, straightforward answers about how DukanHisab fits into your daily routine.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-4 transition-colors"
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

      </div>
    </section>
  );
}
