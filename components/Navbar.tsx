import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Ana Sayfa', to: 'hero' },
  { label: 'Hakkımızda', to: 'about' },
  { label: 'Nargile', to: 'hookah' },
  { label: 'Menü', to: 'menu' },
  { label: 'İletişim', to: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer">
           <Link to="hero" smooth={true} duration={100}>
              <Logo />
           </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={100}
              offset={-80}
              className="text-sm font-sans tracking-wide text-gray-300 hover:text-ren-gold transition-colors duration-300 cursor-pointer uppercase"
            >
              {item.label}
            </Link>
          ))}
          <a href="#contact" className="border border-ren-gold text-ren-gold px-5 py-2 rounded-sm text-xs tracking-widest hover:bg-ren-gold hover:text-ren-black transition-all duration-300 font-semibold uppercase">
            Rezervasyon
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ren-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-ren-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={100}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-serif text-white hover:text-ren-gold transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};