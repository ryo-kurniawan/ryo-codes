/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import BioSection from './components/Bio'
import ProjectSection from './components/Project'


const App = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <main>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <BioSection />
      <ProjectSection />
    </main>
  )
}

export default App