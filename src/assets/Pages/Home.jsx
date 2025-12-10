import React from 'react'
import Navbar from '../Homepages/Navbar'
import Herosection from '../Homepages/Herosection'
import ProductsSection from '../Homepages/ProductSection'
import BetterChoice from '../Homepages/BetterChoice'
import WhyChoose from '../Homepages/WhyChoose'
import PhilippinesSection from '../Homepages/PhilippinesSection'
import Reviews from '../Homepages/Reviews'
const Home = () => {
  return (
    <>
    <Navbar />
    <Herosection />
    <ProductsSection />
    <BetterChoice />
    <WhyChoose />
    <PhilippinesSection />
    <Reviews />
    </>
  )
}

export default Home