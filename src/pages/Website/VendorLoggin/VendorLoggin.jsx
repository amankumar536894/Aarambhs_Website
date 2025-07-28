import React from 'react'
import './VendorLoggin.css'
import verndorimage from '../../../assets/images/vendorsign.jpg'
import { Link } from 'react-router-dom'
import Header from '../../../components/Website/Header/Header'
import Footer from '../../../components/Website/Footer/Footer'
import '../LogginPage/LogginPage.css'

const VendorLoggin = () => {
    return (
        <>
            <Header />
            <div className="vendorlogginpage">
                <img className='vendorlogginimage' src={verndorimage}/>
                <div className="vendorlogginform">
                    <div className="vendorlogginform-top">
                       <h3 className='loginwelcome'>Grow your Business with Aarambhs</h3>
                       <p className='vendorloggintext'>Sign In to access your Dashboard</p>
                       <input className='inputform' type='number' minLength={10} maxLength={10} placeholder='Enter phone number' />
                       <p className='logginbtn'>Continue</p>
                       <p className='registerasvendor'>Register as a Vendor? <Link to='/vendor/signup' className='vendorsignupclass'>Sign up</Link></p>
                    </div>
                    <p className='clicklinkforvendor'><span className='doitnone'>Are you a customer?</span><Link to='/user/loggin' className='link clicklinkcustomer'>Customer Sign In</Link></p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default VendorLoggin
