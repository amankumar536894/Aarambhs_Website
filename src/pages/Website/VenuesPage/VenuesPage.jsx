import React, { useState, useEffect } from 'react'
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
import GoToTop from '../../../components/Website/GoToTop/GoToTop'

const VenuesPage = () => {
  const params = useParams()
  const [venue, setVenue] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/venues/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch venue')
        }
        const data = await response.json()
        if (data.success) {
          setVenue(data.data)
        } else {
          setError(data.message || 'Failed to fetch venue')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchVenue()
    }
  }, [params.id])

  if (loading) {
    return (
      <>
        <GoToTop/>
        <Header/>
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h2>Loading venue...</h2>
        </div>
        <Footer/>
      </>
    )
  }

  if (error || !venue) {
    return (
      <>
        <GoToTop/>
        <Header/>
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h2>Venue not found</h2>
          <p>{error || "The venue you're looking for doesn't exist."}</p>
        </div>
        <Footer/>
      </>
    )
  }
  
  return (
    <>
    <GoToTop/>
    <Header/>
    <PerVenueDetails thatvenue={venue} />
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
