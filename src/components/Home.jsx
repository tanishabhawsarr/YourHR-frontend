import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './specific/HeroSection'
import CategoryCarousel from './specific/CategoryCarousel'
import LatestJobs from './specific/LatestJobs'
import Footer from './specific/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home