import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Journey from './components/journey/Journey';
import Why from './components/why/Why';
import What from './components/what/What';
import How from './components/how/How';
import Security from './components/security/Security';
import Trusted from './components/trusted/Trusted';
import Back from './components/backed/Back';
import Reserve from './components/reserve/Reserve';
import Footer from './components/footer/Footer';
import WaitlistView from './components/waitlist/Wait';
import Terms from './components/terms and privacy/Terms';
import Privacy from './components/terms and privacy/Privacy';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Public Landing Page */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Hero />
              <Journey />
              <Why />
              <What />
              <How />
              <Security />
              <Trusted />
              <Back />
              <Reserve />
              <Footer />
            </>
          }
        />

        {/* Protected Admin Waitlist View - Hidden URL */}
        <Route path="/waitlist" element={<WaitlistView />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;