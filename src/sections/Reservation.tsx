import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { restaurant } from '../data/restaurant';

export const Reservation: React.FC = () => {
  const { ref, inView: isInView } = useInView({ threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    requests: ''
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests) newErrors.guests = 'Number of guests is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div>
            <span className="uppercase text-brand-500 tracking-widest text-sm font-semibold">BOOK A TABLE</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-900 mt-2">
              Reserve Your Experience
            </h2>
            <p className="text-warm-600 mt-4 leading-relaxed">
              Whether it's a family dinner, a romantic evening, or a celebration — we'll make it special.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-brand-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-warm-900">Phone</h4>
                  <p className="text-warm-600 mt-1">{restaurant.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-warm-900">Email</h4>
                  <p className="text-warm-600 mt-1">{restaurant.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-warm-900">Address</h4>
                  <p className="text-warm-600 mt-1">{restaurant.address.full}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-warm-50 rounded-xl">
              <h4 className="font-semibold text-warm-900 mb-4">Opening Hours</h4>
              <div className="space-y-2 text-sm text-warm-600">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span>{restaurant.openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat – Sun</span>
                  <span>{restaurant.openingHours.weekends}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-brand-50 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                <CheckCircle className="text-brand-500 w-16 h-16 mb-4" />
                <h3 className="text-2xl font-heading font-bold text-warm-900 mb-2">Reservation Request Received!</h3>
                <p className="text-warm-600 mb-8">Our team will contact you shortly to confirm your booking.</p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', date: '', time: '', guests: '', requests: '' }); }}
                  className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-warm-50 p-8 rounded-xl space-y-5">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white text-warm-800" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white text-warm-800" />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white text-warm-800" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Date</label>
                    <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white text-warm-800" />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Time</label>
                    <select name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white text-warm-800">
                      <option value="">Select time</option>
                      {['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">Guests</label>
                    <select name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white text-warm-800">
                      <option value="">Number</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    </select>
                    {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Special Requests (Optional)</label>
                  <textarea name="requests" value={formData.requests} onChange={handleChange} rows={3} className="w-full px-4 py-3 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white text-warm-800"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-lg font-semibold transition-colors mt-2">
                  Request Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
