import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Hookah } from './components/Hookah';
import { Menu } from './components/Menu';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-ren-black min-h-screen text-gray-100 font-sans selection:bg-ren-gold selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Hookah />
      <Menu />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;