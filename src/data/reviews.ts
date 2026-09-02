export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Ramesh Varma',
    rating: 5,
    text: 'The Hyderabadi Dum Biryani here is hands down the best in Visakhapatnam! Authentic spices, fragrant saffron rice, and perfectly tender meat. The seaside ambience is simply unmatched.',
    date: 'August 24, 2026',
    avatar: 'https://ui-avatars.com/api/?name=Ramesh+Varma&background=random',
  },
  {
    id: 'rev-2',
    name: 'Ananya Sharma',
    rating: 5,
    text: 'Celebrated our family anniversary at Spice Street. The Dal Makhani Bukhara and Butter Garlic Naan were extraordinary. Extremely courteous staff and prompt service.',
    date: 'August 18, 2026',
    avatar: 'https://ui-avatars.com/api/?name=Ananya+Sharma&background=random',
  },
  {
    id: 'rev-3',
    name: 'Rajesh Kulkarni',
    rating: 4,
    text: 'Remarkable North Indian flavors right by Beach Road. We especially loved the Paneer Tikka Shashlik and thick Mango Malai Lassi. It gets lively on weekend evenings, so definitely reserve ahead.',
    date: 'August 10, 2026',
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kulkarni&background=random',
  },
  {
    id: 'rev-4',
    name: 'Sneha Reddy',
    rating: 5,
    text: 'The Coastal Andhra Fish Curry had that perfect authentic tangy zest coupled with fine dining elegance. Finishing with the Kesari Rasmalai made it an unforgettable dinner.',
    date: 'July 29, 2026',
    avatar: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=random',
  },
  {
    id: 'rev-5',
    name: 'Vikramaditya Rao',
    rating: 5,
    text: 'Incredible culinary standard! Every curry boasts its own unique, slow-cooked spice profile rather than standard base gravy. Outstanding hospitality and warm ambiance.',
    date: 'July 15, 2026',
    avatar: 'https://ui-avatars.com/api/?name=Vikramaditya+Rao&background=random',
  },
  {
    id: 'rev-6',
    name: 'Pooja Mehta',
    rating: 4,
    text: 'Wonderful vibe and impeccable taste. The Murgh Tandoori was smoky and tender, and the warm Shahi Gulab Jamun melted in our mouths. Will definitely visit again with friends.',
    date: 'July 03, 2026',
    avatar: 'https://ui-avatars.com/api/?name=Pooja+Mehta&background=random',
  },
];
