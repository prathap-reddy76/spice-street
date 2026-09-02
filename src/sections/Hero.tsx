import React from 'react';
import { useInView } from '../hooks/useInView';
import { smoothScrollTo } from '../utils/smoothScroll';

export function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center transform transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="uppercase text-brand-400 tracking-widest text-sm font-semibold mb-4 block">
          Authentic Indian Cuisine
        </span>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight max-w-3xl mb-6">
          A Taste of India, Made to Be Remembered.
        </h1>
        <p className="text-warm-300 text-lg max-w-2xl mb-10 leading-relaxed">
          Experience the rich tapestry of Indian flavours, crafted with love and tradition. From aromatic biryanis to succulent kebabs, every dish at Spice Street is a celebration of authentic Indian cuisine.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => smoothScrollTo('menu')}
            className="px-8 py-3.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-colors"
          >
            Explore Menu
          </button>
          <button
            onClick={() => smoothScrollTo('reservation')}
            className="px-8 py-3.5 rounded-lg border-2 border-white text-white hover:bg-white hover:text-warm-900 font-semibold transition-colors"
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </section>
  );
}
