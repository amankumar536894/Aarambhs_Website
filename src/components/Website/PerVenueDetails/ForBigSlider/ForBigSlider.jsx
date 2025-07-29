import React from 'react'

const ForBigSlider = ({ thatvenue }) => {
    
    return (
        <>
            <div className="sliderimggrid">
                <img className="firsthalfleft" src={thatvenue.images?.[0]} alt="Venue Image 1" />

                <div className="secondhalfright">
                    <div className="seconfhalftopgrid">
                        <img className="allfullwidth" src={thatvenue.images?.[1]} alt="Venue Image 2" />
                        <img className="allfullwidth" src={thatvenue.images?.[2]} alt="Venue Image 3" />
                    </div>

                    <div className="seconfhalftopgrid">
                        <img className="allfullwidth" src={thatvenue.images?.[3]} alt="Venue Image 4" />
                        <img className="allfullwidth" src={thatvenue.images?.[4]} alt="Venue Image 5" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForBigSlider
