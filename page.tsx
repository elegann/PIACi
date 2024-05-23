
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Cards from './components/Cards'
function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <div className="grid-flow-col justify-center items-center bg-blue-600 "></div>
    
    </div>
  )
}

export default page