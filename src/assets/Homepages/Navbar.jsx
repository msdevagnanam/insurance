import { FaChevronDown, FaUser } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full shadow-sm py-3 px-10 flex items-center justify-between bg-white relative">
      {/* Logo */}
      <img
        src="/images/Insurance-Logo.png"
        alt="Unicon Logo"
        className="w-36 cursor-pointer"
      />

      {/* Menu */}
      <ul className="flex items-center gap-10 text-[15px] font-medium text-gray-700">

        {/* Insurance Products */}
        <li className="relative group flex items-center gap-3 cursor-pointer hover:text-gray-500">
          Insurance Products <FaChevronDown className="group-hover:rotate-180 transition-transform duration-200 ease-in-out text-blue-600" size={15} />

          <ul
            className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-lg w-56 py-2 z-50
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out text-gray-700"
          >
            <li>
              <Link to="/health-insurance" className="block px-5 py-2 hover:bg-gray-100">
                Health Insurance
              </Link>
            </li>
            <li>
              <Link to="/car-insurance" className="block px-5 py-2 hover:bg-gray-100">
                Car Insurance
              </Link>
            </li>
            <li>
              <Link to="/travel-insurance" className="block px-5 py-2 hover:bg-gray-100">
                Travel Insurance
              </Link>
            </li>
          </ul>
        </li>

        {/* Renew */}
        <li className="relative group flex items-center gap-3 cursor-pointer hover:text-gray-500">
          Renew Your Policy <FaChevronDown className="group-hover:rotate-180 transition-transform duration-200 ease-in-out  text-blue-600" size={15} />

          <ul
            className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-lg w-56 py-2 z-50
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out text-gray-700"
          >
            <li>
              <Link to="/renew/health" className="block px-5 py-2 hover:bg-gray-100">
                Health Policy
              </Link>
            </li>
            <li>
              <Link to="/renew/car" className="block px-5 py-2 hover:bg-gray-100">
                Car Policy
              </Link>
            </li>
          </ul>
        </li>

        {/* Claim */}
        <li className="relative group flex items-center gap-3 cursor-pointer hover:text-gray-500">
          Claim <FaChevronDown className="group-hover:rotate-180 transition-transform duration-200 ease-in-out  text-blue-600" size={15} />

          <ul
            className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-lg w-56 py-2 z-50
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out text-gray-700"
          >
            <li>
              <Link to="/claim/register" className="block px-5 py-2 hover:bg-gray-100">
                Register Claim
              </Link>
            </li>
            <li>
              <Link to="/claim/track" className="block px-5 py-2 hover:bg-gray-100">
                Track Claim Status
              </Link>
            </li>
          </ul>
        </li>

        {/* Support */}
        <li className="relative group flex items-center gap-3 cursor-pointer hover:text-gray-500">
          Support <FaChevronDown className="group-hover:rotate-180 transition-transform duration-200 ease-in-out  text-blue-600" size={15} />

          <ul
            className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-lg w-56 py-2 z-50
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out text-gray-700"    
          >
            <li>
              <Link to="/support/customer-care" className="block px-5 py-2 hover:bg-gray-100">
                Customer Care
              </Link>
            </li>
            <li>
              <Link to="/support/faqs" className="block px-5 py-2 hover:bg-gray-100">
                FAQs
              </Link>
            </li>
          </ul>
        </li>

        {/* Language */}
        <li className="relative group flex items-center gap-3 cursor-pointer hover:text-gray-500">
          Filipino <MdSupportAgent className="text-blue-600" size={15} />

          <ul
            className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-lg w-40 py-2 z-50
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out text-gray-700"
          >
            <li>
              <button className="block w-full text-left px-5 py-2 hover:bg-gray-100">
                Filipino
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-5 py-2 hover:bg-gray-100">
                English
              </button>
            </li>
          </ul>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/expert-guidance"
          className="bg-[#1E65FF] text-white border border-[#1E65FF] px-6 py-2 rounded-full text-[15px] font-medium flex items-center gap-2 hover:bg-[#0d4de5] hover:text-[#1E65FF] hover:bg-white transition-all duration-300 ease-in-out"
        >
          Get Expert Guidance <FaUser size={14} />
        </Link>
        <Link
          to="/login"
          className="bg-[#1E65FF] text-white border border-[#1E65FF] text-[#1E65FF] px-6 py-2 rounded-full text-[15px] font-medium hover:text-[#1E65FF] hover:bg-white transition-all duration-300 ease-in-out"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
