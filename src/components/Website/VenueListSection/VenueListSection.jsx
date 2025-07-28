import React from 'react'
import './VenueListSection.css'
import listvenueleftimage from "../../../assets/listvenuesection/listvenueleftimg.jpg";
import listvenuesidesmall from "../../../assets/listvenuesection/listvenuesidesmall.jpg";

const VenueListSection = () => {
  return (
    <>
      <div className="venuelistsection">
        <p className='testimonialtitle'>Real wedding stories & BTS moments</p>
        <p className='testimonialdetails'>"Patna to Phera" , "Banaras ki Shaadi"</p>
        <div className="venuelistbigbox">
            <img className='listcityleftimg' src={listvenueleftimage} />
            <div className='listvenuerightdiv'>
                <p>List Your Venue</p>
                <div className='listvenuesection_small'>
                    <img src={listvenuesidesmall} />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default VenueListSection
