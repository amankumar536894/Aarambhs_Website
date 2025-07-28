import React from 'react'
import layoutimg from "../../../assets/layoutimage.jpg";
import './FullLayout.css'

const FullLayout = () => {
    return (
        <>
            <div className="fulllayout">
                <div className="leftlayout">
                    <p className='layoutlefttitle'>Elevate your style, embrace timeless elegance.</p>
                    <p className='layoutrighttitle'>Discover a world of exquisite craftsmanship and unparalleled beauty with
                        our stuning collection of fine jewelry. Each piece is meticulously designed
                        to capture the essence of grace and sophistication, reflecting your unique
                        sense of style.</p>
                    <p className='layoutbtn'>Book Venue</p>
                </div>
                <img className='rightlayoutimg' src={layoutimg} />
            </div>
        </>
    )
}

export default FullLayout
