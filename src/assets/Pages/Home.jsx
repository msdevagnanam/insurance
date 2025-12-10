import React from 'react'
import Navbar from '../Homepages/Navbar'
import Herosection from '../Homepages/Herosection'
import ProductsSection from '../Homepages/ProductSection'
import BetterChoice from '../Homepages/BetterChoice'
import WhyChoose from '../Homepages/WhyChoose'
import PhilippinesSection from '../Homepages/PhilippinesSection'
import Reviews from '../Homepages/Reviews'
import CustomerCall from '../Homepages/CustomerCall'
import RightCoverage from '../Homepages/RightCoverage'
import Accordion from '../Homepages/Accordion'
import Footer from '../Homepages/Footer'
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
    <CustomerCall />
    <RightCoverage />
    <Accordion />
    <Footer />
    </>
  )
}

export default Home