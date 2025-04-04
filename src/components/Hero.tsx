
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-mono-black/80 to-mono-black/40 z-10"></div>
        <div 
          className="h-full w-full bg-center bg-cover parallax-bg" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1956&q=80')" 
          }}
        >
        </div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 mt-20 md:mt-0">
        <div className="max-w-2xl text-mono-white animate-fade-up">
          <h5 className="uppercase tracking-widest text-mono-light mb-2 md:mb-4">Welcome to MonoBrew</h5>
          <h1 className="heading-xl mb-4 md:mb-6">
            Craft Coffee <br />in Monochrome
          </h1>
          <p className="text-xl md:text-2xl text-mono-light mb-8 md:mb-10 max-w-lg">
            Experience our artisanal coffee in a space where simplicity meets sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="white">EXPLORE MENU</Button>
            <Button variant="black" className="bg-transparent border border-mono-white hover:bg-mono-white/10">
              FIND A LOCATION
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-mono-white text-xs tracking-widest mb-2">SCROLL</span>
          <div className="w-0.5 h-8 bg-mono-white/50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
