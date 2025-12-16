import React from "react";

const insurersRow1 = [
  { logo: "/images/oona.png", w: 120, h: 42 },
  { logo: "/images/aig.png", w: 120, h: 42 },
  { logo: "/images/allied.png", w: 120, h: 42 },
  { logo: "/images/alpha.png", w: 120, h: 42 },
  { logo: "/images/bpi.png", w: 120, h: 42 },
  { logo: "/images/bethel.png", w: 120, h: 42 },
  { logo: "/images/perla.png", w: 120, h: 42 },
];

const insurersRow2 = [
  { logo: "/images/cibeles.png", w: 120, h: 42 },
  { logo: "/images/pacific.png", w: 120, h: 42 },
  { logo: "/images/perla.png", w: 120, h: 42 },
  { logo: "/images/oona.png", w: 120, h: 42 },
  { logo: "/images/allied.png", w: 120, h: 42 },
  { logo: "/images/bethel.png", w: 120, h: 42 },
  { logo: "/images/aig.png", w: 120, h: 42 },
];

const SlideTrack = ({ items, speed = "28s", reverse = false }) => {
  const duplicated = [...items, ...items];

  return (
    <div className="relative slider overflow-hidden" aria-hidden="false">
      <div
        className={`track ${reverse ? "track--reverse" : ""}`}
        style={{ ["--speed"]: speed }}
        role="list"
      >
        {duplicated.map((item, i) => (
          <div
            key={i}
            className="logo-card h-[70px] w-[150px] bg-white rounded-2xl flex items-center justify-center shadow flex-shrink-0"
            role="listitem"
          >
            <img
              src={item.logo}
              alt=""
              width={item.w}
              height={item.h}
              loading="eager"
              decoding="sync"
              className="max-h-[42px] max-w-[120px] object-contain"
            />
          </div>
        ))}
      </div>

      {/* FRONT BLURS - inside slider so they overlay the logos */}
      <div className="front-blur-left" aria-hidden="true" />
      <div className="front-blur-right" aria-hidden="true" />

      <style>{`
        /* Slider base */
        .slider { position: relative; width: 100%; overflow: hidden; }

        /* The track (logos) - sits under front blur */
        .track {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          width: max-content;
          animation: scroll var(--speed, 30s) linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          -webkit-backface-visibility: hidden;
          z-index: 1; /* logos below blur */
        }

        .track--reverse { animation-direction: reverse; }
        .track > * { flex: 0 0 auto; }

        @keyframes scroll {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }

        /* Pause on hover */
        .slider:hover .track { animation-play-state: paused; }

        /* FRONT BLUR overlay styles (in front of logos) */
        .front-blur-left,
        .front-blur-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 220px;             /* tweak for effect width */
          z-index: 5;               /* above logos */
          pointer-events: none;     /* allow interacting with logos if needed */
          display: block;
        }

        /* Left: gradient + soft blur. Use backdrop-filter for softening content underneath (if supported) */
        .front-blur-left {
          left: 0;
          background: linear-gradient(90deg, rgba(236,245,255,0.95) 0%, rgba(236,245,255,0.45) 35%, rgba(236,245,255,0.08) 70%, transparent 100%);
          filter: blur(0px);
        }

        /* Right: mirrored */
        .front-blur-right {
          right: 0;
          background: linear-gradient(270deg, rgba(236,245,255,0.95) 0%, rgba(236,245,255,0.45) 35%, rgba(236,245,255,0.08) 70%, transparent 100%);
          filter: blur(0px);
        }

        /* If you want stronger blur on top of content, increase blur and/or width */
        /* Example: filter: blur(14px); width: 260px; */

        /* Responsive */
        @media (max-width: 1024px) {
          .front-blur-left, .front-blur-right { width: 180px; filter: blur(5px); }
        }
        @media (max-width: 640px) {
          .front-blur-left, .front-blur-right { width: 100px; filter: blur(4px); }
        }

        /* small responsive tweak for logo cards */
        @media (max-width:640px) {
          .logo-card { width: 110px; height: 56px; }
          .track { gap: 0.75rem; }
        }
      `}</style>
    </div>
  );
};

const BetterChoice = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 py-3 bg-white">
      {/* container that holds the content; text will be above blur */}
      <div className="relative w-full max-w-7xl ">
        <div
          className="rounded-xl lg:rounded-[32px] border border-[#D9E5FF]
            bg-gradient-to-r from-[#E4F1FF] via-[#F7FBFF] to-[#E4F1FF]
            py-6 md:py-10 shadow-[0_14px_40px_rgba(10,67,148,0.08)]"
          style={{ position: "relative", zIndex: 10 }} /* ensure text is above the slider blurs */
        >
          {/* The slider rows */}
          <div className="mt-0">
            <SlideTrack items={insurersRow1} speed="28s" reverse={false} />
          </div>

          <div className="mt-4">
            <SlideTrack items={insurersRow2} speed="34s" reverse={true} />
          </div>

          {/* Text should sit above the blurs so it stays crisp and readable */}
          <div className="mt-6 text-center" style={{ position: "relative", zIndex: 20 }}>
            <p className="text-[18px] font-semibold text-[#1E293B]">
              Get instant life insurance quotes
            </p>
            <p className="text-[16px] text-[#1E293B] font-medium mt-1">
              from 30 of Philippines Top Insurers
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:mt-10 mt-6">
          <button className="inline-flex items-center justify-center bg-[#00A65A] md:px-4 md:py-2 px-2 py-1 rounded-full text-white font-normal md:text-[18px] text-[14px] shadow-[0_6px_15px_rgba(25,118,210,0.18)]  transition">
            Better Insurance, Smarter Choice
          </button>
        </div>
      </div>
    </section>
  );
};

export default BetterChoice;
