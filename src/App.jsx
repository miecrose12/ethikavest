

import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Journey from './components/journey/Journey'
import Trusted from './components/trusted/Trusted'
import Security from './components/security/Security'
import Back from './components/backed/Back'
import How from './components/how/How'
import Why from './components/why/Why'
import What from './components/what/What'
import Reserve from './components/reserve/Reserve'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Journey/>
      <Trusted/>
      <Security/>
      <Back/>
      <How/>
      <Why/>
      <What/>
      <Reserve/>
      <Footer/>
    </div>
  )
}

export default App