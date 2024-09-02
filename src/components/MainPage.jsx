import React from 'react'

import HomePage from './HomePage'
import AboutUs from './AboutUs'
import WhyChooseUs from './WhyChooseUs'
import TrainerSection from './TrainerSection'
import Membership from './Membership'
import Footer from './Footer'
import Navbar from './Navbar'

const MainPage = () => {
  return (
    <div>
    <div className='container mx-auto bg-neutral-900'>
      {/* <Navbar/> */}
      <HomePage/>
      <AboutUs/>
      <WhyChooseUs/>
      <TrainerSection/>
      <Membership/>
      <Footer/>
    </div>
    </div>
  )
}

export default MainPage