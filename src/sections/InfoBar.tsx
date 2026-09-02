import React from 'react';
import { MapPin, Clock, Phone, Star } from 'lucide-react';
import { restaurant } from '../data/restaurant';

export function InfoBar() {
  const items = [
    {
      icon: <MapPin className="text-brand-400" size={24} />,
      label: 'Our Location',
      value: `${restaurant.address.city}, ${restaurant.address.state}`,
    },
    {
      icon: <Clock className="text-brand-400" size={24} />,
      label: 'Opening Hours',
      value: restaurant.openingHours.display,
    },
    {
      icon: <Phone className="text-brand-400" size={24} />,
      label: 'Call Us',
      value: restaurant.phone,
    },
    {
      icon: <Star className="text-brand-400" size={24} />,
      label: 'Customer Rating',
      value: `${restaurant.rating}/5 (${restaurant.totalReviews} reviews)`,
    },
  ];

  return (
    <div className="bg-warm-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="mb-1">{item.icon}</div>
              <span className="text-warm-400 text-xs uppercase tracking-wider font-semibold">
                {item.label}
              </span>
              <span className="text-white font-medium text-sm sm:text-base">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
