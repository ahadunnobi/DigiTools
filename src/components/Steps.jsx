import React from 'react';

import stepsData from '../data/steps.json';

const iconMap = {
  '01': (
    <svg className="h-8 w-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  '02': (
    <svg className="h-8 w-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  '03': (
    <svg className="h-8 w-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
};

const Steps = () => {
  return (
    <section id="steps" className="py-24 bg-[#d9dde0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1D2939] mb-4 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#475467] text-lg font-medium opacity-80">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <div key={step.id} className="relative bg-white rounded-[2.5rem] border border-gray-100 p-10 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-violet-100 transition-all duration-500 group">
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 h-8 w-8 bg-[#7F56D9] text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-violet-200">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="mb-8 relative transition-transform duration-500 group-hover:scale-110">
                <div className="h-24 w-24 rounded-full bg-violet-50 flex items-center justify-center">
                  {iconMap[step.id]}
                </div>
                {/* Decorative pulse effect */}
                <div className="absolute inset-0 rounded-full bg-violet-200/20 animate-ping -z-10 group-hover:animate-none" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-extrabold text-[#1D2939] mb-4">
                {step.title}
              </h3>
              <p className="text-[#475467] text-base leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
