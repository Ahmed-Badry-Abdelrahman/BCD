import React from 'react';
import Header from '../../components/Header'
import Hero2 from "../../components/Hero2";
// import MapContainer from '../../components/GoogleMap'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer';
import './contact.css';
function Contact() {
  return (
    <div>
      <Header/>
      <Hero2 title="Contact Us" image ="/src/assets/google-map.png"/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact;