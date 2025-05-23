import React from "react";

import CoreFeatures from "../components/homepage/CoreFeatures";
import About from "../components/homepage/About";
import Services from "../components/homepage/Services";
import FunFacts from "../components/homepage/FunFacts";
import Testimonials from "../components/homepage/Testimonials";
import ContactForm from "../components/homepage/ContactForn";
import FullScreen from "../components/homepage/FullScreen";
import HeroSection from "../components/homepage/HeroSection";

const Home = () => {
  return (
    <>
      <section id="home">
        <FullScreen />
      </section>

      <section id="features">
        <CoreFeatures />
      </section>
      
      <section id="services">
        <Services />
      </section>
      

      <section id="about">
        <About/>
      </section>

      <section id="funfacts">
        <FunFacts />
      </section>

    

     

     {/*} <section id="testimonials">
        <Testimonials />
      </section>*/}

      <section id="contact">
        <ContactForm />
      </section>
   
    </>
  );
};

export default Home;
