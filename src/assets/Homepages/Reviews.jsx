// TrustedFilipinos.jsx
import React, { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const reviews = [
  {
    id: 1,
    title: "Excellent service",
    body:
      "Thank you for the excellent customer service. You've been very supportive in all our questions. After the video call, he didn't really push to sell. We appreciate your time, and support in giving us updates and follow-ups and phone calls until we got approved.",
    author: "Jessa Y",
    stars: 5,
  },
  {
    id: 2,
    title: "Excellent service",
    body:
      "Thank you for the excellent customer service. You've been very supportive in all our questions. After the video call, he didn't really push to sell. We appreciate your time, and support in giving us updates and follow-ups and phone calls until we got approved.",
    author: "Franz Y",
    stars: 5,
  },
  {
    id: 3,
    title: "Very helpful",
    body:
      "The team guided us through the process and clarified everything. Quick responses and friendly service.",
    author: "A. Santos",
    stars: 5,
  },
  // add more reviews if you want
];

export default function TrustedFilipinos() {
  const [index, setIndex] = useState(0); // current slide index (0..n-1)
  const [visible, setVisible] = useState(2); // slides visible: 2 on desktop, 1 on mobile
  const autoplayRef = useRef(null);
  const transitionRef = useRef(true);

  // responsive visible slides
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisible(2);
      else setVisible(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const n = reviews.length;

  // move to a specific index with wrapping
  const goTo = (to) => {
    let next = to;
    if (to < 0) next = n - 1;
    if (to >= n) next = 0;
    setIndex(next);
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // autoplay
  useEffect(() => {
    autoplayRef.current = () => {
      next();
    };
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    const interval = setInterval(play, 4500);
    return () => clearInterval(interval);
  }, [index, visible]);

  // compute track translate percent:
  // Each slide width = 100 / visible %
  // translateX = -(index * (100 / visible)) %
  const slideWidthPercent = 100 / visible;
  const translatePercent = -(index * slideWidthPercent);

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-3">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start lg:px-24 py-6 min-h-[400px]">
        {/* Left rating card (kept faithful to screenshot) */}
        <div className="md:col-span-2 rounded-lg border border-gray-100 shadow-sm bg-[linear-gradient(180deg,rgba(244,244,244,0)_37.53%,#E3F5FF_83.38%)] p-6 flex flex-col justify-between lg:min-h-[400px]">
          <div className="relative flex-1">
            {/* arcs */}
            <div className="w-full h-52 rounded-lg relative flex items-center justify-center">
              <div className="absolute inset-6 rounded-full border border-gray-200 opacity-60"></div>
              <div className="absolute inset-14 rounded-full border border-gray-200 opacity-40"></div>

              {/* center rating */}
              <div className="z-10 text-center">
                <div className="text-4xl font-semibold text-blue-600">4.99</div>
                <div className="mt-3 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar key={i} className="text-yellow-400 text-2xl" />
                  ))}
                </div>
              </div>

              {/* optional avatars — add <img> tags positioned absolutely on arcs if desired */}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600 text-center">
              100% of customers recommend us, The Best Filipinos/Filipinas Insurance Advisor
            </p>
            <div className="mt-5 flex flex-col lg:flex-row items-center justify-around">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:brightness-95">
                Read All Reviews
              </button>
              <span className="text-[20px] font-semibold text-gray-700">review.com</span>
            </div>
          </div>
        </div>

        {/* Right slider container */}
        <div className="md:col-span-3 rounded-lg border border-gray-100 shadow-sm bg-[linear-gradient(180deg,#FFFFFF_0%,#E3F5FF_100%)] p-6 bg-white relative overflow-hidden snap-x snap-mandatory lg:min-h-[400px]">
          {/* header + controls */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Trusted by Filipinos/Filipinas</h3>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="previous"
                className="w-9 h-9 rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-100"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={next}
                aria-label="next"
                className="w-9 h-9 rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-100"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          {/* slider viewport */}
          <div className="w-full overflow-hidden ">
            {/* track */}
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 w-[100%]"
              style={{
                width: `${(n / visible) * 100}%`,
                transform: `translateX(${translatePercent}%)`,
              }}
            >
              {reviews.map((r) => (
                <article
                  key={r.id}
                  className=" snap-start bg-white rounded-xl p-5 shadow-[0_18px_40px_rgba(37,99,235,0.06)] border border-gray-100 "
                  style={{ flex: `0 0 ${slideWidthPercent}%` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <AiFillStar key={i} className="text-blue-600" />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-gray-800">{r.title}</h4>

                  <p className="text-sm text-gray-600 leading-6">{r.body}</p>

                  <p className="mt-4 text-sm font-semibold text-gray-700">{r.author}</p>
                </article>
              ))}
            </div>
          </div>

          {/* bottom subtle shadow like screenshot */}
          <div className="absolute left-6 right-6 bottom-3 h-6 pointer-events-none">
            <div className="h-full rounded-lg bg-gradient-to-b from-transparent to-gray-100 opacity-60"></div>
          </div>

          {/* dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {reviews.map((_, i) => {
              // active dot condition: active if i === index
              const isActive = i === index;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full ${isActive ? "bg-blue-600" : "bg-gray-300"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
