import React from 'react'
import './VenuePagePlanning.css'

const VenuePagePlanning = () => {

  const style ={
    color: 'white'
  }

  return (
    <>
      <div className="venuepageplanning">
        <p style={style} className='venuepageabouttitle'>Planyour Wedding</p>
        <p style={style} className='venuepageaboutdesc'>Riwaazon se lekar reception tak – hum aapke saath.</p>
        <div className="plnningfeatures">
            <div className="planningfeatureseach">
                <i className="fa-regular fa-building"/>
                <p>PROPERTY TYPE</p>
            </div>
            <div className="planningfeatureseach">
                <i class="fa-light fa-tent"/>
                <p>Venue Type</p>
            </div>
            <div className="planningfeatureseach">
                <i className="fa-light fa-people-line"/>
                <p>Capacity</p>
            </div>
            <div className="planningfeatureseach">
                <i className="fa-light fa-car-building"/>
                <p>Parking Details</p>
            </div>
            <div className="planningfeatureseach">
                <i className="fa-light fa-bed"/>
                <p>Rooms Available</p>
            </div>
            <div className="planningfeatureseach">
                <i className="fa-light fa-couch"/>
                <p>Space Available</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default VenuePagePlanning
