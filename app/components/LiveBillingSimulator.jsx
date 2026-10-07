"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  BarcodeIcon, 
  ReceiptIcon, 
  CheckIcon, 
  RupeeIcon, 
  SmartphoneIcon,
  PlayIcon,
  ShoppingBagIcon
} from "./Icons";

export default function LiveBillingSimulator() {
  const catalog = [
    {
      id: "fortune-oil",
      name: "Fortune Sunlite Oil 1L",
      code: "8901030",
      category: "Grocery",
      price: 165,
      gstRate: 5,
      icon: "🌻",
      stock: 24,
    },
    {
      id: "aashirvaad-atta",
      name: "Aashirvaad Shudh Chakki Atta 10kg",
      code: "8901031",
      category: "Staples",
      price: 410,
      gstRate: 0,
      icon: "🌾",
      stock: 15,
    },
    {
      id: "tata-tea",
      name: "Tata Tea Gold 500g",
      code: "8901032",
      category: "Beverages",
      price: 280,
      gstRate: 5,
      icon: "☕",
      stock: 32,
    },
    {
      id: "dettol-soap",
      name: "Dettol Bathing Soap (Pack of 4)",
      code: "8901033",
      category: "Personal Care",
      price: 140,
      gstRate: 18,
      icon: "🧼",
      stock: 40,
    },
    {
      id: "cadbury-dairy",
      name: "Cadbury Dairy Milk Silk 150g",
      code: "8901034",
      category: "Snacks",
      price: 90,
      gstRate: 18,
      icon: "🍫",
      stock: 18,
    },
    {
      id: "surf-excel",
      name: "Surf Excel Easy Wash 1kg",
      code: "8901035",
      category: "Cleaning",
      price: 145,
      gstRate: 18,
      icon: "🧺",
      stock: 22,
    },
  ];

  const [cart, setCart] = useState([
    { ...catalog[0], qty: 1 },
    { ...catalog[2], qty: 1 },
  ]);
  const [customerType, setCustomerType] = useState("khata"); // "cash" | "khata"
  const [customerName, setCustomerName] = useState("Rahul Patel");
  const [customerPhone, setCustomerPhone] = useState("+91 98250 12345");
  const [lastScanned, setLastScanned] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [printedReceipt, setPrintedReceipt] = useState(null);

  // Add or increment item
  const handleAddItem = (item) => {
    setLastScanned(item.id);
    setTimeout(() => setLastScanned(null), 800);

    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleClearCart = () => {
    setCart([]);
    setPrintedReceipt(null);
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const gstTotal = Math.round(
    cart.reduce((acc, item) => acc + (item.price * item.qty * item.gstRate) / 100, 0)
  );
  const grandTotal = subtotal + gstTotal;

  // Simulate Instant Bill Generation
  const handleGenerateBill = () => {
    if (cart.length === 0) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setPrintedReceipt({
        billNo: "DH-" + Math.floor(1000 + Math.random() * 9000),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        items: [...cart],
        subtotal,
        gstTotal,
        grandTotal,
        customerName: customerType === "khata" ? customerName : "Cash Customer",
        customerType,
      });
    }, 600);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-[#0a1f18] to-slate-950 text-white relative overflow-hidden">
      {/* 3D Grid backdrop lines */}
      <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Interactive Live Demo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Experience 10-Second <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200">
              Smart Counter Billing
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Test the real speed right here. Tap products to scan barcodes, see automatic GST calculations, and print an instant thermal receipt!
          </p>
        </div>

        {/* Interactive POS Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Shelf (Click to scan) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏪</span>
                <h3 className="text-base font-bold text-white">Tap Item to Scan Barcode</h3>
              </div>
              <span className="text-xs text-teal-400 font-mono bg-teal-950/60 border border-teal-500/30 px-2.5 py-1 rounded-full">
                Laser Scanner Ready
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {catalog.map((item) => {
                const isScanning = lastScanned === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleAddItem(item)}
                    className={`relative p-3.5 rounded-2xl border text-left transition-all duration-200 group active:scale-95 overflow-hidden ${
                      isScanning
                        ? "bg-teal-500/30 border-teal-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-teal-500/40"
                    }`}
                  >
                    {/* Laser scanline animation */}
                    {isScanning && (
                      <div className="absolute inset-0 bg-teal-500/20 z-10 pointer-events-none">
                        <div className="w-full h-1 bg-teal-300 shadow-[0_0_10px_#2dd4bf] animate-laser absolute left-0" />
                      </div>
                    )}

                    <div className="flex items-start justify-between">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-mono text-teal-300 bg-teal-950/70 border border-teal-500/30 px-1.5 py-0.5 rounded">
                        #{item.code.slice(-4)}
                      </span>
                    </div>

                    <div className="mt-2.5">
                      <div className="text-xs font-bold text-white line-clamp-1 group-hover:text-teal-300 transition-colors">
                        {item.name}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-black text-teal-400 font-mono">
                          ₹{item.price}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {item.gstRate > 0 ? `GST ${item.gstRate}%` : "No GST"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400">
                      <span>Stock: {item.stock}</span>
                      <span className="text-teal-400 font-bold group-hover:underline">
                        + Add
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 p-3 bg-teal-950/40 border border-teal-500/20 rounded-2xl flex items-center gap-2.5 text-xs text-teal-200">
              <span className="text-teal-400 font-bold">💡 Tip:</span>
              <span>In real shops, just point your smartphone camera or any USB barcode gun to scan instantly.</span>
            </div>
          </div>

          {/* Center Column: Live Billing Screen */}
          <div className="lg:col-span-4 bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 shadow-2xl flex flex-col justify-between min-h-[520px]">
            <div>
              {/* Header with Mode Toggle */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ReceiptIcon className="w-5 h-5 text-teal-400" />
                  <span className="font-black text-sm text-white">Current Invoice</span>
                </div>
                <button
                  type="button"
                  onClick={handleClearCart}
                  className="text-[11px] text-slate-400 hover:text-rose-400 font-medium transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Customer Selection Pill */}
              <div className="mt-4 p-3 bg-slate-800/80 rounded-2xl border border-slate-700">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400 font-medium">Customer Type:</span>
                  <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-700">
                    <button
                      type="button"
                      onClick={() => setCustomerType("cash")}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        customerType === "cash"
                          ? "bg-teal-500 text-white shadow-xs"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Cash
                    </button>
                    <button
                      type="button"
                      onClick={() => setCustomerType("khata")}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        customerType === "khata"
                          ? "bg-teal-500 text-white shadow-xs"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Khata (Credit)
                    </button>
                  </div>
                </div>

                {customerType === "khata" && (
                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 text-xs">
                    <div>
                      <span className="font-bold text-white block">{customerName}</span>
                      <span className="text-[10px] text-slate-400">{customerPhone}</span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 border border-amber-600/30 px-2 py-0.5 rounded-full">
                      Old Bal: ₹7,000
                    </span>
                  </div>
                )}
              </div>

              {/* Cart Items List */}
              <div className="mt-4 space-y-2 max-h-56 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-10 text-slate-500 text-xs">
                    <ShoppingBagIcon className="w-8 h-8 mx-auto mb-2 opacity-40 text-teal-400" />
                    Cart is empty. Tap an item from the shelf to scan!
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2.5 bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-slate-700/60 text-xs transition-colors"
                    >
                      <div className="flex-1 pr-2">
                        <div className="font-bold text-slate-200 line-clamp-1">{item.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          ₹{item.price} each {item.gstRate > 0 && `• GST ${item.gstRate}%`}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="inline-flex items-center bg-slate-900 border border-slate-700 rounded-lg">
                          <button
                            type="button"
                            onClick={() => handleUpdateQty(item.id, -1)}
                            className="px-2 py-0.5 text-slate-400 hover:text-white font-bold"
                          >
                            -
                          </button>
                          <span className="px-1.5 font-bold font-mono text-teal-400 text-xs">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleUpdateQty(item.id, 1)}
                            className="px-2 py-0.5 text-slate-400 hover:text-white font-bold"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-bold font-mono text-white text-right min-w-[50px]">
                          ₹{item.price * item.qty}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Calculations & CTA */}
            <div className="pt-4 border-t border-slate-800 mt-4">
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-200">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Calculated GST (CGST + SGST)</span>
                  <span className="font-mono text-slate-200">₹{gstTotal}</span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-slate-800">
                  <span>Total Due</span>
                  <span className="font-mono text-teal-400 text-lg">₹{grandTotal}</span>
                </div>
              </div>

              <button
                type="button"
                disabled={cart.length === 0 || isGenerating}
                onClick={handleGenerateBill}
                className={`w-full mt-4 py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                  cart.length === 0
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                    : isGenerating
                    ? "bg-teal-700 text-white animate-pulse"
                    : "bg-teal-500 hover:bg-teal-600 text-white shadow-teal-500/20 active:scale-98"
                }`}
              >
                <BarcodeIcon className="w-4 h-4" />
                <span>
                  {isGenerating
                    ? "Printing Thermal Bill..."
                    : customerType === "khata"
                    ? "Record in Khata & Send SMS ⚡"
                    : "Generate Bill & Print Receipt 🖨️"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Thermal Receipt Preview */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="w-full bg-white text-slate-900 rounded-3xl p-5 shadow-2xl border-4 border-slate-800 relative transition-transform hover:-translate-y-1 duration-300 font-mono text-xs">
              
              {/* Paper Top Sawtooth cut effect */}
              <div className="absolute -top-3 left-0 right-0 h-3 bg-repeat-x bg-[radial-gradient(circle,transparent_4px,#ffffff_4px)] [background-size:12px_12px]" />

              <div className="text-center pb-3 border-b-2 border-dashed border-slate-300">
                <div className="text-xs font-black tracking-widest text-teal-800">
                  DUKANHISAB SMART POS
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Shree Ganesh Kirana & General Store
                </div>
                <div className="text-[9px] text-slate-400">
                  Station Road, Ahmedabad • GSTIN: 24AAACD1234E1Z
                </div>
              </div>

              <div className="py-2.5 text-[10px] border-b border-slate-200 flex justify-between text-slate-600">
                <span>Bill: {printedReceipt ? printedReceipt.billNo : "DH-4029"}</span>
                <span>Time: {printedReceipt ? printedReceipt.time : "10:15 AM"}</span>
              </div>

              <div className="py-1.5 text-[10px] border-b border-slate-200">
                <span className="text-slate-500">Customer: </span>
                <span className="font-bold text-slate-800">
                  {printedReceipt ? printedReceipt.customerName : customerName}
                </span>
                <span className="block text-[9px] text-teal-700 font-semibold">
                  Mode: {printedReceipt ? printedReceipt.customerType.toUpperCase() : "KHATA (RECORDED)"}
                </span>
              </div>

              {/* Items */}
              <div className="py-2.5 space-y-1.5 border-b-2 border-dashed border-slate-300">
                {(printedReceipt ? printedReceipt.items : cart).map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start text-[10px]">
                    <span className="flex-1 pr-1 truncate">
                      {item.name} x {item.qty}
                    </span>
                    <span className="font-bold">₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="py-2 text-[10px] space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal:</span>
                  <span>₹{printedReceipt ? printedReceipt.subtotal : subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>GST:</span>
                  <span>₹{printedReceipt ? printedReceipt.gstTotal : gstTotal}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-slate-900 pt-1 border-t border-slate-300">
                  <span>NET TOTAL:</span>
                  <span>₹{printedReceipt ? printedReceipt.grandTotal : grandTotal}</span>
                </div>
              </div>

              {/* Mock QR Code */}
              <div className="pt-3 border-t-2 border-dashed border-slate-300 text-center">
                <div className="w-16 h-16 mx-auto bg-slate-900 rounded-lg p-1.5 flex items-center justify-center text-[8px] text-white">
                  <div className="border-2 border-white w-full h-full flex flex-col items-center justify-center">
                    <span className="font-bold">UPI QR</span>
                    <span>₹{printedReceipt ? printedReceipt.grandTotal : grandTotal}</span>
                  </div>
                </div>
                <div className="text-[9px] text-slate-500 mt-2">
                  Scan & Pay with GPay / PhonePe / Paytm
                </div>
                <div className="text-[8px] text-teal-700 font-bold mt-1">
                  ✓ Khata Auto-Synced to WhatsApp
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-teal-400 font-bold">
                <CheckIcon className="w-4 h-4" />
                <span>Works on 2-inch & 3-inch Bluetooth printers</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
