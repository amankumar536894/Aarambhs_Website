import React from 'react'
import './Steps.css'

const Stepthree = ({ venueData, setVenueData }) => {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVenueData(v => ({ ...v, profile_image: file }));
        }
    };

    return (
        <>
            <div style={{marginBottom: '1rem'}}>
                <label style={{fontWeight: 500}}>Status:&nbsp;</label>
                <select
                    className='addteamforminput'
                    value={venueData.isActive ? 'active' : 'inactive'}
                    onChange={e => setVenueData(v => ({ ...v, isActive: e.target.value === 'active' }))}
                >
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                </select>
            </div>
            <div style={{marginBottom: '1rem', display: 'flex', gap: '1rem'}}>
                <input
                    className='addteamforminput'
                    type='text'
                    placeholder='Opens At (e.g. 08:00 AM)'
                    value={venueData.opensAt || ''}
                    onChange={e => setVenueData(v => ({ ...v, opensAt: e.target.value }))}
                />
                <input
                    className='addteamforminput'
                    type='text'
                    placeholder='Closes At (e.g. 10:00 PM)'
                    value={venueData.closesAt || ''}
                    onChange={e => setVenueData(v => ({ ...v, closesAt: e.target.value }))}
                />
            </div>
            <div style={{marginBottom: '1rem', display: 'flex', gap: '1rem'}}>
                <input
                    className='addteamforminput'
                    type='number'
                    placeholder='Starting Price'
                    value={venueData.startingPrice || ''}
                    onChange={e => setVenueData(v => ({ ...v, startingPrice: e.target.value }))}
                />
                <input
                    className='addteamforminput'
                    type='text'
                    placeholder='Amenities (comma separated)'
                    value={venueData.amenities || ''}
                    onChange={e => setVenueData(v => ({ ...v, amenities: e.target.value }))}
                />
            </div>
            <p className='vendorsetpictitle'>Set Venue Profile Picture</p>
            <label htmlFor='setvendorprofilepic' className='setvendorprofilepic' >
                <input
                    type='file'
                    accept='image/*'
                    className='setvendorprofilepicinput'
                    id='setvendorprofilepic'
                    onChange={handleImageChange}
                />
                {venueData.profile_image ? (
                    <img
                        src={URL.createObjectURL(venueData.profile_image)}
                        className='profilepicuploadedimg'
                    />
                ) : (
                    <i className="fa-regular fa-upload profilepicuploadicon"/>
                )}
            </label>
        </>
    )
}

export default Stepthree 