import React, { useState, useEffect } from 'react';
import './App.css';
import './index.tailwind.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import HealthInsurance from './components/HealthInsurance';
import AutoInsurance from './components/AutoInsurance';
import HomeownersInsurance from './components/HomeownersInsurance';
import QuoteForm from './components/QuoteForm';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'health', 'auto', 'homeowners', 'quote'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header scrollToSection={scrollToSection} activeSection={activeSection} />
        <Hero scrollToSection={scrollToSection} />
        <AboutUs scrollToSection={scrollToSection} />
        <HealthInsurance scrollToSection={scrollToSection} />
        <AutoInsurance scrollToSection={scrollToSection} />
        <HomeownersInsurance scrollToSection={scrollToSection} />
        <QuoteForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
