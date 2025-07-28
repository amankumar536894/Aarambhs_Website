import React from 'react'

const Steptwo = ({ venueData, setVenueData }) => {
    return (
        <>
            <input
                className='addteamforminput'
                type="text"
                placeholder='Venue Capicity'
                value={venueData.capacity}
                onChange={e => setVenueData(v => ({ ...v, capacity: e.target.value }))}
            />
            <input
                className='addteamforminput'
                type="text"
                placeholder='Parking Details'
                value={venueData.parking}
                onChange={e => setVenueData(v => ({ ...v, parking: e.target.value }))}
            />
            <div className="twoinputinone">
                <input
                    className='addteamforminput halfwidth'
                    type="text"
                    placeholder='Number of Rooms'
                    value={venueData.rooms}
                    onChange={e => setVenueData(v => ({ ...v, rooms: e.target.value }))}
                />
                <input
                    className='addteamforminput halfwidth'
                    type="text"
                    placeholder='Space Available'
                    value={venueData.space}
                    onChange={e => setVenueData(v => ({ ...v, space: e.target.value }))}
                />
            </div>
            <div className="twoinputinone">
                {/* Navigation to SteptwoRemaining will be handled in parent */}
            </div>
        </>
    )
}

export default Steptwo 