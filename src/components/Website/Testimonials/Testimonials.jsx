import React from 'react'
import "./Testimonials.css";
import testone from "../../../assets/testimonial/testone.webp";
import testtwo from "../../../assets/testimonial/testtwo.jpg";
import testthree from "../../../assets/testimonial/testthree.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <p className='testimonialtitle'>Real Weddings & Testimonials</p>
        <p className='testimonialdetails'>Patna ki shaadi aur Banarasi silk sab kuch Aarambhs ne perfect banaya</p>
        <div className="testimonialimagebox">
          <div className="testimonialimageouter">
            <img className='textimonialimage' src={testone} />
          </div>
          <div className="testimonialimageouter">
            <img className='textimonialimage' src={testtwo} />
          </div>
          <div className="testimonialimageouter">
            <img className='textimonialimage' src={testthree} />
          </div>
        </div>
        <div className='testreadbtn'><p>Read their Stories</p></div>
      </div>
    </>
  )
}

export default Testimonials 