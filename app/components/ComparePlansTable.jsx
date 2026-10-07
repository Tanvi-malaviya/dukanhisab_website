"use client";

import React, { useState, useEffect } from "react";
import { CheckIcon } from "./Icons";

const STATIC_FALLBACK_PLANS = {
  free: {
    id: 1,
    name: "Free",
    slug: "free",
    price: "0.00",
    billing_period: "free",
    features: { max_devices: 5 },
  },
  premium: {
    id: 2,
    name: "Premium",
    slug: "premium",
    price: "499.00",
    billing_period: "yearly",
    features: { max_devices: 10 },
  },
  business: {
    id: 3,
    name: "Lifetime",
    slug: "business",
    price: "2499.00",
    billing_period: "lifetime",
    features: { max_devices: 10 },
  },
};

function formatHeaderPrice(price, billingPeriod) {
  const num = parseFloat(price);
  if (billingPeriod === "free" || isNaN(num) || num === 0) {
    return "₹0 Forever";
  }
  const formatted = "₹" + num.toLocaleString("en-IN", { maximumFractionDigits: 0 });
  if (billingPeriod === "lifetime") {
    return `${formatted} One-Time`;
  }
  if (billingPeriod === "yearly") {
    return `${formatted} / Year`;
  }
  if (billingPeriod === "monthly") {
    return `${formatted} / Month`;
  }
  return formatted;
}

export default function ComparePlansTable() {
  const [plansMap, setPlansMap] = useState(STATIC_FALLBACK_PLANS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost/Dukanhisab/public/api";

    async function fetchPlans() {
      try {
        setLoading(true);
        const res = await fetch(`${apiBase}/public/plans`, { signal: controller.signal });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        if (Array.isArray(data.plans) && data.plans.length > 0) {
          const mapped = { ...STATIC_FALLBACK_PLANS };
          data.plans.forEach((p) => {
            if (p.slug === "free" || p.billing_period === "free") mapped.free = p;
            else if (p.slug === "premium" || p.billing_period === "yearly") mapped.premium = p;
            else if (p.slug === "business" || p.billing_period === "lifetime") mapped.business = p;
          });
          setPlansMap(mapped);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          // Keep static fallback
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
    return () => controller.abort();
  }, []);

  const freePlan = plansMap.free || STATIC_FALLBACK_PLANS.free;
  const proPlan = plansMap.premium || STATIC_FALLBACK_PLANS.premium;
  const bizPlan = plansMap.business || STATIC_FALLBACK_PLANS.business;

  const comparisonFeatures = [
    { name: "Sales & Purchase", free: true, pro: true, biz: true },
    { name: "Inventory Management", free: true, pro: true, biz: true },
    { name: "Customers & Suppliers", free: true, pro: true, biz: true },
    { name: "Basic Reports", free: true, pro: true, biz: true },
    { name: "Advanced Reports (Profit, Stock, etc.)", free: false, pro: true, biz: true },
    { name: "PDF / Print / WhatsApp Invoice", free: false, pro: true, biz: true },
    { name: "Email Invoice", free: false, pro: true, biz: true },
    { name: "Cloud Backup & Restore", free: false, pro: true, biz: true },
    { name: "Excel Export", free: false, pro: true, biz: true },
    { name: "Shop Website (Themes & Banner)", free: "Basic", pro: true, biz: true },
    { name: "Multiple Shops", free: "1 Shop", pro: "Up to 2 Shops", biz: "Up to 5 Shops" },
    {
      name: "Device Support / Staff Logins",
      free: `${freePlan?.features?.max_devices || 5} Devices`,
      pro: `${proPlan?.features?.max_devices || 10} Devices`,
      biz: `${bizPlan?.features?.max_devices || 10} Devices`,
    },
    { name: "Ads", free: "With Ads", pro: false, biz: false },
    { name: "Priority Support", free: false, pro: true, biz: true },
    { name: "Lifetime Updates", free: false, pro: false, biz: true },
  ];

  const renderVal = (val) => {
    if (val === true) {
      return (
        <div className="w-5 h-5 rounded-full bg-[#05684f] text-white flex items-center justify-center mx-auto shadow-2xs">
          <CheckIcon className="w-3 h-3 text-white stroke-[2.5]" />
        </div>
      );
    }
    if (val === false) {
      return <span className="text-slate-300 font-bold text-base">—</span>;
    }
    return <span className="font-semibold text-slate-700 text-xs sm:text-sm">{val}</span>;
  };

  return (
    <div className="overflow-x-auto border border-slate-200 rounded-3xl shadow-sm bg-white">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="border-b border-slate-200">
          <tr className="divide-x divide-slate-100">
            <th className="py-4 px-5 font-bold text-slate-900 bg-slate-50/80">Features</th>
            <th className="py-4 px-4 text-center bg-slate-50/50 min-w-[130px]">
              <span className="block font-bold text-slate-900 text-sm">
                {freePlan?.name?.replace(/ Plan/i, "") || "Free"}
              </span>
              <span className="block text-[11px] font-semibold text-slate-500 mt-0.5">
                {formatHeaderPrice(freePlan.price, freePlan.billing_period)}
              </span>
            </th>
            <th className="py-4 px-4 text-center bg-emerald-50/60 min-w-[130px]">
              <span className="block font-bold text-emerald-900 text-sm">
                {proPlan?.name?.replace(/ Plan/i, "") || "Premium"}
              </span>
              <span className="block text-[11px] font-semibold text-emerald-700 mt-0.5">
                {formatHeaderPrice(proPlan.price, proPlan.billing_period)}
              </span>
            </th>
            <th className="py-4 px-4 text-center bg-amber-50/60 min-w-[130px]">
              <span className="block font-bold text-amber-900 text-sm">
                {bizPlan?.name?.replace(/ \(Lifetime\)/i, "") || "Lifetime"}
              </span>
              <span className="block text-[11px] font-semibold text-amber-700 mt-0.5">
                {formatHeaderPrice(bizPlan.price, bizPlan.billing_period)}
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {comparisonFeatures.map((row) => (
            <tr key={row.name} className="hover:bg-slate-50/70 transition-colors divide-x divide-slate-100">
              <td className="py-3.5 px-5 font-semibold text-slate-800">{row.name}</td>
              <td className="py-3.5 px-4 text-center">{renderVal(row.free)}</td>
              <td className="py-3.5 px-4 text-center bg-emerald-50/20">{renderVal(row.pro)}</td>
              <td className="py-3.5 px-4 text-center bg-amber-50/20">{renderVal(row.biz)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="border-t border-slate-200 bg-slate-50/40">
          <tr className="divide-x divide-slate-100">
            <td className="py-4 px-5 font-bold text-slate-700 text-xs">Ready to start?</td>
            <td className="py-4 px-4 text-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-2xs"
              >
                Get Free
              </a>
            </td>
            <td className="py-4 px-4 text-center bg-emerald-50/20">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#05684f] hover:bg-[#04523e] transition-colors shadow-2xs"
              >
                Choose Premium
              </a>
            </td>
            <td className="py-4 px-4 text-center bg-amber-50/20">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.dukanhisab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#d97706] hover:bg-[#b45309] transition-colors shadow-2xs"
              >
                Get Lifetime
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
