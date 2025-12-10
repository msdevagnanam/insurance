import React from "react";

const leftFeatures = [
  { text: "Quick & Online", good: false },
  { text: "Compare the Market", good: false },
  { text: "Live Advisor Support", good: true },
  { text: "Impartial & Trusted Advice", good: false },
  { text: "Low Commission Fees", good: false },
  { text: "Apply Anywhere", good: true },
];

const centerFeatures = [
  { text: "Quick & Online", good: true },
  { text: "Compare the Market", good: true },
  { text: "Live Advisor Support", good: true },
  { text: "Impartial & Trusted Advice", good: true },
  { text: "Low Commission Fees", good: true },
  { text: "Apply Anywhere", good: true },
];

const rightFeatures = [
  { text: "Quick & Online", good: false },
  { text: "Compare the Market", good: false },
  { text: "Live Advisor Support", good: true },
  { text: "Impartial & Trusted Advice", good: false },
  { text: "Low Commission Fees", good: false },
  { text: "Apply Anywhere", good: false },
];

const IconCheck = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#10B981" />
    <path d="M7.7 12.3L10.2 14.8L16.3 8.7" stroke="#fff" strokeWidth="1.6" />
  </svg>
);

const IconX = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#21303B" />
    <path d="M8 8L16 16M16 8L8 16" stroke="#9AA6B6" strokeWidth="1.5" />
  </svg>
);

const FeatureItem = ({ item, dark }) => {
  const textClass = dark
    ? item.good
      ? "text-white font-medium"
      : "text-slate-400"
    : item.good
    ? "text-slate-800 font-medium"
    : "text-slate-400";

  return (
    <li className="flex items-start gap-4 py-3">
      <div className="mt-[2px]">
        {item.good ? <IconCheck size={20} /> : <IconX size={16} />}
      </div>
      <div className={`text-[20px] ${textClass}`}>{item.text}</div>
    </li>
  );
};

const CardDark = ({ title, items }) => (
  <div
    className="h-full rounded-2xl bg-[#152231] border border-[#0f2a39]/20 
    shadow-md p-6 md:p-8 
    transition-all duration-300 
    hover:scale-[1.03] hover:shadow-xl"
  >
    <h3 className="text-white text-center text-[20px] font-semibold mb-4">{title}</h3>

    <div className="border-b-2 border-[#44546F] mb-4 p-0"></div>

    <ul className="divide-y divide-[#0e2834]/40">
      {items.map((it, i) => (
        <FeatureItem key={i} item={it} dark />
      ))}
    </ul>
  </div>
);

const CardCenter = ({ title, items }) => (
  <div
    className="h-full rounded-2xl bg-white border border-[#EEF6FF] 
    p-6 md:p-8 shadow-[0_18px_50px_rgba(9,41,82,0.08)] 
    transition-all duration-300 
    hover:scale-[1.03] hover:shadow-2xl"
  >
    <h3 className="text-[#24374A] text-center text-[20px] font-semibold mb-4">{title}</h3>

    <div className="border-b-2 border-[#E0F2FE] mb-4"></div>

    <div className="border-t border-[#F1F7FB] mt-2 pt-4">
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-4 py-1">
            <div className="mt-[3px]">
              <IconCheck size={20} />
            </div>
            <div className="text-[20px] text-slate-700 font-medium">{it.text}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const WhyChoose = () => {
  return (
    <section className="py-3 px-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3550]">
            Why Choose <span className="text-[#1E90FF]">UNICON?</span>
          </h2>
          <p className="mt-3 text-[#64748B]">
            We make it easy, transparent, and fast — giving you the best policies without the hassle.
          </p>
        </div>

        {/* Equal Height Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <CardDark title="Insurance Brokers" items={leftFeatures} />

          <CardCenter title="UNICON" items={centerFeatures} />

          <CardDark title="Insurance Companies" items={rightFeatures} />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
