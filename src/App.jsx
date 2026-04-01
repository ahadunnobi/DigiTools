import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-transparent font-sans overflow-x-hidden">
      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />
      <main>
        <Hero />
        <Stats />
        <Products 
          cart={cart} 
          setCart={setCart} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
        <Steps />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
