import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default LandingPage