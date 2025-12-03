import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';

const highlights: MenuItem[] = [
  {
    id: 1,
    title: "The Ren Özel Nargile",
    description: "Damakta iz bırakan aromalar, özenle hazırlanmış köz ayarı ve her nefeste premium bir deneyim…",
    image: "/Foto/nargile1.png",
    category: "dessert"
  },
  {
    id: 2,
    title: "The Ren Burger",
    description: "180gr ev yapımı köfte, karamelize soğan, cheddar peyniri ve özel sosumuzla.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2799&auto=format&fit=crop",
    category: "food"
  },
  {
    id: 3,
    title: "Kahvaltı Tabağı",
    description: "Yöresel peynirler, ev yapımı reçeller, sıcak hamur işleri ve sınırsız çay.",
    image: "/Foto/serpme.png",
    category: "food"
  },
  {
    id: 4,
    title: "The Ren Pizza",
    description: "Odun ateşinde pişen, pastırma ve özel tesleyen sosun efsane uyumu!",
    image: "/Foto/pizza.png",
    category: "drink"
  }
];

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-ren-black relative">
       {/* Background accent */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-ren-dark/30 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-ren-gold font-serif text-lg tracking-widest uppercase">Gastronomi</span>
            <h2 className="text-4xl md:text-5xl font-display text-white mt-2">Lezzet Sanatı</h2>
            <p className="mt-4 text-gray-400 font-light max-w-lg mx-auto">
                Her damak tadına uygun, özenle seçilmiş malzemelerle hazırlanan imza lezzetlerimiz.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {highlights.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.8)" }}
              className="group flex flex-col md:flex-row bg-ren-dark rounded-sm overflow-hidden border border-white/5 hover:border-ren-gold/40 transition-all duration-300 relative"
            >
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative bg-ren-dark">
                 {/* Decorative Line & Glow */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-ren-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-ren-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-ren-gold transition-colors duration-300 relative z-10">{item.title}</h3>
                <p className="text-gray-400 font-light text-sm mb-6 leading-relaxed line-clamp-3 relative z-10 group-hover:text-gray-300">
                  {item.description}
                </p>
                <div className="mt-auto relative z-10 flex justify-between items-center">
                    <span className="text-xs font-bold text-ren-bronze uppercase tracking-widest border-b border-ren-bronze/30 pb-1">
                        Şefin Tavsiyesi
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 text-ren-gold transition-opacity duration-300">
                         ➔
                    </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://qr.tntteknoloji.com/theren", "_blank")}
                className="px-10 py-4 border border-ren-gold text-ren-gold hover:bg-ren-gold hover:text-ren-black hover:shadow-[0_0_20px_rgba(203,163,92,0.4)] transition-all duration-300 uppercase tracking-widest font-bold text-xs"
            >
                Tüm Menüyü Gör
            </motion.button>
        </div>

      </div>
    </section>
  );
};