import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { restaurant } from '../data/restaurant';

export const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const socialLinks = [
    { name: 'Instagram', href: restaurant.socialLinks.instagram, icon: '📷' },
    { name: 'Facebook', href: restaurant.socialLinks.facebook, icon: '📘' },
    { name: 'Twitter', href: restaurant.socialLinks.twitter, icon: '🐦' },
    { name: 'YouTube', href: restaurant.socialLinks.youtube, icon: '▶️' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-900 text-center mb-12 lg:mb-16">
            Find Us
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-bold text-warm-900 mb-8">{restaurant.name}</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-500 mt-1 shrink-0" size={22} />
                  <p className="text-warm-700">{restaurant.address.full}</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-brand-500 mt-1 shrink-0" size={22} />
                  <a href={`tel:${restaurant.phone.replace(/[^0-9+]/g, '')}`} className="text-warm-700 hover:text-brand-600 transition-colors">
                    {restaurant.phone}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-brand-500 mt-1 shrink-0" size={22} />
                  <a href={`mailto:${restaurant.email}`} className="text-warm-700 hover:text-brand-600 transition-colors">
                    {restaurant.email}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-brand-500 mt-1 shrink-0" size={22} />
                  <div className="text-warm-700 space-y-1">
                    <p>Mon – Fri: {restaurant.openingHours.weekdays}</p>
                    <p>Sat – Sun: {restaurant.openingHours.weekends}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={restaurant.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink size={18} />
                  Get Directions
                </a>
                <a
                  href={`https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(restaurant.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center text-warm-600 hover:bg-brand-500 hover:text-white transition-colors text-lg"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="h-80 lg:h-full min-h-[300px] rounded-xl overflow-hidden shadow-md">
              <iframe
                src={restaurant.mapsEmbed}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${restaurant.name} Location Map`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
