"use client";

import React, { useState } from "react";
import { 
  ReceiptIcon, 
  WhatsAppIcon, 
  PdfIcon, 
  MailIcon, 
  CheckIcon, 
  RupeeIcon, 
  Share2Icon,
  StoreIcon 
} from "./Icons";

export default function InvoiceShowcase() {
  const [shareStatus, setShareStatus] = useState(null);

  const triggerShare = (channel) => {
    setShareStatus(channel);
    setTimeout(() => setShareStatus(null), 2500);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ReceiptIcon className="w-3.5 h-3.5 text-emerald-700" />
            Instant Digital Invoicing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Bill Created. Ready to Share.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Generate clean, professional invoices in seconds. Print for counter customers or share directly via WhatsApp and PDF.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Share Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                Share With Customer In 1-Click
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Save paper and give customers a modern digital receipt they can check anytime on their phone.
              </p>

              {/* WhatsApp Share Button */}
              <button
                onClick={() => triggerShare("whatsapp")}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </div>
                <span className="text-xs bg-emerald-700/60 px-2 py-0.5 rounded-md font-mono">
                  Popular
                </span>
              </button>

              {/* PDF Download Button */}
              <button
                onClick={() => triggerShare("pdf")}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <PdfIcon className="w-5 h-5 text-rose-400" />
                  <span>Download / Print PDF</span>
                </div>
                <span className="text-xs bg-slate-800 px-2 py-0.5 rounded-md font-mono text-slate-300">
                  Thermal & A4
                </span>
              </button>

              {/* Email Button */}
              <button
                onClick={() => triggerShare("email")}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <MailIcon className="w-5 h-5 text-slate-600" />
                  <span>Send via Email</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Automated</span>
              </button>

              {/* Feedback toast */}
              {shareStatus && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 font-bold flex items-center gap-2 animate-bounce">
                  <CheckIcon className="w-4 h-4 text-emerald-600" />
                  <span>
                    {shareStatus === "whatsapp" && "WhatsApp message prepared for Rahul Patel (+91 98765 43210)"}
                    {shareStatus === "pdf" && "PDF Invoice generated with QR code and GST breakdown"}
                    {shareStatus === "email" && "Email dispatched with PDF attachment"}
                  </span>
                </div>
              )}
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <p className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-emerald-600" />
                Printer Compatibility
              </p>
              <p>Supports 2-inch & 3-inch Bluetooth thermal printers, standard USB POS receipt printers, and regular A4 office printers.</p>
            </div>
          </div>

          {/* Right: Realistic High-Fidelity Bill Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-300/80 shadow-2xl relative font-sans text-slate-800">
              
              {/* Receipt Header */}
              <div className="text-center pb-4 border-b border-dashed border-slate-300">
                <div className="inline-flex items-center gap-1.5 justify-center mb-1">
                  <StoreIcon className="w-4 h-4 text-emerald-600" />
                  <span className="font-black text-base text-slate-900 tracking-tight uppercase">
                    Shree Ganesh General Store
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">Shop No. 4, Station Road, Main Market</p>
                <p className="text-[11px] text-slate-500 font-mono">GSTIN: 24AAACG1234F1Z5 • Phone: 98250 12345</p>
              </div>

              {/* Invoice Meta */}
              <div className="py-3 border-b border-dashed border-slate-300 flex justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">Bill No: DH-4029</p>
                  <p className="text-slate-500">Customer: Rahul Patel (+91 98765 43210)</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-slate-600">Date: 19 Sep 2026</p>
                  <p className="font-medium text-slate-600">Time: 10:05 AM</p>
                </div>
              </div>

              {/* Items List */}
              <div className="py-4 border-b border-dashed border-slate-300">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-slate-400 font-bold uppercase text-[10px]">
                      <th className="text-left pb-2">Item</th>
                      <th className="text-center pb-2">Qty</th>
                      <th className="text-right pb-2">Rate</th>
                      <th className="text-right pb-2">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    <tr>
                      <td className="py-2 font-bold text-slate-900">Fortune Kolam Rice 25kg</td>
                      <td className="text-center py-2">1 Bag</td>
                      <td className="text-right py-2">₹1,250</td>
                      <td className="text-right py-2 font-bold">₹1,250</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold text-slate-900">Fortune Sunflower Oil 5L</td>
                      <td className="text-center py-2">1 Can</td>
                      <td className="text-right py-2">₹820</td>
                      <td className="text-right py-2 font-bold">₹820</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Financial Totals */}
              <div className="pt-4 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal (2 Items):</span>
                  <span className="font-bold">₹2,070.00</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax (Included):</span>
                  <span>₹39.05</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Grand Total:</span>
                  <span className="text-emerald-700 font-black">₹2,070.00</span>
                </div>

                <div className="flex justify-between text-xs pt-1">
                  <span className="text-slate-500 font-medium">Payment Mode:</span>
                  <span className="font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    Cash Paid ✓
                  </span>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-5 pt-3 border-t border-dashed border-slate-300 text-center text-[10px] text-slate-400">
                <p>Thank you for your business! Powered by DukanHisab</p>
                <p className="font-mono mt-0.5">Every Rupee. Remembered.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
