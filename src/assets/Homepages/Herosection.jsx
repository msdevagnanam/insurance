import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiSealPercentFill } from "react-icons/pi";

const Herosection = () => {
  return (
    <section className="w-full flex justify-center px-10 py-3 bg-white">
      <div
        className="
          relative w-full 
          rounded-[42px] border border-[#D9E5FF]
          bg-gradient-to-b from-[#E9F3FF] to-[#F8FBFF]
          px-10 pt-5 pb-39
          overflow-hidden
        "
      >
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[38px] md:text-[48px] font-bold leading-tight text-[#052044]">
            Compare and buy
            <br />
            insurance online,
            <span className="inline-block md:ml-2 mt-3 md:mt-0 align-middle">
              <span className="bg-[#156DFF] text-white px-5 py-2 rounded-2xl text-[30px] md:text-[34px] font-semibold shadow-md">
                instantly.
              </span>
            </span>
          </h1>
        </div>

        {/* Center area */}
        <div className="mt-10 relative h-[360px] md:h-[380px] flex justify-center">
          {/* Background geometric shape */}
          <img
            src="/images/hero-bg-img.png"
            alt="bg-shape"
            className="absolute inset-x-0 mx-auto -top-30 -left-40 w-[60%] md:w-[45%] pointer-events-none"
          />

          {/* Family image */}
          <img
            src="/images/Insurance-hero-img.png"
            alt="Happy insured family"
            className="absolute bottom-0 mx-auto inset-x-0 w-[55%] md:w-[40%] z-10 object-contain top-0"
          />

          {/* Top left mini card */}
          <div className="hidden md:flex absolute top-16 left-100 bg-white rounded-2xl shadow-md px-4 py-3 gap-2 items-center z-20">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center text-[#11A655] text-3xl">
              <PiSealPercentFill />
            </div>
            <div className="text-[11px] leading-tight text-[#052044]">
              <p className="font-semibold text-[16px]">Low Fees</p>
              <p className="text-gray-500">No Hidden Charges</p>
            </div>
          </div>

          {/* Top right mini card */}
          <div className="hidden md:flex absolute top-30 right-80 bg-white rounded-2xl shadow-md px-4 py-3 gap-2 items-center z-20">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center">
              <img src="/images/Frame.png" alt="policy" className="w-6  h-6" />
            </div>
            <div className="text-[11px] leading-tight text-[#052044]">
              <p className="font-semibold text-[16px]">20,000+</p>
              <p className="text-gray-500">Policy Options</p>
            </div>
          </div>

          {/* Bottom left card */}
          <div className="hidden md:flex absolute bottom-6 left-10 bg-white rounded-3xl shadow-md px-8 py-6 w-[400px] z-20">
            <div>
              <p className="text-[18px] text-gray-600 leading-relaxed">
                Find the best rates from{" "}
                <span className="font-semibold text-[#052044]">
                  Asia’s most trusted insurers
                </span>{" "}
                in seconds. No paperwork. No hassle.
              </p>

              <button className="mt-5 inline-flex items-center gap-2 bg-[#156DFF] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:bg-[#0a58d1] transition">
                Get a Quote
                <span className="flex h-6 w-6 rounded-full bg-white/20 items-center justify-center">
                  <FaArrowRight className="text-xs" />
                </span>
              </button>
            </div>
          </div>

          {/* Bottom right card */}
          <div className="hidden md:flex absolute bottom-6 right-10 bg-gradient-to-tr from-[#E7F0FF] to-[#F7FAFF] rounded-3xl shadow-md px-6 py-6 w-[320px] z-20">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-2xl flex items-center justify-center">
                <img src="/images/Hero-group.png" alt="group" className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[16px] text-[#052044] font-semibold">
                  Protect Your Loved Ones—
                </p>
                <p className="text-[16px] text-gray-600">
                  Fast, Simple, Trusted.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* subtle inner border */}
        <div className="pointer-events-none absolute inset-0 rounded-[42px] border border-white/30"></div>
      </div>
    </section>
  );
};

export default Herosection;
