import React from 'react'
import Header from '../../components/Header'
import Hero2 from '../../components/Hero2'
import Question from '../../components/Question'
import Footer from '../../components/Footer'
function AskDoctor() {
    return (
        <div>
            <Header />
            <Hero2  title="Question To Ask" image ="/src/assets/talking-to-a-doctor.jpg"/>
            <Question />
            <Footer />
        </div>
    )
}

export default AskDoctor
