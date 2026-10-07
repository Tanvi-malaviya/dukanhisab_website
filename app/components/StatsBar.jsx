"use client";

import React from "react";
import { UsersIcon, StarIcon, ShieldCheckIcon, HeartIcon } from "./Icons";

export default function StatsBar({
  stats = [
    { value: "50,000+", label: "Happy Shopkeepers", icon: UsersIcon, color: "text-teal-700 bg-teal-100" },
    { value: "4.8 ★", label: "App Rating", icon: StarIcon, color: "text-amber-600 bg-amber-100" },
    { value: "500+", label: "Used in Cities", icon: ShieldCheckIcon, color: "text-teal-700 bg-teal-100" },
    { value: "100%", label: "Trusted Across India", icon: HeartIcon, color: "text-rose-600 bg-rose-100" },
  ]
}) {
  return (
    <section className="py-6 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {stats.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className={`w-11 h-11 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
