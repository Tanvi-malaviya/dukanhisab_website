"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BarcodeIcon, 
  ReceiptIcon, 
  RupeeIcon, 
  UsersIcon, 
  TruckIcon,
  WalletIcon,
  LandmarkIcon,
  WhatsAppIcon,
  PrinterIcon,
  ArrowRightIcon, 
  PlayIcon,
  CheckIcon,
  SparklesIcon,
  StoreIcon,
  SearchIcon,
  ShieldCheckIcon,
  GooglePlayIcon,
  MonitorIcon,
  XIcon
} from "./Icons";

// Real Multi-Language translations (from C:\xampp\htdocs\Dukanhisab\lang)
const translations = {
  en: {
    hero_pill: "Every Sale. Every Purchase. Every Rupee. Remembered.",
    hero_title_1: "Your Shop Has a ",
    hero_title_accent: "Memory.",
    hero_subtitle: "DukanHisab remembers every sale, purchase, payment, product, customer and expense — all in one connected system.",
    hero_note: "Run your everyday shop from the app. Understand your complete business from the web panel.",
    cta_primary: "Explore DukanHisab",
    cta_secondary: "See How It Works",
    tag_1: "No accounting jargon",
    tag_2: "Lightning-fast barcode billing",
    tag_3: "Works on any phone & PC",
    sales_pos: "Sales (POS)",
    dashboard: "Dashboard",
    cashbook: "Cashbook (Galla)",
    customers: "Customer Khata",
    today_sales: "Today's Sales",
    today_purchases: "Purchases",
    cash_balance: "Cash In Hand",
    bank_balance: "Bank Balance",
    customer_due: "Customer Due",
    supplier_due: "Supplier Due",
    search_placeholder: "Search item or category...",
    scan_placeholder: "Scan barcode #...",
    cart_title: "Live Billing Cart",
    walk_in: "Walk-in Cash Customer",
    cust_price: "Cust Rate",
    low_stock: "Low Stock",
    payment_mode: "Payment Mode",
    cash: "Cash",
    upi: "UPI / QR",
    khata: "Udhar (Khata)",
    print_bill: "Generate Bill",
    whatsapp_bill: "Send WhatsApp Bill",
    subtotal: "Subtotal",
    tax_gst: "GST (5%)",
    grand_total: "Grand Total",
    clear_cart: "Clear All",
  },
  gu: {
    hero_pill: "દરેક વેચાણ. દરેક ખરીદી. દરેક રૂપિયો. હંમેશા યાદ.",
    hero_title_1: "તમારી દુકાન પાસે એક ",
    hero_title_accent: "મેમરી છે.",
    hero_subtitle: "દુકાનહિસાબ દરેક વેચાણ, ખરીદી, ચુકવણી, પ્રોડક્ટ, ગ્રાહક અને ખર્ચ એક જ કનેક્ટેડ સિસ્ટમમાં સાચવે છે.",
    hero_note: "મોબાઇલ એપથી રોજિંદી દુકાન ચલાવો. વેબ પેનલથી આખા ધંધાનો નફો-નુકસાન સમજો.",
    cta_primary: "દુકાનહિસાબ જુઓ",
    cta_secondary: "કેવી રીતે કામ કરે છે",
    tag_1: "કોઈ અઘરા એકાઉન્ટિંગ શબ્દો નહીં",
    tag_2: "સુપરફાસ્ટ બારકોડ બિલિંગ",
    tag_3: "કોઈપણ ફોન અને કમ્પ્યુટર પર ચાલે",
    sales_pos: "સેલ્સ POS બિલિંગ",
    dashboard: "ડેશબોર્ડ",
    cashbook: "દુકાન ગલ્લો (કેશબુક)",
    customers: "ગ્રાહક ખાતાવહી (ઉધાર)",
    today_sales: "આજનું વેચાણ",
    today_purchases: "આજની ખરીદી",
    cash_balance: "ગલ્લામાં રોકડ",
    bank_balance: "બેંક સિલક",
    customer_due: "ગ્રાહક પાસેથી બાકી",
    supplier_due: "વેપારીને બાકી",
    search_placeholder: "સામાન શોધો...",
    scan_placeholder: "બારકોડ સ્કેન કરો...",
    cart_title: "બિલિંગ કાર્ટ",
    walk_in: "રોકડ ખરીદનાર ગ્રાહક",
    cust_price: "ખાસ ભાવ",
    low_stock: "ઓછો સ્ટોક",
    payment_mode: "ચૂકવણી મોડ",
    cash: "રોકડ (Cash)",
    upi: "UPI / QR કોડ",
    khata: "ખાતામાં ઉધાર",
    print_bill: "બિલ બનાવો",
    whatsapp_bill: "વોટ્સએપ પર બિલ મોકલો",
    subtotal: "કુલ કિંમત",
    tax_gst: "GST (5%)",
    grand_total: "કુલ રકમ",
    clear_cart: "ખાલી કરો",
  },
  hi: {
    hero_pill: "हर बिक्री। हर खरीद। हर रुपया। हमेशा याद।",
    hero_title_1: "आपकी दुकान के पास है एक ",
    hero_title_accent: "मेमोरी।",
    hero_subtitle: "दुकानहिसाब हर बिक्री, खरीद, भुगतान, सामान, ग्राहक और खर्च को एक स्मार्ट सिस्टम में जोड़ता है।",
    hero_note: "मोबाइल ऐप से काउंटर चलाएं। वेब पैनल से पूरे बिज़नेस का पूरा बहीखाता समझें।",
    cta_primary: "दुकानहिसाब देखें",
    cta_secondary: "यह कैसे काम करता है",
    tag_1: "कोई कठिन अकाउंटिंग नहीं",
    tag_2: "तेज़ बारकोड बिलिंग",
    tag_3: "हर फोन और कंप्यूटर पर उपलब्ध",
    sales_pos: "पीओएस बिलिंग",
    dashboard: "डैशबोर्ड",
    cashbook: "दुकान गल्ला (Cashbook)",
    customers: "ग्राहक खाता (उधार)",
    today_sales: "आज की बिक्री",
    today_purchases: "आज की खरीद",
    cash_balance: "गल्ला रोकड़ शेष",
    bank_balance: "बैंक बैलेंस",
    customer_due: "ग्राहकों से बकाया",
    supplier_due: "सप्लायर बकाया",
    search_placeholder: "सामान खोजें...",
    scan_placeholder: "बारकोड स्कैन करें...",
    cart_title: "बिलिंग कार्ट",
    walk_in: "नकद ग्राहक",
    cust_price: "खास रेट",
    low_stock: "कम स्टॉक",
    payment_mode: "भुगतान का प्रकार",
    cash: "नकद (Cash)",
    upi: "UPI / QR",
    khata: "उधार (खाता)",
    print_bill: "बिल बनाएं",
    whatsapp_bill: "व्हाट्सएप बिल भेजें",
    subtotal: "उप-कुल",
    tax_gst: "GST (5%)",
    grand_total: "कुल राशि",
    clear_cart: "साफ करें",
  },
};

