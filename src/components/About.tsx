
import React from 'react';
import { Coffee } from 'lucide-react';

const AboutFeature = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:-translate-y-1">
    <div className="mb-4 text-mono-black">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-mono-medium text-sm">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-mono-faint relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h4 className="uppercase tracking-widest text-mono-medium mb-3">Our Story</h4>
          <h2 className="heading-lg mb-6">Crafted with Simplicity</h2>
          <p className="text-mono-medium">
            Founded in 2018, MonoBrew represents our passion for minimalism and exceptional coffee. 
            We source single-origin beans, roast in small batches, and serve in a space that celebrates 
            the beauty of monochrome aesthetics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AboutFeature 
            title="Carefully Sourced" 
            description="We partner directly with farmers to ensure ethical and sustainable practices."
            icon={<Coffee size={32} />} 
          />
          <AboutFeature 
            title="Precision Roasted" 
            description="Small-batch roasting allows us to control every variable for perfect results."
            icon={<Coffee size={32} />} 
          />
          <AboutFeature 
            title="Expertly Prepared" 
            description="Our baristas train for months to master the art and science of coffee preparation."
            icon={<Coffee size={32} />} 
          />
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="text-5xl font-display font-bold mb-6">"</div>
          <blockquote className="text-xl md:text-2xl italic font-display mb-6">
            We believe the best coffee experiences arise from simplicity—pure flavors, 
            thoughtful preparation, and an environment that encourages presence.
          </blockquote>
          <p className="text-mono-medium">— Alex Chen, Founder</p>
        </div>
      </div>
      
      {/* Background design elements */}
      <div className="grain absolute inset-0 z-0"></div>
    </section>
  );
};

export default About;
