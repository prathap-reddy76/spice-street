import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { formatPrice } from '../utils/formatPrice';
import { menuItems, menuCategories } from '../data/menu';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const { ref, inView: isInView } = useInView({ threshold: 0.1 });

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-900 text-center">
            Our Menu
          </h2>
          <p className="text-warm-500 text-center mt-3">
            Explore our carefully curated selection of authentic Indian dishes
          </p>

          <div className="flex overflow-x-auto lg:justify-center gap-3 mt-10 pb-4 scrollbar-hide">
            {menuCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === category
                    ? 'bg-brand-500 text-white'
                    : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-warm-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="%23f3f4f6"><rect width="100%" height="100%"/></svg>';
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading text-lg font-semibold text-warm-900">{item.name}</h3>
                    <span className="text-brand-600 font-bold text-lg">{formatPrice(item.price)}</span>
                  </div>
                  <p className="text-warm-500 text-sm mt-1">{item.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-xs text-warm-500">{item.isVeg ? 'Veg' : 'Non-Veg'}</span>
                    {item.isPopular && (
                      <span className="bg-brand-100 text-brand-700 text-xs px-2 py-0.5 rounded-full font-medium ml-auto">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="text-brand-600 border-2 border-brand-500 hover:bg-brand-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors mx-auto block mt-10">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};
