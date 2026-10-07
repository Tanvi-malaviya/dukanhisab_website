"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CheckIcon, RupeeIcon, BarcodeIcon, SparklesIcon } from "./Icons";

export default function Hero3DVisual() {
  const containerRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scannedItemCount, setScannedItemCount] = useState(3);
  const [isScanning, setIsScanning] = useState(false);
  const [recentNotification, setRecentNotification] = useState({
    title: "Bill #4029 Created",
    amount: "₹1,480",
    time: "Just now",
  });

  // Mouse move 3D tilt calculation
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-10 to +10 degrees)
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  // Demo scan micro-interaction
  const handleSimulateScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setTimeout(() => {
      setScannedItemCount((prev) => prev + 1);
      const items = [
        { title: "Basmati Rice 5kg Added", amount: "₹450" },
        { title: "Fortune Sunlite Oil 1L", amount: "₹165" },
        { title: "Tata Tea Gold 500g", amount: "₹280" },
        { title: "Amul Butter 500g", amount: "₹275" },
      ];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setRecentNotification({
        title: randomItem.title,
        amount: randomItem.amount,
        time: "Just now",
      });
      setIsScanning(false);
    }, 700);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center w-full max-w-lg mx-auto select-none perspective-[1000px] py-4"
    >
      {/* 3D Tilted Wrapper */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
        className="relative w-full flex items-end justify-center transform-style-3d"
      >
        {/* Glow ambient circle behind mockup */}
        <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 via-teal-300/25 to-teal-500/20 rounded-[40px] blur-2xl -z-10 animate-pulse" />

        {/* Floating Tag Top-Left: "Chhota Business Badi Soch" */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute -top-3 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md border border-teal-200/80 px-4 py-2 rounded-2xl shadow-xl shadow-teal-900/10 flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex items-center justify-center font-black text-xs shadow-md">
            ₹
          </div>
          <div>
            <div className="text-[11px] font-extrabold text-teal-800 leading-tight">
              Chhota Business, Badi Soch! 🚀
            </div>
            <div className="text-[10px] text-slate-500 font-medium">
              Made with ❤️ for Bharat
            </div>
          </div>
        </div>

        {/* Floating Holographic Badge Top-Right: Live Activity */}
        <div
          style={{ transform: "translateZ(45px)" }}
          className="absolute top-10 -right-2 sm:-right-6 z-30 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-float-slow"
        >
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-teal-400 font-bold">
              Live Counter Sync
            </div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>{recentNotification.title}</span>
              <span className="text-teal-300 font-mono">({recentNotification.amount})</span>
            </div>
          </div>
        </div>

        {/* Floating Badge Bottom-Left: Offline Ready */}
        <div
          style={{ transform: "translateZ(35px)" }}
          className="absolute bottom-6 -left-3 sm:-left-8 z-30 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2.5 animate-float-delayed"
        >
          <div className="w-7 h-7 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-black text-xs">
            📶
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900">
              100% Offline Billing
            </div>
            <div className="text-[10px] text-teal-600 font-semibold flex items-center gap-1">
              <CheckIcon className="w-3 h-3 stroke-[3]" />
              <span>No Internet Needed</span>
            </div>
          </div>
        </div>

        {/* Main Combined Shopkeeper + Phone Frame */}
        <div className="relative flex items-end justify-center w-full">
          {/* Shopkeeper Image */}
          <div
            style={{ transform: "translateZ(15px)" }}
            className="relative w-64 sm:w-76 h-auto z-10 transition-transform"
          >
            <Image
              src="/images/shopkeeper-man.png"
              alt="Confident Indian Shopkeeper using DukanHisab"
              width={340}
              height={320}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Interactive Phone Mockup with 3D Overhang */}
          <div
            style={{ transform: "translateZ(50px)" }}
            className="relative -ml-16 sm:-ml-20 mb-3 w-44 sm:w-56 z-20 group cursor-pointer"
            onClick={handleSimulateScan}
            title="Click to simulate a real-time barcode scan!"
          >
            {/* Phone Body with Rim Glow */}
            <div className="relative rounded-[32px] p-1 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl ring-1 ring-white/20 transition-all hover:scale-[1.03]">
              {/* Screen Content */}
              <div className="relative rounded-[28px] overflow-hidden bg-white">
                <Image
                  src="/images/phone-home-hero.png"
                  alt="DukanHisab Mobile App Screen"
                  width={220}
                  height={360}
                  priority
                  className="w-full h-auto object-contain block"
                />

                {/* Laser Barcode Scan Beam Effect when triggered */}
                {isScanning && (
                  <div className="absolute inset-0 bg-teal-500/10 pointer-events-none z-30">
                    <div className="w-full h-1 bg-teal-400 shadow-[0_0_12px_#14b8a6] animate-laser absolute left-0" />
                  </div>
                )}

                {/* Interactive Click-to-Scan Floating Button */}
                <div className="absolute bottom-3 left-2 right-2 z-30">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSimulateScan();
                    }}
                    className={`w-full py-2 px-3 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all shadow-md ${
                      isScanning
                        ? "bg-slate-900 text-teal-400 scale-95"
                        : "bg-teal-600 hover:bg-teal-700 text-white active:scale-95"
                    }`}
                  >
                    <BarcodeIcon className="w-3.5 h-3.5" />
                    <span>{isScanning ? "Scanning..." : "Tap to Scan Item ⚡"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Micro Badge Under Phone */}
            <div className="text-center mt-2">
              <span className="inline-block text-[10px] font-bold text-slate-500 bg-white/80 border border-slate-200/80 px-2.5 py-0.5 rounded-full shadow-xs">
                👆 Click phone to test live scan
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
