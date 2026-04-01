import React from 'react';

const tagColors = {
  'best-seller': 'bg-orange-50 text-orange-600',
  'popular': 'bg-violet-50 text-violet-600',
  'new': 'bg-emerald-50 text-emerald-600',
};

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-violet-100 transition-all duration-500 group relative">
      {/* Tag Badge */}
      {product.tag && (
        <span className={`absolute top-6 right-6 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider ${tagColors[product.tagType] || 'bg-gray-100 text-gray-700'}`}>
          {product.tag}
        </span>
      )}

      {/* Icon */}
      <div className="mb-6">
        <div className="h-16 w-16 rounded-2xl bg-gray-50 flex items-center justify-center p-3.5 group-hover:bg-violet-50 transition-colors">
          <img 
            src={product.icon} 
            alt={product.name} 
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Name & Description */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#1D2939] mb-2 group-hover:text-violet-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-[#475467] text-sm leading-relaxed line-clamp-2 font-medium">
          {product.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-3xl font-black text-[#1D2939] tracking-tight">
          ${product.price}
        </span>
        <span className="text-sm text-gray-400 font-bold uppercase tracking-wider">
          /{product.period === 'one-time' ? 'One-Time' : 'Mo'}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3.5 mb-8">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-[#475467] font-semibold">
            <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <svg className="h-3 w-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button 
        onClick={() => !isInCart && onAddToCart(product)}
        disabled={isInCart}
        className={`w-full py-4 font-bold rounded-2xl transition-all text-base shadow-sm ${
          isInCart 
          ? "bg-violet-100 text-violet-600 cursor-default" 
          : "bg-[#7F56D9] text-white hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-200 active:scale-[0.97]"
        }`}
      >
        {isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;
