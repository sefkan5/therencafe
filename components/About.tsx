import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-ren-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 border border-ren-gold/30 rounded-sm z-0 translate-x-4 translate-y-4"></div>
            <img 
              src="/Foto/foto2.png" 
              alt="Cozy Cafe Interior" 
              className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale-[20%] contrast-125"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-ren-gold font-serif text-lg tracking-widest mb-2 uppercase">Hakkımızda</h4>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-8 leading-tight">
              Kurumsal Kalite,<br /> <span className="text-ren-bronze italic font-serif">Samimi Atmosfer</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed mb-6 font-light">
              The Ren Cafe, yıllardır Maltepe'de nargile ve cafe kültürünün zirvesinde yer alan bir kaçış noktasıdır. 
              Modern tasarımın sıcak detaylarla harmanlandığı mekânımızda, sizi şehrin gürültüsünden uzaklaştırıp 
              kendi evinizdeymiş gibi hissettirmeyi amaçlıyoruz.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8 font-light">
              Müşteri memnuniyeti, üstün hijyen standartları ve değişmeyen lezzet kalitesi bizim için sadece bir hedef değil, 
              vazgeçilmez bir değerdir. Ailenizle keyifli bir kahvaltı yapmak veya arkadaşlarınızla premium bir nargile 
              deneyimi yaşamak için sizleri bekliyoruz.
            </p>

            <div className="flex gap-8 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl text-ren-gold font-display font-bold">4.6</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Google Puanı</p>
              </div>
              <div>
                <h3 className="text-3xl text-ren-gold font-display font-bold">140+</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Mutlu Yorum</p>
              </div>
              <div>
                <h3 className="text-3xl text-ren-gold font-display font-bold">∞</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Keyif</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};