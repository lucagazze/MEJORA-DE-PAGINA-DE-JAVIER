import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import TestimonialsSection from './components/TestimonialsSection';
import BenefitsSection from './components/BenefitsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <main className="min-h-screen font-sans bg-white selection:bg-primary selection:text-white">
      <Hero />
      <Intro />
      <TestimonialsSection />
      <BenefitsSection />
      <ContactForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}

export default App;