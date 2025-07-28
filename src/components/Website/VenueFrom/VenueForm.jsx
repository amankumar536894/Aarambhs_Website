import React, { useRef, useState } from 'react'
import './VenueForm.css'

const VenueForm = () => {
    const [message, setMessage] = useState(true);
    // New state to manage the selected date
    const [selectedDate, setSelectedDate] = useState('');
    // New ref to get a direct reference to the date input element
    const dateInputRef = useRef(null);

    // Handler function to update the state when the date changes
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    // Handler to programmatically open the date picker
    const handleDateTextClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    return (
        <>
            <div className="venueform">
                <div className="venueformleft">
                    <div className="venueleftformbtns">
                        <p><span>Veg</span> ₹ 1255 per plate </p>
                        <p><span>Non-Veg</span> ₹ 1730 per plate</p>
                    </div>
                    <div className="venueleftformdetails">
                        <p><span>Capacity:</span> 200- 300 (Hall), 200/300 (Lawn)</p>
                        <p><span>Venue Type:</span> Banquet Hall & Lawn</p>
                        <p><span>Starting Price:</span> Starting Price: 1499 INR</p>
                    </div>
                </div>
                <div className="venueformright">
                    <div className="venueleftformbtns justoppo">
                        <p onClick={() => setMessage(true)} style={{color: message ? 'white' : '#579581', backgroundColor: message ? '#0e3f2f' : 'white'}}><i className="fa-brands fa-whatsapp" /> Check Availability</p>
                        <p onClick={() => setMessage(false)} style={{color: message ? '#579581' : 'white', backgroundColor: message ? 'white' : '#0e3f2f'}}><i className="fa-light fa-phone" /> View Contact </p>
                    </div>
                    {/* <p className='formnametitle'>Hi Ananya</p> */}
                    <div className='venueformdiv'>
                        <input className='formvenueinput' type='text' placeholder='Enter Name' />
                        <input className='formvenueinput' type='text' placeholder='Contact Number' />
                    </div>

                    {message ? <p className='finalformbtn'>Check Availability & Prices</p> : <p className='finalformbtn'>View Contact</p>}

                </div>
            </div>
        </>
    )
}

export default VenueForm