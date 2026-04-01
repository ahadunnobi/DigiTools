import React from 'react';

import pricingData from '../data/pricing.json';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-[#d9dde0]">
      <div className="max-w-7xl mx-auto px-6 w-full pt-10 pb-5">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-[#101828] mb-3 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#475467] text-lg font-medium opacity-80 max-w-xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingData.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight 
                ? 'bg-[#7F56D9] text-white shadow-2xl shadow-violet-200' 
                : 'bg-[#F9FAFB] border border-gray-100 hover:shadow-xl'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#FFF6ED] border border-[#FEDF89] rounded-full">
                  <span className="text-[#B45601] text-xs font-bold whitespace-nowrap">{plan.badge}</span>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-[#101828]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium ${plan.highlight ? 'text-violet-100' : 'text-[#475467]'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className={`text-5xl font-black tracking-tight ${plan.highlight ? 'text-white' : 'text-[#101828]'}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm font-bold uppercase tracking-wider ${plan.highlight ? 'text-violet-100' : 'text-gray-400'}`}>
                  /Month
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-semibold leading-snug">
                    <div className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlight ? 'bg-violet-400 text-white' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={plan.highlight ? 'text-violet-50' : 'text-[#475467]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 font-bold rounded-2xl transition-all text-base shadow-sm active:scale-[0.98] ${
                plan.highlight 
                ? 'bg-white text-[#7F56D9] hover:bg-violet-50 hover:shadow-lg' 
                : 'bg-[#7F56D9] text-white hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-100'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
