import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { reviews } from '../data/reviews';

export const Reviews: React.FC = () => {
  const { ref, inView: isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="reviews" ref={ref} className="py-20 lg:py-28 bg-warm-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center">
            What Our Guests Say
          </h2>
          <p className="text-warm-400 text-center mt-3">
            Don't just take our word for it
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Quote className="text-brand-400 mb-4" size={32} />
                <p className="text-warm-200 italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < review.rating ? "text-brand-400 fill-brand-400" : "text-warm-600"} 
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-white font-medium">{review.name}</h4>
                    <span className="text-warm-500 text-sm">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
