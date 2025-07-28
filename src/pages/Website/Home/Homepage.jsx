import React from 'react'
import Header from '../../../components/Website/Header/Header'
import Mainsection from '../../../components/Website/Mainsection/Mainsection'
import Maindown from '../../../components/Website/Maindown/Maindown'
import Venue from '../../../components/Website/Venue/Venue'
import PlanWithAarambh from '../../../components/Website/PlanWithAarambh/PlanWithAarambh'
import Checklist from '../../../components/Website/Checklist/Checklist'
import THemes from '../../../components/Website/Themes/Themes'
import Parallex from '../../../components/Website/Parallex/Parallex'
import Testimonials from '../../../components/Website/Testimonials/Testimonials'
import VideoStories from '../../../components/Website/VideoStories/VideoStories'
import WhyAarambh from '../../../components/Website/WhyAarambh/WhyAarambh'
import CitySection from '../../../components/Website/CitySection/CitySection'
import VenueListSection from '../../../components/Website/VenueListSection/VenueListSection'
import FAQ from '../../../components/Website/FAQ/Faq'
import Blogsection from '../../../components/Website/BlogaSection/Blogsection'
import Footer from '../../../components/Website/Footer/Footer'
import GoToTop from '../../../components/Website/GoToTop/GoToTop'
import Popup from '../../../components/Website/Popup/Popup'

const Homepage = () => {
  return (
    <>
      <GoToTop/>
      <Popup/>
      <Header/>
      <Mainsection/>
      <Maindown/>
      <Venue/>
      <PlanWithAarambh/>
      <Checklist/>
      <THemes/>
      <Parallex/>
      <Testimonials/>
      <VideoStories/>
      <WhyAarambh/>
      <CitySection/>
      <VenueListSection/>
      <FAQ/>
      <Blogsection/>
      <Footer/>
    </>
  )
}

export default Homepage
