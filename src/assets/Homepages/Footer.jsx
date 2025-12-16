// src/components/Footer.jsx
import React from "react";
import { FiPlus } from "react-icons/fi";

/**
 * Footer.jsx
 * Tailwind + React footer matching the provided design.
 *
 * Usage: import Footer from './components/Footer' then <Footer />
 *
 * Note: put your real logo image in /public/images/logo-white.svg (or change the src).
 * Install react-icons if not already: npm install react-icons
 */

export default function Footer() {
  return (
    <footer className="bg-[#00355E] text-slate-100 px-4 sm:px-6 lg:px-10 py-3">
      <div className="max-w-7xl mx-auto md:px-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Logo / brand (left-most column) */}
          <div className="md:col-span-1 flex items-start">
            <div className="w-full">
              {/* Replace src with your white logo */}
              <img
                src="/images/Footer-Ins-Logo.png"
                alt="Unicon"
                className=""
              />
              {/* optional short tagline / blank to match screenshot */}
            </div>
          </div>

          {/* Column 1 */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-medium text-[#FFFFFF] mb-4 lg:text-base">Insurance Products</h4>
            <ul className="space-y-3 text-sm text-[#FFFFFF]">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full border border-slate-300/30">
                  <FiPlus className="text-slate-100 text-[14px]" />
                </span>
                <a href="#" className="hover:underline text-[#FFFFFF] font-light lg:text-base">General Insurance</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full border border-slate-300/30">
                  <FiPlus className="text-slate-100 text-[14px]" />
                </span>
                <a href="#" className="hover:underline text-[#FFFFFF] font-light lg:text-base">Life Insurance</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full border border-slate-300/30">
                  <FiPlus className="text-slate-100 text-[14px]" />
                </span>
                <a href="#" className="hover:underline text-[#FFFFFF] font-light lg:text-base">Term Insurance</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full border border-slate-300/30">
                  <FiPlus className="text-slate-100 text-[14px]" />
                </span>
                <a href="#" className="hover:underline text-[#FFFFFF] font-light lg:text-base">Other Insurance</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-medium text-slate-100 mb-4 lg:text-base">Renew Your Policy</h4>
            <ul className="space-y-3 text-sm text-[#FFFFFF] font-light lg:text-base">
              <li><a href="#" className="hover:underline">Term Life Renewal</a></li>
              <li><a href="#" className="hover:underline">Investment Renewal</a></li>
              <li><a href="#" className="hover:underline">Health Renewal</a></li>
              <li><a href="#" className="hover:underline">Motor Renewal</a></li>
              <li><a href="#" className="hover:underline">Home Insurance Renewal</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-medium text-slate-100 mb-4 lg:text-base">Claim</h4>
            <ul className="space-y-3 text-sm text-[#FFFFFF] font-light lg:text-base">
              <li><a href="#" className="hover:underline">File a new claim</a></li>
              <li><a href="#" className="hover:underline">Track existing claim</a></li>
            </ul>
          </div>

          {/* Column 4 (Support) */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-medium text-slate-100 mb-4 lg:text-base">Support</h4>
            <ul className="space-y-3 text-sm text-[#FFFFFF] font-light lg:text-base">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* copyright bar */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
          <p className="text-center text-xs text-[#FFFFFF] font-light text-[14px] lg:text-base">
            © 2025 Unicon Insurance Brokers Corp. | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
