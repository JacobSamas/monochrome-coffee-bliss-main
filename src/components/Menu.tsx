
import React from 'react';
import Button from './Button';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'food';
  featured?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "House Espresso",
    description: "Our signature blend with notes of chocolate, caramel and a bright finish.",
    price: "$4.50",
    category: "coffee",
    featured: true
  },
  {
    id: 2,
    name: "Pour Over",
    description: "Single-origin coffee brewed to order. Ask about our current selection.",
    price: "$5.50",
    category: "coffee"
  },
  {
    id: 3,
    name: "Cold Brew",
    description: "Steeped for 18 hours, our cold brew is smooth with notes of cocoa.",
    price: "$5.00",
    category: "coffee",
    featured: true
  },
  {
    id: 4,
    name: "Matcha Latte",
    description: "Ceremonial grade matcha whisked with your choice of milk.",
    price: "$5.50",
    category: "coffee"
  },
  {
    id: 5,
    name: "Avocado Toast",
    description: "Sourdough bread topped with avocado, sea salt, and olive oil.",
    price: "$9.50",
    category: "food",
    featured: true
  },
  {
    id: 6,
    name: "Granola Bowl",
    description: "House-made granola with seasonal fruit and Greek yogurt.",
    price: "$8.00",
    category: "food"
  }
];

const Menu = () => {
  const featuredItems = menuItems.filter(item => item.featured);
  
  return (
    <section id="menu" className="py-20 md:py-28 bg-mono-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h4 className="uppercase tracking-widest text-mono-medium mb-3">Menu</h4>
          <h2 className="heading-lg mb-6">Our Offerings</h2>
          <p className="text-mono-medium">
            We keep our menu intentionally focused, allowing us to perfect each item.
            Here's a selection of our most popular offerings.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
          {featuredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-mono-faint p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-xl font-medium">{item.name}</h3>
                <span className="font-semibold">{item.price}</span>
              </div>
              <p className="text-mono-medium text-sm mb-4">{item.description}</p>
              <span className="text-xs uppercase tracking-wider text-mono-medium">
                {item.category === 'coffee' ? 'Drink' : 'Food'}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="black">VIEW FULL MENU</Button>
        </div>

        {/* Parallax Image */}
        <div className="mt-24 h-64 md:h-96 overflow-hidden relative rounded-lg">
          <div 
            className="h-full w-full parallax-bg opacity-80" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
              backgroundPosition: "center 30%"
            }}
          ></div>
          <div className="absolute inset-0 bg-mono-black/20"></div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
