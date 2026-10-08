"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function GstInvoiceInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState("thermal"); // "thermal" | "a4" | "whatsapp"
  const [items, setItems] = useState([
    { id: 1, name: "Wheat Flour (Atta)", hsn: "1101", qty: 1, rate: 500, gstRate: 0 },
    { id: 2, name: "Cooking Mustard Oil", hsn: "1508", qty: 2, rate: 160, gstRate: 5 },
    { id: 3, name: "Toor Dal (Premium)", hsn: "0713", qty: 1, rate: 280, gstRate: 5 },
    { id: 4, name: "Dettol Bath Soap 4pk", hsn: "3401", qty: 1, rate: 140, gstRate: 18 },
  ]);
  const [actionNotice, setActionNotice] = useState(null);

  // Trigger feedback toast
  const triggerNotice = (msg) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(null), 3000);
  };

  // Calculations
  const subtotal = items.reduce((acc, it) => acc + it.qty * it.rate, 0);
  const totalTax = items.reduce((acc, it) => {
    const itemTotal = it.qty * it.rate;
    return acc + (itemTotal * it.gstRate) / 100;
  }, 0);
  const cgst = totalTax / 2;
  const sgst = totalTax / 2;
  const grandTotal = Math.round(subtotal + totalTax);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Top Format Selector Tabs */}
      <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 mb-3.5 shadow-inner border border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab("thermal")}
          className={`flex-1 py-2 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === "thermal"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
          }`}
        >
          <span>🧾</span>
          <span>Thermal Bill</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("a4")}
          className={`flex-1 py-2 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === "a4"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
          }`}
        >
          <span>📄</span>
          <span>A4 Tax Invoice</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("whatsapp")}
          className={`flex-1 py-2 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === "whatsapp"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
          }`}
        >
          <span>💬</span>
          <span>WhatsApp Bill</span>
        </button>
      </div>

      {/* Main Interactive Bill Container */}
      <div className="relative bg-white rounded-3xl border-2 border-slate-200/90 shadow-2xl overflow-hidden transition-all duration-300">
        
        {/* ==================== 1. THERMAL BILL VIEW ==================== */}
        {activeTab === "thermal" && (
          <div className="p-5 sm:p-6 bg-white font-mono text-slate-800 text-xs">
            {/* Header */}
            <div className="text-center pb-3 border-b border-dashed border-slate-300">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md mb-1 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                DukanHisab POS Thermal Bill
              </div>
              <h3 className="text-base font-black tracking-tight text-slate-900 font-sans mt-0.5">
                SHREE KRISHNA STORE
              </h3>
              <p className="text-[10px] text-slate-500">Shop No 4, Station Rd, Main Bazaar</p>
              <p className="text-[10px] text-slate-600 font-bold mt-0.5">
                GSTIN: 24AAACG1234F1Z5 • 98250 12345
              </p>
            </div>

            {/* Meta */}
            <div className="py-2.5 border-b border-dashed border-slate-300 flex justify-between text-[11px] text-slate-600">
              <div>
                <span className="font-bold text-slate-800">Bill: #DH-1049</span>
                <p className="text-[10px] text-slate-500">Cust: ABC Traders (Cash)</p>
              </div>
              <div className="text-right">
                <span>Date: 06 Oct 2026</span>
                <p className="text-[10px] text-slate-500">11:42 AM</p>
              </div>
            </div>

            {/* Item Table */}
            <div className="py-3 border-b border-dashed border-slate-300">
              <div className="flex justify-between font-bold text-[10px] text-slate-400 uppercase pb-1.5">
                <span className="w-1/2">Item Description</span>
                <span className="w-1/6 text-center">Qty</span>
                <span className="w-1/3 text-right">Amt (₹)</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                {items.map((it) => (
                  <div key={it.id} className="flex justify-between items-center">
                    <span className="w-1/2 font-sans font-medium text-slate-800 truncate">
                      {it.name}
                    </span>
                    <span className="w-1/6 text-center text-slate-600">{it.qty}</span>
                    <span className="w-1/3 text-right font-bold text-slate-900">
                      ₹{it.qty * it.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tax & Total */}
            <div className="py-3 border-b border-dashed border-slate-300 space-y-1 text-[11px]">
              <div className="flex justify-between text-slate-600">
                <span>Items Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-teal-700">
                <span>CGST (Central Tax):</span>
                <span>₹{cgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-teal-700">
                <span>SGST (State Tax):</span>
                <span>₹{sgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-black text-slate-900 pt-1 border-t border-slate-200">
                <span>NET TOTAL:</span>
                <span className="text-emerald-700 text-base">₹{grandTotal}</span>
              </div>
            </div>

            {/* Thermal Footer with QR Code */}
            <div className="pt-3 text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-slate-100 rounded-lg p-1 border border-slate-200 mb-1.5 flex items-center justify-center">
                <Image
                  src="/images/qr-code.png"
                  alt="UPI QR Code"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-[10px] font-bold text-slate-700 font-sans">
                Scan to Pay via UPI • GPay / PhonePe / Paytm
              </p>
              <p className="text-[9px] text-slate-400 mt-0.5">*** Thank You! Visit Again ***</p>
            </div>
          </div>
        )}

        {/* ==================== 2. A4 TAX INVOICE VIEW ==================== */}
        {activeTab === "a4" && (
          <div className="p-5 sm:p-6 bg-slate-50/50 font-sans text-xs">
            {/* Formal Tax Invoice Header */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs mb-3">
              <div className="flex justify-between items-start border-b border-slate-100 pb-2.5 mb-2.5">
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider bg-teal-100 text-teal-800 px-2 py-0.5 rounded-md">
                    TAX INVOICE (RULE 46)
                  </span>
                  <h4 className="text-sm font-black text-slate-900 mt-1">
                    SHREE KRISHNA GENERAL STORE
                  </h4>
                  <p className="text-[10px] text-slate-500">GSTIN: 24AAACG1234F1Z5</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400">INVOICE NO</span>
                  <p className="text-xs font-black text-slate-900">INV-2026-089</p>
                  <p className="text-[10px] text-slate-500">Date: 06-10-2026</p>
                </div>
              </div>

              {/* Bill To Info */}
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px]">
                <span className="font-bold text-slate-700 uppercase tracking-wider block mb-0.5">
                  Billed To (Customer):
                </span>
                <p className="font-bold text-slate-900">M/s ABC Traders &amp; Kirana</p>
                <p className="text-slate-500">GSTIN: 24AAACP9988C1Z2 • Ahmedabad, Gujarat</p>
              </div>
            </div>

            {/* HSN GST Breakdown Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-3">
              <table className="w-full text-left text-[10px]">
                <thead className="bg-slate-100 text-slate-600 font-bold uppercase border-b border-slate-200">
                  <tr>
                    <th className="p-2">Item</th>
                    <th className="p-2">HSN</th>
                    <th className="p-2 text-center">Tax %</th>
                    <th className="p-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((it) => (
                    <tr key={it.id} className="hover:bg-slate-50/50">
                      <td className="p-2 font-medium text-slate-800">{it.name}</td>
                      <td className="p-2 font-mono text-slate-500">{it.hsn}</td>
                      <td className="p-2 text-center">
                        <span className="bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded font-bold">
                          {it.gstRate}%
                        </span>
                      </td>
                      <td className="p-2 text-right font-bold text-slate-900">
                        ₹{it.qty * it.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tax Total Box & Seal */}
            <div className="bg-teal-50/60 p-3 rounded-2xl border border-teal-200 flex justify-between items-center text-xs">
              <div>
                <span className="text-[10px] text-teal-800 font-bold block">
                  CGST: ₹{cgst.toFixed(2)} | SGST: ₹{sgst.toFixed(2)}
                </span>
                <span className="text-[10px] text-teal-600">Reverse Charge: No</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-slate-500">Invoice Total</span>
                <p className="text-base font-black text-teal-900">₹{grandTotal}</p>
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[9px] text-slate-500 px-1">
              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                ✓ 100% Tax Compliant
              </span>
              <span>Authorized Signatory (Digital)</span>
            </div>
          </div>
        )}

        {/* ==================== 3. WHATSAPP E-BILL VIEW ==================== */}
        {activeTab === "whatsapp" && (
          <div className="p-5 bg-gradient-to-b from-[#e5ddd5] to-[#ece5dd] font-sans text-xs min-h-[380px] flex flex-col justify-between">
            {/* WhatsApp Header bar */}
            <div className="bg-[#075e54] text-white p-3 rounded-2xl shadow-md flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                🛍️
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold leading-tight truncate">
                  Shree Krishna General Store
                </h4>
                <p className="text-[9px] text-teal-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block" />
                  Official Business Account
                </p>
              </div>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">WhatsApp</span>
            </div>

            {/* Chat Bubble Message */}
            <div className="bg-white rounded-2xl p-3.5 shadow-md border border-slate-200/80 max-w-[92%] self-start space-y-2">
              <p className="text-slate-800 text-[11px] leading-relaxed">
                Namaste <strong>Rahul Patel</strong>! 🙏<br />
                Thank you for shopping with us. Here is your GST Invoice <strong>#DH-1049</strong>.
              </p>

              {/* PDF File Attachment Card */}
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-lg shrink-0">
                  📄
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-slate-900 truncate">
                    Invoice_DH1049_Tax.pdf
                  </p>
                  <p className="text-[9px] text-slate-500">128 KB • GST Compliant PDF</p>
                </div>
              </div>

              {/* Summary line */}
              <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100 flex justify-between items-center text-[11px]">
                <span className="text-emerald-800 font-bold">Total Bill:</span>
                <span className="text-emerald-900 font-black text-xs">₹{grandTotal} (Paid)</span>
              </div>

              <div className="flex justify-end items-center gap-1 text-[9px] text-slate-400">
                <span>11:43 AM</span>
                <span className="text-teal-600 font-bold">✓✓</span>
              </div>
            </div>

            {/* Quick interactive action button inside WhatsApp */}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => triggerNotice("✓ Invoice link opened on customer's phone")}
                className="w-full bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-xs transition-colors"
              >
                <span>📲</span>
                <span>Open &amp; View Digital Bill</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Interactive Toolbar */}
        <div className="bg-slate-900 text-white p-3 sm:p-3.5 flex items-center justify-between gap-2 border-t border-slate-800">
          <button
            type="button"
            onClick={() => triggerNotice("🖨️ Printing 3-inch thermal receipt...")}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <span>🖨️</span>
            <span>Print</span>
          </button>

          <button
            type="button"
            onClick={() => triggerNotice("💬 Sent instant GST Bill to WhatsApp: +91 98250...")}
            className="flex-1 bg-[#036272] hover:bg-[#024f5c] text-white text-[11px] font-bold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-md shadow-teal-900/50"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => triggerNotice("📥 Downloading GSTR-1 ready PDF...")}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <span>📥</span>
            <span>PDF</span>
          </button>
        </div>

        {/* Floating Notification Toast */}
        {actionNotice && (
          <div className="absolute top-3 inset-x-3 z-30 bg-slate-900/95 text-white text-xs font-bold py-2 px-3 rounded-xl shadow-2xl border border-teal-500/50 text-center animate-bounce flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{actionNotice}</span>
          </div>
        )}
      </div>

      {/* Helpful Hint */}
      <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
        👆 Click tabs above to preview <strong>Thermal</strong>, <strong>A4</strong>, and <strong>WhatsApp</strong> formats
      </p>
    </div>
  );
}
