import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#4A7C59]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="float-animation">
              <Brain className="h-10 w-10 text-[#FFD93D]" />
            </div>
            <span className="text-2xl font-bold gradient-text">DECON</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Tokenomics', 'Exchanges', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cream hover:text-[#FFD93D] transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 rounded-full bg-[#FFD93D] text-[#4A7C59] font-bold hover:bg-[#FF6B6B] hover:text-cream transition-all duration-300 transform hover:scale-105">
              Buy Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cream">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#4A7C59]/95 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Home', 'About', 'Tokenomics', 'Exchanges', 'Community'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-cream hover:text-[#FFD93D] transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="w-full px-6 py-3 mt-4 rounded-full bg-[#FFD93D] text-[#4A7C59] font-bold hover:bg-[#FF6B6B] hover:text-cream transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;