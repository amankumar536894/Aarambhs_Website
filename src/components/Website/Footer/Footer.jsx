import React from 'react'
import './Footer.css'
import footerlogo from '../../../assets/aarambhlogo.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="linkmainbox">
            <div className="quicklinkmainbox">
                <div className="quicklinkmainline">Quick Links</div>
                <p>Home</p>
                <p>Venues</p>
                <p>Themes</p>
                <p>Planning</p>
                <p>FAQs</p>
                <p>Blog</p>
            </div>
            <div className="supportmainbox">
                <div className='supportmainline'>Support</div>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Contact</p>
            </div>
        </div>
        <div className="logofootermainbox">
            <img className='footerlogo' src={footerlogo} />
            <p className='footerlogodesc'>Risus scelerisque a non turpis vitae malesuada sed venenatis. In fringilla sollicitudin euismod sed</p>
            <div className="footersociallinks">
                <i className="fa-brands fa-facebook-f"/>
                <i className="fa-brands fa-instagram"/>
                <i className="fa-brands fa-twitter"/>
            </div>
        </div>
        <div className="emailmainbox">
            <div className="emailmainline">Email Signup</div>
            <div className="emaildescription">Get the latest shaadi inspiration in your inbox</div>
            <input className='footeremailinput' type='text' placeholder='Your Email' />
        </div>
      </div>
      <div className="lowerfooter">
        <p>Copyright <span>Aarambhs.</span> All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer
