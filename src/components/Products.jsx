import React, { useState } from 'react';
import { toast } from 'react-toastify';
import productsData from '../data/products.json';
import ProductCard from './ProductCard';

const Products = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      toast.warn("This item is already in your cart!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleRemoveFromCart = (productId) => {
    const itemToRemove = cart.find(item => item.id === productId);
    setCart(cart.filter(item => item.id !== productId));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from cart`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout successful! Your order is on the way.", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
                isInCart={cart.some(item => item.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto animate-fade-in">
            {cart.length === 0 ? (
              <div className="text-center py-20">
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
            ) : (
              <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-xl shadow-gray-200/50">
                <div className="space-y-6 mb-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-violet-50 p-2 flex-shrink-0">
                          <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1D2939]">{item.name}</h4>
                          <p className="text-sm text-gray-400 font-medium">${item.price}/{item.period === 'one-time' ? 'One-Time' : 'Mo'}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                        title="Remove item"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">Total Price</span>
                    <span className="text-3xl font-black text-violet-600">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full py-4 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-200 active:scale-[0.98] transition-all text-lg"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
