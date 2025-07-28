import React, { useState } from 'react'
import './Header.css'
import UpperHeader from '../Upperheader/UpperHeader'
import aarambhlogo from '../../../assets/aarambhlogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navon, setNavon] = useState(false)
  return (
    <>
      <UpperHeader />
      <div className="header">
        <Link className='link' to='/'><img className='aarambhlogo' src={aarambhlogo} /></Link>

        <div className='navbaar'>
          <Link className='link' to='/'><div className='navs'>Home</div></Link>
          <Link className='link' to='/venues'><div className='navs'>Choose your Venue</div></Link>
          <div className='navs'>Plan Wedding</div>
          <div className='navs'>Themes</div>
          <div className='navs'>Blogs</div>
          <div className='navs'>Contact Us</div>
        </div>
        <i className={`fa-light ${navon ? 'fa-xmark' : 'fa-bars'} navicon`}  onClick={() => setNavon(!navon)} />
      </div>

      <div style={{ width: navon ? '100%' : 0 }} className="phonenavbaar">
        <div style={{ left: navon ? '0' : '-100%' }} className="phonenavwidth">
          <Link className='link' to='/' ><div className='phonenavs'>Home</div></Link>
          <Link className='link' to='/venues' ><div className='phonenavs'>Choose Your Venue</div></Link>
          <div className='phonenavs'>Plan Wedding</div>
          <div className='phonenavs'>Themes</div>
          <div className='phonenavs'>Blogs</div>
          <div className='phonenavs'>Contact Us</div>
        </div>
      </div>
    </>
  )
}

export default Header
