import React, { useState } from "react";
import { FaChevronDown, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); // 'products' | 'renew' | 'claim' | 'support' | 'lang' | null

  const toggleMobile = () => {
    setMobileOpen((s) => !s);
    if (mobileOpen) setMobileDropdown(null);
  };

  const toggleMobileDropdown = (key) => {
    setMobileDropdown((prev) => (prev === key ? null : key));
  };

  // small helper to render dropdown links (keeps markup DRY)
  const DropdownLinks = ({ links = [] }) => (
    <ul className="text-gray-700">
      {links.map((l, idx) => (
        <li key={idx}>
          {l.to ? (
            <Link
              to={l.to}
              className="block px-5 py-2 hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ) : (
            <button
              className="w-full text-left px-5 py-2 hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </button>
          )}
        </li>
      ))}
    </ul>
  );

  // link lists
  const products = [
    { label: "Health Insurance", to: "/health-insurance" },
    { label: "Motor Car Insurance", to: "/car-insurance" },
    { label: "Property Insurance", to: "/property-insurance" },
    { label: "Medical Insurance", to: "/medical-insurance" },
    { label: "Life Insurance", to: "/life-insurance" },
    { label: "Personal Accident", to: "/personal-accident" },
    { label: "Casualty Lines Insurance", to: "/casualty" },
    { label: "Suretyship", to: "/suretyship" },
    { label: "Financial Lines", to: "/financial-lines" },
    { label: "Engineering Insurance", to: "/engineering" },
    { label: "Speciality Lines", to: "/speciality" },
    { label: "Marine Insurance", to: "/marine" },
  ];

  const renewLinks = [
    { label: "Term Life Renewal", to: "/renew/term-life" },
    { label: "Investment Renewal", to: "/renew/investment" },
    { label: "Health Renewal", to: "/renew/health" },
    { label: "Motor Renewal", to: "/renew/motor" },
    { label: "Home Insurance Renewal", to: "/renew/home" },
  ];

  const claimLinks = [
    { label: "Register Claim", to: "/claim/register" },
    { label: "Track Claim Status", to: "/claim/track" },
  ];

  const supportLinks = [
    { label: "Customer Care", to: "/support/customer-care" },
    { label: "FAQs", to: "/support/faqs" },
  ];

  const langLinks = [
    { label: "Filipino" },
    { label: "English" },
  ];

  return (
    <nav className="lg:px-10 px-3 py-3 bg-white relative">
      <div className="max-w-8xl mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/images/Insurance-Logo.png" alt="Unicon Logo" className="w-36" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-700">
              {/* Insurance Products - hover dropdown */}
              <li className="relative group">
                <div className="flex items-center gap-3 cursor-pointer select-none">
                  <span>Insurance Products</span>
                  <FaChevronDown
                    className="transition-transform duration-200 group-hover:rotate-180 text-blue-600"
                    size={15}
                  />
                </div>

                <div className="absolute left-0 top-full mt-3 hidden group-hover:block w-64 bg-white shadow-md rounded-lg py-3 z-50">
                  <DropdownLinks links={products} />
                </div>
              </li>

              {/* Renew */}
              <li className="relative group">
                <div className="flex items-center gap-3 cursor-pointer select-none">
                  <span>Renew Your Policy</span>
                  <FaChevronDown
                    className="transition-transform duration-200 group-hover:rotate-180 text-blue-600"
                    size={15}
                  />
                </div>

                <div className="absolute left-0 top-full mt-3 hidden group-hover:block w-56 bg-white shadow-md rounded-lg py-3 z-50">
                  <DropdownLinks links={renewLinks} />
                </div>
              </li>

              {/* Claim */}
              <li className="relative group">
                <div className="flex items-center gap-3 cursor-pointer select-none">
                  <span>Claim</span>
                  <FaChevronDown
                    className="transition-transform duration-200 group-hover:rotate-180 text-blue-600"
                    size={15}
                  />
                </div>

                <div className="absolute left-0 top-full mt-3 hidden group-hover:block w-56 bg-white shadow-md rounded-lg py-3 z-50">
                  <DropdownLinks links={claimLinks} />
                </div>
              </li>

              {/* Support */}
              <li className="relative group">
                <div className="flex items-center gap-3 cursor-pointer select-none">
                  <span>Support</span>
                  <FaChevronDown
                    className="transition-transform duration-200 group-hover:rotate-180 text-blue-600"
                    size={15}
                  />
                </div>

                <div className="absolute left-0 top-full mt-3 hidden group-hover:block w-56 bg-white shadow-md rounded-lg py-3 z-50">
                  <DropdownLinks links={supportLinks} />
                </div>
              </li>

              {/* Language */}
              <li className="relative group">
                <div className="flex items-center gap-2 cursor-pointer select-none">
                  <span>Filipino</span>
                  <MdSupportAgent className="text-blue-600" size={16} />
                </div>

                <div className="absolute left-0 top-full mt-3 hidden group-hover:block w-40 bg-white shadow-md rounded-lg py-2 z-50">
                  <DropdownLinks links={langLinks} />
                </div>
              </li>
            </ul>
          </div>

          {/* Action buttons (desktop) */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link
              to="/expert-guidance"
              className="bg-[#1E65FF] text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#0d4de5] transition"
            >
              Get Expert Guidance <FaUser size={14} />
            </Link>

            <Link
              to="/login"
              className="border border-[#1E65FF] text-[#1E65FF] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#1E65FF] hover:text-white transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden transition-max-height duration-300 ease-in-out overflow-hidden bg-white ${
          mobileOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6">
          {/* mobile buttons */}
          <div className="flex flex-col gap-3 mb-4">
            <Link
              to="/expert-guidance"
              className="w-full text-center bg-[#1E65FF] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              Get Expert Guidance <FaUser size={14} />
            </Link>

            <Link
              to="/login"
              className="w-full text-center border border-[#1E65FF] text-[#1E65FF] px-4 py-2 rounded-full text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
          </div>

          {/* mobile menu items */}
          <ul className="space-y-2 text-gray-800 font-medium">
            {/* Insurance Products */}
            <li>
              <button
                onClick={() => toggleMobileDropdown("products")}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-50"
                aria-expanded={mobileDropdown === "products"}
              >
                <span>Insurance Products</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    mobileDropdown === "products" ? "rotate-180" : ""
                  } text-blue-600`}
                />
              </button>

              {mobileDropdown === "products" && (
                <div className="mt-1 bg-white rounded-md shadow-inner">
                  <DropdownLinks links={products} />
                </div>
              )}
            </li>

            {/* Renew */}
            <li>
              <button
                onClick={() => toggleMobileDropdown("renew")}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-50"
                aria-expanded={mobileDropdown === "renew"}
              >
                <span>Renew Your Policy</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    mobileDropdown === "renew" ? "rotate-180" : ""
                  } text-blue-600`}
                />
              </button>

              {mobileDropdown === "renew" && (
                <div className="mt-1 bg-white rounded-md shadow-inner">
                  <DropdownLinks links={renewLinks} />
                </div>
              )}
            </li>

            {/* Claim */}
            <li>
              <button
                onClick={() => toggleMobileDropdown("claim")}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-50"
                aria-expanded={mobileDropdown === "claim"}
              >
                <span>Claim</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    mobileDropdown === "claim" ? "rotate-180" : ""
                  } text-blue-600`}
                />
              </button>

              {mobileDropdown === "claim" && (
                <div className="mt-1 bg-white rounded-md shadow-inner">
                  <DropdownLinks links={claimLinks} />
                </div>
              )}
            </li>

            {/* Support */}
            <li>
              <button
                onClick={() => toggleMobileDropdown("support")}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-50"
                aria-expanded={mobileDropdown === "support"}
              >
                <span>Support</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    mobileDropdown === "support" ? "rotate-180" : ""
                  } text-blue-600`}
                />
              </button>

              {mobileDropdown === "support" && (
                <div className="mt-1 bg-white rounded-md shadow-inner">
                  <DropdownLinks links={supportLinks} />
                </div>
              )}
            </li>

            {/* Language */}
            <li>
              <button
                onClick={() => toggleMobileDropdown("lang")}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-50"
                aria-expanded={mobileDropdown === "lang"}
              >
                <span>Filipino</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    mobileDropdown === "lang" ? "rotate-180" : ""
                  } text-blue-600`}
                />
              </button>

              {mobileDropdown === "lang" && (
                <div className="mt-1 bg-white rounded-md shadow-inner">
                  <DropdownLinks links={langLinks} />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
