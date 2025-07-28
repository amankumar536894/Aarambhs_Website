import React, { useState } from 'react'
import './LogginPage.css'
import Header from '../../../components/Website/Header/Header'
import logginimage from '../../../assets/images/logginimage.jpg'
import googleimg from '../../../assets/images/google.png'
import facebookimg from '../../../assets/images/facebook.png'
import appleimg from '../../../assets/images/apple-logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'


const LogginPage = () => {
  const [mobilenumber, setMobilenumber] = useState("")
  const generateOtp = async () => { 
    try {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4N2YzMWJmNjQwMGUwMmUxMGYwMjA3OCIsInJvbGUiOiJ1c2VyIiwicGhvbmUiOiI5MDQ1MzQ2MTU4IiwiaWF0IjoxNzUzNjExOTQ1LCJleHAiOjE3NjEzODc5NDV9.UPPMJFMxCQAjWIllYhFZqKGjrslm-hAPL88MvPU9F-U')
      console.log("*******************************************")
      console.log(import.meta.env.VITE_BACKEND_URL)
      console.log("*******************************************")
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/otp/generate`, {
        phone: mobilenumber,
        type: "user"
      });
      // Optionally: handle success (e.g., show a message or redirect)
    } catch (error) {
      // Optionally: handle error (e.g., show an error message)
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <div className="logginpageuser">
        <img className='logginpageimage' src={logginimage} />
        <div className='logginform'>
          <div className='logginformuser'>
            <h3 className='loginwelcome'>Welcome to Aarambhs</h3>
            <input className='inputform' type='number' minLength={10} maxLength={10} placeholder='Enter phone number' value={mobilenumber} onChange={e => setMobilenumber(e.target.value)} />
            <p className='logginbtn' onClick={generateOtp}>Sign In/Sign Up</p>
            <div className='middleline'></div>
            <p className='ortext'>OR</p>
            <p className='donthaveaccount'>Continue With </p>
            <div className='logginsocial'>
              <img src={googleimg} />
              <img src={facebookimg} />
              <img src={appleimg} />
            </div>
          </div>
          <div className='clicklinkforvendor'>
            <p>Are you a vendor? <Link className='link vendorlogginlink' to='/vendor/loggin'>Bussiness Sign In</Link></p>
          </div>

        </div>
      </div>
    </>
  )
}

export default LogginPage
