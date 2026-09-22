"use client";

import React, { useState } from "react";
import { BarcodeIcon, CheckIcon, PackageIcon, ReceiptIcon, RupeeIcon, ArrowRightIcon } from "./Icons";

export default function BarcodeSection() {
  const [selectedProduct, setSelectedProduct] = useState("rice");
  const [scanTriggered, setScanTriggered] = useState(false);

  const testProducts = {
    rice: {
      name: "Fortune Kolam Rice 25kg",
      barcode: "8901030382012",
      category: "Grains & Rice",
      mrp: "₹1,300",
      salePrice: "₹1,250",
      stock: "18 Bags remaining",
      gst: "0%",
      hsn: "100630",
    },
    oil: {
      name: "Fortune Sunflower Oil 5L Jar",
      barcode: "8901233001824",
      category: "Edible Oils",
      mrp: "₹875",
      salePrice: "₹820",
      stock: "24 Cans remaining",
      gst: "5%",
      hsn: "151219",
    },
    sugar: {
      name: "Madhur Pure Crystal Sugar 10kg",
      barcode: "8901455209110",
      category: "Staples",
      mrp: "₹510",
      salePrice: "₹460",
      stock: "12 Bags remaining",
      gst: "0%",
      hsn: "170199",
    },
  };

  const current = testProducts[selectedProduct];

  const handleScanClick = (prodKey) => {
    setSelectedProduct(prodKey);
    setScanTriggered(true);
    setTimeout(() => setScanTriggered(false), 1200);
  };

  const steps = [
    { title: "Scan Barcode", desc: "Use USB/Bluetooth scanner or phone camera", icon: BarcodeIcon },
    { title: "Product Found", desc: "Matched by EAN/SKU instantly in 0.2s", icon: PackageIcon },
    { title: "Add to Bill", desc: "Correct price applied automatically", icon: ReceiptIcon },
    { title: "Payment", desc: "Cash, UPI, Khata, or Split", icon: RupeeIcon },
    { title: "Stock Updated", desc: "Warehouse balance decremented", icon: CheckIcon },
    { title: "Record Stored", desc: "Locked into connected business history", icon: CheckIcon },
  ];

  return (
    <section id="barcode-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BarcodeIcon className="w-3.5 h-3.5 text-emerald-700" />
            Fast Counter Operations
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Scan. Sell. Done.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 font-medium">
            Turn a product scan into a complete business record.
          </p>
        </div>

        {/* 6-Step Visual Flow Diagram */}
        <div className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div 
                  key={st.title} 
                  className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center hover:border-emerald-300 hover:bg-emerald-50/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center mx-auto mb-2.5 shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block mb-0.5">
                    STEP 0{i + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{st.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Interactive Scanner Demo Terminal */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Interactive Scanner Simulation
              </span>
              <p className="text-sm text-slate-300 mt-0.5">
                Click any product below to simulate a real counter barcode scan:
              </p>
            </div>

            {/* Product Switcher Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleScanClick("rice")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedProduct === "rice"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Scan Rice 25kg
              </button>
              <button
                onClick={() => handleScanClick("oil")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedProduct === "oil"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Scan Oil 5L
              </button>
              <button
                onClick={() => handleScanClick("sugar")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedProduct === "sugar"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Scan Sugar 10kg
              </button>
            </div>
          </div>

          {/* Scanner Visualizer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8 items-center">
            
            {/* Left: Barcode Laser Box */}
            <div className="md:col-span-5 bg-black/80 rounded-2xl p-6 border border-slate-700/80 text-center relative overflow-hidden shadow-inner">
              
              {/* Laser scanning beam */}
              <div className="absolute left-0 right-0 h-1 bg-red-500 shadow-[0_0_12px_#ef4444] animate-laser"></div>

              {scanTriggered && (
                <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-xs flex items-center justify-center z-10 animate-pulse">
                  <span className="bg-emerald-600 text-white font-mono font-bold text-xs px-3 py-1 rounded-full shadow-lg">
                    ✓ BEEP! SCANNED
                  </span>
                </div>
              )}

              <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-4">
                HIGH SPEED OPTICAL SCANNER
              </p>

              {/* Realistic SVG Barcode */}
              <div className="inline-flex flex-col items-center p-3 bg-white rounded-lg shadow-md">
                <div className="flex items-center gap-1 h-14">
                  <span className="w-1.5 h-full bg-black"></span>
                  <span className="w-0.5 h-full bg-black"></span>
                  <span className="w-2 h-full bg-black"></span>
                  <span className="w-1 h-full bg-black"></span>
                  <span className="w-0.5 h-full bg-black"></span>
                  <span className="w-3 h-full bg-black"></span>
                  <span className="w-1 h-full bg-black"></span>
                  <span className="w-0.5 h-full bg-black"></span>
                  <span className="w-2 h-full bg-black"></span>
                  <span className="w-1.5 h-full bg-black"></span>
                  <span className="w-0.5 h-full bg-black"></span>
                  <span className="w-2.5 h-full bg-black"></span>
                  <span className="w-1 h-full bg-black"></span>
                  <span className="w-0.5 h-full bg-black"></span>
                  <span className="w-2 h-full bg-black"></span>
                </div>
                <span className="text-[11px] font-mono text-black font-extrabold tracking-widest mt-1">
                  {current.barcode}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Response Time: 180ms</span>
              </div>
            </div>

            {/* Right: Detected Product Record */}
            <div className="md:col-span-7 bg-slate-800/80 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className="text-xs font-bold text-slate-400">PRODUCT LOOKUP RESULT</span>
                <span className="text-xs bg-emerald-950 text-emerald-300 font-mono border border-emerald-800 px-2 py-0.5 rounded">
                  Match Found: 100%
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <h3 className="text-xl font-extrabold text-white">{current.name}</h3>
                  <span className="text-xs text-slate-400">Category: {current.category} • HSN: {current.hsn}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400">Sale Price</span>
                    <p className="text-lg font-extrabold text-emerald-400">{current.salePrice}</p>
                    <span className="text-[10px] text-slate-500 line-through">MRP {current.mrp}</span>
                  </div>

                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400">Live Inventory</span>
                    <p className="text-base font-bold text-white mt-0.5">{current.stock}</p>
                    <span className="text-[10px] text-emerald-400">Auto-decrements on sale</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                  <span>Fast product lookup • Zero typing errors • Ready for 1-click bill</span>
                  <span className="text-emerald-400 font-bold">Added to Cart ✓</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Compatible with all standard USB & Bluetooth 1D/2D scanners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Use your phone's built-in camera when roaming in aisles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Eliminates typing mistakes during evening rush hours</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
