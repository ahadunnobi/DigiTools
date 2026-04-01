import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="py-24 bg-[#d9dde0] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-violet-600 via-violet-600 to-indigo-700 px-8 py-20 text-center shadow-2xl shadow-violet-200">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready To Transform Your Workflow?
            </h2>
            <p className="text-violet-50 text-lg md:text-xl font-medium mb-12 opacity-90 leading-relaxed">
              Join thousands of professionals who are already using Digitools to work smarter. 
              Start your free trial today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-white text-violet-600 font-bold rounded-2xl hover:bg-violet-50 hover:shadow-xl hover:shadow-black/10 transition-all active:scale-[0.98] text-lg"
              >
                Explore Products
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all active:scale-[0.98] text-lg"
              >
                View Pricing
              </button>
            </div>

            {/* Features/Trust */}
            <p className="text-violet-100/70 text-sm font-semibold tracking-wide flex flex-wrap items-center justify-center gap-x-6 gap-y-2 uppercase">
              <span>14-day free trial</span>
              <span className="hidden sm:inline">•</span>
              <span>No credit card required</span>
              <span className="hidden sm:inline">•</span>
              <span>Cancel anytime</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
