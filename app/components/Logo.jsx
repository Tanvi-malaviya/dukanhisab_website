"use client";

import React from "react";
import Link from "next/link";

export default function Logo({ size = "normal" }) {
  const isSmall = size === "sm";

  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      {/* Brand Icon: Green chart bars */}
      <div className="flex items-end gap-1 h-8 px-1">
        <span className="w-2 h-4 bg-teal-600 rounded-xs group-hover:h-5 transition-all"></span>
        <span className="w-2 h-6 bg-teal-700 rounded-xs group-hover:h-7 transition-all"></span>
        <span className="w-2 h-8 bg-teal-500 rounded-xs group-hover:h-8 transition-all"></span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center leading-none">
          <span className={`font-black tracking-tight text-slate-900 ${isSmall ? "text-lg" : "text-2xl"}`}>
            Dukan<span className="text-slate-900">Hisab</span>
          </span>
        </div>
        <span className={`font-medium text-slate-500 tracking-tight leading-tight mt-0.5 ${isSmall ? "text-[9px]" : "text-[10px]"}`}>
          Apni Dukaan Ka Hisab, Ab Ek App Mein
        </span>
      </div>
    </Link>
  );
}
