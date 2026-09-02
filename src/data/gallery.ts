export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryCategories = ['All', 'Food', 'Ambience', 'Kitchen', 'Events'] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryImages: GalleryImage[] = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    alt: 'Warm and inviting main dining hall with rustic wooden accents',
    category: 'Ambience',
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    alt: 'Fine dining seating arrangement by the window',
    category: 'Ambience',
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    alt: 'Modern bar and beverage lounge area',
    category: 'Ambience',
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop',
    alt: "Chef's signature royal Indian thali feast platter",
    category: 'Food',
  },
  {
    id: 'gal-5',
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop',
    alt: 'Hyderabadi Dum Biryani cooked with fragrant saffron and herbs',
    category: 'Food',
  },
  {
    id: 'gal-6',
    src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop',
    alt: 'Creamy Old Delhi Butter Chicken served with fresh coriander garnish',
    category: 'Food',
  },
  {
    id: 'gal-7',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    alt: 'Master chefs meticulously plating gourmet delicacies in the live kitchen',
    category: 'Kitchen',
  },
  {
    id: 'gal-8',
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop',
    alt: 'Open-air seaside terrace dining setup for private celebrations and events',
    category: 'Events',
  },
];

export const gallery = galleryImages;
