import React from 'react'
import Header from '../../components/Header'
import Hero2 from '../../components/Hero2'
import PatientInfo from '../../components/PatientInfo'
import DoctorAppointmentList from '../../components/DoctorAppointmentList'
import SetAvailability from '../../components/SetAvailability'
import Footer from '../../components/Footer'
function PatientVisitorDS() {
    return (
        <div>
            <Header />
            <Hero2 title="..." image ="/src/assets/patient-visitor-.jpg"/>
            <PatientInfo />
            <DoctorAppointmentList />
            <SetAvailability />
            <Footer />
        </div>
    )
}

export default PatientVisitorDS
