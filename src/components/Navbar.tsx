import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white py-3 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="z-10">
          <a href="#" className={`font-display text-xl font-bold tracking-tight ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>MONO<span className="font-light">BREW</span></a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#about" className={`text-sm font-medium link-hover ${
            isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-gray-200'
          }`}>ABOUT</a>
          <a href="#menu" className={`text-sm font-medium link-hover ${
            isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-gray-200'
          }`}>MENU</a>
          <a href="#location" className={`text-sm font-medium link-hover ${
            isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-gray-200'
          }`}>LOCATION</a>
          <Button variant={isScrolled ? "black" : "white"}>ORDER NOW</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden z-10 focus:outline-none ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`} 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-mono-black text-mono-white flex flex-col justify-center items-center space-y-10 text-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
          <a href="#about" className="font-medium" onClick={toggleMobileMenu}>ABOUT</a>
          <a href="#menu" className="font-medium" onClick={toggleMobileMenu}>MENU</a>
          <a href="#location" className="font-medium" onClick={toggleMobileMenu}>LOCATION</a>
          <Button variant="white" onClick={toggleMobileMenu} className="mt-8">ORDER NOW</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
