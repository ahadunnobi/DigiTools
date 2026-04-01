import React from 'react';

const SectionHeader = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${light ? 'text-white' : 'text-[#1D2939]'}`}>
        {title}
      </h2>
      <p className={`text-lg font-medium max-w-2xl mx-auto leading-relaxed ${light ? 'text-violet-100 opacity-90' : 'text-[#475467] opacity-80'}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
