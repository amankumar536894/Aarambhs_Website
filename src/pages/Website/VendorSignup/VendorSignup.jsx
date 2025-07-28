import React from 'react'
import Header from '../../../components/Website/Header/Header'
import verndorimage from '../../../assets/images/vendorsign.jpg'
import './VendorSignup.css'
import '../LogginPage/LogginPage.css'

import { Link } from 'react-router-dom'

const VendorSignup = () => {
  return (
    <>
      <Header />
      <div className="vendorlogginpage">
        <img className='vendorlogginimage' src={verndorimage} />
        <div className="vendorlogginform">
          <div className="vendorlogginform-top">
            <h3 className='loginwelcome'>Grow your Business with Aarambhs</h3>
            <input className='vendorregisterinput' type='text' placeholder='Your Bussiness Name*' required />
            <select className='vendorregisterinput'>
              <option >City(Choose your city here)</option>
              <option >Patna</option>
              <option >kolkata</option>
              <option >Goa</option>
              <option >Banglore</option>
              <option >Mumbai</option>
              <option >Delhi</option>
              <option >Chennai</option>
              <option >Gurugram</option>
              <option >Noida</option>
              <option >Jaipur</option>
              <option >Hyderabad</option>
              <option >Ahmedabad</option>
              <option >Surat</option>
              <option >Pune</option>
              <option >Chandigarh</option>
              <option >Lucknow</option>
            </select>


            <select className='vendorregisterinput'>
              <option >Select Vendor Type*</option>
              <option>Wedding venie</option>
              <option>banquet Hall</option>
              <option>Party Hall</option>
              <option>Hotel</option>
              <option>Restaurant</option>
              <option>Catering</option>
              <option>Event Management</option>
              <option>Photography</option>
              <option>Videography</option>
            </select>
            <input className='vendorregisterinput' type='text' placeholder='Email*' required />
            <input className='vendorregisterinput' type='text' placeholder='Number*' required />
            <input className='vendorregisterinput' type='text' placeholder='Password*' required />
            <p className='signupvendorbtn'>Continue</p>
          </div>
          <p className='clicklinkforalready'><span>Already have an Account ? </span><Link to='/vendor/loggin' className='linky clicklinkforalready-link'>Sign in</Link></p>
        </div>
      </div>
    </>
  )
}

export default VendorSignup
