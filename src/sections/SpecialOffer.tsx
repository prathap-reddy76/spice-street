import React from 'react';
import { useInView } from '../hooks/useInView';
import { restaurant } from '../data/restaurant';
import { formatPrice } from '../utils/formatPrice';

export function SpecialOffer() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { specialOffer } = restaurant;

  if (!specialOffer) return null;

  return (
    <section className="py-16 bg-brand-50 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 items-center transform transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Text Content */}
          <div className="flex flex-col order-2 md:order-1 items-center md:items-start text-center md:text-left">
            <span className="bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block">
              {specialOffer.badge}
            </span>
            <h2 className="font-heading text-3xl font-bold text-warm-900 mb-4">
              {specialOffer.title}
            </h2>
            <p className="text-warm-600 mb-6 leading-relaxed">
              {specialOffer.description}
            </p>
            <p className="text-warm-700 font-medium mb-4">
              Serves {specialOffer.serves}
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-brand-600">
                {formatPrice(specialOffer.price)}
              </span>
              {specialOffer.originalPrice && (
                <span className="line-through text-warm-400 text-lg">
                  {formatPrice(specialOffer.originalPrice)}
                </span>
              )}
            </div>
            
            <p className="text-sm text-warm-500 mb-6 italic">
              Valid: {specialOffer.validDays}
            </p>

            <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">
              Order / Enquire
            </button>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-4/3 relative">
            <img
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop"
              alt="Special Offer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
