import React from 'react'
import './patient-visitor.css'
import Header from '../../components/Header'
import Hero2 from '../../components/Hero2'
import PatientInfo from '../../components/PatientInfo'
import Appointments from '../../components/Appointments'
import PatientStoriesSlider from '../../components/patientSliderStoreys'
import Footer from '../../components/Footer'
function PatientVisitor() {
    return (
        <div>
            <Header />
            <Hero2 title="..." image ="/src/assets/patient-visitor-.jpg"/>
            <PatientInfo />
            <Appointments />
            <PatientStoriesSlider />
            <Footer />
        </div>
    )
}

export default PatientVisitor
