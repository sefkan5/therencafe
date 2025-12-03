import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-ren-black">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: bgY, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-ren-black/30 to-ren-black z-20"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <img 
          src="/Foto/arkaplan.png" 
          alt="Luxury Hookah Lounge" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Realistic Smoke Layers */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
         {/* Layer 1 - Slow move right */}
         <motion.div 
           initial={{ x: "-10%" }}
           animate={{ x: "10%" }}
           transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
           className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/s1mpson/codepen-assets/master/fog1.png')] bg-cover opacity-60"
         />
         {/* Layer 2 - Slow rotate/move */}
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('https://raw.githubusercontent.com/s1mpson/codepen-assets/master/fog1.png')] bg-cover opacity-40"
         />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="block text-ren-gold font-serif italic text-xl md:text-2xl mb-4 tracking-wider">
            Premium Lounge Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight drop-shadow-2xl"
        >
          THE REN CAFE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-gray-300 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto"
        >
          Maltepe’nin en seçkin nargile ve cafe deneyimi.
          <br className="hidden md:block" /> Kalite, konfor ve lezzetin buluşma noktası.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
           <Link 
            to="contact" 
            smooth={true}
            duration={100}
            className="px-8 py-4 bg-ren-gold text-ren-black font-bold uppercase tracking-widest hover:bg-ren-highlight hover:shadow-[0_0_20px_rgba(203,163,92,0.4)] transition-all duration-300 cursor-pointer rounded-sm"
           >
             Rezervasyon Yap
           </Link>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=40.92233487738686, 29.127730635881644"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 backdrop-blur-sm text-white font-bold uppercase tracking-widest hover:bg-white hover:text-ren-black transition-all duration-300 cursor-pointer rounded-sm"
            >
              Yol Tarifi Al
            </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-10 z-20 text-white/50 cursor-pointer"
      >
        <Link to="about" smooth={true} duration={100} offset={-80}>
          <ChevronDown size={40} className="hover:text-ren-gold transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
};