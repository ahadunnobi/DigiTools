import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <section id="products" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D2939] mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-[#475467] text-lg max-w-xl mx-auto leading-relaxed">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-[#F2F4F7] rounded-full p-1.5 border border-[#EAECF0]">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === 'products'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-100'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === 'cart'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-100'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Cart (0)
            </button>
          </div>
        </div>

        {/* Content Placeholder (to be populated later) */}
        <div className="min-h-[100px]">
          {/* Product cards will be added here */}
        </div>
      </div>
    </section>
  );
};

export default Products;
