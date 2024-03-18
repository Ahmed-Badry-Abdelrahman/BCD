import React from 'react';
import Header from '../../components/Header'
import Hero2 from "../../components/Hero2";
import ServiceCard2 from '../../components/ServiceCard2';
import Footer from '../../components/Footer';
import './services.css';
function Services() {
  return (
    <div>
      <Header />
      <Hero2 title="Our Services" image="/src/assets/Medical-Services1.png" />
      <ServiceCard2 image="/src/assets/SAppointment.png" title="Up Rumors" description="Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys." btnText="Up Rumors" link="/Up Rumors" />
      <ServiceCard2 image="/src/assets/s2.png" title="Our Doctor" description="Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys." btnText="Find a doctor" link="/find-a-doctor" />
      <ServiceCard2 image="/src/assets/s1.png" title="Appointments" description="Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys.Explore the experiences of other individuals facing similar journeys." btnText="Appointments" link="/PatientVisitor" />
      <Footer />
    </div>
  )
}

export default Services;