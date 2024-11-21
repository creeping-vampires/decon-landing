import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-purple-900/90 backdrop-blur-sm border-b border-yellow-400/20 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-yellow-400" />
            <span className="ml-2 text-xl font-bold text-yellow-400">DECON</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-purple-200 hover:text-yellow-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-purple-200 hover:text-yellow-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                About
              </a>
              <a href="#how-to-buy" className="text-purple-200 hover:text-yellow-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                How to Buy
              </a>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-200 hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-purple-200 hover:text-yellow-400 block px-3 py-2 rounded-lg text-base font-medium">
              Home
            </a>
            <a href="#about" className="text-purple-200 hover:text-yellow-400 block px-3 py-2 rounded-lg text-base font-medium">
              About
            </a>
            <a href="#how-to-buy" className="text-purple-200 hover:text-yellow-400 block px-3 py-2 rounded-lg text-base font-medium">
              How to Buy
            </a>
            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-4 py-2 rounded-lg text-base font-medium transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;