import React from 'react'
import './UpperHeader.css'
import { Link } from 'react-router-dom'

const UpperHeader = () => {
  return (
    <>
      <div className="upperheader">
        <Link className='listbtn' to='/vendor/loggin'>List Your Venue</Link>
        <Link className='loginbtn' to='/user/loggin'>Log In / Sign Up</Link>
      </div>
    </>
  )
}

export default UpperHeader
