// CustomerCall.jsx
import React from "react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";   // Feather icon
import { MdHeadsetMic } from "react-icons/md";   // Material icon



/**
 * Put your advisor image at: public/images/advisor.png
 * Install react-icons if you don't have it:
 *   npm install react-icons
 */

export default function CustomerCall() {
  return (
    <div className="px-10 py-3">
        <section className="px-23">
      <div className="relative rounded-2xl overflow-hidden bg-[#D8ECFF] border border-transparent">
        {/* Decorative geometric shapes (left + right) */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3 md:w-1/4 lg:w-1/5 -top-10"
        >
          {/* <svg
            viewBox="0 0 200 200"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <g transform="translate(0,0)" fill="none" stroke="#cfe8fb" strokeWidth="18">
              <path d="M20 180 L60 20 L140 20 L180 180" strokeLinecap="round" />
            </g>
          </svg> */}
          <img src="/images/hero-bg-img.png" alt="" />
        </div>

        <div
          aria-hidden
          className="absolute inset-y-0 right-10 -bottom-12 w-1/3 md:w-1/4 lg:w-1/5  flex items-end justify-end"
        >
          {/* <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="h-full w-full">
            <g transform="translate(0,0)" fill="none" stroke="#d6ecff" strokeWidth="18">
              <path d="M20 20 L60 180 L140 180 L180 20" strokeLinecap="round" />
            </g>
          </svg> */}
        <img src="/images/hero-bg-img.png" alt="" />
        </div>

        {/* Main content */}
        <div className=" text-center relative z-10  px-6 md:px-8 py-8 md:py-10 flex items-center gap-6">
          {/* Text block */}
          <div className="flex-1">
            <h2 className="text-center text-lg md:text-2xl font-semibold text-slate-800">
              Need insurance answers now?
            </h2>

            <p className="mt-2 text-sm md:text-base text-center flex items-center justify-center gap-2 text-slate-600">
              <a
                href="tel:1-777-550-7766"
                className="font-semibold text-center text-blue-600 hover:underline inline-flex items-center gap-2"
              >
                <FiPhone className="inline-block" />
                Call 1-777-550-7766
              </a>{" "}
              to speak to our licensed advisors right away, or book some time with them.
            </p>

            <div className="mt-4 md:mt-6  gap-4">
              <a
                href="#schedule"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-5 py-2.5 rounded-full shadow-md transition"
              >
                  

                <span className="text-sm md:text-base font-medium">Schedule Call</span><MdHeadsetMic size={20} />
              </a>

              {/* Optional small helper icon or badge */}
              {/* <span className="hidden md:inline-block text-xs text-slate-700 bg-white/60 px-3 py-1 rounded-full border">
                Speak with licensed advisors
              </span> */}
            </div>
          </div>

          {/* Advisor image (shows on md+) */}
          <div className=" absolute top-0 right-0">
            <img
              src="/images/advisor.png"
              alt="advisor"
              className="w-[350px] object-cover rounded-md drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
}
