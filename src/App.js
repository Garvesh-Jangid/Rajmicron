import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Benchmark from './components/feature/benchmark';
import ParticleSizeComparison from './components/feature/particle'; 
import Services from './components/Services';
import Contact from './components/contact';
import Footer from './components/Footer';
import ProcessCards from './components/feature/process';
import IndustriesCards from './components/feature/industries';

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
      <ProcessCards />
      <IndustriesCards />
      {/* <Services />
      <Contact />
      <Footer />  */}
    </div>
  );
};

export default App;