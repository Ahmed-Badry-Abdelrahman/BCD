import React from 'react';
import Header from '../../components/Header'
import Hero2 from "../../components/Hero2";
import About from '../../components/About';
import DoctorCard from '../../components/DoctorCard';
import Footer from '../../components/Footer';
import './about-page.css';

function AboutPage() {
  return (
    <div>
      <Header />
      <Hero2  title="About Al BCD" image ="/src/assets/about-page1.png"/>
      <About />
      <DoctorCard />
      <Footer />
    </div>
  )
}

export default AboutPage;