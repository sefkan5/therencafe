import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* PNG LOGO */}
      <img 
        src="/Foto/logo.png"   // public klasöründe olmalı 
        alt="The Ren Cafe Logo"
        className="w-10 h-10 object-contain"
      />

      <div className="flex flex-col">
        <span className="font-display font-bold text-ren-light tracking-[0.2em] text-sm md:text-base">THE REN</span>
        <span className="font-serif text-[10px] text-ren-gold tracking-widest uppercase opacity-80">Cafe & Lounge</span>
      </div>
    </div>
  );
};
