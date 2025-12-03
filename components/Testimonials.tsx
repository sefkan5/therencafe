import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  { id: 1, name: "Ahmet Y.", comment: "Maltepe’de nargile içilecek en iyi yer. Personel çok ilgili, ortam çok ferah. Kendi evimde gibi hissediyorum.", rating: 5 },
  { id: 2, name: "Selin K.", comment: "Tatlıları ve kahvaltısı efsane. Özellikle künefesi için geliyoruz. Akşamları ambiyans çok şık.", rating: 5 },
  { id: 3, name: "Burak D.", comment: "10 numara 5 yıldız mekan! Nargile kömürü bir an olsun bitmiyor, servis çok hızlı. Fiyatlar da kaliteye göre gayet makul.", rating: 5 },
  { id: 4, name: "Merve T.", comment: "Arkadaşlarınızla uzun süre oturup sohbet edebileceğiniz, müziğin rahatsız etmediği kaliteli bir lounge.", rating: 5 },
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-ren-dark relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <div className="mb-12 flex justify-center text-ren-gold/30">
            <Quote size={64} className="rotate-180" />
        </div>

        <div className="relative h-64 md:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-2xl text-gray-200 font-serif italic leading-relaxed mb-8">
                "{reviews[current].comment}"
              </p>
              
              <div className="flex flex-col items-center">
                <span className="text-ren-gold font-display font-bold text-lg tracking-wide uppercase">
                  {reviews[current].name}
                </span>
                <div className="flex gap-1 mt-2 text-ren-gold">
                   {[...Array(reviews[current].rating)].map((_, i) => (
                       <span key={i}>★</span>
                   ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === idx ? 'bg-ren-gold w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};