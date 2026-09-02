import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { smoothScrollTo } from '../utils/smoothScroll';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className={`font-heading font-bold tracking-wider text-2xl cursor-pointer ${
            isScrolled ? 'text-warm-900' : 'text-white'
          }`}
          onClick={() => handleNavClick('hero')}
        >
          SPICE STREET
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium hover:text-brand-500 transition-colors ${
                isScrolled ? 'text-warm-700' : 'text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('reservation')}
            className={`px-6 py-2.5 rounded-full font-semibold transition-colors ${
              isScrolled
                ? 'bg-brand-500 text-white hover:bg-brand-600'
                : 'bg-white text-warm-900 hover:bg-brand-50'
            }`}
          >
            Reserve a Table
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-warm-900' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-warm-900' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 h-screen">
          <nav className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-2xl font-heading font-semibold text-warm-900 hover:text-brand-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('reservation')}
              className="mt-6 px-8 py-3 bg-brand-500 text-white rounded-full font-semibold w-full hover:bg-brand-600 transition-colors"
            >
              Reserve a Table
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
