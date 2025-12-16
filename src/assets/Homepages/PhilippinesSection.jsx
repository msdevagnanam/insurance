import React from "react";

export default function PhilippinesSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-3">
        <section className="py-0 max-w-7xl mx-auto md:px-4 md:py-6">
      {/* Badge + headings */}
      <div className="text-center mb-8">
        <span className="inline-block border border-blue-200 text-blue-600 rounded-full px-4 py-1 text-sm font-medium">Philippines #1 Choice</span>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-800">Unicon is Philippines leading life insurance broker</h2>
        <p className="mt-2 text-md text-[#1E293B] font-medium">30+ insurance companies compared. Instantly.</p>
      </div>

      {/* Grid: left big card + right two stacked cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left big card (takes 2 cols on md+) */}
        <div className="hidden lg:block md:col-span-3 bg-blue-50 rounded-2xl p-8 relative overflow-hidden relative">
          <div className="max-w-[600px]">
            <h3 className="text-4xl font-bold text-[#008FFF]">Low Fees</h3>
            <h4 className="mt-4 font-bold text-[20px] text-slate-800">No Hidden Charges</h4>
            <p className="mt-2 text-md text-[#1E293B] font-normal">We never charge extra. Your premiums stay fair and clear.</p>

            <div className="mt-5 flex flex-wrap w-[80%] gap-3">
              <span className="inline-block bg-[#BFE3FF] px-3 py-1 rounded-lg text-sm text-[#1E293B] font-medium shadow-sm">Transparent & Honest</span>
              <span className="inline-block bg-[#BFE3FF] px-3 py-1 rounded-lg text-sm text-[#1E293B] font-medium shadow-sm">Low Fees, Zero Worries</span>
              <span className="inline-block bg-[#BFE3FF] px-3 py-1 rounded-lg text-sm text-[#1E293B] font-medium shadow-sm">No Middleman Markups</span>
            </div>
          </div>

          {/* decorative circular radiuses behind image */}
          <div className="absolute -right-40 -bottom-40 w-[380px] h-[380px] rounded-full bg-blue-100 opacity-60 pointer-events-none"></div>

          {/* family image placed bottom-left overlapping card */}
          {/* <div className="absolute left-6 bottom-6 w-[260px] md:w-[340px]">
            <img src="/images/family.png" alt="family" className="w-full h-auto object-cover rounded-md drop-shadow-lg" />
          </div> */}
          <div>
            <img src="/images/family.png" alt="family" className="w-full h-auto object-cover rounded-md drop-shadow-lg absolute bottom-0 left-30 " />
          </div>
        </div>

        {/* Right column stack */}
        <div className="flex flex-col gap-6 md:col-span-2">
          {/* Top right card */}
          <div className="hidden lg:block bg-blue-100 rounded-2xl p-6 h-[350px] relative">
            <div>
              <h4 className="text-3xl font-extrabold text-blue-600">₱5.0B</h4>
              <h5 className="mt-2 font-semibold text-slate-800 text-[20px]">Coverage Placed</h5>
              <p className="mt-2 text-md text-[#1E293B] font-normal w-[50%]">We've helped over 650,000 Filipinos/Filipinas find financial security.</p>
            </div>
            {/* <div className="w-28 flex-shrink-0">
              <img src="/images/mom-daughter.png" alt="mom and kid" className="w-full h-auto object-cover rounded-lg" />
            </div> */}
            <div>
                <img src="/images/mom-child.png" alt="" className="absolute bottom-0 right-0"/>
            </div>
          </div>

          {/* Bottom right card */}
          <div className="hidden lg:block bg-emerald-100 rounded-2xl p-6 h-[350px] md:relative overflow-hidden relative " >
            <h4 className="text-3xl font-extrabold text-emerald-600">20,000</h4>
            <h5 className="mt-2 font-bold text-[20px] text-slate-800">Policy Options</h5>
            <p className="mt-2 text-md text-[#1E293B] font-normal w-[80%]">We pick the best products for you from Philippines top insurance providers.</p>

            {/* small floating mini-cards to mimic plan previews */}
            <div className="mt-6 flex gap-3 items-end ">
              <div className="bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0)_100%)] rounded-xl p-3 shadow-sm text-center min-w-[120px] absolute top-45 ">
                <div className="text-xs text-[#1E293B] font-normal">10 years</div>
                <div className="text-sm font-extrabold mt-1">₱500/mo</div>
                <div className="text-xs text-[#1E293B] font-normal mt-1">Pay annually & save</div>
              </div>

              <div className="bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0)_100%)] rounded-xl p-3 shadow-sm text-center min-w-[110px] absolute top-55 right-41">
                <div className="text-xs text-[#1E293B] font-normal">10 years</div>
                <div className="text-sm font-extrabold mt-1">₱500/mo</div>
                <div className="text-xs text-[#1E293B] font-normal mt-1">Pay annually & save</div>
              </div>

              <div className="bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0)_100%)] rounded-xl p-3 shadow-sm text-center min-w-[100px] absolute top-65 left-88 ">
                <div className="text-xs text-[#1E293B] font-normal">10 years</div>
                <div className="text-sm font-extrabold mt-1">₱500/mo</div>
                <div className="text-xs text-[#1E293B] font-normal mt-1">Pay annually & save</div>
              </div>
            </div>
          </div>

          {/* Mobile view */}

          <div className="lg:hidden grid gap-6">
            <div className="bg-blue-50 rounded-2xl p-8 relative overflow-hidden relative">
              <div className=" w-[100%] ">
                <h3 className="text-4xl font-bold text-[#008FFF]">Low Fees</h3>
                <h4 className="mt-4 font-bold text-[20px] text-slate-800">No Hidden Charges</h4>
                <p className="mt-2 text-sm text-[#1E293B] font-normal">We never charge extra. Your premiums stay fair and clear.</p>

                <div className="mt-5 flex flex-wrap w-[100%] gap-3">
                  <span className="inline-block bg-[#BFE3FF] px-3 py-1 rounded-lg text-sm text-[#1E293B] font-medium shadow-sm">Transparent & Honest</span>
                  <span className="inline-block bg-[#BFE3FF] px-3 py-1 rounded-lg text-sm text-[#1E293B] font-medium shadow-sm">Low Fees, Zero Worries</span>
                  <span className="inline-block bg-[#BFE3FF] px-3 py-1 rounded-lg text-sm text-[#1E293B] font-medium shadow-sm">No Middleman Markups</span>
                </div>
              </div>
              <div className="hidden">
                <img src="/images/family.png" alt="family" className="absolute bottom-0 left-50 w-[50%]" />
              </div>
            </div>

            <div>
              <div className="bg-blue-100 rounded-2xl p-6">
                <div>
                  <h4 className="text-3xl font-extrabold text-blue-600">₱5.0B</h4>
                  <h5 className="mt-2 font-semibold text-slate-800 text-[20px]">Coverage Placed</h5>
                  <p className="mt-2 text-sm text-[#1E293B] font-normal">We've helped over 650,000 Filipinos/Filipinas find financial security.</p>
                </div>
                {/* <div className="w-28 flex-shrink-0">
                  <img src="/images/mom-daughter.png" alt="mom and kid" className="w-full h-auto object-cover rounded-lg" />
                </div> */}
                <div className="hidden">
                    <img src="/images/mom-child.png" alt="" className="absolute bottom-0 right-0"/>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-100 rounded-2xl p-6" >
            <h4 className="text-3xl font-extrabold text-emerald-600">20,000</h4>
            <h5 className="mt-2 font-bold text-[20px] text-slate-800">Policy Options</h5>
            <p className="mt-2 text-sm text-[#1E293B] font-normal w-[80%]">We pick the best products for you from Philippines top insurance providers.</p>

            {/* small floating mini-cards to mimic plan previews */}
            <div className="mt-6 grid gap-3 items-end ">
              <div className="bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0)_100%)] rounded-xl p-3 shadow-sm text-center ">
                <div className="text-xs text-[#1E293B] font-normal">10 years</div>
                <div className="text-sm font-extrabold mt-1">₱500/mo</div>
                <div className="text-xs text-[#1E293B] font-normal mt-1">Pay annually & save</div>
              </div>

              <div className="bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0)_100%)] rounded-xl p-3 shadow-sm text-center">
                <div className="text-xs text-[#1E293B] font-normal">10 years</div>
                <div className="text-sm font-extrabold mt-1">₱500/mo</div>
                <div className="text-xs text-[#1E293B] font-normal mt-1">Pay annually & save</div>
              </div>

              <div className="bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0)_100%)] rounded-xl p-3 shadow-sm text-center">
                <div className="text-xs text-[#1E293B] font-normal">10 years</div>
                <div className="text-sm font-extrabold mt-1">₱500/mo</div>
                <div className="text-xs text-[#1E293B] font-normal mt-1">Pay annually & save</div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>

      {/* small note about responsive hover effects */}
      <style>{`
        /* subtle hover boost for the big left card */
        .left-card-hover:hover { transform: translateY(-4px); transition: transform .18s ease; }
      `}</style>
    </section>
    </div>
    
  );
}
