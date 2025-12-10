// RightCoverage.jsx
import React from "react";
import {
  FaCarSide,
  FaHeartbeat,
  FaShip,
  FaPlaneDeparture,
  FaUserShield,
  FaHandHoldingMedical,
  FaHome,
  FaMoneyCheckAlt,
  FaRegLifeRing,
} from "react-icons/fa";

const insuranceItems = [
  {
    title: "Motor Car Insurance",
    description:
      "Ang car insurance ay proteksyon laban sa aksidente, nakawan, at sakuna. Bilang broker, tutulungan kitang makakuha ng best coverage sa tamang presyo, kasama ang cashless repair, roadside assistance, at helpful add-ons.",
    icon: <FaCarSide className="text-blue-600 text-2xl" />,
    image: "/images/car.png", // Add to public/images/
  },
  {
    title: "Life Insurance",
    description: "Protect your family’s future with affordable life insurance.",
    icon: <FaHeartbeat className="text-blue-600 text-2xl" />,
  },
  {
    title: "Property Insurance",
    description: "Protect your property from unexpected risks.",
    icon: <FaHome className="text-blue-600 text-2xl" />,
    image: "/images/property.png",
  },
  {
    title: "Casualty Lines Insurance",
    description: "Casualty lines insurance protects you from unexpected liabilities.",
    icon: <FaUserShield className="text-blue-600 text-2xl" />,
  },
  {
    title: "Financial Lines Insurance",
    description: "Safeguard your business with financial lines insurance.",
    icon: <FaMoneyCheckAlt className="text-blue-600 text-2xl" />,
  },
  {
    title: "Travel Insurance",
    description:
      "Travel with peace of mind! Travel insurance covers trip cancellations, medical emergencies, etc.",
    icon: <FaPlaneDeparture className="text-blue-600 text-2xl" />,
    image: "/images/travel.png",
  },
  {
    title: "Marine Insurance",
    description: "Protect your cargo and vessels with marine insurance.",
    icon: <FaShip className="text-blue-600 text-2xl" />,
  },
  {
    title: "Personal Accident  Insurance",
    description:
      "Personal accident insurance provides financial support for injuries, disabilities, and more.",
    icon: <FaUserShield className="text-blue-600 text-2xl" />,
  },
  {
    title: "Medical Insurance",
    description:
      "Medical insurance covers unexpected medical expenses, ensuring you and your family are protected.",
    icon: <FaHandHoldingMedical className="text-blue-600 text-2xl" />,
  },
];

export default function RightCoverage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <a
          href="#"
          className="text-sm text-blue-600 font-medium hover:underline"
        >
          Find the Right Coverage for You
        </a>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-gray-800">
          Philippines Most Trusted Insurance Marketplace
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insuranceItems.map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="mb-3">{item.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{item.description}</p>

            {/* Optional Image */}
            {item.image && (
              <div className="mt-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-md object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
