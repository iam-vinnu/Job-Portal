import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/footer'
import HeroSection from './HeroSection'
import CategoryCarousal from './CategoryCarousal'
import LatestJobs from './LatestJobs'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousal/>
        <LatestJobs/>
    </div>
  )
}

export default Home