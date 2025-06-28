import React from 'react'
import Carousel from '../components/Carousel'
import MidBanner from '../components/MidBanner.jsx'
import Features from '../components/Features.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Carousel />
      <MidBanner/>
      <Features/>
    
    </div>
  )
}

export default Home
