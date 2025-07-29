import React from 'react'
import './AllVenusBox.css'
import EachVenueCard from "../EachVenueCard/EachVenueCard";

const AllVenusBox = ({venues, loading, error}) => {

    if (loading) {
        return (
            <div className="allvenusbox">
                <div style={{textAlign: 'center', padding: '50px'}}>
                    Loading venues...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="allvenusbox">
                <div style={{textAlign: 'center', padding: '50px', color: 'red'}}>
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="allvenusbox">
                <div className="topvenusboxdetails">
                    <div className="topvenusboxdetails-left">
                        <p className='topvenusboxdetails-lefttop'>Wedding Venues</p>
                        <p className='topvenusboxdetails-leftdown'>Showing {venues.length} results as per your search criteria</p>
                    </div>
                    <div className="inputsearch">
                        <i className="fa-light fa-magnifying-glass" />
                        <input type='text' placeholder='Search Wedding Venues...' />
                    </div>
                </div>
                <div className="allcardswidth">
                    {venues.map((item)=>{
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
