"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import {
  ChevronDownIcon,
  WhatsAppIcon,
  MailIcon,
  ArrowRightIcon,
  CheckIcon,
  SearchIcon,
  PrinterIcon,
  CloudSyncIcon,
  ShieldCheckIcon,
  RupeeIcon,
  StoreIcon,
  UsersIcon,
  SmartphoneIcon,
  FileSpreadsheetIcon,
  XIcon,
} from "../components/Icons";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState([1]); // First FAQ open by default
  const [helpfulVotes, setHelpfulVotes] = useState({});

  const categories = [
    { id: "all", label: "All Questions", icon: "🌟", count: 18 },
    { id: "billing", label: "Billing & GST", icon: "🧾", count: 4 },
    { id: "offline", label: "Offline & Sync", icon: "📶", count: 3 },
    { id: "hardware", label: "Printers & Hardware", icon: "🖨️", count: 4 },
    { id: "khata", label: "Khata & Udhar", icon: "👥", count: 3 },
    { id: "security", label: "Cloud & Backup", icon: "🔒", count: 2 },
    { id: "staff", label: "Multi-Staff & Devices", icon: "💻", count: 2 },
  ];

  const quickFilterChips = [
    { label: "🖨️ Thermal Printer", query: "printer" },
    { label: "📶 Offline Billing", query: "offline" },
    { label: "🧾 GST Invoices", query: "gst" },
    { label: "👥 WhatsApp Khata", query: "whatsapp" },
    { label: "🔒 Data Backup", query: "backup" },
    { label: "📱 Android App", query: "mobile" },
  ];

  const faqData = [
    {
      id: 1,
      category: "offline",
      categoryName: "Offline & Sync",
      categoryBadge: "📶 OFFLINE READY",
      q: "Can I bill customers if the shop internet or Wi-Fi stops working?",
      a: "Yes, 100%! DukanHisab is architected offline-first. Even if your internet is completely disconnected, counter billing runs at lightning speed. You can scan barcodes, generate receipts, record cash/credit, and print thermal bills without a pause.",
      highlights: [
        "Zero delay at the counter during peak hours",
        "Local database saves all sales safely on your device",
        "Automatic cloud sync the second internet reconnects",
      ],
      proTip: "You never need to make your customers wait in line due to network downtime.",
      linkUrl: "/how-it-works",
      linkText: "See how offline billing works",
    },
    {
      id: 2,
      category: "offline",
      categoryName: "Offline & Sync",
      categoryBadge: "📶 OFFLINE READY",
      q: "How does cloud sync work once the internet is restored?",
      a: "As soon as your mobile phone or PC reconnects to Wi-Fi or mobile data, DukanHisab automatically syncs all offline sales, customer ledger updates, and stock deductions to your secured cloud database in the background without any manual button click.",
      highlights: [
        "Syncs in the background without disturbing active billing",
        "Keeps web reports and phone apps in perfect harmony",
        "Safe conflict-resolution prevents duplicate bill numbers",
      ],
      linkUrl: "/support",
      linkText: "Learn about cloud synchronization",
    },
    {
      id: 3,
      category: "offline",
      categoryName: "Offline & Sync",
      categoryBadge: "📶 OFFLINE READY",
      q: "Can multiple billing counters work together when internet is intermittent?",
      a: "Yes. Each counter maintains its unique bill sequence. When internet is live, counters sync in real-time. If connection drops, both counters continue billing independently, and then merge seamlessly once reconnected without invoice number collisions.",
      highlights: [
        "Distinct counter identifiers prevent bill clashes",
        "Centralized inventory balances sync automatically",
        "Ideal for busy supermarkets, marts, and garment showrooms",
      ],
    },
    {
      id: 4,
      category: "hardware",
      categoryName: "Printers & Hardware",
      categoryBadge: "🖨️ HARDWARE",
      q: "Can I connect my 2-inch or 3-inch Bluetooth thermal receipt printer?",
      a: "Yes! DukanHisab works with all standard 2-inch (58mm) and 3-inch (80mm) thermal printers. You can connect via Bluetooth, USB cable, or Wi-Fi network. Compatible with popular brands including TVS-E, Epson, Everycom, NGX, Posiflex, and generic Bluetooth printers.",
      highlights: [
        "Prints receipts in less than 1.5 seconds",
        "Customizable shop name, address, GSTIN, and greeting message",
        "Prints clean itemized lists with rate, discount, and total",
      ],
      proTip: "You can also add your Shop's UPI QR code directly on the printed slip for instant customer scans!",
      linkUrl: "/support",
      linkText: "Check compatible printer models",
    },
    {
      id: 5,
      category: "hardware",
      categoryName: "Printers & Hardware",
      categoryBadge: "🖨️ HARDWARE",
      q: "What kind of barcode scanner do I need for my shop?",
      a: "DukanHisab is compatible with almost any standard 1D or 2D barcode scanner. You can plug in a regular USB laser scanner into your computer or phone (via OTG adapter), connect a wireless Bluetooth handheld scanner, or simply use your smartphone camera to scan directly.",
      highlights: [
        "Supports standard 1D EAN/UPC and 2D QR codes",
        "Wireless Bluetooth scanners for walking around aisles",
        "Built-in phone camera barcode scanner requires zero extra hardware",
      ],
    },
    {
      id: 6,
      category: "hardware",
      categoryName: "Printers & Hardware",
      categoryBadge: "🖨️ HARDWARE",
      q: "Does DukanHisab print standard A4 and A5 GST tax invoices?",
      a: "Yes! If you sell wholesale, B2B, or supply to institutions, you can generate professional A4 and A5 size GST tax invoices with your business logo, authorized signature, HSN code summary, and bank transfer details.",
      highlights: [
        "Clean A4/A5 PDF generation in one tap",
        "HSN-wise tax breakup (CGST, SGST, IGST)",
        "Works with regular HP, Canon, Epson laser/inkjet office printers",
      ],
      linkUrl: "/gst-billing",
      linkText: "Explore GST Invoice Features",
    },
    {
      id: 7,
      category: "hardware",
      categoryName: "Printers & Hardware",
      categoryBadge: "🖨️ HARDWARE",
      q: "Can I connect an electronic weighing scale for grocery or sweets?",
      a: "Yes! DukanHisab supports electronic weighing scales via serial/USB connection on desktop and Bluetooth scales on mobile. Weight is captured automatically on the billing screen, eliminating typing mistakes and accelerating counter rush.",
      highlights: [
        "Instant weight detection into quantity field",
        "Perfect for Kirana, vegetable marts, sweet shops, and dry fruits",
        "Prevents billing errors during peak rush",
      ],
    },
    {
      id: 8,
      category: "billing",
      categoryName: "Billing & GST",
      categoryBadge: "🧾 BILLING & GST",
      q: "How does customer-specific pricing work during billing?",
      a: "You can save negotiated or wholesale rates for specific customers (e.g., selling Rice @ ₹1,180 instead of retail ₹1,250 to a regular buyer). The moment you select that customer at checkout, DukanHisab automatically calculates the bill with their custom saved rate.",
      highlights: [
        "No mental math or manual overrides required by counter staff",
        "Previous purchase history and rate visible on the counter screen",
        "Protects your profit margins with price-lock rules",
      ],
      proTip: "Staff cannot accidentally charge the wrong price to your VIP or wholesale buyers.",
      linkUrl: "/customer-management",
      linkText: "Learn about customer pricing",
    },
    {
      id: 9,
      category: "billing",
      categoryName: "Billing & GST",
      categoryBadge: "🧾 BILLING & GST",
      q: "Can I share bills directly on WhatsApp without typing customer numbers?",
      a: "Yes! Once you select a customer or type their 10-digit number, DukanHisab automatically pre-populates their WhatsApp chat with a professional receipt link and PDF invoice in a single click. No need to save contact numbers in your personal phone book.",
      highlights: [
        "Sends formatted invoice summary with UPI payment link",
        "Customers can download PDF receipt on their phone anytime",
        "Saves paper rolls and builds customer loyalty",
      ],
    },
    {
      id: 10,
      category: "billing",
      categoryName: "Billing & GST",
      categoryBadge: "🧾 BILLING & GST",
      q: "Can I create both GST and Non-GST bills for different customers?",
      a: "Yes. DukanHisab allows flexible billing. You can generate regular Non-GST retail estimates/kaccha bills for walk-in retail shoppers, and official GST tax invoices with reverse charge & HSN breakdown for registered commercial buyers.",
      highlights: [
        "Switch between GST and Estimate mode in one tap",
        "Separate numbering series for Tax Invoices and Estimates",
        "Accurate GSTR-1 & GSTR-3B monthly export reports",
      ],
      linkUrl: "/gst-billing",
      linkText: "Explore GST Billing",
    },
    {
      id: 11,
      category: "billing",
      categoryName: "Billing & GST",
      categoryBadge: "🧾 BILLING & GST",
      q: "How do product returns and sales exchange work?",
      a: "When a customer brings back an item for return or exchange, you can pull up the original bill via bill number or customer phone number. DukanHisab allows partial returns, adds items back to stock automatically, and adjusts credit or refunds cash.",
      highlights: [
        "Instant inventory restock upon return",
        "Credit note generation or immediate cash refund adjustment",
        "Complete return audit logs to avoid staff discrepancies",
      ],
    },
    {
      id: 12,
      category: "khata",
      categoryName: "Khata & Udhar",
      categoryBadge: "👥 KHATA & LEDGER",
      q: "How does customer Khata & Udhar tracking work in DukanHisab?",
      a: "Every customer has a built-in digital ledger (Khata). When a customer takes items on credit (Udhar), select 'Credit/Udhar' as the payment mode. The balance updates instantly, showing total outstanding credit, credit limits, and due date.",
      highlights: [
        "Clear statement of debits, credits, and net dues",
        "Filter customers by highest outstanding balance",
        "Complete history of every single item purchased on credit",
      ],
      linkUrl: "/customer-management",
      linkText: "Read about Customer Khata",
    },
    {
      id: 13,
      category: "khata",
      categoryName: "Khata & Udhar",
      categoryBadge: "👥 KHATA & LEDGER",
      q: "Can DukanHisab send automated WhatsApp payment reminders with UPI QR?",
      a: "Yes! You can send friendly WhatsApp balance reminders with a single tap. The message includes the outstanding balance, statement summary, and a dynamic UPI payment QR code (Google Pay, PhonePe, Paytm) so customers can pay directly.",
      highlights: [
        "Collect payments up to 3x faster without awkward phone calls",
        "Pre-filled UPI link opens customer's preferred UPI app",
        "Instant confirmation alert when payment is recorded",
      ],
      proTip: "Over 80% of overdue bills get cleared within 24 hours of receiving a polite WhatsApp reminder with UPI QR.",
    },
    {
      id: 14,
      category: "khata",
      categoryName: "Khata & Udhar",
      categoryBadge: "👥 KHATA & LEDGER",
      q: "Can I set credit limits to prevent excessive Udhar?",
      a: "Yes. You can assign a maximum credit limit (e.g. ₹5,000) for any customer. If their outstanding balance exceeds this limit during a new bill, the system warns the counter operator and requests owner permission to proceed.",
      highlights: [
        "Protects your cash flow from bad debts",
        "Owner override PIN for authorized exceptions",
        "Visual warning banner appears immediately on customer selection",
      ],
    },
    {
      id: 15,
      category: "security",
      categoryName: "Cloud & Backup",
      categoryBadge: "🔒 SECURITY & CLOUD",
      q: "What happens to my shop records if my phone is stolen, lost, or damaged?",
      a: "Your shop records are 100% safe in DukanHisab's encrypted cloud memory. Simply download the app on your new phone or log in to the web panel on any computer with your registered mobile OTP, and your entire history, customer balances, and inventory will be restored in seconds.",
      highlights: [
        "Automated continuous cloud backups",
        "Bank-grade 256-bit encryption for all data",
        "Zero data loss even in case of phone crash or hardware failure",
      ],
      proTip: "No manual pen-drive or SD card backups needed — cloud handles everything automatically.",
    },
    {
      id: 16,
      category: "security",
      categoryName: "Cloud & Backup",
      categoryBadge: "🔒 SECURITY & CLOUD",
      q: "Can I export all my data to Excel for my accountant or CA tax filing?",
      a: "Yes! With one click from the DukanHisab web dashboard or mobile app, you can export all your sales invoices, purchase records, customer ledgers, supplier balances, and stock inventory into clean Excel (.xlsx) and CSV spreadsheets.",
      highlights: [
        "Ready-to-use formats for GSTR-1, GSTR-3B, and CA filing",
        "Custom date range filters (Daily, Monthly, Financial Year)",
        "Item-wise profit and tax breakup reports included",
      ],
    },
    {
      id: 17,
      category: "staff",
      categoryName: "Multi-Staff & Devices",
      categoryBadge: "💻 MULTI-STAFF",
      q: "Can my counter staff use DukanHisab without seeing purchase prices & profit?",
      a: "Yes! DukanHisab provides granular role-based permissions. You can create 'Cashier/Operator' accounts for counter staff that only allow billing and barcode scanning. Staff cannot see supplier purchase rates, profit margins, or delete bills without owner approval.",
      highlights: [
        "Hide wholesale cost prices & total shop profit from counter staff",
        "Prevent bill deletions or back-dated edits without owner authorization",
        "Audit trail records which staff member created each bill",
      ],
      linkUrl: "/shop-management",
      linkText: "Learn about Staff Permissions",
    },
    {
      id: 18,
      category: "staff",
      categoryName: "Multi-Staff & Devices",
      categoryBadge: "💻 MULTI-STAFF",
      q: "Can I use DukanHisab on both Android phone and Windows laptop simultaneously?",
      a: "Yes! Your DukanHisab account syncs across all devices. You can bill customers on a Windows desktop PC or POS terminal at the main counter, and check live daily sales, stock, and khata balances on your Android phone while away from the shop.",
      highlights: [
        "Live multi-device real-time sync",
        "Owner app gives live sales notifications while travelling",
        "Works smoothly on Android smartphones, tablets, and Windows PCs",
      ],
      linkUrl: "/pricing",
      linkText: "View Supported Plans & Devices",
    },
  ];

  // Filtering logic
  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const qMatch = item.q.toLowerCase().includes(query);
      const aMatch = item.a.toLowerCase().includes(query);
      const catMatch = item.categoryName.toLowerCase().includes(query);
      const hlMatch = item.highlights?.some((h) =>
        h.toLowerCase().includes(query)
      );

      return qMatch || aMatch || catMatch || hlMatch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const handleVote = (id, type) => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: type,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f1faf9] to-[#f8faf9] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 border-b border-teal-100/70">
          
          {/* Ambient Lighting Gradients */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-teal-400/20 via-emerald-300/20 to-teal-500/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-teal-700 transition-colors">
                Home
              </Link>
              <span className="text-slate-400">›</span>
              <span className="text-teal-700 font-bold">Help &amp; FAQs</span>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-4">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-teal-800 text-xs font-black px-4 py-1.5 rounded-full border border-teal-200/70 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="tracking-wide uppercase">
                  KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Clear Answers for Every{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-600">
                  Dukandaar.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                Everything you need to know about setting up fast counter billing,
                connecting thermal printers, running 100% offline, and tracking customer Khata.
              </p>

              {/* ===================== LIVE SEARCH INPUT ===================== */}
              <div className="pt-4 max-w-2xl mx-auto">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-600 transition-colors">
                    <SearchIcon className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by keyword, e.g. 'thermal printer', 'offline', 'GST', 'backup'..."
                    className="w-full pl-12 pr-12 py-4 bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-teal-200/80 focus:border-teal-600 focus:ring-4 focus:ring-teal-500/15 text-slate-800 placeholder-slate-400 text-sm sm:text-base font-medium shadow-lg shadow-teal-900/5 transition-all outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                      title="Clear search"
                    >
                      <XIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Quick Keyword Chips */}
                <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-xs font-bold text-slate-500 mr-1">
                    Popular Topics:
                  </span>
                  {quickFilterChips.map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => {
                        setSearchQuery(chip.query);
                        setActiveCategory("all");
                      }}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/80 hover:bg-teal-50 hover:text-teal-800 text-slate-600 border border-slate-200/70 hover:border-teal-300 transition-all shadow-2xs cursor-pointer"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Stats Ribbon */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-xs border border-teal-100 rounded-2xl p-3 text-center shadow-2xs">
                  <div className="text-teal-700 font-black text-sm">⚡ Sub-Second</div>
                  <div className="text-[11px] font-semibold text-slate-500">Fast Counter Billing</div>
                </div>
                <div className="bg-white/80 backdrop-blur-xs border border-teal-100 rounded-2xl p-3 text-center shadow-2xs">
                  <div className="text-teal-700 font-black text-sm">📶 100% Offline</div>
                  <div className="text-[11px] font-semibold text-slate-500">Zero Internet Required</div>
                </div>
                <div className="bg-white/80 backdrop-blur-xs border border-teal-100 rounded-2xl p-3 text-center shadow-2xs">
                  <div className="text-teal-700 font-black text-sm">🖨️ All Printers</div>
                  <div className="text-[11px] font-semibold text-slate-500">2-inch, 3-inch, USB &amp; BT</div>
                </div>
                <div className="bg-white/80 backdrop-blur-xs border border-teal-100 rounded-2xl p-3 text-center shadow-2xs">
                  <div className="text-teal-700 font-black text-sm">💬 WhatsApp Support</div>
                  <div className="text-[11px] font-semibold text-slate-500">All 7 Days (10 AM - 7 PM)</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== CATEGORY TABS ===================== */}
        <section className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
              {categories.map((c) => {
                const isActive = activeCategory === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCategory(c.id);
                      setSearchQuery("");
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-teal-700 text-white shadow-md shadow-teal-900/15"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80 hover:text-slate-900"
                    }`}
                  >
                    <span>{c.icon}</span>
                    <span>{c.label}</span>
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-teal-900/40 text-teal-100"
                          : "bg-slate-200/70 text-slate-600"
                      }`}
                    >
                      {c.id === "all"
                        ? faqData.length
                        : faqData.filter((f) => f.category === c.id).length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== MAIN FAQ ACCORDION & SIDEBAR HUB ===================== */}
        <section className="py-12 lg:py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ===================== LEFT COLUMN (SPAN 4): STICKY HELP HUB ===================== */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
              
              {/* Category Quick Navigator Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    Browse Categories
                  </h3>
                  <span className="text-xs font-bold text-teal-700">
                    {filteredFaqs.length} Shown
                  </span>
                </div>

                <div className="space-y-1.5">
                  {categories.map((cat) => {
                    const isCurrent = activeCategory === cat.id;
                    const count =
                      cat.id === "all"
                        ? faqData.length
                        : faqData.filter((f) => f.category === cat.id).length;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setSearchQuery("");
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                          isCurrent
                            ? "bg-teal-50 text-teal-900 border border-teal-200"
                            : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span>{cat.icon}</span>
                          <span>{cat.label}</span>
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isCurrent
                              ? "bg-teal-200/80 text-teal-900 font-black"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct WhatsApp Contact Card */}
              <div className="relative bg-gradient-to-br from-[#024032] via-[#03513f] to-[#013529] rounded-3xl p-6 text-white shadow-xl shadow-teal-950/15 border border-teal-500/30 overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-400/10 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-200 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Live Dukandaar Help</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-white tracking-tight">
                      Still have questions about your specific shop?
                    </h4>
                    <p className="text-xs text-teal-100/80 mt-1.5 leading-relaxed font-medium">
                      Our customer care engineers are available on WhatsApp to guide you with setup, hardware compatibility, and data import.
                    </p>
                  </div>

                  {/* Hours badge */}
                  <div className="bg-black/20 rounded-xl p-3 border border-white/10 text-xs space-y-1">
                    <div className="text-teal-200 font-bold flex items-center justify-between">
                      <span>Support Hours:</span>
                      <span className="text-[#25D366] font-black">ALL 7 DAYS</span>
                    </div>
                    <div className="text-slate-300 font-mono text-[11px]">
                      Monday – Sunday: 10:00 AM – 7:00 PM
                    </div>
                    <div className="text-[10px] text-teal-300 font-medium pt-1 border-t border-white/10">
                      ⚡ Average response time: Under 15 minutes!
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919876543210?text=Hello%20DukanHisab%20Team%2C%20I%20have%20a%20question%20about%20the%20software"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#1faa53] text-white text-xs font-black py-3.5 px-4 rounded-xl transition-all shadow-md shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Chat on WhatsApp Now →</span>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors border border-white/15"
                  >
                    <span>📞 Call Us: +91 98765 43210</span>
                  </a>
                </div>
              </div>

              {/* Free Remote AnyDesk Setup Assistance Box */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700">
                  <PrinterIcon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-slate-900">
                  Need Help Connecting Your Printer?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Our technical support provides <strong>100% Free Remote Setup</strong> via AnyDesk / TeamViewer to configure your USB or Bluetooth thermal printer.
                </p>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  <span>Request Remote Setup</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

            {/* ===================== RIGHT COLUMN (SPAN 8): ACCORDION DECK ===================== */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Accordion Deck Header & Controls */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-slate-500">
                    {searchQuery ? (
                      <span>
                        Search results for &ldquo;
                        <strong className="text-teal-700">{searchQuery}</strong>&rdquo;
                      </span>
                    ) : (
                      <span>
                        Showing questions for:{" "}
                        <strong className="text-slate-900">
                          {categories.find((c) => c.id === activeCategory)?.label}
                        </strong>
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                    {filteredFaqs.length}{" "}
                    {filteredFaqs.length === 1 ? "Question" : "Questions"} Found
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={expandAll}
                    className="text-xs font-bold text-slate-600 hover:text-teal-700 bg-slate-100 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-slate-200/80 transition-colors cursor-pointer"
                  >
                    Expand All
                  </button>
                  <button
                    type="button"
                    onClick={collapseAll}
                    className="text-xs font-bold text-slate-600 hover:text-teal-700 bg-slate-100 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-slate-200/80 transition-colors cursor-pointer"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

              {/* Empty Search State */}
              {filteredFaqs.length === 0 && (
                <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-200 mx-auto flex items-center justify-center text-2xl">
                    🔍
                  </div>
                  <h3 className="text-lg font-black text-slate-900">
                    No matching questions found
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;.
                    Try searching for another keyword or reach out directly on WhatsApp!
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-2">
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                      }}
                      className="px-4 py-2 bg-teal-600 text-white text-xs font-bold rounded-xl shadow-sm hover:bg-teal-700 transition-colors"
                    >
                      Clear Search &amp; Show All
                    </button>
                    <a
                      href="https://wa.me/919876543210?text=Hello%2C%20I%20have%20a%20question%20not%20found%20in%20FAQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-sm hover:bg-[#1faa53] transition-colors inline-flex items-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Ask on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Accordion Items List */}
              <div className="space-y-3.5">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openIds.includes(faq.id);
                  const vote = helpfulVotes[faq.id];

                  return (
                    <div
                      key={faq.id}
                      className={`group relative rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden bg-white ${
                        isOpen
                          ? "border-2 border-teal-500 shadow-xl shadow-teal-950/5 ring-4 ring-teal-500/10"
                          : "border border-slate-200/90 hover:border-teal-300 hover:shadow-md"
                      }`}
                    >
                      {/* Left Accent Color Indicator */}
                      <div
                        className={`absolute top-0 bottom-0 left-0 w-1.5 transition-colors ${
                          isOpen ? "bg-teal-600" : "bg-transparent group-hover:bg-teal-200"
                        }`}
                      />

                      {/* Header Toggle Button */}
                      <button
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full pl-5 pr-5 py-4.5 sm:py-5 flex items-start sm:items-center justify-between text-left gap-4 cursor-pointer"
                      >
                        <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                          {/* Number Badge */}
                          <span
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs font-black font-mono shrink-0 flex items-center justify-center transition-all ${
                              isOpen
                                ? "bg-teal-600 text-white shadow-xs"
                                : "bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700"
                            }`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>

                          <div className="space-y-1">
                            {/* Category badge */}
                            <span className="inline-block text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/50">
                              {faq.categoryBadge}
                            </span>

                            {/* Question Title */}
                            <h3
                              className={`font-black text-sm sm:text-base leading-snug transition-colors ${
                                isOpen
                                  ? "text-teal-950"
                                  : "text-slate-900 group-hover:text-teal-900"
                              }`}
                            >
                              {faq.q}
                            </h3>
                          </div>
                        </div>

                        {/* Chevron Trigger */}
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-1 sm:mt-0 ${
                            isOpen
                              ? "bg-teal-600 text-white rotate-180 shadow-md shadow-teal-600/20"
                              : "bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700"
                          }`}
                        >
                          <ChevronDownIcon className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Accordion Body */}
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-teal-100/60 bg-gradient-to-b from-teal-50/20 via-white to-white space-y-4">
                          
                          {/* Detailed Answer Paragraph */}
                          <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                            {faq.a}
                          </p>

                          {/* Highlight Checklist If Available */}
                          {faq.highlights && faq.highlights.length > 0 && (
                            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/70 space-y-2">
                              <div className="text-xs font-black text-slate-900 uppercase tracking-wider">
                                Key Highlights:
                              </div>
                              <ul className="space-y-1.5">
                                {faq.highlights.map((item, hIdx) => (
                                  <li
                                    key={hIdx}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                                  >
                                    <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                                      <CheckIcon className="w-2.5 h-2.5" />
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Pro-Tip Banner If Present */}
                          {faq.proTip && (
                            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3.5 flex items-start gap-3">
                              <span className="text-base shrink-0">💡</span>
                              <div className="text-xs text-emerald-900 font-medium leading-relaxed">
                                <strong className="font-extrabold text-emerald-950">
                                  Dukandaar Pro-Tip:
                                </strong>{" "}
                                {faq.proTip}
                              </div>
                            </div>
                          )}

                          {/* Bottom Action Bar: Helpful Reactions & Related Link */}
                          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100 text-xs text-slate-500">
                            
                            {/* Was this helpful feedback */}
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-slate-600">
                                Was this answer helpful?
                              </span>
                              <div className="flex items-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleVote(faq.id, "yes")}
                                  className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                                    vote === "yes"
                                      ? "bg-teal-600 text-white border-teal-600 shadow-2xs"
                                      : "bg-white hover:bg-slate-100 text-slate-600 border-slate-200"
                                  }`}
                                >
                                  👍 Yes
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleVote(faq.id, "no")}
                                  className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                                    vote === "no"
                                      ? "bg-rose-600 text-white border-rose-600 shadow-2xs"
                                      : "bg-white hover:bg-slate-100 text-slate-600 border-slate-200"
                                  }`}
                                >
                                  👎 No
                                </button>
                              </div>
                              {vote && (
                                <span className="text-[11px] text-teal-700 font-bold ml-1 animate-fade-in">
                                  Thanks for the feedback!
                                </span>
                              )}
                            </div>

                            {/* Related Page Link */}
                            {faq.linkUrl && (
                              <Link
                                href={faq.linkUrl}
                                className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 font-bold transition-colors group/link"
                              >
                                <span>{faq.linkText}</span>
                                <ArrowRightIcon className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                              </Link>
                            )}

                          </div>

                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* ===================== BOTTOM INTERACTIVE HELP CONTACT STRIP ===================== */}
        <section className="py-10 sm:py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-teal-900 via-[#024032] to-[#012e24] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
              
              {/* Glow effects */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-teal-200 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                  <span>🚀 ZERO COMPLICATION SETUP</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Have a question not listed here? We are here to help.
                </h2>
                <p className="text-sm sm:text-base text-teal-100/90 font-medium leading-relaxed">
                  Every shop is unique. Whether you run a Kirana store, Garment showroom,
                  Mobile electronics shop, or Supermarket, our Indian retail setup experts
                  are ready to guide you.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/919876543210?text=Hello%20DukanHisab%20Team%2C%20I%20need%20help%20with%20my%20shop%20setup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white text-sm font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:scale-105"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span>Instant WhatsApp Chat</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-teal-950 hover:bg-teal-50 text-sm font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:scale-105"
                  >
                    <span>Contact Support Form</span>
                    <ArrowRightIcon className="w-4 h-4 text-teal-900" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-3.5 px-5 rounded-xl border border-white/20 transition-colors"
                  >
                    <span>📞 +91 98765 43210</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
