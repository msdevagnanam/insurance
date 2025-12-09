import React from "react";

// 👉 Put your real logo image paths here (in public/logos/...)
const insurersRow1 = [
  { logo: "/logos/oona.png" },
  { logo: "/logos/aig.png" },
  { logo: "/logos/allied.png" },
  { logo: "/logos/alpha.png" },
  { logo: "/logos/bpi.png" },
  { logo: "/logos/bethel.png" },
];

const insurersRow2 = [
  { logo: "/logos/cibeles.png" },
  { logo: "/logos/pacific.png" },
  { logo: "/logos/perla.png" },
  { logo: "/logos/oona2.png" },
  { logo: "/logos/allied2.png" },
];

const BetterChoice = () => {
  return (
    <section className="w-full flex justify-center px-4 py-10 bg-white">
      <div
        className="
          w-full max-w-6xl
          rounded-[32px] border border-[#D9E5FF]
          bg-gradient-to-r from-[#E4F1FF] via-[#F7FBFF] to-[#E4F1FF]
          px-6 md:px-10 py-6 md:py-8
          shadow-[0_14px_40px_rgba(10,67,148,0.08)]
        "
      >
        {/* ROW 1 – right → left */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scrollLeft whitespace-nowrap">
            {[...insurersRow1, ...insurersRow1].map((item, index) => (
              <div
                key={`r1-${index}`}
                className="h-[70px] w-[150px] md:w-[160px] bg-white rounded-2xl
                           flex items-center justify-center
                           shadow-[0_6px_20px_rgba(13,80,190,0.10)]"
              >
                <img
                  src={item.logo}
                  alt="insurer"
                  className="max-h-[42px] max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 – left → right */}
        <div className="overflow-hidden mt-4">
          <div className="flex gap-6 animate-scrollRight whitespace-nowrap">
            {[...insurersRow2, ...insurersRow2].map((item, index) => (
              <div
                key={`r2-${index}`}
                className="h-[70px] w-[150px] md:w-[160px] bg-white rounded-2xl
                           flex items-center justify-center
                           shadow-[0_6px_20px_rgba(13,80,190,0.10)]"
              >
                <img
                  src={item.logo}
                  alt="insurer"
                  className="max-h-[42px] max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-6 md:mt-7 text-center">
          <p className="text-[15px] md:text-[17px] font-semibold text-[#092955]">
            Get instant life insurance quotes
          </p>
          <p className="text-[13px] md:text-[14px] text-[#4A638B] mt-1">
            from 30 of Philippines Top Insurers
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetterChoice;
