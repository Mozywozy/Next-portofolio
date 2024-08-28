"use client";
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <div>
      {loading ? <Loader /> : (
        <>
          <Header/>
          <HeroSection/>
          <AboutSection/>
          <TapeSection/>
          <ProjectsSection/>
          <ContactSection/>
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Home;
