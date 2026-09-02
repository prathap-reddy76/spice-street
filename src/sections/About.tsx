import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { restaurant } from '../data/restaurant';

export function About() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const features = [
    'Authentic recipes from across India',
    'Fresh, locally sourced ingredients',
    'Award-winning culinary team',
    'Warm, family-friendly ambience',
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Left Column - Image */}
          <div className="relative rounded-lg overflow-hidden shadow-xl aspect-4/3 lg:aspect-auto lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <span className="uppercase text-brand-500 tracking-widest text-sm font-semibold mb-3">
              OUR STORY
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-900 mb-6 leading-tight">
              Where Tradition Meets the Table
            </h2>
            <p className="text-warm-600 leading-relaxed mb-8 text-lg">
              {restaurant.description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-brand-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-warm-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="#about"
                className="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Discover Our Story
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
