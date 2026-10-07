"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  StoreIcon,
  PackageIcon,
  UsersIcon,
  TruckIcon,
  BarcodeIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  ReceiptIcon,
  TagIcon,
  ShieldCheckIcon,
  SmartphoneIcon
} from "./Icons";

const businessSectors = [
  {
    id: "kirana",
    title: "Kirana & Supermarket",
    category: "fmcg",
    img: "/images/business-types/kirana.png",
    accent: "teal",
    badge: "Fastest Barcode & Khata",
    tagline: "Loose Items • Rush Hour Billing • Customer Udhar",
    description: "Built for busy grocery counters with daily evening rushes. Point-and-shoot barcode scanner support for packaged FMCG items, loose weigh-scale items, and instant WhatsApp receipts for neighborhood customers.",
    keyFeatures: [
      "0.18s barcode scan for FMCG items & packaged goods",
      "Loose grocery & pulses billing by grams/kilograms",
      "Customer Khata udhar tracking with WhatsApp reminders",
      "Daily closing galla cashbook automatically balanced",
    ],
    sampleCart: {
      shop: "Shree Ganesh General Store",
      bill: "Bill #4029 • Rahul Patel",
      items: [
        { name: "Fortune Oil 5L Can", qty: "1 Can", price: "₹795" },
        { name: "Kolam Rice 25kg Bag", qty: "1 Bag", price: "₹1,180" },
        { name: "Tata Salt 1kg", qty: "2 Packs", price: "₹52" },
      ],
      total: "₹2,027",
      settlement: "Cash ₹1,000 + Khata ₹1,027",
    },
  },
  {
    id: "hardware",
    title: "Hardware & Sanitary",
    category: "trade",
    img: "/images/business-types/hardware.png",
    accent: "amber",
    badge: "Contractor Rates & SKUs",
    tagline: "Large Catalog • Multi-Unit Bills • Supplier Inward",
    description: "Manage thousands of hardware SKUs from plumbing pipes to small brass screws. Set contractor-specific rates for builders and plumbers, handle bundles/feet/kg units, and track heavy bulk supplier deliveries.",
    keyFeatures: [
      "Manage 10,000+ SKUs with category & subcategory filters",
      "Tiered pricing: Retail price vs Contractor / Plumber rate",
      "Multiple units of measurement (Feet, Bundles, Pieces, Kg)",
      "Supplier purchase bills (PB) with transport & bilty tracking",
    ],
    sampleCart: {
      shop: "Jay Ambe Hardware & Tools",
      bill: "Bill #1892 • Ramesh Contractor",
      items: [
        { name: "PVC Pipe 110mm 10ft", qty: "12 Pcs", price: "₹4,200" },
        { name: "Brass Ball Valve 1-inch", qty: "6 Pcs", price: "₹1,440" },
        { name: "Cement Waterproof 50kg", qty: "4 Bags", price: "₹1,560" },
      ],
      total: "₹7,200",
      settlement: "Contractor Tier (Saved Rate Applied)",
    },
  },
  {
    id: "mobile",
    title: "Mobile & Electronics",
    category: "electronics",
    img: "/images/business-types/mobile.png",
    accent: "cyan",
    badge: "IMEI & Serial Number",
    tagline: "IMEI Tracking • Repair Job Sheets • Warranty Invoices",
    description: "Track phones, tablets, accessories, and spare parts. Generate GST invoices containing unique IMEI/Serial numbers for manufacturer warranty claims, and manage customer phone repair service records.",
    keyFeatures: [
      "Mandatory IMEI / Serial number capture during sale & inward",
      "Print warranty-compliant GST tax invoices with IMEI",
      "Accessories fast barcode billing (Cases, Chargers, TWS)",
      "Service & repair intake tracking with customer WhatsApp status",
    ],
    sampleCart: {
      shop: "Om Sai Mobile World",
      bill: "Tax Invoice #M-552 • Anita Sharma",
      items: [
        { name: "Vivo Y200 5G (8GB/128GB)", qty: "IMEI: 86291004812", price: "₹18,999" },
        { name: "25W Fast Type-C Charger", qty: "1 Pc", price: "₹699" },
        { name: "Tempered Glass Protection", qty: "1 Pc", price: "₹199" },
      ],
      total: "₹19,897",
      settlement: "UPI QR (HDFC Bank) • 1-Yr Brand Warranty",
    },
  },
  {
    id: "garment",
    title: "Garments & Footwear",
    category: "fashion",
    img: "/images/business-types/garment.png",
    accent: "indigo",
    badge: "Size & Color Matrix",
    tagline: "Size/Color Matrix • Barcode Tags • Seasonal Sales",
    description: "Manage clothing and shoe inventory across sizes (S, M, L, XL, 32, 34) and colors with unique barcode tag generation. Easily handle festive season discounts, exchanges, and customer loyalty points.",
    keyFeatures: [
      "Variant matrix: 1 style code with multiple sizes & colors",
      "Custom barcode price tag generation & thermal sticker print",
      "Hassle-free size exchange & return with stock adjustment",
      "Discount campaigns & festive sale combo bundles",
    ],
    sampleCart: {
      shop: "Royal Men's Wear & Garments",
      bill: "Bill #G-804 • Deepak Mehta",
      items: [
        { name: "Cotton Formal Shirt (L, Sky Blue)", qty: "1 Pc", price: "₹899" },
        { name: "Slim Fit Denim (Size 32)", qty: "1 Pc", price: "₹1,299" },
        { name: "Leather Formal Belt", qty: "1 Pc", price: "₹349" },
      ],
      total: "₹2,547",
      settlement: "Flat 10% Festive Discount Applied (₹2,292)",
    },
  },
  {
    id: "medical",
    title: "Medical & Chemist",
    category: "health",
    img: "/images/business-types/medical.png",
    accent: "rose",
    badge: "Batch & Expiry Safe",
    tagline: "Batch Tracking • Expiry Warnings • Patient Records",
    description: "Designed for chemists, pharmacy stores, and surgical supplies. Rapid salt and medicine search, automatic batch number and expiry date printing on invoices, and low-stock alarms before essential drugs run out.",
    keyFeatures: [
      "Automatic batch number & expiry tracking on every strip/bottle",
      "Near-expiry warnings to prevent dead stock loss",
      "Prescription patient customer khata with repeat medicine logs",
      "GST-compliant medical tax invoice generation",
    ],
    sampleCart: {
      shop: "Sanjivani Medical & Chemist",
      bill: "Rx Bill #RX-302 • Dr. Joshi Ref.",
      items: [
        { name: "Dolo 650mg (Batch #DL82 • Exp 08/27)", qty: "2 Strips", price: "₹64" },
        { name: "Azithromycin 500mg (Batch #AZ11)", qty: "1 Strip", price: "₹118" },
        { name: "Vitamin C Chewable (Exp 12/26)", qty: "1 Bottle", price: "₹185" },
      ],
      total: "₹367",
      settlement: "Cash Paid • Batch Details Printed on Receipt",
    },
  },
  {
    id: "wholesale",
    title: "Wholesale & Agencies",
    category: "trade",
    img: "/images/business-types/wholesale.png",
    accent: "purple",
    badge: "B2B & Credit Terms",
    tagline: "Carton/Bulk Billing • Bilty Tracking • Credit Terms",
    description: "Built for distributors, FMCG agencies, and B2B traders. Handle bulk box/carton quantities, transport vehicle bilty numbers, outstanding credit limits for retail shops, and GST E-Way Bill ready reports.",
    keyFeatures: [
      "Box, Carton, and Case conversion to pieces",
      "Retailer shop credit limits with aging payment alerts",
      "Driver delivery challan & transport bilty recording",
      "Bulk Excel product import & supplier purchase upload",
    ],
    sampleCart: {
      shop: "Mahalaxmi Trading Agency (B2B)",
      bill: "Tax Invoice #B2B-1049 • GSTIN Verified",
      items: [
        { name: "Parle-G Biscuit 80g (Carton: 48 Pcs)", qty: "10 Cartons", price: "₹3,840" },
        { name: "Tata Tea Gold 500g (Box: 24 Pcs)", qty: "3 Boxes", price: "₹8,640" },
      ],
      total: "₹12,480",
      settlement: "Credit Terms: 15 Days • Vehicle #GJ-01-AB-1234",
    },
  },
  {
    id: "electrical",
    title: "Electrical & Lighting",
    category: "electronics",
    img: "/images/business-types/electrical.png",
    accent: "amber",
    badge: "Electrician Khata",
    tagline: "Wire Bundles • Brand Warranties • Electrician Commission",
    description: "From Havells wires and Philips LED panels to switches and MCBs. Handle wire coils in meters/rolls, track brand warranty periods, and maintain contractor accounts.",
    keyFeatures: [
      "Length-based measurement (Meters, Coils, Bundles)",
      "Electrician & contractor loyalty account tracking",
      "Brand warranty tracking on fans, geysers & fixtures",
      "Bulk project estimates & quotation conversion to invoice",
    ],
    sampleCart: {
      shop: "Shakti Electricals & Lighting",
      bill: "Bill #E-401 • Electrician Rajesh",
      items: [
        { name: "Polycab 1.5 sq mm Wire (Red 90m)", qty: "2 Coils", price: "₹2,850" },
        { name: "Philips LED Panel 12W Warm White", qty: "8 Pcs", price: "₹2,320" },
      ],
      total: "₹5,170",
      settlement: "Contractor Rate Applied",
    },
  },
  {
    id: "automobile",
    title: "Automobile & Spare Parts",
    category: "trade",
    img: "/images/business-types/automobile.png",
    accent: "blue",
    badge: "Part # & Model Lookup",
    tagline: "Vehicle Models • Part Number Search • Mechanic Ledger",
    description: "Search parts instantly by vehicle model (Hero, Bajaj, Maruti) or manufacturer part number. Bill replacement parts and service labor fees on one clean receipt.",
    keyFeatures: [
      "OEM Part number & vehicle model cross-reference search",
      "Integrated labor charges + spare parts billing",
      "Mechanic referral commission & credit tracking",
      "Fast oil & lube stock tracking by liters and barrels",
    ],
    sampleCart: {
      shop: "National Auto Spares & Garage",
      bill: "Bill #A-902 • Bike Service GJ-23",
      items: [
        { name: "Castrol 4T Engine Oil 1L (20W-40)", qty: "1 Bottle", price: "₹380" },
        { name: "Brake Shoe Set (Splendor/HF)", qty: "1 Set", price: "₹220" },
        { name: "General Service & Labor Charge", qty: "1 Service", price: "₹350" },
      ],
      total: "₹950",
      settlement: "UPI Payment Received ✓",
    },
  },
];

