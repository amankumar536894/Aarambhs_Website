import React from 'react'
import { useState } from 'react'
import './VenuePageAbout.css'

const VenuePageAbout = () => {
  const [open, setOpen] = useState(false)

  function openfulldetails(){
    setOpen(!open)
  }

  return (
    <>
      <div className="venuepageabout">
        <p className='venuepageabouttitle'>About Us</p>
        <p className='venuepageaboutdesc'>Kuch Hamare baare mein</p>
        <p className='venuepageaboutcontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada ultricies massa a
          blandit. Vivamus imperdiet, ligula sed scelerisque euismod, elit lorem sodales nunc, sit amet
          venenatis ipsum magna in elit.</p>
        <p style={{height: open ? 'auto' : '0'}}  className='venuepageaboutcontent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste sapiente dolor blanditiis cumque rerum sed nulla officia fuga culpa eaque necessitatibus rem obcaecati in nam similique adipisci quasi placeat nobis, voluptatum aperiam! Ipsa molestiae voluptatum nesciunt, possimus quod repellendus, voluptates quo distinctio totam aperiam laborum a, officiis facere aut!</p>
        <p onClick={openfulldetails} className='aboutpagedetailsredmore'>Read More</p>
      </div>
    </>
  )
}

export default VenuePageAbout
