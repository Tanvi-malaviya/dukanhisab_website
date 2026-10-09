"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import JsBarcode from "jsbarcode";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CtaBanner from "../../components/CtaBanner";
import { 
  CheckIcon, 
  ArrowRightIcon, 
  BarcodeIcon, 
  ChevronDownIcon,
  ZapIcon
} from "../../components/Icons";

export default function BarcodeGeneratorPage() {
  const [productName, setProductName] = useState("Fortune Sunlite Oil 1L");
  const [barcodeText, setBarcodeText] = useState("890103045612");
  const [mrp, setMrp] = useState("175.00");
  const [shopName, setShopName] = useState("Shree Ganesh Super Market");
  const [barWidth, setBarWidth] = useState(2.2);
  const [barHeight, setBarHeight] = useState(70);
  const [showText, setShowText] = useState(true);
  const [barcodeError, setBarcodeError] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const svgRef = useRef(null);
  const labelRef = useRef(null);

  // Generate / Update Barcode using standard JsBarcode (Code 128 universal auto format)
  useEffect(() => {
    if (!svgRef.current) return;

    const trimmed = barcodeText.trim();
    if (!trimmed) {
      setBarcodeError("Please enter a barcode number or SKU");
      return;
    }

    try {
      JsBarcode(svgRef.current, trimmed, {
        format: "CODE128", // Universal industry standard for alphanumeric & numeric SKUs
        lineColor: "#000000", // Pure optical black for 100% scan rate
        width: Number(barWidth) || 2.2,
        height: Number(barHeight) || 70,
        displayValue: showText,
        font: "monospace",
        fontOptions: "bold",
        fontSize: 14,
        textMargin: 6,
        textPosition: "bottom",
        margin: 12, // Quiet zone required by GS1/ISO scanners
        background: "#ffffff",
      });

      setBarcodeError("");
    } catch (err) {
      setBarcodeError(err.message || "Failed to generate barcode. Please check your input.");
    }
  }, [barcodeText, barWidth, barHeight, showText]);

  // Generate random retail SKU
  const handleRandomCode = () => {
    const rand = "890" + Math.floor(100000000 + Math.random() * 900000000).toString();
    setBarcodeText(rand);
  };

  // Download SVG (Scalable Vector)
  const handleDownloadSVG = () => {
    if (!svgRef.current || barcodeError) return;
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `barcode_${barcodeText || "code"}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerSuccess();
  };

  // Download high-resolution PNG (for Word, Excel, Photoshop, WhatsApp)
  const handleDownloadPNG = () => {
    if (!svgRef.current || barcodeError) return;
    const svgElement = svgRef.current;
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const URLObj = window.URL || window.webkitURL || window;
    const blobURL = URLObj.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const scale = 3; // 3x high DPI crisp print resolution
      const bbox = svgElement.getBBox ? svgElement.getBBox() : { width: 320, height: 120 };
      const width = (svgElement.clientWidth || bbox.width || 320) * scale;
      const height = (svgElement.clientHeight || bbox.height || 120) * scale;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, width, height);

      const pngURL = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `barcode_${barcodeText || "code"}.png`;
      downloadLink.href = pngURL;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URLObj.revokeObjectURL(blobURL);
      triggerSuccess();
    };
    image.src = blobURL;
  };

  const triggerSuccess = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const faqs = [
    {
      q: "Why do these barcodes scan instantly on phone cameras and barcode guns?",
      a: "Our barcodes strictly follow international Code 128 GS1/ISO specifications with pure optical black (#000000) bars, optimal stroke widths, and required white quiet zones (margins). Phone cameras, Google Lens, and USB/Bluetooth laser guns read them in under 0.2 seconds without reflection glare issues.",
    },
    {
      q: "Can I scan these barcodes using the DukanHisab mobile app?",
      a: "Yes, 100%! Any barcode generated here can be scanned instantly with the DukanHisab smartphone camera scanner or handheld laser guns to automatically pull product details and add items to customer bills.",
    },
    {
      q: "What printer do I need to print barcode stickers?",
      a: "You can print directly to 2-inch or 3-inch thermal sticker roll printers (such as TVS, TSC, Zebra, or Xprinter) or print a sheet of 24/48 labels onto standard A4 sticker paper using your regular office laser printer.",
    },
    {
      q: "What code should I give to loose or unbranded products?",
      a: "For products without manufacturer barcodes (like loose grains, bakery items, or local garments), you can click '🎲 Generate Random SKU' to get a unique 12-digit number, or type easy internal codes such as 'RICE-01', 'SUGAR-05', or 'SHIRT-M'.",
    },
    {
      q: "Is this barcode generator completely free to use?",
      a: "Yes! There are no limits, watermarks, or sign-up requirements. You can create, download, and print unlimited barcodes for your retail store.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      
      {/* Print Styles for Direct Thermal/Sticker Label Printing */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          #printable-label, #printable-label * {
            visibility: visible !important;
          }
          #printable-label {
            position: fixed !important;
            left: 50% !important;
            top: 20px !important;
            transform: translateX(-50%) !important;
            width: 320px !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 12px !important;
            background: #ffffff !important;
            box-shadow: none !important;
            border: 2px dashed #000000 !important;
            border-radius: 8px !important;
          }
        }
      `}</style>

      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO / GENERATOR SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-12 border-b border-slate-200/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 sm:mb-6">
              <Link href="/" className="hover:text-teal-700">Home</Link>
              <span>›</span>
              <Link href="/tools" className="hover:text-teal-700">Tools</Link>
              <span>›</span>
              <span className="text-[#036272] font-bold">Barcode Generator</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Generator Inputs */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <BarcodeIcon className="w-3.5 h-3.5 text-teal-700" />
                  <span>100% Scannable Retail Barcode Tool</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Free Product Barcode &amp; <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800">
                    Price Label Maker
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  Generate professional, 100% scannable Code 128 retail barcodes and price stickers for FMCG, garments, hardware, and loose items. Download high-res vector SVG/PNG or print stickers directly.
                </p>

                {/* Generator Form Inputs Card */}
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 p-6 space-y-5">
                  
                  {/* Barcode Number / SKU */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Barcode Number / SKU *
                      </label>
                      <button
                        type="button"
                        onClick={handleRandomCode}
                        className="text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <span>🎲 Generate Random SKU</span>
                      </button>
                    </div>
                    <input
                      type="text"
                      value={barcodeText}
                      onChange={(e) => setBarcodeText(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border font-mono font-bold text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50 ${
                        barcodeError ? "border-rose-400 bg-rose-50/30" : "border-slate-300"
                      }`}
                      placeholder="e.g. 890103045612 or SHIRT-M-01"
                    />
                    {barcodeError && (
                      <p className="mt-1.5 text-xs font-semibold text-rose-600 flex items-center gap-1">
                        <span>⚠️</span>
                        <span>{barcodeError}</span>
                      </p>
                    )}
                  </div>

                  {/* Product Name */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Product Name (Printed on Sticker)
                    </label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                      placeholder="e.g. Fortune Sunlite Oil 1L"
                    />
                  </div>

                  {/* Price & Shop Name Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        MRP / Price (₹)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          type="text"
                          value={mrp}
                          onChange={(e) => setMrp(e.target.value)}
                          className="w-full pl-7 pr-3 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                          placeholder="e.g. 175.00"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Shop Name (Header)
                      </label>
                      <input
                        type="text"
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                        placeholder="e.g. Shree Ganesh Super Market"
                      />
                    </div>
                  </div>

                  {/* Barcode Customization (Thickness & Height) */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Bar Thickness: {barWidth}px
                        </label>
                        <input
                          type="range"
                          min="1.5"
                          max="3.5"
                          step="0.1"
                          value={barWidth}
                          onChange={(e) => setBarWidth(parseFloat(e.target.value))}
                          className="w-full accent-[#036272] cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Bar Height: {barHeight}px
                        </label>
                        <input
                          type="range"
                          min="45"
                          max="110"
                          step="5"
                          value={barHeight}
                          onChange={(e) => setBarHeight(parseInt(e.target.value, 10))}
                          className="w-full accent-[#036272] cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center sm:justify-center pt-3 sm:pt-0">
                        <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                          <input
                            type="checkbox"
                            checked={showText}
                            onChange={(e) => setShowText(e.target.checked)}
                            className="w-4 h-4 rounded text-teal-600 accent-[#036272] cursor-pointer"
                          />
                          <span>Show Code Text</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckIcon className="w-4 h-4 stroke-[3]" />
                      <span>Optical Black #000000 (100% Scannable)</span>
                    </span>
                    <span>High-DPI SVG &amp; PNG</span>
                  </div>

                </div>
              </div>

              {/* Right Column: Live Barcode Sticker Preview & Download Card */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Live Sticker Container */}
                <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-3 left-4 text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Sticker &amp; Barcode Preview</span>
                  </div>

                  {/* Physical Label Mockup (This is also the printable element) */}
                  <div 
                    id="printable-label"
                    ref={labelRef}
                    className="bg-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-slate-200 w-full max-w-sm mt-5 text-slate-900 space-y-2 select-none"
                  >
                    {/* Shop Header */}
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 truncate">
                      {shopName || "DUKANHISAB RETAIL"}
                    </div>

                    {/* Product Name */}
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                      {productName || "Product Name"}
                    </div>

                    {/* SVG Barcode Output generated directly by JsBarcode */}
                    <div className="py-1 flex items-center justify-center overflow-hidden bg-white">
                      <svg
                        ref={svgRef}
                        className="w-full max-h-32 object-contain mx-auto"
                      />
                    </div>

                    {/* Price Tag Footer */}
                    <div className="flex items-center justify-between border-t border-slate-200 pt-1.5 font-bold text-xs">
                      <span className="text-[10px] text-slate-500 uppercase tracking-tight">Incl. All Taxes</span>
                      <span className="text-base font-black text-[#036272] font-mono">
                        MRP: ₹{mrp || "0.00"}
                      </span>
                    </div>
                  </div>

                  {/* Quick Scan Test Tip */}
                  <div className="mt-4 text-xs text-slate-300 flex items-center gap-2 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
                    <span>📱</span>
                    <span>Test Scan: Point your smartphone camera or Google Lens at the screen!</span>
                  </div>

                  {/* Sticker Download & Print Actions */}
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-5 w-full max-w-sm">
                    {/* SVG Download */}
                    <button
                      type="button"
                      onClick={handleDownloadSVG}
                      className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 bg-[#036272] hover:bg-[#02505d] text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>{downloadSuccess ? "Downloaded ✓" : "Download SVG"}</span>
                    </button>

                    {/* PNG Download */}
                    <button
                      type="button"
                      onClick={handleDownloadPNG}
                      className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Download PNG (HD)</span>
                    </button>

                    {/* Print Label */}
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl border border-slate-300 shadow-xs transition-all cursor-pointer"
                    >
                      <span>🖨️ Print Sticker</span>
                    </button>
                  </div>
                </div>

                {/* Compatibility Callout */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 text-xs text-slate-600 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-xl shrink-0">
                    ⚡
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800">Ready to Scan on DukanHisab App &amp; Web POS</div>
                    <div className="text-[11px] mt-0.5 text-slate-500">
                      Print this label, stick it onto your products or shelf racks, and scan with your phone camera in under 0.2 seconds.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ===================== RETAIL BARCODE GUIDE ===================== */}
        <section className="py-14 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                How to Barcode Products in Your Shop
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Simple 3-step workflow for grocery, garments, stationery, and hardware retailers:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-[#036272] font-black text-sm flex items-center justify-center">
                  1
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Assign a Unique SKU</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enter your product code or click 'Generate Random SKU'. Use short codes for clothes (e.g. SHT-38) or numbers for FMCG.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-[#036272] font-black text-sm flex items-center justify-center">
                  2
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Print Sticker Labels</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Print directly to 2" or 3" thermal roll printers or print 24/48 labels per sheet onto standard A4 sticker paper.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-[#036272] font-black text-sm flex items-center justify-center">
                  3
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Scan at Counter in 0.2s</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scan labels during customer checkout using your smartphone camera or barcode gun. Items are instantly added to cart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section className="py-10 sm:py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Everything you need to know about retail barcode scanning and sticker printing.
              </p>
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-teal-500/60 shadow-md shadow-teal-900/5 ring-2 ring-teal-500/10"
                        : "bg-white border-slate-200/90 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left p-4 sm:p-5 gap-4 cursor-pointer select-none"
                    >
                      <span className={`text-sm sm:text-base font-extrabold ${isOpen ? "text-[#036272]" : "text-slate-900"}`}>
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "bg-[#036272] text-white rotate-180" : "bg-slate-100 text-slate-500"
                      }`}>
                        <ChevronDownIcon className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== OTHER TOOLS RIBBON ===================== */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-6">
              More Free Business Tools for Shopkeepers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/tools/gst-calculator"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="text-2xl mb-2">📊</div>
                <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#036272]">GST Calculator</div>
                <div className="text-xs text-slate-500 mt-1">Add or remove GST with 5%, 12%, 18%, 28% breakdown.</div>
              </Link>
              <Link
                href="/tools/profit-margin-calculator"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="text-2xl mb-2">📈</div>
                <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#036272]">Profit Margin Calculator</div>
                <div className="text-xs text-slate-500 mt-1">Calculate gross profit margin, markup %, and target prices.</div>
              </Link>
              <Link
                href="/tools/discount-calculator"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all text-left group"
              >
                <div className="text-2xl mb-2">🏷️</div>
                <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#036272]">Discount Calculator</div>
                <div className="text-xs text-slate-500 mt-1">Calculate sale price, savings, and Buy X Get Y deals.</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          title="Scan Any Barcode with Your Phone Camera on DukanHisab"
          subtitle="No expensive computer or dedicated barcode gun needed."
          description="Download DukanHisab on your smartphone and turn your camera into a superfast barcode scanner. Scan labels, track inventory, and generate bills in seconds."
          slogan="Apni Dukaan Ka Hisab, Ab Digital!"
          secondaryButtonText="Explore Barcode Billing"
          secondaryButtonHref="/features"
          checks={["0.2s Phone Camera Scan", "Bluetooth Gun Compatible", "Thermal Sticker Ready", "Free Download"]}
          imageSrc="/images/app-splash-screen.png"
        />
      </main>

      <Footer />
    </div>
  );
}
