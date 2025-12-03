import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-ren-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-ren-gold font-serif text-lg tracking-widest uppercase">İletişim</span>
            <h2 className="text-4xl md:text-5xl font-display text-white mt-2 mb-8">Bize Ulaşın</h2>
            <p className="text-gray-400 mb-10 font-light">
                Rezervasyon yaptırmak veya özel etkinlikleriniz için bizimle iletişime geçin. 
                Siz gelin, gerisini bize bırakın.
            </p>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-ren-black p-3 rounded-full text-ren-gold border border-white/10">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-serif text-lg mb-1">Adres</h4>
                        <p className="text-gray-400 font-light text-sm">Yalı, Rıhtım Cd. No:13, 34000<br/>Maltepe / İstanbul</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-ren-black p-3 rounded-full text-ren-gold border border-white/10">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-serif text-lg mb-1">Telefon</h4>
                        <p className="text-gray-400 font-light text-sm">+90 538 017 12 26</p>
                        <a href="https://wa.me/905380171226?text=Merhaba%20rezervasyon%20için%20yazıyorum" className="text-ren-gold text-xs uppercase tracking-widest mt-2 block hover:underline">WhatsApp'tan Yazın</a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-ren-black p-3 rounded-full text-ren-gold border border-white/10">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-serif text-lg mb-1">Çalışma Saatleri</h4>
                        <p className="text-gray-400 font-light text-sm">Her Gün: 07:00 - 06:00</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-12">
               <a href="#" className="inline-flex items-center gap-2 text-gray-400 hover:text-ren-gold transition-colors">
                   <Instagram size={20} />
                   <span className="text-sm tracking-wider">@therencafe</span>
               </a>
            </div>
          </div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[500px] bg-gray-800 rounded-sm overflow-hidden border border-white/10 relative"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.2088820769181!2d29.127070687011226!3d40.92233017910144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7f74181cc93%3A0x2f5492cc4f5d660!2sThe%20Ren%20Cafe!5e0!3m2!1str!2str!4v1764414317732!5m2!1str!2str" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};