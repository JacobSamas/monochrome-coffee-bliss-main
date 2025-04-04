
import React from 'react';
import { MapPin, Clock, Instagram } from 'lucide-react';
import Button from './Button';

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-mono-faint relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map/Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] md:h-[500px] bg-mono-light rounded-lg overflow-hidden">
              {/* This would typically be a real map, but we're using a placeholder image */}
              <img
                src="https://images.unsplash.com/photo-1523242942272-c463d52ffa9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="MonoBrew Coffee Shop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mono-black/40 to-transparent"></div>
              
              {/* Location Marker */}
              <div className="absolute bottom-6 left-6 right-6 bg-mono-white p-4 rounded shadow-lg">
                <h3 className="font-medium mb-2">MonoBrew Downtown</h3>
                <p className="text-mono-medium text-sm">123 Minimalist Avenue, Design District</p>
              </div>
            </div>
          </div>
          
          {/* Info Section */}
          <div className="order-1 lg:order-2">
            <h4 className="uppercase tracking-widest text-mono-medium mb-3">Visit Us</h4>
            <h2 className="heading-lg mb-6">Our Locations</h2>
            <p className="text-mono-medium mb-8">
              We've created spaces that feel like an extension of our philosophy—clean, 
              intentional, and focused on the essentials. Drop by for an exceptional 
              coffee experience.
            </p>
            
            {/* Hours & Contact */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 text-mono-medium" size={18} />
                <div>
                  <h4 className="font-medium mb-1">Downtown</h4>
                  <p className="text-mono-medium text-sm">123 Minimalist Avenue, Design District</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="mr-3 mt-1 text-mono-medium" size={18} />
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p className="text-mono-medium text-sm">Weekdays: 7am - 7pm</p>
                  <p className="text-mono-medium text-sm">Weekends: 8am - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="mr-3 mt-1 text-mono-medium" size={18} />
                <div>
                  <h4 className="font-medium mb-1">Social</h4>
                  <p className="text-mono-medium text-sm">Follow us @monobrew</p>
                </div>
              </div>
            </div>
            
            <Button variant="black">GET DIRECTIONS</Button>
          </div>
        </div>
      </div>
      
      {/* Background design elements */}
      <div className="grain absolute inset-0 z-0"></div>
    </section>
  );
};

export default Location;
