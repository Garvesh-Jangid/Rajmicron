import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Products from './components/Products';
import Benchmark from './components/feature/benchmark';
import ParticleSizeComparison from './components/feature/particle'; 
import Services from './components/Services';
import Contact from './components/contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <Benchmark />
      <ParticleSizeComparison />
      {/* <WhyChooseUs /> */}
      {/* <Industries />
      <Services />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;