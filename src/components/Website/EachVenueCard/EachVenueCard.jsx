import React from 'react'
import './EachVenueCard.css'
import cardimage from '../../../assets/cardimage.avif'
import { Link } from 'react-router-dom'

const EachVenueCard = ({item}) => {
    const convertToSlug = (input) => {
        return input
          .trim()               // remove leading/trailing spaces
          .split(/\s+/)         // split by any number of spaces
          .join('-')            // join with hyphens
          .toLowerCase();       // optional: make lowercase
          }
    return (
        <>
        <Link className='link' to={`/venues/${convertToSlug(item.name)}/${item._id}`} >
            <div className="eachvenuecard">
                <img src={item.profilePic} />
                <div className='cardnamesdetail'>
                    <p className='cardmaintitle'>{item.name}</p>
                    <div className='cardratingbox'>
                        <i className="fa-solid fa-star" />
                        <p>{item.rating || 5.0} ({item.reviews?.length || 1} review{item.reviews?.length !== 1 ? 's' : ''})</p>
                    </div>
                </div>
                <p className='cardlocation'>
                    <i className="fa-solid fa-location-dot"/>
                    &nbsp;
                    {item.address}</p>
                <div className='cardfooddetail'>
                    <div className='eachfoodbox'>
                        <p className='foodtypename'>Veg</p>
                        <p className='foodcardprice'>₹ {item.perPlatePriceVeg?.toLocaleString() || '1,600'} <span>per plate</span></p>
                    </div>
                    <div className='eachfoodbox'>
                        <p className='foodtypename'>Non-Veg</p>
                        <p className='foodcardprice'>₹ {item.perPlatePriceNonVeg?.toLocaleString() || '2,400'} <span>per plate</span></p>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default EachVenueCard
