"use client";

import React from "react";

export default function LiveShopTicker() {
  const activities = [
    { city: "Ahmedabad", shop: "Shree Ganesh Kirana", action: "generated GST Bill #1042", amount: "₹1,480", icon: "🧾" },
    { city: "Surat", shop: "Mahalaxmi Garments", action: "received Khata UPI Payment", amount: "₹3,200", icon: "💰" },
    { city: "Jaipur", shop: "Vijay Mobile Care", action: "printed 3-inch thermal bill", amount: "₹890", icon: "🖨️" },
    { city: "Pune", shop: "Krishna Medical Store", action: "inwarded stock batch", amount: "45 Items", icon: "📦" },
    { city: "Indore", shop: "Patel Provision Store", action: "sent WhatsApp Khata reminder", amount: "₹4,750", icon: "📲" },
    { city: "Rajkot", shop: "Balaji Electronics", action: "completed 1-click GST report", amount: "100% Ready", icon: "⚡" },
  ];

  return (
    <div className="bg-slate-900 text-white border-y border-slate-800 py-3 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        {/* Live Indicator Pill */}
        <div className="shrink-0 flex items-center gap-2 bg-teal-950/80 border border-teal-500/40 text-teal-300 px-3 py-1 rounded-full text-xs font-bold tracking-tight">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span>LIVE SHOP PULSE</span>
        </div>

        {/* Scrolling Ticker Track */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex items-center gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap text-xs">
            {[...activities, ...activities].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 text-slate-300">
                <span>{item.icon}</span>
                <span className="font-bold text-white">{item.shop}</span>
                <span className="text-slate-400">({item.city})</span>
                <span className="text-slate-400">{item.action}</span>
                <span className="font-mono font-bold text-teal-400 bg-teal-950/50 px-1.5 py-0.5 rounded border border-teal-500/20">
                  {item.amount}
                </span>
                <span className="text-slate-600 font-black">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
