import React from 'react';
import banner from '../../assets/banner.png';

const Hero = () => {
  return (
    <section className="bg-[#d9dde0] px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1280px] mx-auto min-h-screen pt-5">
      <div className="flex-1 space-y-7 animate-fade-in lg:pr-10">
        <div className="inline-flex items-center gap-2 mt-20 px-4 py-2 bg-[#EBE7FE] text-[#6938EF] rounded-full text-sm font-semibold tracking-wide">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-600"></span>
          </div>
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-[#1D2939] leading-[1.1] tracking-tight">
          <span className="whitespace-nowrap">Supercharge Your</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 whitespace-nowrap">
            Digital Workflow
          </span>
        </h1>

        <p className="text-[#475467] text-lg max-w-lg leading-relaxed font-medium">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br/>
          Explore Products
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-[#7F56D9] text-white font-semibold rounded-full hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200 transition-all text-sm">
            Explore Products
          </button>
          <button className="px-8 py-3.5 bg-white text-[#7F56D9] font-semibold rounded-full border border-[#D6BBFB] hover:border-violet-600 hover:bg-violet-50 transition-all flex items-center gap-2 text-sm shadow-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex-1 relative w-full flex justify-end mt-14">
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          <img
            src={banner}
            alt="Digital Workflow Visualization"
            className="w-full max-w-[600px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
