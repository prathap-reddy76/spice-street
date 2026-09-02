import React from 'react';
import { Leaf, ChefHat, Award, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: <Leaf size={28} className="text-brand-600" />,
      title: 'Fresh Ingredients',
      description: 'We source the finest spices and freshest produce to ensure every dish bursts with authentic flavour.',
      delay: 'animation-delay-100',
    },
    {
      icon: <ChefHat size={28} className="text-brand-600" />,
      title: 'Authentic Recipes',
      description: 'Our recipes have been perfected over generations, preserving the true essence of Indian cuisine.',
      delay: 'animation-delay-200',
    },
    {
      icon: <Award size={28} className="text-brand-600" />,
      title: 'Experienced Chefs',
      description: 'Our culinary team brings decades of expertise from the finest kitchens across India.',
      delay: 'animation-delay-300',
    },
    {
      icon: <Heart size={28} className="text-brand-600" />,
      title: 'Warm Hospitality',
      description: 'From the moment you walk in, our team ensures you feel welcomed and valued.',
      delay: 'animation-delay-400',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-900 mb-4">
            Why Spice Street?
          </h2>
          <p className="text-warm-500 text-lg">
            Every detail is crafted to make your dining experience unforgettable.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl bg-warm-50 hover:shadow-lg transition-all duration-500 text-center flex flex-col items-center transform ${
                inView ? `opacity-100 translate-y-0 ${feature.delay}` : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-warm-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-warm-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
