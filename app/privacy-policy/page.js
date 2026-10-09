"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckIcon, MailIcon, WhatsAppIcon, ArrowRightIcon } from "../components/Icons";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("collection");

  const lastUpdated = "October 9, 2026";

  const sections = [
    { id: "overview", title: "1. Overview & Scope" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "permissions", title: "3. Device & App Permissions" },
    { id: "usage", title: "4. How We Use Your Data" },
    { id: "whatsapp", title: "5. WhatsApp & Communication" },
    { id: "security", title: "6. Data Security & Cloud Backup" },
    { id: "sharing", title: "7. Third-Party Sharing & No-Sale Policy" },
    { id: "retention", title: "8. Data Retention & Deletion" },
    { id: "rights", title: "9. Your Rights & Choices" },
    { id: "contact", title: "10. Contact Us & Grievance Officer" },
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
              <span className="text-teal-700">Privacy Policy</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#d6eff2] text-[#013e48] px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide shadow-xs mb-4">
              <span>🔒 YOUR DATA IS CONFIDENTIAL &amp; SAFE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Privacy Policy for <span className="text-[#036272]">DukanHisab</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We understand that your shop’s sales, stock, khata ledger, and customer records are the backbone of your business. Here is our transparent commitment on how we protect, store, and handle your data.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-600 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Effective Date: <strong>{lastUpdated}</strong></span>
              <span>•</span>
              <span>Applies to <strong>Android App &amp; Web Panel</strong></span>
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
                    Policy Contents
                  </h3>
                  <span className="text-[10px] bg-teal-50 text-teal-700 font-bold px-2 py-0.5 rounded-full">
                    10 Sections
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
                      <span>{sec.title}</span>
                      <ArrowRightIcon className={`w-3 h-3 ${activeSection === sec.id ? "text-white" : "text-slate-400"}`} />
                    </button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-slate-100 text-center">
                  <p className="text-[11px] text-slate-500 font-medium">
                    Questions about your privacy?
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

            {/* Right Column: Complete Legal Policy Clauses */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10 leading-relaxed text-slate-700 text-sm">

              {/* 1. Overview */}
              <div id="overview" className="scroll-mt-28 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    01
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Overview &amp; Scope
                  </h2>
                </div>
                <p>
                  Welcome to <strong>DukanHisab</strong> ("App", "Website", "Service"), operated and maintained by <strong>Sathwara Infotech</strong> ("we", "us", or "our"). This Privacy Policy describes how we collect, use, store, and disclose information from merchants, retail shopkeepers, wholesale distributors ("Users", "Shop Owners", or "You") and their business records through our Android Application (Google Play package: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs text-teal-800">com.app.dukanhisab</code>) and Web Portal (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs text-teal-800">dukanhisab.in</code>).
                </p>
                <p>
                  By creating an account, downloading our mobile app, or using our web panel, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* 2. Information We Collect */}
              <div id="collection" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    02
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Information We Collect
                  </h2>
                </div>
                <p>
                  To provide you with an accurate, high-speed billing, inventory, and accounting system, we collect the following categories of information:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-black uppercase text-slate-900 flex items-center gap-1.5">
                      <span>🏪</span> Merchant &amp; Shop Profile
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5">
                      Shop name, owner name, mobile phone number, email address, physical store address, GSTIN (optional), and custom bill header/footer text.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-black uppercase text-slate-900 flex items-center gap-1.5">
                      <span>📦</span> Products &amp; Inventory Data
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5">
                      Product titles, categories, barcode values, stock quantities, purchase costs, selling prices, wholesale rates, and low-stock threshold levels.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-black uppercase text-slate-900 flex items-center gap-1.5">
                      <span>🧾</span> Transactional &amp; Billing Records
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5">
                      Sale bills, invoices, purchase bills, return vouchers, daily cash galla opening and closing tallies, expense entries, and profit margins.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-black uppercase text-slate-900 flex items-center gap-1.5">
                      <span>👥</span> Customer &amp; Supplier Khata
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5">
                      Names and phone numbers of customers and vendors you manually add or import to record credit (Udhaar), payments received, and balance dues.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <span>💳</span> Important Note on Banking Credentials:
                  </p>
                  <p>
                    DukanHisab <strong>never</strong> collects, stores, or accesses your bank passwords, debit/credit card CVVs, or UPI PINs. Payments made via UPI use external, certified UPI apps (PhonePe, GPay, Paytm) installed on your device.
                  </p>
                </div>
              </div>

              {/* 3. Device & App Permissions */}
              <div id="permissions" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    03
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Device &amp; App Permissions (Google Play Disclosure)
                  </h2>
                </div>
                <p>
                  In accordance with Google Play Developer policies, the DukanHisab mobile app requests specific runtime permissions solely to execute essential shop features:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                    <span className="text-lg">📷</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Camera Permission (android.permission.CAMERA)</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Used only when you scan product barcodes with your phone camera, scan UPI QR codes, or snap pictures of supplier paper bills. We never access the camera in the background.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                    <span className="text-lg">📁</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Storage &amp; Media Access</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Used to save generated PDF invoices, export Excel financial balance sheets, and store product barcode labels onto your phone storage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                    <span className="text-lg">📖</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Contacts Permission (Optional)</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        If granted, it allows you to quickly pick a customer or supplier's name and phone number from your contact book rather than typing manually. Your contact list is never uploaded, synced with third-party advertisers, or sold.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                    <span className="text-lg">🖨️</span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Bluetooth / Nearby Devices</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Used to connect with portable 2-inch and 3-inch Bluetooth thermal slip printers for instant counter bill printing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. How We Use Your Data */}
              <div id="usage" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    04
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    How We Use Your Data
                  </h2>
                </div>
                <p>We use the collected information for the following legitimate business purposes:</p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span><strong>Real-time Cloud Synchronization:</strong> Keeping your mobile app and computer web dashboard synchronized seamlessly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span><strong>Bill &amp; Invoice Creation:</strong> Generating branded GST and non-GST thermal receipts and full A4 tax invoices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span><strong>Khata Ledger &amp; Due Statements:</strong> Tracking pending customer balances, calculating net dues, and logging settlements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span><strong>Inventory Intelligence:</strong> Triggering low stock alerts before shelves go empty and computing item-wise profit margins.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span><strong>Customer Support &amp; Technical Debugging:</strong> Resolving technical glitches and recovering accidental deletions upon your request.</span>
                  </li>
                </ul>
              </div>

              {/* 5. WhatsApp & Communication */}
              <div id="whatsapp" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    05
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    WhatsApp &amp; Automated Communication Policy
                  </h2>
                </div>
                <p>
                  DukanHisab includes integrated WhatsApp notification capabilities (e.g., sending instant PDF bills, payment confirmation receipts, and scheduled customer Udhaar reminders with "Pay Now" UPI links).
                </p>
                <div className="bg-teal-50/70 rounded-2xl p-4 border border-teal-200/80 space-y-2 text-xs text-teal-950">
                  <p className="font-bold">Strict Anti-Spam &amp; Opt-In Guidelines:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>WhatsApp messages are strictly transactional and sent either on your explicit trigger or per your configured schedule.</li>
                    <li>Customer phone numbers provided by you are used solely to deliver your shop’s invoice or payment notice.</li>
                    <li>We never send third-party advertising, promotional cold calls, or spam messages to your customer list.</li>
                    <li>Failed message attempts are refunded to your credit balance automatically.</li>
                  </ul>
                </div>
              </div>

              {/* 6. Security */}
              <div id="security" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    06
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Data Security &amp; Cloud Backup
                  </h2>
                </div>
                <p>
                  The security of your business records is our highest priority. We implement enterprise-grade security protocols:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-xl">🔐</span>
                    <h4 className="text-xs font-black text-slate-900 mt-1">256-Bit SSL/TLS</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Encrypted transmission between your device and our servers.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-xl">☁️</span>
                    <h4 className="text-xs font-black text-slate-900 mt-1">Daily Cloud Backups</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Never lose your ledgers even if your phone is lost, broken, or upgraded.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <span className="text-xl">🛡️</span>
                    <h4 className="text-xs font-black text-slate-900 mt-1">Role &amp; Staff Access</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Granular permissions keep your overall profit and purchase margins private.</p>
                  </div>
                </div>
              </div>

              {/* 7. Third-Party Sharing & No Sale */}
              <div id="sharing" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    07
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Third-Party Sharing &amp; Zero-Sale Guarantee
                  </h2>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-emerald-950 font-bold text-xs">
                  We NEVER sell, rent, monetize, or broker your shop’s sales data, inventory figures, or customer lists to any third-party advertisers, credit agencies, or competitors.
                </div>
                <p>
                  Data is only shared with verified technical infrastructure providers strictly needed to run the app:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                  <li><strong>Cloud Hosting &amp; Database Providers:</strong> Secure tier-4 cloud servers located in India with ISO/IEC certifications.</li>
                  <li><strong>Official WhatsApp / SMS Gateways:</strong> For dispatching bills and payment confirmation alerts requested by you.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information only if required by a court order or applicable Indian law.</li>
                </ul>
              </div>

              {/* 8. Retention & Deletion */}
              <div id="retention" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    08
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Data Retention &amp; Account Deletion (Google Play Compliance)
                  </h2>
                </div>
                <p>
                  We retain your information as long as your shop account is active. If you choose to stop using DukanHisab or wish to permanently remove your records:
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-700">
                  <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>🗑️</span> Account &amp; Data Deletion Options:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                    <li>
                      <strong>Direct In-App Deletion:</strong> You can delete your account from within the DukanHisab app via <code>Settings &gt; Shop Profile &gt; Account Settings &gt; Delete Account</code>. The deletion requires OTP confirmation for security.
                    </li>
                    <li>
                      <strong>Email Request:</strong> You can email us at <a href="mailto:info@dukanhisab.in" className="text-teal-700 font-bold hover:underline">info@dukanhisab.in</a> from your registered email/phone number. Our grievance officer will process your request within 7 business days.
                    </li>
                    <li>
                      <strong>Complete Data Wipe:</strong> Upon deletion, your profile, staff logins, inventory entries, customer khata balances, and daily sales registers are permanently wiped from live databases, and all cloud backup archives are permanently deleted within 30 days.
                    </li>
                    <li>
                      <strong>Prior Data Export:</strong> You can export all your past invoices, tax summaries, and customer ledgers to Excel / PDF before confirming deletion.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 9. Your Rights */}
              <div id="rights" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    09
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Your Rights &amp; Choices
                  </h2>
                </div>
                <p>As a registered merchant on DukanHisab, you have the right to:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span>Access &amp; review all your transaction records anytime</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span>Edit, update, or correct your shop profile and tax details</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span>Turn off automatic WhatsApp alerts from Settings</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
                    <span className="text-teal-700 font-bold">✓</span>
                    <span>Revoke device permissions (camera/contacts) via phone settings</span>
                  </div>
                </div>
              </div>

              {/* 10. Contact Us & Grievance */}
              <div id="contact" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-[#036272] flex items-center justify-center font-black text-xs">
                    10
                  </span>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    Contact Us &amp; Grievance Officer
                  </h2>
                </div>
                <p>
                  If you have any questions, concerns, or grievances regarding this Privacy Policy or your data, please contact our designated Grievance Team:
                </p>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2 text-xs text-slate-700">
                  <p><strong>Entity Name:</strong> Sathwara Infotech (DukanHisab)</p>
                  <p><strong>Designation:</strong> Data Privacy &amp; Grievance Officer</p>
                  <p><strong>Phone / WhatsApp:</strong> <a href="tel:+916352709531" className="text-teal-700 font-bold hover:underline">+91 63527 09531</a></p>
                  <p><strong>Email Address:</strong> <a href="mailto:info@dukanhisab.in" className="text-teal-700 font-bold hover:underline">info@dukanhisab.in</a></p>
                  <p><strong>Official Website:</strong> <a href="https://dukanhisab.in" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold hover:underline">https://dukanhisab.in</a></p>
                  <p><strong>Operating Region:</strong> Gujarat, India</p>
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
