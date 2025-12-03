import React from 'react';
import { motion } from 'framer-motion';

const images = [
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-ren-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ren-gold font-serif text-lg tracking-widest uppercase"></span>
          <h2 className="text-4xl md:text-5xl font-display text-white mt-2"></h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-sm break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="border border-ren-gold/50 p-4">
                     <span className="text-ren-gold font-serif tracking-widest uppercase text-sm">The Ren</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};