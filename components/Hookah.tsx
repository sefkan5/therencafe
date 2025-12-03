import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Wind, Star, CheckCircle } from 'lucide-react';

export const Hookah: React.FC = () => {
  return (
    <section id="hookah" className="py-24 bg-ren-dark relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ren-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute -left-20 top-40 w-64 h-64 bg-ren-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <span className="text-ren-gold font-serif text-lg tracking-widest uppercase">Premium Shisha</span>
            <h2 className="text-4xl md:text-5xl font-display text-white mt-2">Maltepe'nin 1 Numarası</h2>
            <div className="w-24 h-1 bg-ren-gold mx-auto mt-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, borderColor: 'rgba(203, 163, 92, 0.5)', boxShadow: '0 10px 30px -10px rgba(203, 163, 92, 0.15)' }}
            className="bg-ren-black p-8 border border-white/5 rounded-sm group transition-all duration-300"
          >
            <div className="w-14 h-14 bg-ren-dark rounded-full flex items-center justify-center mb-6 text-ren-gold group-hover:text-ren-black group-hover:bg-ren-gold transition-colors duration-300">
              <Star size={28} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-ren-gold transition-colors">Kürşat Usta'nın Eli</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Gerçek nargile gurmelerinin bildiği lezzet. Özel dolum teknikleri ve yılların ustalığı ile hazırlanan nargilelerimiz, boğaz yakmayan yumuşak bir içim sunar.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, borderColor: 'rgba(203, 163, 92, 0.5)', boxShadow: '0 10px 30px -10px rgba(203, 163, 92, 0.15)' }}
            className="bg-ren-black p-8 border border-white/5 rounded-sm group transition-all duration-300 relative overflow-hidden"
          >
             {/* Subtle Glow Effect inside card */}
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-ren-gold/5 rounded-full blur-2xl group-hover:bg-ren-gold/10 transition-colors"></div>

            <div className="w-14 h-14 bg-ren-dark rounded-full flex items-center justify-center mb-6 text-ren-gold group-hover:text-ren-black group-hover:bg-ren-gold transition-colors duration-300 relative z-10">
              <Wind size={28} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 relative z-10 group-hover:text-ren-gold transition-colors">Özel Aromalar</h3>
            <p className="text-gray-400 font-light leading-relaxed relative z-10">
              Klasik üzüm naneden, egzotik meyve karışımlarına kadar geniş tütün yelpazesi. Özellikle "Lady Killer" ve "Love 66" karışımlarımızı denemelisiniz.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, borderColor: 'rgba(203, 163, 92, 0.5)', boxShadow: '0 10px 30px -10px rgba(203, 163, 92, 0.15)' }}
            className="bg-ren-black p-8 border border-white/5 rounded-sm group transition-all duration-300"
          >
            <div className="w-14 h-14 bg-ren-dark rounded-full flex items-center justify-center mb-6 text-ren-gold group-hover:text-ren-black group-hover:bg-ren-gold transition-colors duration-300">
              <Flame size={28} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-ren-gold transition-colors">Sürekli Köz Servisi</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Keyfiniz asla yarım kalmaz. Deneyimli ekibimiz nargilenizin ateşini sürekli kontrol eder ve köz değişimini zamanında yapar.
            </p>
          </motion.div>

        </div>

        {/* Highlights List */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8"
        >
            {['Doğal Kömür', 'Alman Takımları', 'Hijyenik Marpuç', 'Bol Duman', 'VIP Loca'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-300 bg-ren-black/50 px-4 py-2 rounded-full border border-white/5 hover:border-ren-gold/30 transition-colors">
                    <CheckCircle size={18} className="text-ren-gold" />
                    <span className="text-sm uppercase tracking-wider font-medium">{item}</span>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};