import React from 'react'
import './VenuesPage.css'
import { useParams } from 'react-router-dom'
import Header from '../../../components/Website/Header/Header'
import PerVenueDetails from "../../../components/Website/PerVenueDetails/PerVenueDetails";
import VenueForm from "../../../components/Website/VenueFrom/VenueForm";
import Footer from '../../../components/Website/Footer/Footer'
import VenuePagePlanning from "../../../components/Website/VenuePagePlanning/VenuePagePlanning";
import VenuePageAbout from "../../../components/Website/VenuePageAbout/VenuePageAbout";
import RelatedVenue from "../../../components/Website/RelatedVenue/RelatedVenue";
import TestimonialCrousel from "../../../components/Website/TestimonialCrousel/TestimonialCrousel";
import FullLayout from "../../../components/Website/FullLayout/FullLayout";
import SecondFaq from "../../../components/Website/SecondFaq/SecondFaq";

import venuedata from '../../../VenueData/VenueData'
import GoToTop from '../../../components/Website/GoToTop/GoToTop'

const VenuesPage = () => {
  const perms = useParams()
  console.log("##########################", perms)
  const thatvenue = venuedata.find((item) => item._id === perms.id);
  
  // Handle case when venue is not found
  if (!thatvenue) {
    return (
      <>
        <GoToTop/>
        <Header/>
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h2>Venue not found</h2>
          <p>The venue you're looking for doesn't exist.</p>
        </div>
        <Footer/>
      </>
    )
  }
  
  return (
    <>
    <GoToTop/>
    <Header/>
    <PerVenueDetails thatvenue={thatvenue} />
    <VenueForm/>
    <VenuePagePlanning/>
    <VenuePageAbout/>
    <RelatedVenue/>
    <TestimonialCrousel/>
    <FullLayout/>
    <SecondFaq/>
    <Footer/>
    </>
  )
}

export default VenuesPage
