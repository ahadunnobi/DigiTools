import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from './ProductCard';

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

        {/* Content */}
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-violet-50 text-violet-600">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 6h12.8M7 13L5.4 5M17 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              Looks like you haven't added any premium tools to your cart yet. Browse our selection and start creating!
            </p>
            <button 
              onClick={() => setActiveTab('products')}
              className="px-8 py-3 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-all shadow-lg shadow-violet-100"
            >
              View Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