// Realistic products based on real Indian shopkeeper retail inventory
const retailProducts = [
  {
    id: 1,
    name: "Kolam Rice 25kg (Fortune)",
    barcode: "89012345601",
    category: "Grocery",
    stock: 18,
    lowStockThreshold: 5,
    mrp: 1300,
    sellingPrice: 1200,
    customPrice: 1180,
    unit: "Bag",
  },
  {
    id: 2,
    name: "Fortune Refined Oil 5L Can",
    barcode: "89012345602",
    category: "Oil & Ghee",
    stock: 12,
    lowStockThreshold: 4,
    mrp: 850,
    sellingPrice: 810,
    customPrice: 795,
    unit: "Can",
  },
  {
    id: 3,
    name: "Aashirvaad Shudh Chakki Atta 10kg",
    barcode: "89012345603",
    category: "Flour",
    stock: 24,
    lowStockThreshold: 6,
    mrp: 420,
    sellingPrice: 395,
    customPrice: 390,
    unit: "Pack",
  },
  {
    id: 4,
    name: "Tata Salt Vacuum Evaporated 1kg",
    barcode: "89012345604",
    category: "Grocery",
    stock: 45,
    lowStockThreshold: 10,
    mrp: 28,
    sellingPrice: 26,
    customPrice: 25,
    unit: "Pouch",
  },
  {
    id: 5,
    name: "Amul Butter Pasteurised 500g",
    barcode: "89012345605",
    category: "Dairy",
    stock: 8,
    lowStockThreshold: 10,
    mrp: 280,
    sellingPrice: 265,
    customPrice: null,
    unit: "Pack",
  },
  {
    id: 6,
    name: "Maggi 2-Minute Masala Noodles 70g",
    barcode: "89012345606",
    category: "Instant Food",
    stock: 65,
    lowStockThreshold: 15,
    mrp: 14,
    sellingPrice: 13,
    customPrice: null,
    unit: "Pouch",
  },
];

