import React from 'react';

const SteptwoRemaining = ({ venueData, setVenueData }) => {
    return (
        <>
            <input
                className='addteamforminput'
                type="text"
                placeholder='Venue Capacity'
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
                <input
                    className='addteamforminput'
                    type="text"
                    placeholder='Property Type'
                    value={venueData.property_type}
                    onChange={e => setVenueData(v => ({ ...v, property_type: e.target.value }))}
                />
                <input
                    className='addteamforminput'
                    type="text"
                    placeholder='Venue Type'
                    value={venueData.venue_type}
                    onChange={e => setVenueData(v => ({ ...v, venue_type: e.target.value }))}
                />
            </div>
        </>
    );
};

export default SteptwoRemaining; 