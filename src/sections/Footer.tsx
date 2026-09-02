import { MapPin, Phone, Mail } from 'lucide-react';
import { restaurant } from '../data/restaurant';
import { smoothScrollTo } from '../utils/smoothScroll';

const socialLinks = [
  { name: 'Instagram', href: restaurant.socialLinks.instagram, icon: '📷' },
  { name: 'Facebook', href: restaurant.socialLinks.facebook, icon: '📘' },
  { name: 'Twitter', href: restaurant.socialLinks.twitter, icon: '🐦' },
  { name: 'YouTube', href: restaurant.socialLinks.youtube, icon: '▶️' },
];

const quickLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Menu', id: 'menu' },
  { label: 'About', id: 'about' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Reservations', id: 'reservation' },
  { label: 'Contact', id: 'contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-900 text-warm-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-white tracking-wider mb-3">
              {restaurant.name.toUpperCase()}
            </h2>
            <p className="text-warm-400 mb-6">{restaurant.tagline}</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 rounded-full bg-warm-800 flex items-center justify-center hover:bg-brand-500 transition-colors text-sm"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => smoothScrollTo(link.id)}
                    className="hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <p>
                Monday – Friday:<br />
                {restaurant.openingHours.weekdays}
              </p>
              <p>
                Saturday – Sunday:<br />
                {restaurant.openingHours.weekends}
              </p>
              <p className="text-warm-500 mt-2 italic text-sm">Closed on major holidays</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-brand-400 shrink-0" />
                <span>{restaurant.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-400 shrink-0" />
                <a href={`tel:${restaurant.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-brand-400 transition-colors">
                  {restaurant.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-400 shrink-0" />
                <a href={`mailto:${restaurant.email}`} className="hover:text-brand-400 transition-colors">
                  {restaurant.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-700/50 mt-10 pt-6 flex justify-between items-center flex-wrap gap-4">
          <p className="text-warm-500 text-sm">© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
          <p className="text-warm-600 text-sm">Crafted with ♥ for great food</p>
        </div>
      </div>
    </footer>
  );
};
