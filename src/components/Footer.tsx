
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mono-black text-mono-white pt-16 pb-8">
      <div className="container-custom">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight mb-4">MONO<span className="font-light">BREW</span></h3>
            <p className="text-mono-light text-sm max-w-xs">
              A minimalist coffee experience focused on quality, sustainability, and the perfect cup.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium uppercase mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-mono-light text-sm hover:text-mono-white transition-colors">About</a></li>
                <li><a href="#" className="text-mono-light text-sm hover:text-mono-white transition-colors">Menu</a></li>
                <li><a href="#" className="text-mono-light text-sm hover:text-mono-white transition-colors">Locations</a></li>
                <li><a href="#" className="text-mono-light text-sm hover:text-mono-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium uppercase mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-mono-light text-sm hover:text-mono-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-mono-light text-sm hover:text-mono-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-mono-light text-sm hover:text-mono-white transition-colors">Shipping</a></li>
                <li><a href="#" className="text-mono-light text-sm hover:text-mono-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-4">Stay Updated</h4>
            <p className="text-mono-light text-sm mb-4">
              Subscribe to our newsletter for updates, offers, and coffee wisdom.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-mono-dark px-4 py-2 text-mono-white text-sm w-full focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-mono-white text-mono-black px-4 py-2 text-sm font-medium whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-mono-dark pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mono-light text-xs mb-4 md:mb-0">
            © 2023 MonoBrew Coffee. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-mono-light hover:text-mono-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-mono-light hover:text-mono-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-mono-light hover:text-mono-white transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