// Sample customers from C:\xampp\htdocs\Dukanhisab
const shopCustomers = [
  { id: "cust-0", name: "Walk-in Cash Customer", mobile: "N/A", khata: 0, hasSpecialRate: false },
  { id: "cust-1", name: "Rahul Patel", mobile: "+91 98250 12345", khata: 4200, hasSpecialRate: true },
  { id: "cust-2", name: "Anita Sharma", mobile: "+91 98790 67890", khata: 0, hasSpecialRate: false },
  { id: "cust-3", name: "Deepak Mehta (Wholesale)", mobile: "+91 94260 54321", khata: 12850, hasSpecialRate: true },
];

export default function CounterDemoTerminal({ onClose, isModal = false }) {
  const [lang, setLang] = useState("en"); // 'en', 'gu', 'hi'
  const [activeTab, setActiveTab] = useState("sales"); // 'sales', 'dashboard', 'cashbook', 'customers'
  const [searchQuery, setSearchQuery] = useState("");
  const [barcodeInput, setBarcodeInput] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState("cust-1");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [cartItems, setCartItems] = useState([
    {
      productId: 1,
      name: "Kolam Rice 25kg (Fortune)",
      price: 1180,
      regularPrice: 1200,
      qty: 1,
      unit: "Bag",
    },
    {
      productId: 2,
      name: "Fortune Refined Oil 5L Can",
      price: 795,
      regularPrice: 810,
      qty: 1,
      unit: "Can",
    },
  ]);

  const [notification, setNotification] = useState("");
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [lastGeneratedInvoice, setLastGeneratedInvoice] = useState(null);
  const [whatsappSentTo, setWhatsappSentTo] = useState(null);

  const t = (key) => translations[lang]?.[key] || translations.en[key] || key;
  const currentCustomer = shopCustomers.find((c) => c.id === selectedCustomerId) || shopCustomers[0];

  // Cart Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + tax;

  const triggerNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const addToCart = (product) => {
    const isSpecial = currentCustomer.hasSpecialRate && product.customPrice;
    const finalPrice = isSpecial ? product.customPrice : product.sellingPrice;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id);
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: finalPrice,
          regularPrice: product.sellingPrice,
          qty: 1,
          unit: product.unit,
        },
      ];
    });

    triggerNotification(`Added ${product.name} to bill`);
  };

  const updateQty = (productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.productId === productId) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
    triggerNotification("Cart cleared");
  };

  const handleBarcodeSubmit = (e) => {
    e.preventDefault();
    if (!barcodeInput.trim()) return;
    const found = retailProducts.find(
      (p) => p.barcode === barcodeInput.trim() || p.barcode.endsWith(barcodeInput.trim())
    );
    if (found) {
      addToCart(found);
      setBarcodeInput("");
      triggerNotification(`BEEP! Scanned: ${found.name}`);
    } else {
      triggerNotification("Barcode not found in catalog");
    }
  };

  const handleGenerateInvoice = () => {
    if (cartItems.length === 0) {
      triggerNotification("Cart is empty! Add products first.");
      return;
    }
    const invoiceNum = "DH-" + Math.floor(1000 + Math.random() * 9000);
    const invoiceData = {
      invoiceNum,
      customer: currentCustomer,
      items: [...cartItems],
      subtotal,
      tax,
      grandTotal,
      paymentMode,
      date: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setLastGeneratedInvoice(invoiceData);
    setShowReceiptModal(true);
    triggerNotification(`Invoice #${invoiceNum} saved! Instant updates applied to Cashbook, Khata & Stock.`);
  };

  const handleSendWhatsappReminder = (customerName, pendingAmount, phone) => {
    setWhatsappSentTo({ name: customerName, amount: pendingAmount, phone });
    triggerNotification(`WhatsApp reminder dispatched to ${customerName}`);
  };

  const filteredProducts = retailProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.barcode.includes(searchQuery)
  );


  return (
    <div className="w-full">
      {/* Optional Modal Top Controls */}
      {onClose && (
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="font-black text-slate-900 text-base sm:text-lg">
              Live DukanHisab Counter Simulator
            </h4>
            <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-50 text-[#036272] border border-teal-200">
              Interactive Web POS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/demo"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#036272] px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <span>Full Screen ↗</span>
            </Link>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 font-bold text-xs px-3.5 py-1.5 rounded-xl border border-slate-200 hover:border-rose-200 transition-all cursor-pointer"
              title="Close Demo"
            >
              <XIcon className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>
        </div>
      )}

      {/* POS Terminal */}
        {/* HERO INTERACTIVE POS SECTION */}
        <div id="interactive-demo" className="relative max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Interactive Web-App Terminal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Experience the Real DukanHisab Counter Interface
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Click items below, scan barcodes, and generate bills in seconds.
            </p>
          </div>

          {/* Main Desktop App Mockup Frame */}
          <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl shadow-teal-900/10 p-3.5 sm:p-6 lg:p-7 overflow-hidden">
            
            {/* Top Browser Bar & Shop Header */}
            <div className="flex flex-wrap items-center justify-between pb-3.5 mb-4 border-b border-slate-200/90 gap-3">
              
              {/* Left: macOS Dots + URL pill */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <a
                  href="https://dukanhisab.in/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 bg-slate-100 hover:bg-emerald-50 px-3 py-1 rounded-lg border border-slate-200 hover:border-emerald-300 text-[11px] font-mono text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  <StoreIcon className="w-3.5 h-3.5 text-teal-600" />
                  <span>dukanhisab.in/shop</span>
                  <span className="text-[9px] bg-emerald-600 text-white font-sans font-bold px-1 rounded">Live ↗</span>
                </a>
              </div>

              {/* Center / Right: Shop Status & Multi-Language Toggle */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold px-3 py-1 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></span>
                  <span>Shree Ganesh General Store & Kirana</span>
                </div>

                {/* Language Switcher */}
                <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-[11px] font-bold">
                  {[
                    { id: "en", label: "EN" },
                    { id: "gu", label: "ગુજ" },
                    { id: "hi", label: "हिन्दी" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setLang(item.id)}
                      className={`px-2 py-1 rounded-lg transition-all ${
                        lang === item.id
                          ? "bg-white text-teal-700 shadow-xs font-extrabold"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Navigation Tabs (Matching C:\xampp\htdocs\Dukanhisab\resources\views\shopowner\partials\sidebar.blade.php) */}
            <div className="flex flex-wrap items-center gap-1.5 pb-3 mb-4 border-b border-slate-100">
              <button
                onClick={() => setActiveTab("sales")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "sales"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <BarcodeIcon className="w-4 h-4" />
                <span>{t("sales_pos")}</span>
              </button>

              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "dashboard"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <ReceiptIcon className="w-4 h-4" />
                <span>{t("dashboard")}</span>
              </button>

              <button
                onClick={() => setActiveTab("cashbook")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "cashbook"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <WalletIcon className="w-4 h-4" />
                <span>{t("cashbook")}</span>
              </button>

              <button
                onClick={() => setActiveTab("customers")}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "customers"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <UsersIcon className="w-4 h-4" />
                <span>{t("customers")}</span>
              </button>

              {/* Status Notice */}
              <span className="ml-auto text-[11px] text-teal-700 font-semibold hidden md:inline-flex items-center gap-1">
                <CheckIcon className="w-3.5 h-3.5 text-teal-600" />
                Auto-Synchronized
              </span>
            </div>

            {/* Notification Toast */}
            {notification && (
              <div className="mb-3.5 bg-teal-50 border border-teal-200 text-teal-800 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-between animate-fade-in shadow-xs">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-teal-600" />
                  <span>{notification}</span>
                </div>
                <span className="text-[10px] text-teal-600 uppercase font-mono">Real-Time Sync</span>
              </div>
            )}

            {/* TAB 1: REAL POS BILLING COUNTER (Modeled on sales-pos.blade.php) */}
            {activeTab === "sales" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                
                {/* Left Side: Search, Barcode & Products */}
                <div className="lg:col-span-7 space-y-3.5">
                  
                  {/* Search & Barcode Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={t("search_placeholder")}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                      />
                      <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    </div>

                    <form onSubmit={handleBarcodeSubmit} className="relative">
                      <input
                        type="text"
                        placeholder={t("scan_placeholder")}
                        value={barcodeInput}
                        onChange={(e) => setBarcodeInput(e.target.value)}
                        className="w-full bg-slate-50 border border-teal-400/80 rounded-xl pl-9 pr-14 py-2 text-xs text-slate-900 focus:ring-2 focus:ring-teal-500 focus:outline-none placeholder:text-slate-500 font-mono"
                      />
                      <BarcodeIcon className="w-4 h-4 text-teal-600 absolute left-3 top-2.5" />
                      <button
                        type="submit"
                        className="absolute right-1.5 top-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-[10px] px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                      >
                        Scan
                      </button>
                    </form>
                  </div>

                  {/* Product Cards Grid - Clean responsive display, no cut-off! */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {filteredProducts.map((prod) => {
                      const isSpecial = currentCustomer.hasSpecialRate && prod.customPrice;
                      const priceToUse = isSpecial ? prod.customPrice : prod.sellingPrice;

                      return (
                        <div
                          key={prod.id}
                          onClick={() => addToCart(prod)}
                          className="bg-white border border-slate-200/90 hover:border-teal-400 rounded-2xl p-3 cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-1">
                              <h4 className="font-bold text-xs text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                                {prod.name}
                              </h4>
                              {isSpecial && (
                                <span className="text-[9px] bg-teal-100 text-teal-800 px-1 py-0.5 rounded font-extrabold shrink-0">
                                  {t("cust_price")}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-400 font-mono mt-1">
                              #{prod.barcode.slice(-4)} • {prod.unit}
                            </p>
                          </div>

                          <div className="mt-3 pt-2 border-t border-slate-100 flex items-end justify-between">
                            <div>
                              {isSpecial && (
                                <span className="text-[10px] text-slate-400 line-through block">
                                  ₹{prod.sellingPrice}
                                </span>
                              )}
                              <p className="text-sm font-extrabold text-teal-600">
                                ₹{priceToUse}
                              </p>
                            </div>

                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                                prod.stock <= prod.lowStockThreshold
                                  ? "bg-rose-50 text-rose-700 border border-rose-200"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {prod.stock <= prod.lowStockThreshold ? t("low_stock") : `${prod.stock} in stock`}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Interactive Billing Cart */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    {/* Customer Selection */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 gap-2">
                      <div className="flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          Select Customer
                        </span>
                        <select
                          value={selectedCustomerId}
                          onChange={(e) => setSelectedCustomerId(e.target.value)}
                          className="block w-full bg-white border border-slate-300 text-slate-900 rounded-xl px-2.5 py-1.5 text-xs font-bold mt-1 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        >
                          {shopCustomers.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name} {c.khata > 0 ? `(Khata: ₹${c.khata})` : ""}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        onClick={clearCart}
                        className="text-[11px] text-rose-600 hover:text-rose-700 font-semibold hover:underline self-end pb-1.5"
                      >
                        {t("clear_cart")}
                      </button>
                    </div>

                    {/* Cart Items List */}
                    <div className="space-y-2 min-h-[140px]">
                      {cartItems.length === 0 ? (
                        <div className="text-center py-8 text-slate-400 text-xs">
                          <BarcodeIcon className="w-7 h-7 mx-auto text-slate-300 mb-1.5" />
                          <p className="font-semibold text-slate-600">Cart is empty</p>
                          <p className="text-[11px] text-slate-400">Click any product or scan barcode</p>
                        </div>
                      ) : (
                        cartItems.map((item) => (
                          <div
                            key={item.productId}
                            className="bg-white border border-slate-200/80 p-2.5 rounded-xl flex items-center justify-between text-xs shadow-2xs"
                          >
                            <div className="flex-1 pr-2">
                              <p className="font-bold text-slate-900 truncate">{item.name}</p>
                              <p className="text-[10px] text-slate-500">
                                ₹{item.price} / {item.unit}
                              </p>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="flex items-center bg-slate-100 rounded-lg border border-slate-200">
                                <button
                                  onClick={() => updateQty(item.productId, -1)}
                                  className="px-2 py-0.5 text-slate-700 hover:text-slate-900 font-bold"
                                >
                                  -
                                </button>
                                <span className="px-2 text-xs font-bold text-teal-700">
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => updateQty(item.productId, 1)}
                                  className="px-2 py-0.5 text-slate-700 hover:text-slate-900 font-bold"
                                >
                                  +
                                </button>
                              </div>

                              <span className="font-bold text-slate-900 w-14 text-right">
                                ₹{item.price * item.qty}
                              </span>

                              <button
                                onClick={() => removeItem(item.productId)}
                                className="text-slate-400 hover:text-rose-600 text-xs px-1"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Cart Totals & Checkout Section */}
                  <div className="mt-4 pt-3.5 border-t border-slate-200 space-y-3">
                    <div className="space-y-1 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>{t("subtotal")}:</span>
                        <span className="font-bold text-slate-900">₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t("tax_gst")}:</span>
                        <span className="font-bold text-slate-900">₹{tax}</span>
                      </div>
                      <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1.5 border-t border-slate-200">
                        <span>{t("grand_total")}:</span>
                        <span className="text-teal-700 text-base font-black">₹{grandTotal}</span>
                      </div>
                    </div>

                    {/* Payment Mode Selector */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        {t("payment_mode")}
                      </span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: "Cash", label: t("cash") },
                          { id: "UPI", label: t("upi") },
                          { id: "Khata", label: t("khata") },
                        ].map((mode) => (
                          <button
                            key={mode.id}
                            onClick={() => setPaymentMode(mode.id)}
                            className={`py-1.5 px-2 text-center text-xs font-bold rounded-lg border transition-all ${
                              paymentMode === mode.id
                                ? "bg-teal-600 text-white border-teal-600 shadow-xs"
                                : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                            }`}
                          >
                            {mode.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={handleGenerateInvoice}
                        className="bg-[#036272] hover:bg-[#024f5c] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md shadow-teal-900/20 transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <ReceiptIcon className="w-4 h-4" />
                        <span>{t("print_bill")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (cartItems.length === 0) {
                            triggerNotification("Add items to bill first");
                            return;
                          }
                          handleSendWhatsappReminder(
                            currentCustomer.name,
                            grandTotal,
                            currentCustomer.mobile
                          );
                        }}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-emerald-100" />
                        <span>{t("whatsapp_bill")}</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: LIVE SHOP DASHBOARD (Modeled on dashboard.blade.php) */}
            {activeTab === "dashboard" && (
              <div className="space-y-5">
                {/* 6 Real KPI Cards from Laravel App */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  
                  {/* Today Sales */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {t("today_sales")}
                      </span>
                      <span className="p-1.5 rounded-lg bg-teal-100 text-teal-700">
                        <ReceiptIcon className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="mt-2.5">
                      <span className="text-2xl font-black text-slate-900">₹18,450</span>
                      <p className="text-[11px] text-teal-700 font-semibold mt-0.5">
                        24 Invoices • +14% vs yesterday
                      </p>
                    </div>
                  </div>

                  {/* Today Purchases */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {t("today_purchases")}
                      </span>
                      <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                        <TruckIcon className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="mt-2.5">
                      <span className="text-2xl font-black text-slate-900">₹12,200</span>
                      <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                        2 Inward Bills Verified
                      </p>
                    </div>
                  </div>

                  {/* Cash in Hand / Galla */}
                  <div className="bg-teal-50/80 p-4 rounded-2xl border border-teal-200 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                        {t("cash_balance")}
                      </span>
                      <span className="p-1.5 rounded-lg bg-teal-200/80 text-teal-800">
                        <WalletIcon className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="mt-2.5">
                      <span className="text-2xl font-black text-teal-900">₹9,840</span>
                      <p className="text-[11px] text-teal-700 font-semibold mt-0.5">
                        Daily Dukan Galla Reconciled
                      </p>
                    </div>
                  </div>

                  {/* Bank Balance */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {t("bank_balance")}
                      </span>
                      <span className="p-1.5 rounded-lg bg-cyan-100 text-cyan-700">
                        <LandmarkIcon className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="mt-2.5">
                      <span className="text-2xl font-black text-slate-900">₹45,620</span>
                      <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                        HDFC Bank + Shop QR UPI
                      </p>
                    </div>
                  </div>

                  {/* Customer Due (Udhar) */}
                  <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                        {t("customer_due")}
                      </span>
                      <span className="p-1.5 rounded-lg bg-amber-200/80 text-amber-800">
                        <UsersIcon className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="mt-2.5">
                      <span className="text-2xl font-black text-amber-900">₹28,500</span>
                      <p className="text-[11px] text-amber-700 font-semibold mt-0.5">
                        8 Regular Khata Accounts
                      </p>
                    </div>
                  </div>

                  {/* Supplier Due */}
                  <div className="bg-rose-50/80 p-4 rounded-2xl border border-rose-200 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                        {t("supplier_due")}
                      </span>
                      <span className="p-1.5 rounded-lg bg-rose-200/80 text-rose-800">
                        <TruckIcon className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="mt-2.5">
                      <span className="text-2xl font-black text-rose-900">₹14,000</span>
                      <p className="text-[11px] text-rose-700 font-semibold mt-0.5">
                        ABC Traders (Due Next Friday)
                      </p>
                    </div>
                  </div>

                </div>

                {/* Recent Invoices Table */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Recent Invoices & Connected Sync
                    </h3>
                    <span className="text-[11px] text-teal-700 font-semibold">
                      Auto-Updating Live
                    </span>
                  </div>

                  <div className="divide-y divide-slate-200 text-xs">
                    {[
                      { id: "DH-4029", customer: "Rahul Patel", amount: "₹2,070", mode: "Cash", time: "2 min ago", status: "Synced" },
                      { id: "DH-4028", customer: "Walk-in Cash", amount: "₹450", mode: "UPI", time: "18 min ago", status: "Synced" },
                      { id: "DH-4027", customer: "Deepak Mehta", amount: "₹6,800", mode: "Khata", time: "42 min ago", status: "Synced" },
                    ].map((inv) => (
                      <div key={inv.id} className="py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-teal-700">{inv.id}</span>
                          <span className="text-slate-900 font-medium">{inv.customer}</span>
                          <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono">
                            {inv.mode}
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-black text-slate-900">{inv.amount}</span>
                          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">{inv.time}</span>
                          <span className="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">
                            ✓ {inv.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DAILY CASHBOOK (Modeled on cashbook.blade.php) */}
            {activeTab === "cashbook" && (
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-200 gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <WalletIcon className="w-4 h-4 text-teal-600" />
                        <span>Daily Dukan Cashbook (Galla Hisab)</span>
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Every cash sale and physical shop expense recorded automatically.
                      </p>
                    </div>

                    <div className="bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-teal-800 block">
                        Current Cash In Galla
                      </span>
                      <span className="text-lg font-black text-teal-900">₹9,840</span>
                    </div>
                  </div>

                  <div className="mt-3 divide-y divide-slate-200 text-xs">
                    {[
                      { title: "Opening Cash Balance (Morning)", in: "₹5,000", out: "-", balance: "₹5,000", time: "8:30 AM" },
                      { title: "Cash Sale - Bill #DH-4029 (Rahul Patel)", in: "₹2,070", out: "-", balance: "₹7,070", time: "11:15 AM" },
                      { title: "Milk & Dairy Supplier Inward Payment", in: "-", out: "₹650", balance: "₹6,420", time: "1:00 PM" },
                      { title: "Counter Cash Sales (Afternoon batch)", in: "₹4,870", out: "-", balance: "₹11,290", time: "4:30 PM" },
                      { title: "Shop Electricity & Daily Misc Expense", in: "-", out: "₹1,450", balance: "₹9,840", time: "6:45 PM" },
                    ].map((entry, idx) => (
                      <div key={idx} className="py-2.5 flex items-center justify-between gap-2">
                        <div>
                          <p className="font-bold text-slate-900">{entry.title}</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">{entry.time}</p>
                        </div>

                        <div className="flex items-center gap-4 text-right">
                          {entry.in !== "-" ? (
                            <span className="text-teal-700 font-bold font-mono">+{entry.in}</span>
                          ) : (
                            <span className="text-rose-600 font-bold font-mono">-{entry.out}</span>
                          )}
                          <div className="w-20 text-right">
                            <span className="text-[10px] text-slate-400 block">Balance</span>
                            <span className="font-black text-slate-900 font-mono">{entry.balance}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CUSTOMER KHATA & WHATSAPP (Modeled on customers.blade.php) */}
            {activeTab === "customers" && (
              <div className="space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <UsersIcon className="w-4 h-4 text-amber-600" />
                        <span>Customer Khata & WhatsApp Collection</span>
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Send instant WhatsApp payment reminders with UPI link in 1-click.
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-amber-800 block">
                        Total Khata Udhar
                      </span>
                      <span className="text-lg font-black text-amber-900">₹28,500</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { name: "Rahul Patel", phone: "98250 12345", due: "₹4,200", lastBill: "Rice 25kg, Oil 5L", rate: "Custom Rate (5% Off)" },
                      { name: "Deepak Mehta (Wholesale)", phone: "94260 54321", due: "₹12,850", lastBill: "Bulk Atta & Sugar", rate: "Wholesale Tier" },
                      { name: "Vikram Chauhan", phone: "97120 99887", due: "₹3,400", lastBill: "Dairy & Masala", rate: "Standard Rate" },
                      { name: "Pooja Varma", phone: "98980 44332", due: "₹8,050", lastBill: "Monthly Ration Pack", rate: "Standard Rate" },
                    ].map((cust, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200/90 p-3 rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-2xs"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-xs sm:text-sm">{cust.name}</span>
                            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                              +91 {cust.phone}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Recent Purchase: {cust.lastBill} • <span className="text-teal-700 font-semibold">{cust.rate}</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Udhar</span>
                            <span className="text-sm font-black text-amber-800">{cust.due}</span>
                          </div>

                          <button
                            onClick={() => handleSendWhatsappReminder(cust.name, cust.due, cust.phone)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                          >
                            <WhatsAppIcon className="w-3.5 h-3.5" />
                            <span>Send Reminder</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Memory Connecting Ribbon */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 bg-slate-50/80 -mx-3.5 -mb-3.5 sm:-mx-6 sm:-mb-6 lg:-mx-7 lg:-mb-7 p-3.5 sm:p-4 rounded-b-3xl">
              <div className="flex items-center gap-2 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping shrink-0"></span>
                <span>The DukanHisab Rule:</span>
                <strong className="text-slate-900">One counter action updates POS, Inventory, Customer Khata & Daily Cashbook simultaneously.</strong>
              </div>
              <span className="text-teal-700 font-bold flex items-center gap-1">
                Zero Duplicate Entries →
              </span>
            </div>

          </div>

        </div>

      {/* MODALS */}
      {/* MODAL: Thermal Receipt Preview */}
      {showReceiptModal && lastGeneratedInvoice && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white text-slate-900 rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-slate-200">
            <div className="text-center pb-3 border-b border-slate-200">
              <h3 className="font-black text-base uppercase tracking-tight">Shree Ganesh General Store</h3>
              <p className="text-[11px] text-slate-500">Station Road, Anand, Gujarat • GSTIN: 24AAACG1234F1Z5</p>
              <p className="text-xs font-mono font-bold text-teal-700 mt-1">
                INVOICE #{lastGeneratedInvoice.invoiceNum} • {lastGeneratedInvoice.date}
              </p>
            </div>

            <div className="py-2.5 border-b border-slate-100 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Customer:</span>
                <span className="font-bold text-slate-900">{lastGeneratedInvoice.customer.name}</span>
              </div>
              <div className="flex justify-between text-slate-600 mt-0.5">
                <span>Payment Mode:</span>
                <span className="font-bold text-teal-700">{lastGeneratedInvoice.paymentMode}</span>
              </div>
            </div>

            {/* Receipt Items */}
            <div className="py-2.5 space-y-1.5 text-xs max-h-48 overflow-y-auto">
              {lastGeneratedInvoice.items.map((it, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="font-medium text-slate-800 truncate pr-2">
                    {it.name} ({it.qty} × ₹{it.price})
                  </span>
                  <span className="font-bold text-slate-900">₹{it.price * it.qty}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 space-y-1 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span className="font-bold">₹{lastGeneratedInvoice.subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>GST (5%):</span>
                <span className="font-bold">₹{lastGeneratedInvoice.tax}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-900 pt-1 border-t border-slate-200">
                <span>Total Amount:</span>
                <span className="text-teal-700">₹{lastGeneratedInvoice.grandTotal}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200">
              <button
                onClick={() => setShowReceiptModal(false)}
                className="w-full bg-[#036272] hover:bg-[#024f5c] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: WhatsApp Reminder Simulation */}
      {whatsappSentTo && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#0b141a] text-white rounded-2xl max-w-sm w-full p-4 shadow-2xl border border-[#202c33]">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#202c33]">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                DH
              </div>
              <div>
                <p className="text-xs font-bold text-white">DukanHisab WhatsApp Messenger</p>
                <p className="text-[10px] text-emerald-400">To: {whatsappSentTo.name}</p>
              </div>
            </div>

            {/* Chat Bubble */}
            <div className="my-4 bg-[#005c4b] p-3 rounded-2xl text-xs space-y-1.5 shadow-sm">
              <p className="font-bold text-[#e9edef]">
                🙏 Namaste {whatsappSentTo.name} ji,
              </p>
              <p className="text-[#d1d7db] text-[11px] leading-relaxed">
                This is a friendly payment reminder from <strong>Shree Ganesh General Store & Kirana</strong>.
              </p>
              <p className="text-[#e9edef] font-bold text-xs bg-[#025142] p-2 rounded-lg">
                Pending Balance: {whatsappSentTo.amount}
              </p>
              <p className="text-[10px] text-[#8696a0]">
                Pay securely via UPI: <span className="underline text-emerald-300 font-mono">dukanhisab@icici</span> or visit our counter.
              </p>
              <p className="text-[9px] text-right text-[#8696a0]">Delivered ✓✓</p>
            </div>

            <button
              onClick={() => setWhatsappSentTo(null)}
              className="w-full bg-[#202c33] hover:bg-[#2a3942] text-white font-bold py-2 rounded-xl text-xs cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
