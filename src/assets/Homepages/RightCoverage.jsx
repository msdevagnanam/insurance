// RightCoverage.jsx
import React from "react";
import {
  FaCarSide,
  FaLifeRing,
  FaShip,
  FaUserShield,
} from "react-icons/fa";
import {
  MdOutlineHomeWork,
  MdOutlineLocalHospital,
} from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { TbPlaneInflight } from "react-icons/tb";

/**
 * Put your images in /public/images and adjust the src:
 *  - /images/car-insurance.png
 *  - /images/property-insurance.png
 *  - /images/travel-insurance.png
 */

const RightCoverage = () => {
  return (
    <section className="bg-[#f5f7fb] py-12 px-4 md:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Small pill link */}
        <div className="flex justify-center">
          <button className="px-4 py-1 rounded-full bg-white shadow-sm text-xs font-medium text-blue-600 text-[16px] border border-blue-100">
            Find the Right Coverage for You
          </button>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center text-2xl md:text-3xl font-semibold text-slate-900">
          Philippines Most Trusted Insurance Marketplace
        </h2>

        {/* Grid */}
        <div className="grid gap-5">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1 - Motor Car Insurance (with image) */}
          <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
                {/* <FaCarSide className="text-xl" /> */}
                <img src="/images/motor-car.png" alt="motor-car" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Motor Car Insurance
              </h3>
              <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
                Ang car insurance ay proteksyon laban sa aksidente, nakawan, at sakuna.
                Bilang broker, tutulungan kitang makuha ang best coverage sa tamang
                presyo, kasama ang cashless repair, roadside assistance, at helpful
                add-ons.
              </p>
            </div>
            <div className="mt-4 rounded-xl overflow-hidden">
              <img
                src="/images/car-insurance.png"
                alt="Motor car"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>

          {/* 2 - Life Insurance */}
          <div className="grid grid-2 gap-5">

              <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
              {/* <FaLifeRing className="text-xl" /> */}
              <img src="/images/life.png" alt="life" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Life Insurance
            </h3>
            <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
              Protect your family&apos;s future with affordable life insurance.
            </p>
          </div>

          {/* 3 - Casualty Lines Insurance */}
          <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
              {/* <FaLifeRing className="text-xl" /> */}
              <img src="/images/casualty.png" alt="casualty" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Casualty Lines Insurance
            </h3>
            <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
              Casualty lines insurance protects you from unexpected liabilities.
            </p>
          </div>
          </div>
          

          {/* 4 - Property Insurance (with image) */}
          <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
                {/* <MdOutlineHomeWork className="text-xl" /> */}
                <img src="/images/property.png" alt="property" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Property Insurance
              </h3>
              <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
                Protect your property from unexpected risks. 
              </p>
            </div>
            <div className="mt-4 rounded-xl overflow-hidden">
              <img
                src="/images/property-insurance.png"
                alt="Property"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>

          
          
          {/* 5 - Financial Lines Insurance */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 ">
            <div className="bg-white col-span-1 rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
              {/* <RiShieldKeyholeLine className="text-xl" /> */}
              <img src="/images/financial.png" alt="financial" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Financial Lines Insurance
            </h3>
            <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
              Safeguard your business with financial lines insurance.
            </p>
          </div>
           {/* 6 - Travel Insurance */}
          <div className="flex flex-col mt-5 md:mt-0 md:flex-row md:align-center md:justify-center  bg-white col-span-2 rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6">
            <div className="">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
              {/* <RiShieldKeyholeLine className="text-xl" /> */}
              <img src="/images/travel-insurance.png" alt="travel-insurance" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
               Travel Insurance
            </h3>
            <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
             Travel with peace of mind! Travel insurance covers trip cancellations, medical emergencies, etc..
            </p>
            </div>
            <div className="mt-4 rounded-xl overflow-hidden">
              <img
                src="/images/Travel-bags.png"
                alt="Travel"
                className="w-[350px] sm:w-[400px] md:h-40 object-cover"
              />
            </div>
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 7 - Marine Insurance */}
           <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
                  {/* <FaShip className="text-xl" /> */}
                  <img src="/images/marine.png" alt="marine" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Marine Insurance
                </h3>
                <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
                  Protect your cargo and vessels with marine insurance.
                </p>
              </div>

              {/* 8 - Personal Accident Insurance */}
              <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
                  {/* <FaUserShield className="text-xl" /> */}
                  <img src="/images/personal-accident.png" alt="personal-accident" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Personal Accident Insurance
                </h3>
                <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
                  Personal accident insurance provides financial support for injuries,
                  disabilities, and more.
                </p>
              </div>

              {/* 9 - Medical Insurance */}
              <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.05)] border border-gray-100 p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
                  {/* <MdOutlineLocalHospital className="text-xl" /> */}
                  <img src="/images/medical.png" alt="medical" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Medical Insurance
                </h3>
                <p className="mt-2 text-sm text-[16px] text-slate-600 leading-relaxed">
                  Medical insurance covers unexpected medical expenses, ensuring you
                  and your family are protected.
                </p>
              </div>
            </div>
        </div>

        
      </div>
    </section>
  );
};

export default RightCoverage;
