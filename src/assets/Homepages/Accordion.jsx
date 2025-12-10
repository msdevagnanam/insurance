import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const LEFT_FAQS = [
  { id: 1, q: "What is Unicon and how does it work?", a: "Unicon is an online insurance marketplace that aggregates quotes from multiple insurers so you can compare and pick the best plan for your needs." },
  { id: 2, q: "How is Unicon different from other life insurance agents?", a: "We show multiple competitive quotes in one place, offer transparent information, and automate paperwork." },
  { id: 3, q: "How is Unicon better than online life insurance brokers?", a: "Our focus is simplicity, strong insurer partnerships, and a fully digital experience." },
  { id: 4, q: "What types of insurance does Unicon offer?", a: "Our focus is simplicity, strong insurer partnerships, and a fully digital experience." },
  { id: 5, q: "Who does Unicon work with?", a: "Our focus is simplicity, strong insurer partnerships, and a fully digital experience." },
  { id: 6, q: "What is Unicon and how does it work?", a: "Our focus is simplicity, strong insurer partnerships, and a fully digital experience." },
];

const RIGHT_FAQS = [
  { id: 7, q: "Wouldn't it be cheaper to buy coverage directly from an insurance provider or my bank?", a: "Buying insurance directly from an insurance provider or bank won't be cheaper. And it certainly would cost you more time. We offer the same exact prices as the insurance companies and their in house agents. Because we can show you several quotes from multiple sources in one shot, we can save you money by giving you more options to choose from. And our fully digital approach will give you more time to live your life, rather than searching for life insurance coverage options." },
  { id: 8, q: "How does Unicon make money?", a: "Yes, we work with regulated insurers and follow all compliance requirements." },
  { id: 9, q: "Do I need life insurance if I have mortgage insurance?", a: "Mortgage insurance covers your loan only. Life insurance protects your family financially." },
  { id: 10, q: "Is Unicon legit?", a: "Mortgage insurance covers your loan only. Life insurance protects your family financially." },
  { id: 11, q: "Do I need life insurance if I have mortgage insurance?", a: "Mortgage insurance covers your loan only. Life insurance protects your family financially." },
  { id: 12, q: "Do I need life insurance if I have mortgage insurance?", a: "Mortgage insurance covers your loan only. Life insurance protects your family financially." },
];

export default function Accordion() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const toggleLeft = (id) => setOpenLeft((prev) => (prev === id ? null : id));
  const toggleRight = (id) => setOpenRight((prev) => (prev === id ? null : id));

  const AccordionCard = ({ item, isOpen, toggle }) => (
    <div
      className={`rounded-lg overflow-hidden transition-shadow ${
        isOpen ? "bg-white shadow-md ring-1 ring-slate-200" : "bg-[#F6F9FF]"
      }`}
    >
      <button
        onClick={() => toggle(item.id)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className="text-slate-800 text-sm sm:text-base">{item.q}</span>

        <span className="ml-4 flex items-center justify-center text-[25px] h-12 w-12  ">
          {isOpen ? <FiX className="text-sky-500" /> : <FiPlus className="text-sky-500" />}
        </span>
      </button>

      <div
        className={`px-6 pb-4 text-slate-500 text-sm transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pt-0" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );

  return (
    <div className="px-10 py-3">
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Got any questions?
          </h2>
          <p className="text-slate-400 mt-2 font-semibold">We've got the answers.</p>
        </div>

        {/* TWO COLUMN FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {LEFT_FAQS.map((item) => (
              <AccordionCard
                key={item.id}
                item={item}
                isOpen={openLeft === item.id}
                toggle={toggleLeft}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {RIGHT_FAQS.map((item) => (
              <AccordionCard
                key={item.id}
                item={item}
                isOpen={openRight === item.id}
                toggle={toggleRight}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
