import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ endValue, label, isDecimal = false, suffix = "", trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0); // Reset count when not in view
      return;
    }

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = easeProgress * endValue;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue, trigger]);

  return (
    <div className="flex flex-col items-center justify-center py-8 px-6 group relative transition-all duration-500">
      <h3 className="text-6xl md:text-7xl font-black text-white mb-3 font-sans tracking-tight drop-shadow-sm group-hover:scale-105 transition-transform">
        {isDecimal ? count.toFixed(1) : Math.floor(count)}
        {suffix}
      </h3>
      <p className="text-sm md:text-base text-violet-200 font-bold tracking-[0.25em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Toggle view state on every intersection change
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-violet-600 w-full overflow-hidden relative shadow-[inset_0_2px_15_rgba(0,0,0,0.1)] py-2 my-12 rounded-3xl max-w-[1280px] mx-auto">
      <div className="absolute top-0 left-1/4 w-[500px] h-full bg-violet-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-0 right-1/4 w-[500px] h-full bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 w-full relative">
          <StatItem endValue={50} label="Active Users" suffix="K+" trigger={isInView} />
          <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-violet-300/40 to-transparent shadow-[0_0_12px_rgba(196,181,253,0.4)]" />
        </div>

        <div className="flex-1 w-full relative">
          <StatItem endValue={200} label="Premium Tools" suffix="+" trigger={isInView} />
          <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-violet-300/40 to-transparent shadow-[0_0_12px_rgba(196,181,253,0.4)]" />
        </div>

        <div className="flex-1 w-full relative">
          <StatItem endValue={4.9} label="Rating" isDecimal={true} trigger={isInView} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
