"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  StoreIcon,
  ArrowRightIcon,
  GooglePlayIcon
} from "./Icons";

const businessSectors = [
  {
    id: "kirana",
    title: "Kirana & Supermarket",
    category: "fmcg",
    img: "/images/business-types/kirana-hd.jpg",
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
    img: "/images/business-types/hardware-hd.jpg",
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
    img: "/images/business-types/mobile-hd.jpg",
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
    img: "/images/business-types/garment-hd.jpg",
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
    img: "/images/business-types/medical-hd.jpg",
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
    img: "/images/business-types/wholesale-hd.jpg",
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
    img: "/images/business-types/electrical-hd.jpg",
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
    img: "/images/business-types/automobile-hd.jpg",
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

  return (
    <section className="py-10 sm:py-12 lg:py-10 sm:py-12 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Background Decorative Ambient Halos */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-2xs mb-3">
            <StoreIcon className="w-3.5 h-3.5 text-teal-700" />
            <span>Built Around Your Real Counter Workflow</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Tailored For Everyday{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
              Indian Small Businesses.
            </span>
          </h2>

          <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Whether you run a grocery store, retail showroom, electronics outlet, hardware shop, or wholesale business — DukanHisab provides simple, fast tools to bill, track inventory, and manage Khata.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCategory === cat.id
                  ? "bg-teal-600 text-white shadow-sm shadow-teal-700/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Business Sector Cards Grid (Clean, Flush HD Image Banner, Compact & Proper) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {filteredBusinesses.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Proper Business Shop Image Banner with balanced 16:10 aspect ratio */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded inline-block mb-1.5">
                    {b.badge}
                  </span>

                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-2 leading-relaxed">
                    {b.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Thousands of Shopkeepers Across India (From Official Design) */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-teal-50/90 via-emerald-50/40 to-white border border-teal-100 p-6 sm:p-8 lg:p-10 shadow-xs max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Join Thousands of Shopkeepers{" "}
                <span className="text-[#036272]">Across India</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                From small retail shops to large wholesale businesses, DukanHisab is trusted by shopkeepers in every industry.
              </p>

              {/* 4 Trust Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-teal-100/80">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">10K+</div>
                  <div className="text-[11px] font-semibold text-slate-500">Happy Businesses</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-500 font-mono flex items-center gap-0.5">
                    4.8<span className="text-base">★</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500">Play Store Rating</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">100%</div>
                  <div className="text-[11px] font-semibold text-slate-500">Made for India</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-teal-700 font-mono">All Types</div>
                  <div className="text-[11px] font-semibold text-slate-500">Of Businesses</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.dukanhisab&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#036272] hover:bg-[#024f5c] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md shadow-teal-900/15 transition-all active:scale-95"
                >
                  <GooglePlayIcon className="w-4 h-4 text-white" />
                  <span>Download App</span>
                </a>

                <Link
                  href="/business-types"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-2xs hover:border-slate-300"
                >
                  <span>See Success Stories</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-teal-600" />
                </Link>
              </div>
            </div>

            {/* Right Graphic: Shopkeepers Collage */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/shopkeepers-collage-hd.png"
                  alt="DukanHisab Trusted Shopkeepers from Surat, Ahmedabad, and Rajkot"
                  width={1080}
                  height={526}
                  className="w-full h-auto object-contain drop-shadow-md rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
