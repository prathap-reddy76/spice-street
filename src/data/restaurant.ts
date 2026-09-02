export const restaurant = {
  name: 'Spice Street',
  tagline: 'Authentic Flavours. Modern Experience.',
  description: 'At Spice Street, every dish tells a story — of heritage recipes passed down through generations, of the finest spices sourced from across India, and of a passion for creating unforgettable dining experiences. Located in the heart of Visakhapatnam, we bring you authentic Indian cuisine with a modern touch.',
  phone: '+91 98765 43210',
  email: 'hello@spicestreet.in',
  whatsappNumber: '919876543210',
  address: {
    street: '42, Beach Road, MVP Colony',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    zip: '530017',
    country: 'India',
    full: '42, Beach Road, MVP Colony, Visakhapatnam, Andhra Pradesh 530017',
  },
  openingHours: {
    weekdays: '11:00 AM – 11:00 PM',
    weekends: '10:00 AM – 11:30 PM',
    display: '11:00 AM – 11:00 PM',
  },
  rating: 4.8,
  totalReviews: 1240,
  mapsLink: 'https://maps.google.com/?q=Visakhapatnam+Beach+Road',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
  socialLinks: {
    instagram: 'https://instagram.com/spicestreet',
    facebook: 'https://facebook.com/spicestreet',
    twitter: 'https://twitter.com/spicestreet',
    youtube: 'https://youtube.com/@spicestreet',
  },
  whatsappMessage: 'Hi Spice Street, I would like to know more about your restaurant.',
  specialOffer: {
    badge: 'WEEKEND SPECIAL',
    title: 'Family Biryani Feast',
    description: 'A royal spread of aromatic Hyderabadi biryani with raita, salan, and dessert — perfect for the whole family.',
    serves: 4,
    originalPrice: 1399,
    price: 999,
    validDays: 'Friday – Sunday',
  },
} as const;

export type Restaurant = typeof restaurant;
