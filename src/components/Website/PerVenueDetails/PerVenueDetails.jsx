import React from 'react';
import './PerVenueDetails.css'
import ForSmallSlider from './ForSmallSlider/ForSmallSlider';
import ForBigSlider from './ForBigSlider/ForBigSlider';

const PerVenueDetails = ({ thatvenue }) => {

    return (
        <>
            <div className="pervenuedetails">
                <div className="venuepageimagebox">
                    <div className="venuepagetopmainimg">

                        {window.innerWidth >= 676 ? <ForBigSlider thatvenue={thatvenue} /> : <ForSmallSlider thatvenue={thatvenue} />}

                        <div className="venuepageimgonbtn">
                            <div>
                                <i className="fa-solid fa-heart" />
                                <p>Add to Favorite</p>
                            </div>
                            <div>
                                <i className="fa-light fa-envelope-open-text" />
                                <p>Write a Review</p>
                            </div>
                            <div>
                                <i className="fa-light fa-share-nodes" />
                                <p>Share Venue</p>
                            </div>
                        </div>
                    </div>

                </div>


                <p className='venuepagename'>{thatvenue.name}</p>
                <p className='venuepageaddress'>{thatvenue.address}</p>
                <div className="manystars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                </div>
                <p className='venuepagetime'>Opens at 11 AM | Closes at 2 AM</p>

            </div>
        </>
    )
}

export default PerVenueDetails