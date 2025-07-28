import React from 'react'
import './AllVenusBox.css'
import EachVenueCard from "../EachVenueCard/EachVenueCard";

const AllVenusBox = ({api}) => {

    return (
        <>
            <div className="allvenusbox">
                <div className="topvenusboxdetails">
                    <div className="topvenusboxdetails-left">
                        <p className='topvenusboxdetails-lefttop'>Wedding Venues</p>
                        <p className='topvenusboxdetails-leftdown'>Showing {api.length} results as per your search criteria</p>
                    </div>
                    <div className="inputsearch">
                        <i className="fa-light fa-magnifying-glass" />
                        <input type='text' placeholder='Search Wedding Venues...' />
                    </div>
                </div>
                <div className="allcardswidth">
                    {api.map((item)=>{
                        return(
                            <EachVenueCard key={item._id} item={item} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AllVenusBox
