import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import MissionVision from './components/missionvision';
import Benchmark from './components/feature/benchmark';
import ClientTestimonials from './components/feature/clientst';
import ParticleSizeComparison from './components/feature/particle'; 
import Services from './components/Services';
import Contact from './components/contact';
import Footer from './components/Footer';
import ProcessCards from './components/feature/process';
import IndustriesCards from './components/feature/industries';
import OurServices from './components/feature/ourservices';
import RequirementForm from './components/form/form';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <MissionVision />
      <Benchmark />
      <ParticleSizeComparison />
      <WhyChooseUs />
      <IndustriesCards />
      <OurServices />
      <ProcessCards />
      <ClientTestimonials />
      <Contact /> 
      <RequirementForm/>
      <Footer />
    </div>
  );
};

export default App;