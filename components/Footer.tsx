import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-ren-gold/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
            <Logo className="mb-4 scale-90 origin-left" />
            <p className="text-gray-600 text-xs tracking-widest uppercase">© 2024 The Ren Cafe. Tüm Hakları Saklıdır.</p>
        </div>

        <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-ren-gold text-sm transition-colors">KVKK</a>
            <a href="#" className="text-gray-500 hover:text-ren-gold text-sm transition-colors">Gizlilik</a>
            <a href="#" className="text-gray-500 hover:text-ren-gold text-sm transition-colors">İletişim</a>
        </div>
      </div>
    </footer>
  );
};