export default function BusinessTypes() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedBusinessId, setSelectedBusinessId] = useState("kirana");

  const categories = [
    { id: "all", label: "All Business Types" },
    { id: "fmcg", label: "Grocery & Kirana" },
    { id: "electronics", label: "Mobile & Electronics" },
    { id: "trade", label: "Hardware, Auto & Wholesale" },
    { id: "fashion", label: "Garments & Apparel" },
    { id: "health", label: "Medical & Chemist" },
  ];

  const filteredBusinesses = businessSectors.filter((b) =>
    activeCategory === "all" ? true : b.category === activeCategory
  );

  const selectedBusiness =
    businessSectors.find((b) => b.id === selectedBusinessId) || businessSectors[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Background Decorative Ambient Halos */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-2xs mb-3.5">
            <StoreIcon className="w-3.5 h-3.5 text-teal-700" />
            <span>Built Around Your Real Counter Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Tailored For Everyday{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
              Indian Small Businesses.
            </span>
          </h2>

          <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From rapid evening rushes at Kirana counters to IMEI tracking in mobile shops and contractor pricing in hardware stores — DukanHisab adapts naturally.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-teal-600 text-white shadow-md shadow-teal-700/20 scale-[1.02]"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Business Sector Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {filteredBusinesses.map((b) => {
            const isSelected = selectedBusinessId === b.id;

            return (
              <div
                key={b.id}
                onClick={() => setSelectedBusinessId(b.id)}
                className={`bg-white rounded-3xl p-4 sm:p-5 border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isSelected
                    ? "border-teal-500 ring-2 ring-teal-500/20 shadow-xl shadow-teal-900/10 scale-[1.02]"
                    : "border-slate-200/90 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Active Indicator Ribbon */}
                {isSelected && (
                  <div className="absolute top-0 right-0 bg-teal-600 text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-xs">
                    Inspecting
                  </div>
                )}

                <div>
                  {/* Business Image Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3.5 relative flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 p-2.5 group-hover:scale-105 transition-transform">
                    <Image
                      src={b.img}
                      alt={b.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  {/* Title & Badge */}
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md inline-block mb-1.5">
                    {b.badge}
                  </span>

                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-2">
                    {b.tagline}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600">
                  <span className="text-[11px]">View Workflow</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Business Deep-Dive Spotlight Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/60 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Business Profile & Superpowers */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 p-2 shrink-0 flex items-center justify-center">
                  <Image
                    src={selectedBusiness.img}
                    alt={selectedBusiness.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700 bg-teal-100 px-2.5 py-0.5 rounded-full">
                    Specialized Workflow
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    {selectedBusiness.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                {selectedBusiness.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedBusiness.description}
              </p>

              {/* Ready Workflows */}
              <div className="pt-2 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Built-In Features For This Business:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedBusiness.keyFeatures.map((kf, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3 text-teal-600" />
                      </div>
                      <span>{kf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Link to Full Dedicated Page */}
              <div className="pt-3">
                <Link
                  href="/business-types"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm group cursor-pointer"
                >
                  <span>Explore All 14+ Business Types</span>
                  <ArrowRightIcon className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Realistic Live Receipt / Simulation Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3.5 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block">
                      Live Shop Sample Bill
                    </span>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      {selectedBusiness.sampleCart.shop}
                    </h4>
                  </div>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono font-semibold">
                    {selectedBusiness.sampleCart.bill}
                  </span>
                </div>

                {/* Items List */}
                <div className="divide-y divide-slate-200/80 text-xs">
                  {selectedBusiness.sampleCart.items.map((it, idx) => (
                    <div key={idx} className="py-2 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-800">{it.name}</p>
                        <p className="text-[10px] text-slate-500">{it.qty}</p>
                      </div>
                      <span className="font-bold text-slate-900 font-mono">{it.price}</span>
                    </div>
                  ))}
                </div>

                {/* Bill Summary */}
                <div className="pt-2.5 border-t border-slate-200 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-sm font-black text-slate-900">
                    <span>Total Bill:</span>
                    <span className="text-teal-700 font-mono text-base">
                      {selectedBusiness.sampleCart.total}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-teal-50 border border-teal-200 text-[11px] font-semibold text-teal-800 flex items-center gap-1.5">
                    <CheckIcon className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{selectedBusiness.sampleCart.settlement}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Multi-Trade Reassurance Banner */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Don&apos;t see your specific trade listed above?
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                DukanHisab provides customizable units (pieces, meters, kg, boxes, hours), custom barcode tags, and flexible tax slabs for any Indian retail or wholesale shop.
              </p>
            </div>
          </div>

          <Link
            href="/business-types"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-4 py-2 rounded-xl transition-all"
          >
            <span>Browse Full Directory</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
