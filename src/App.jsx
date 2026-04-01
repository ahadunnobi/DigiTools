import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <Stats />
        <Products cart={cart} setCart={setCart} />
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
