import React from "react";

const products = [
  { title: "Travel Insurance", icon: "/images/travel-insurance.png" },
  { title: "Motor Car Insurance", icon: "/images/motor-car.png" },
  { title: "Property Insurance", icon: "/images/property.png" },
  { title: "Medical Insurance", icon: "/images/medical.png" },
  { title: "Life Insurance", icon: "/images/life.png" },
  { title: "Personal Accident Insurance", icon: "/images/personal-accident.png" },
  { title: "Casualty Lines Insurance", icon: "/images/casualty.png" },
  { title: "Suretyship", icon: "/images/suretyship.png" },
  { title: "Financial Lines", icon: "/images/financial.png" },
  { title: "Engineering Insurance", icon: "/images/engineering.png" },
  { title: "Specialty Lines", icon: "/images/specialty.png" },
  { title: "Marine Insurance", icon: "/images/marine.png" },
];

const ProductsSection = () => {
  return (
    <section className="w-full flex justify-center px-10 py-3 bg-white">
      <div className="w-full ">
        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-10">
          {products.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center text-center bg-white rounded-2xl shadow-[0_8px_20px_rgba(25,118,210,0.12)] border border-[#E5F0FF] h-28 px-4 transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 mb-2 object-contain"
              />
              {/* Title */}
              <p className="text-[13px] font-medium text-[#1E64FF] leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center px-8 py-2.5 rounded-full border border-[#1E64FF] text-[#1E64FF] text-sm font-semibold shadow-[0_6px_15px_rgba(25,118,210,0.18)] bg-white hover:bg-[#f3f6ff] transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
