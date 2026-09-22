"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import { WhatsAppIcon, MailIcon, StoreIcon, CheckIcon, ArrowRightIcon } from "../components/Icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    phone: "",
    shopType: "Kirana / Grocery",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="pt-12 pb-12 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              We're Here to Help
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
              Talk to the DukanHisab Team.
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
              Have questions about your shop, need a personalized demonstration, or want help setting up barcode scanners?
            </p>
          </div>
        </section>

        {/* Contact Form & Support Info Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Contact & WhatsApp */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Instant WhatsApp Assistance
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Chat directly with our onboarding specialists. We help you choose the right scanner, import your existing customer lists, and get started smoothly.
                  </p>
                </div>

                <a
                  href="https://wa.me/919825000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all active:scale-98"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Chat on WhatsApp: +91 98250 00000</span>
                </a>

                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      <MailIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Email Support</span>
                      <span>support@dukanhisab.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      <StoreIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Headquarters</span>
                      <span>Sathwara Infotech, Gujarat, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-xs text-emerald-900 space-y-2">
                <p className="font-bold flex items-center gap-1.5 text-sm">
                  <CheckIcon className="w-4 h-4 text-emerald-600" />
                  Dedicated Retail Specialists
                </p>
                <p className="leading-relaxed">
                  We speak your language. Whether you prefer Gujarati, Hindi, or English, our team understands the ground realities of Indian retail shops.
                </p>
              </div>
            </div>

            {/* Right Column: Demo & Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900">
                  Request a Free Demonstration
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your shop details and we'll reach out within a few hours.
                </p>

                {submitted ? (
                  <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-900">Thank You! Request Received.</h4>
                    <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                      Our shop specialist will contact you on <strong>{formData.phone || "your number"}</strong> to demonstrate how DukanHisab fits your retail setup.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-emerald-700 underline font-bold mt-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Shop Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Shree Ganesh Kirana Store"
                          value={formData.shopName}
                          onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Owner Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Patel"
                          value={formData.ownerName}
                          onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5">Shop Type</label>
                        <select
                          value={formData.shopType}
                          onChange={(e) => setFormData({ ...formData, shopType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 bg-white"
                        >
                          <option>Kirana / Grocery</option>
                          <option>Hardware & Sanitary</option>
                          <option>Agro & Fertilizer</option>
                          <option>Medical Store</option>
                          <option>Mobile & Electronics</option>
                          <option>General Retail</option>
                          <option>Other Business</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1.5">Any specific questions or requirements?</label>
                      <textarea
                        rows={3}
                        placeholder="e.g. I want to connect my existing Bluetooth barcode scanner..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Request My Free Demo</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </form>
                )}
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
