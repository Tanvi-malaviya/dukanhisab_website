"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckIcon, MailIcon, WhatsAppIcon, ArrowRightIcon } from "../components/Icons";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("terms-acceptance");

  const lastUpdated = "October 9, 2026";

  const sections = [
    { id: "terms-acceptance", title: "1. Acceptance of Terms" },
    { id: "account-eligibility", title: "2. Account & Eligibility" },
    { id: "services-scope", title: "3. Scope of Services" },
    { id: "plans-addons", title: "4. Subscriptions & WhatsApp Packs" },
    { id: "merchant-responsibility", title: "5. Tax, Invoicing & Merchant Duties" },
    { id: "upi-payments", title: "6. UPI Payments & Khata Settlements" },
    { id: "acceptable-use", title: "7. Acceptable Use Policy" },
    { id: "ip-rights", title: "8. Intellectual Property & Data Ownership" },
    { id: "disclaimers", title: "9. Warranties & Limitation of Liability" },
    { id: "termination", title: "10. Account Deletion & Data Erasure" },
    { id: "governing-law", title: "11. Governing Law & Dispute Resolution" },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO HEADER ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f6] via-[#f2fbfa] to-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-4">
              <Link href="/" className="hover:text-teal-700">Home</Link>
              <span>›</span>
              <span className="text-teal-700">Terms of Service</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#d6eff2] text-[#013e48] px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide shadow-xs mb-4">
              <span>⚖️ USER AGREEMENT &amp; TERMS OF USE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Terms of Service for <span className="text-[#036272]">DukanHisab</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              These terms govern your use of the DukanHisab mobile app, web dashboard, billing services, inventory system, and associated add-on features.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-600 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Last Updated: <strong>{lastUpdated}</strong></span>
              <span>•</span>
              <span>Operated by <strong>Sathwara Infotech</strong></span>
            </div>
          </div>
        </section>

        {/* ===================== CONTENT WITH SIDEBAR NAVIGATION ===================== */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Sticky Table of Contents */}
            <div className="lg:col-span-4 sticky top-28 hidden lg:block">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Agreement Sections
                  </h3>
                  <span className="text-[10px] bg-teal-50 text-teal-700 font-bold px-2 py-0.5 rounded-full">
                    11 Clauses
                  </span>
                </div>

                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                        activeSection === sec.id
                          ? "bg-[#036272] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                      }`}
                    >
                      <span className="truncate pr-2">{sec.title}</span>
                      <ArrowRightIcon className={`w-3 h-3 shrink-0 ${activeSection === sec.id ? "text-white" : "text-slate-400"}`} />
                    </button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-slate-100 text-center">
                  <p className="text-[11px] text-slate-500 font-medium">
                    Questions about our terms?
                  </p>
                  <a
                    href="mailto:info@dukanhisab.in"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline mt-1"
                  >
                    <MailIcon className="w-3.5 h-3.5" />
                    <span>info@dukanhisab.in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Legal Terms Clauses */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10 leading-relaxed text-slate-700 text-sm">

              {/* 1. Acceptance */}
              <div id="terms-acceptance" className="scroll-mt-28 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    01
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Acceptance of Terms
                  </h2>
                </div>
                <p>
                  These Terms of Service ("Terms", "Agreement") constitute a legally binding agreement between you ("Merchant", "Shop Owner", "User", or "You") and <strong>Sathwara Infotech</strong> ("Company", "we", "us", or "our"), governing your access to and use of the <strong>DukanHisab</strong> mobile application (Google Play package <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs text-teal-800">com.app.dukanhisab</code>), web software portal (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs text-teal-800">dukanhisab.in</code>), and all associated digital products and APIs.
                </p>
                <p>
                  By creating a shop account, downloading the mobile app, purchasing a subscription, or using any feature of DukanHisab, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>
              </div>

              {/* 2. Account & Eligibility */}
              <div id="account-eligibility" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    02
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Account Registration &amp; Eligibility
                  </h2>
                </div>
                <p>
                  To register and utilize DukanHisab:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li>You must be at least 18 years of age and legally competent to enter into binding commercial contracts in India.</li>
                  <li>You agree to provide true, current, and complete information regarding your shop name, contact phone number, and business details.</li>
                  <li>Account verification is performed using a secure mobile OTP or encrypted password. You are solely responsible for maintaining the confidentiality of your authentication credentials.</li>
                  <li>You are fully responsible for all transactions, bills, and customer entries created under your account, including those generated by your employees or counter staff.</li>
                </ul>
              </div>

              {/* 3. Scope of Services */}
              <div id="services-scope" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    03
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Scope of Services Provided
                  </h2>
                </div>
                <p>
                  DukanHisab provides a connected software suite for retail and wholesale business management, which includes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-black text-slate-900">🧾 Counter Billing &amp; POS</h4>
                    <p className="text-xs text-slate-600 mt-1">Fast GST &amp; non-GST invoice generation, thermal slip printing, barcode scanning, and sale returns.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-black text-slate-900">📦 Inventory &amp; Stock Tracking</h4>
                    <p className="text-xs text-slate-600 mt-1">Real-time stock level monitoring, low-inventory notifications, batch barcodes, and supplier purchases.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-black text-slate-900">👥 Udhaar &amp; Khata Ledgers</h4>
                    <p className="text-xs text-slate-600 mt-1">Digital customer debt logs, supplier credits, payment tracking, and automated balance statements.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-black text-slate-900">📊 Cash Galla &amp; Daily Reports</h4>
                    <p className="text-xs text-slate-600 mt-1">Daily physical cash register tallies, category expense logging, profit margin calculations, and tax summaries.</p>
                  </div>
                </div>
              </div>

              {/* 4. Subscriptions & Addons */}
              <div id="plans-addons" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    04
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Subscriptions, Lifetime Licenses &amp; WhatsApp Packs
                  </h2>
                </div>
                <p>
                  We offer various service tiers, including trial tiers, annual subscriptions, Lifetime access plans, and operational add-ons:
                </p>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-1.5">
                    <h4 className="font-bold text-teal-950 text-sm">👑 Lifetime License Terms:</h4>
                    <p>
                      A Lifetime plan grants non-expiring access to core shop management features without monthly recurring rental fees for the lifetime of the application. Dedicated add-on services (such as third-party WhatsApp credit bundles and multi-store expansions) remain subject to their respective usage terms.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <h4 className="font-bold text-slate-900 text-sm">💬 WhatsApp Message Credit Rules:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li><strong>1 Credit = 1 WhatsApp Message:</strong> Covers delivery of invoice PDF, payment receipt, or scheduled Udhaar reminder.</li>
                      <li><strong>Never Expire:</strong> Purchased message credits remain in your shop wallet with no expiration cutoff.</li>
                      <li><strong>Automatic Refunds:</strong> If a message fails delivery due to invalid recipient phone numbers or gateway timeouts, the credit is immediately restored to your balance.</li>
                      <li><strong>Non-Transferable:</strong> Credits are tied to your specific shop account and cannot be exchanged for cash or transferred across unrelated shops.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Tax & Merchant Duties */}
              <div id="merchant-responsibility" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    05
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Tax, Invoicing &amp; Merchant Responsibility
                  </h2>
                </div>
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-amber-950 text-xs space-y-2">
                  <p className="font-bold">Software Tool Disclaimer:</p>
                  <p>
                    DukanHisab is a technology platform and computational accounting tool. We are <strong>not</strong> a chartered accounting firm, tax advisor, or legal fiduciary.
                  </p>
                </div>
                <p className="text-xs text-slate-600">
                  You, as the merchant, remain solely responsible for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                  <li>Configuring the correct GST tax rates (0%, 5%, 12%, 18%, 28%) and HSN/SAC codes for your goods and services.</li>
                  <li>Ensuring that your printed invoices meet all statutory requirements under the Central Goods and Services Tax (CGST) Act and local commercial laws.</li>
                  <li>Filing timely and accurate tax returns (GSTR-1, GSTR-3B) with the respective government authorities.</li>
                  <li>Maintaining independent physical records or regular local backups of your business accounts.</li>
                </ul>
              </div>

              {/* 6. UPI & Khata */}
              <div id="upi-payments" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    06
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    UPI Payments &amp; "Pay Now" Feature
                  </h2>
                </div>
                <p>
                  DukanHisab enables shopkeepers to display dynamic UPI QR codes and send "Pay Now" payment links to customers on WhatsApp.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                  <p><strong>Direct Merchant-to-Customer Settlement:</strong> Funds transferred by your customers via UPI are routed directly from the customer’s bank account into your linked merchant bank account. DukanHisab does not act as a payment gateway, does not pool funds in an intermediary escrow account, and deducts zero commission from your transaction amount.</p>
                  <p><strong>Verification Responsibility:</strong> When a customer submits an online payment claim or UTR number, it is your responsibility to verify receipt of money in your official bank/UPI application before confirming the payment on your DukanHisab ledger.</p>
                </div>
              </div>

              {/* 7. Acceptable Use */}
              <div id="acceptable-use" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    07
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Acceptable Use Policy
                  </h2>
                </div>
                <p>You agree NOT to use DukanHisab to:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                  <li>Invoice or record the trade of narcotics, illegal firearms, prohibited wildlife products, counterfeit goods, or contraband items.</li>
                  <li>Send unsolicited spam messages, harass customers, or broadcast fraudulent extortion messages via our WhatsApp messaging bridge.</li>
                  <li>Decompile, reverse-engineer, modify, or extract the source code of our Android application or web portal.</li>
                  <li>Introduce viruses, trojans, worms, or malicious scripts designed to damage or overload our infrastructure.</li>
                </ul>
              </div>

              {/* 8. IP Rights */}
              <div id="ip-rights" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    08
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Intellectual Property &amp; Data Ownership
                  </h2>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <p>
                    <strong>Our Rights:</strong> The DukanHisab brand name, logos, software architecture, mobile application interfaces, algorithms, and documentation are the exclusive intellectual property of Sathwara Infotech.
                  </p>
                  <p>
                    <strong>Your Rights (You Own Your Data):</strong> You retain 100% ownership of your business data — including your product lists, customer names, sales figures, and supplier ledgers. We do not claim any proprietary rights over the data you record in the system.
                  </p>
                </div>
              </div>

              {/* 9. Disclaimers */}
              <div id="disclaimers" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    09
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Warranties &amp; Limitation of Liability
                  </h2>
                </div>
                <p className="text-xs text-slate-600">
                  The Service is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind, whether express or implied.
                </p>
                <p className="text-xs text-slate-600">
                  To the maximum extent permitted by applicable Indian law, Sathwara Infotech and its team shall not be liable for any indirect, incidental, punitive, or consequential damages (including loss of business profits, data corruption due to hardware failure, internet downtime, or unrecovered customer debts). Our maximum aggregate liability shall be limited to the total fees paid by you to DukanHisab during the twelve (12) months preceding the claim.
                </p>
              </div>

              {/* 10. Account Deletion & Termination */}
              <div id="termination" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    10
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Account Deletion, Termination &amp; Data Erasure
                  </h2>
                </div>

                <p className="text-xs text-slate-600">
                  You have full autonomy over your DukanHisab account and business data. You may stop using the Service and request complete account deletion at any time.
                </p>

                {/* Account Deletion Steps Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                    <span>🗑️</span> How to Delete Your Account:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
                    <li>
                      <strong>Direct In-App Deletion:</strong> You can initiate account deletion directly within the DukanHisab Mobile Application by navigating to <code>Settings &gt; Shop Profile &gt; Account Settings &gt; Delete Account</code>. You will receive an OTP confirmation on your registered mobile number to verify your identity.
                    </li>
                    <li>
                      <strong>Helpdesk / Email Request:</strong> Alternatively, you can email our support team at <a href="mailto:info@dukanhisab.in" className="text-teal-700 font-bold hover:underline">info@dukanhisab.in</a> from your registered email or phone number with the subject line <em>"Request Account Deletion"</em>. Our team will verify ownership and process the removal within 7 business days.
                    </li>
                    <li>
                      <strong>Mandatory Data Export Notice:</strong> Account deletion is permanent and cannot be undone. We strongly advise that you export all your sales registers, customer udhaar khata ledgers, tax invoices, and inventory sheets into Excel / PDF format using the In-App Export feature prior to submitting a deletion request.
                    </li>
                  </ul>
                </div>

                {/* What Gets Deleted Grid */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-slate-900">What Happens Upon Account Deletion:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 text-red-950 flex items-start gap-2">
                      <span className="font-bold text-red-600">✕</span>
                      <span><strong>Shop Profile &amp; Logins:</strong> All login credentials, phone numbers, and staff access permissions are permanently erased.</span>
                    </div>
                    <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 text-red-950 flex items-start gap-2">
                      <span className="font-bold text-red-600">✕</span>
                      <span><strong>Inventory &amp; Khata:</strong> All product catalogs, customer debt records, purchase entries, and expenses are purged from our live database.</span>
                    </div>
                    <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 text-red-950 flex items-start gap-2">
                      <span className="font-bold text-red-600">✕</span>
                      <span><strong>Unused Credits:</strong> Any unused WhatsApp message credits or active plan durations are permanently forfeited upon deletion.</span>
                    </div>
                    <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 text-red-950 flex items-start gap-2">
                      <span className="font-bold text-red-600">✕</span>
                      <span><strong>Cloud Backup Erasure:</strong> All encrypted cloud backup snapshots associated with your shop are wiped within 30 days.</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600 pt-1">
                  <strong>Termination by Sathwara Infotech:</strong> We reserve the right to suspend or terminate accounts that violate this Agreement, distribute counterfeit/prohibited items, participate in financial fraud, or abuse the automated WhatsApp messaging gateway, with or without prior notice.
                </div>
              </div>

              {/* 11. Governing Law */}
              <div id="governing-law" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    11
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Governing Law &amp; Dispute Resolution
                  </h2>
                </div>
                <p className="text-xs text-slate-600">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes, controversies, or claims arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Gujarat, India.
                </p>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2 text-xs text-slate-700">
                  <p><strong>Operating Company:</strong> Sathwara Infotech</p>
                  <p><strong>Phone / WhatsApp:</strong> <a href="tel:+916352709531" className="text-teal-700 font-bold hover:underline">+91 63527 09531</a></p>
                  <p><strong>Support &amp; Legal Desk:</strong> <a href="mailto:info@dukanhisab.in" className="text-teal-700 font-bold hover:underline">info@dukanhisab.in</a></p>
                  <p><strong>Official Portal:</strong> <a href="https://dukanhisab.in" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold hover:underline">https://dukanhisab.in</a></p>
                  <p><strong>State / Country:</strong> Gujarat, India</p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
