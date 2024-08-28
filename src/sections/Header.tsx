"use client"; 

import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; 

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
          Home
        </a>
        <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
          About
        </a>
        <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
          Projects
        </a>
        {/* <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
          Contact
        </a> */}
      </nav>
    </div>
  );
};
