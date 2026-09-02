import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { galleryImages } from '../data/gallery';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, inView: isInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
      if (e.key === 'ArrowRight') setSelectedImage((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
    };

    window.addEventListener('keydown', handleKeyDown);
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-warm-900 text-center">
            A Glimpse Inside
          </h2>
          <p className="text-warm-500 text-center mt-3">
            Step into the world of Spice Street
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg cursor-pointer aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-warm-300"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-warm-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={galleryImages[selectedImage].src} 
            alt={galleryImages[selectedImage].alt} 
            className="max-w-4xl max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-warm-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
            }}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};
