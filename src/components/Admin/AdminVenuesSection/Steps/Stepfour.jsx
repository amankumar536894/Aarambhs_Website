import React from 'react';
import './Steps.css';

const Stepfour = ({ venueData, setVenueData }) => {
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setVenueData(v => ({ ...v, images: files }));
    };

    return (
        <>
            <p className='vendorsetpictitle'>Upload Venue Images</p>
            <label htmlFor='venue-images-upload' className='setvendorprofilepic'>
                <input
                    type='file'
                    className='setvendorprofilepicinput'
                    id='venue-images-upload'
                    multiple
                    accept='image/*'
                    onChange={handleImageChange}
                />
                {venueData.images && venueData.images.length > 0 ? (
                    <div className='venue-images-preview-grid'>
                        {venueData.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={URL.createObjectURL(img)}
                                alt={`venue-img-${idx}`}
                                className='profilepicuploadedimg'
                            />
                        ))}
                    </div>
                ) : (
                    <i className="fa-regular fa-upload profilepicuploadicon" />
                )}
            </label>
        </>
    );
};

export default Stepfour; 