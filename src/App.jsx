import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import Types from './components/Types'
import Productgrid from './components/Productgrid'
import Banner from './components/Banner'
import Reviews from './components/Reviews'
import Insta from './components/Insta'
import Footer from './components/Footer'
import { Services } from './components/Services'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Category/>
    <Types/>
    <Services/>
    <Productgrid/>
    <Banner/>
    <Reviews/>
    <Insta/>
    <Footer/>
    </>
  )
}

export default App