import React from 'react'

const Stepone = ({ venueData, setVenueData }) => {
    return (
        <>
            <input
                className='addteamforminput'
                type="text"
                placeholder='Venue Name'
                required
                value={venueData.brand_name}
                onChange={e => setVenueData(v => ({ ...v, brand_name: e.target.value }))}
            />
            <input
                className='addteamforminput'
                type="text"
                placeholder='Venue Address'
                required
                value={venueData.address}
                onChange={e => setVenueData(v => ({ ...v, address: e.target.value }))}
            />
            <div className="twoinputinone">
                <input
                    className='addteamforminput halfwidth'
                    type="text"
                    placeholder='Veg per plate price'
                    required
                    value={venueData.veg_price}
                    onChange={e => setVenueData(v => ({ ...v, veg_price: e.target.value }))}
                />
                <input
                    className='addteamforminput halfwidth'
                    type="text"
                    placeholder='Non-Veg per plate price'
                    required
                    value={venueData.non_veg_price}
                    onChange={e => setVenueData(v => ({ ...v, non_veg_price: e.target.value }))}
                />
            </div>
            <div className="twoinputinone">
                <input
                    className='addteamforminput'
                    type="text"
                    placeholder='City'
                    required
                    value={venueData.city}
                    onChange={e => setVenueData(v => ({ ...v, city: e.target.value }))}
                />
                <input
                    className='addteamforminput'
                    type="text"
                    placeholder='Contact Number'
                    required
                    value={venueData.contact_number}
                    onChange={e => setVenueData(v => ({ ...v, contact_number: e.target.value }))}
                />
            </div>
        </>
    )
}

export default Stepone 