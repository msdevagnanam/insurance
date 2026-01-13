import React from "react";
import { FaSearch, FaCalendarAlt, FaUserPlus, FaChevronRight } from "react-icons/fa";
import { FaChevronDown, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function TravelInsuranceHero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#E0F2FE] to-white px-4 sm:px-6 lg:px-10 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* ===== HERO HEADING ===== */}
        <div className="hidden lg:block relative text-center mb-20 py-0">
            <div className="flex lg:flex-row items-center justify-center gap-10">
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
                     Explore the <span className="text-[#2563FF]">world</span></h1>
                </div>
            <div className="hidden lg:block">
                <img
                    src="/images/travel-suitcase.png"
                    alt="Suitcase"
                    className="w-60 "
                /> 
            </div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
                 totally worry{" "}
            <span className="text-[#2563FF]">free!</span>
            </h1>
          </div>
            
          
            </div>

          {/* suitcase */}
          <img
            src="/images/travel-city.png"
            alt="Suitcase"
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-25 w-1/2 z-0"
          />
        </div>

        {/* Mobile view hero heading */}
        <div className="block lg:hidden  text-center mb-20 ">
            <img
                    src="/images/travel-suitcase.png"
                    alt="Suitcase"
                    className="w-60  mx-auto"
                /> 
            <div className="relative">
                    <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2A44] leading-tight">
                     Explore the <span className="text-[#2563FF]">world </span>totally worry{" "}
            <span className="text-[#2563FF]">free!</span></h1>
            
            
            </div>

          {/* suitcase */}
          <img
            src="/images/travel-city.png"
            alt="Suitcase"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:top-1/3 z-0"
            // className="block lg:hidden absolute left-1/2 -translate-x-1/2 top-50 w-1/2 z-0"
          />
        </div>

        {/* ===== SEARCH CARD ===== */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto p-6 space-y-6">

          {/* destination */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3 text-center text-lg">
              Where are you travelling?
            </h3>

            <div className="flex items-center gap-3 border border-blue-300 rounded-xl px-4 py-3">
              <FaSearch className="text-gray-400" />
              <input 
                type="text"
                placeholder="Where are you travelling?"
                className="w-full outline-none text-sm text-black placeholder:text-gray-400 placeholder:font-normal"
              />
            </div>

            <p className="text-medium text-black font-normal mt-3 text-center">
              Popular countries <br />
              <span className="text-[11px]">(you can select multiple countries)</span>
            </p>

            {/* countries */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {[
                { name: "Schengen", img: "schengen.png" },
                { name: "USA", img: "usa.png" },
                { name: "UK", img: "uk.png" },
                { name: "Germany", img: "germany.png" },
                { name: "France", img: "france.png" },
                { name: "Thailand", img: "thailand.png" },
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center text-xs">
                  <img
                    src={`/images/${c.img}`}
                    alt={c.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <span className="mt-2 text-medium text-[#1E293B]-400 font-normal">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
              <FaCalendarAlt className="text-blue-500" />
              <input type="date" className="w-full outline-none font-semibold text-sm placeholder:text-gray-800 text-normal" placeholder="Select Date" />
            </div>

            <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
              <FaCalendarAlt className="text-blue-500" />
              <input type="date" className="w-full outline-none font-semibold text-sm placeholder:text-gray-800 text-normal" placeholder="Select Date" />
            </div>
          </div>

          {/* travellers */}
          <div className="flex items-center justify-between border rounded-xl px-4 py-3">
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <FaUserPlus className="text-blue-500" size={20} />
              0 Traveller(s)
            </div>
            <button className="text-blue-600  text-sm font-medium">
              + Add travellers
            </button>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="flex items-center gap-2 bg-[#2563FF] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1747e0] transition">
              View Plan <FaChevronRight />
            </button>
          </div>
        </div>

        {/* ===== COVERAGE SECTION ===== */}
        <div className="mt-14 lg:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* left text */}
          <div>
            <h3 className="font-semibold text-lg mb-4 lg:mb-10">
              What does Travel Insurance cover?
            </h3>

            <ul className="space-y-3 font-normal text-sm text-gray-700 ">
              <li className="lg:mb-10">✅ Medical and accidental coverage</li>
              <li className="lg:mb-10">🧳 Trip cancellation and delays</li>
              <li className="lg:mb-10">🎒 Loss of baggage</li>
              <li className="lg:mb-10">📄 Loss of passport and personal belongings & more</li>
            </ul>
          </div>

          {/* right image */}
          <div className="relative">
            <span className="absolute top-2 right-2 text-xs bg-white px-2 py-1 rounded-xl font-normal shadow border-[#2563FF] border">
              Advertisement
            </span>
            <video
              src="/videos/airport-ad.mp4"
              alt="airport"
              className="rounded-xl shadow-md w-full"
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-md p-2 flex items-center justify-between mt-10">
            <h4 className="font-normal">*Disclaimer</h4>
            <p><FaChevronDown
                                className="transition-transform duration-200 group-hover:rotate-180 text-blue-600"
                                size={15}
                              /></p>
        </div>
      </div>
    </section>
  );
}
