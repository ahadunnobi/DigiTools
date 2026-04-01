import { useState, useEffect } from 'react';

const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

export default function Navbar({ cartCount = 0, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
       
        <a href="#">
          <span className="text-2xl font-extrabold text-violet-600 tracking-tight group-hover:text-violet-700 transition-colors">
            DigiTools
          </span>
        </a>


        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            id="nav-cart-btn" 
            onClick={() => {
              setActiveTab('cart');
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative p-2 text-gray-500 hover:text-violet-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 6h12.8M7 13L5.4 5M17 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>
            <span className="absolute top-0 right-0 h-4 w-4 bg-violet-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold">{cartCount}</span>
          </button>
          <a href="#login" id="nav-login-btn" className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors">
            Login
          </a>
          <a
            href="#get-started"
            id="nav-cta-btn"
            className="px-5 py-2 bg-violet-600 text-white text-sm font-semibold rounded-full hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200 active:scale-95 transition-all duration-200 shadow-md shadow-violet-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="nav-hamburger-btn"
          className="md:hidden p-2 text-gray-600 hover:text-violet-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}>
        <div className="bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <a href="#login" className="text-sm font-medium text-gray-600 hover:text-violet-600">Login</a>
            <a href="#get-started" className="px-5 py-2 bg-violet-600 text-white text-sm font-semibold rounded-full hover:bg-violet-700 transition-all">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
