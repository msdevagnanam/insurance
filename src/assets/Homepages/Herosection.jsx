import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiSealPercentFill } from "react-icons/pi";

const Herosection = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 py-3 bg-white">
      <div
        className="
          relative w-full rounded-xl
          sm:rounded-[28px] border border-[#D9E5FF]
          bg-gradient-to-b from-[#E9F3FF] to-[#F8FBFF]
          px-2 py-2 sm:px-10 md:px-12 lg:px-16 lg:py-6 lg:pb-8
          overflow-hidden
        "
      >
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[24px] sm:text-[34px] md:text-[40px] lg:text-[48px] font-bold leading-tight text-[#052044]">
            Compare and buy
            <br />
            insurance online,
            <span className="inline-block md:ml-2 mt-3 md:mt-0 align-middle">
              <span className="bg-[#156DFF] flex items-center justify-center text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-2xl text-[20px] sm:text-[24px] md:text-[30px] lg:text-[34px] font-semibold shadow-md">
                instantly.
              </span>
            </span>
          </h1>
        </div>

        {/* Center area */}
        <div className="mt-8 md:mt-10 relative flex justify-center items-center">
          {/* Background geometric shape (positioning changes by breakpoint) */}
          <img
            src="/images/hero-bg-img.png"
            alt="bg-shape"
            className="pointer-events-none absolute -top-8 sm:-top-12 md:-top-20 lg:-top-15 left-1/2 transform -translate-x-2/3 w-[80%] sm:w-[70%] md:w-[55%] lg:w-[40%] opacity-80"
          />

          {/* Family image - on mobile show centered block, on desktop keep absolute */}
          <img
            src="/images/Insurance-hero-img.png"
            alt="Happy insured family"
            className="relative z-10 object-contain w-[90%]  max-w-[360px] sm:w-[75%] md:w-[60%] lg:w-[45%] max-h-[440px] lg:max-w-[440px] lg:top-15"
            style={{ translate: "0" }}
          />

          {/* Top-left mini card (desktop only) */}
          <div className="hidden md:flex absolute top-22 left-90 border-b-[0.94px] border-solid border-b-[rgba(255,255,255,0.6)] bg-gradient-to-b from-white to-white/0 p-4 rounded-md shadow-md px-4 py-3 gap-3 items-center z-20">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center text-[#11A655] text-2xl">
              <PiSealPercentFill />
            </div>
            <div className="text-[11px] leading-tight text-[#052044]">
              <p className="font-semibold text-[14px]">Low Fees</p>
              <p className="text-[#1E293B] text-xs font-medium">No Hidden Charges</p>
            </div>
          </div>

          {/* Top-right mini card (desktop only) */}
          <div className="hidden md:flex absolute top-30 right-85 border-b-[0.94px] border-solid border-b-[rgba(255,255,255,0.6)] bg-gradient-to-b from-white to-white/0 rounded-md shadow-md px-4 py-3 gap-3 items-center z-20">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center">
              <img src="/images/Frame.png" alt="policy" className="w-6 h-6" />
            </div>
            <div className="text-[11px] leading-tight text-[#052044]">
              <p className="font-semibold text-[14px]">20,000+</p>
              <p className="text-[#1E293B] text-xs font-medium">Policy Options</p>
            </div>
          </div>

          {/* Bottom-left card (desktop only) */}
          <div className="hidden lg:flex absolute -bottom-8 left-20 bg-gradient-to-b from-white to-white/0 rounded-md shadow-md px-8 py-6 w-[360px] z-20">
            <div>
              <p className="text-[15px] md:text-[16px] text-[#1E293B] font-medium leading-relaxed">
                Find the best rates from{" "}
                <span className="font-medium text-[#1E293B]">Asia’s most trusted insurers</span>{" "}
                in seconds. No paperwork. No hassle.
              </p>

              <button className="mt-4 md:mt-5 inline-flex items-center gap-2 bg-[#156DFF] text-white text-sm md:text-[15px] font-semibold px-4 md:px-5 py-2 rounded-full shadow-md hover:bg-[#0a58d1] transition">
                Get a Quote
                <span className="flex h-6 w-6 rounded-full bg-white/20 items-center justify-center">
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </div>
          </div>

          {/* Bottom-right card (desktop only) */}
          <div className="hidden lg:flex absolute bottom-0 right-35 bg-[linear-gradient(180deg,#E1EBFF_0%,rgba(255,255,255,0)_100%)] rounded-md shadow-md px-6 py-5 w-[320px] z-20">
            <div className="flex flex-col items-start gap-3 " >
              <div className="h-20 w-20 rounded-2xl flex items-center justify-center">
                <img src="/images/Hero-group.png" alt="group" className="w-16 h-16" />
              </div>
              <div>
                <p className="text-[14px] md:text-[16px] text-[#1E293B] font-medium">
                  Protect Your Loved Ones—
                </p>
                <p className="text-[13px] md:text-[15px] text-[#1E293B] font-medium">Fast, Simple, Trusted.</p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET: stacked small cards under the image */}
        <div className="mt-6 md:hidden space-y-4">
          <div className="bg-white rounded-xl shadow px-4 py-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center text-[#11A655] text-2xl">
              <PiSealPercentFill />
            </div>
            <div>
              <p className="font-medium text-sm text-[#1E293B]">Low Fees</p>
              <p className="text-xs text-[#1E293B] font-medium">No Hidden Charges</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow px-4 py-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center">
              <img src="/images/Frame.png" alt="policy" className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-sm text-[#1E293B]">20,000+</p>
              <p className="text-xs text-[#1E293B] font-medium">Policy Options</p>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-[#E7F0FF] to-[#F7FAFF] rounded-xl shadow px-4 py-4 flex items-start gap-3">
            <div className="h-10 w-10 rounded-2xl flex items-center justify-center bg-white/40">
              <img src="/images/Hero-group.png" alt="group" className="w-8 h-8" />
            </div>
            <div>
              <p className="font-medium text-sm text-[#1E293B]">Protect Your Loved Ones—</p>
              <p className="text-xs text-[#1E293B] font-medium">Fast, Simple, Trusted.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow px-4 py-3">
            <p className="text-sm text-[#1E293B] font-medium">
              Find the best rates from <span className="font-medium text-[#1E293B]">Asia’s most trusted insurers</span> in seconds. No paperwork. No hassle.
            </p>
            <div className="mt-3">
              <button className="inline-flex items-center gap-2 bg-[#156DFF] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#0a58d1] transition">
                Get a Quote
                <span className="flex h-6 w-6 rounded-full bg-white/20 items-center justify-center">
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* subtle inner border */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/30"></div>
      </div>
    </section>
  );
};

export default Herosection;
