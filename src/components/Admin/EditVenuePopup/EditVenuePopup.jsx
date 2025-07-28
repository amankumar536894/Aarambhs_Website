import React, { useState, useEffect } from 'react'
import './EditVenuePopup.css'

const EditVenuePopup = ({ editVenuePopup, setEditVenuePopup, venueId }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [initialData, setInitialData] = useState(null);
    const [imagesToDelete, setImagesToDelete] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch venue data on open
    useEffect(() => {
        if (editVenuePopup && venueId) {
            setLoading(true);
            fetch(`${import.meta.env.VITE_API_URL}/api/venues/${venueId}`)
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        const v = data.data;
                        setFormData({
                            name: v.name || '',
                            address: v.address || '',
                            city: v.city || '',
                            isActive: !!v.isActive,
                            contactNumber: v.contactNumber || '',
                            venueCapacity: v.venueCapacity || '',
                            parkingDetails: v.parkingDetails || '',
                            numberOfRooms: v.numberOfRooms || '',
                            spaceAvailable: v.spaceAvailable || '',
                            propertyType: v.propertyType || '',
                            venueType: v.venueType || '',
                            perPlatePriceVeg: v.perPlatePriceVeg || '',
                            perPlatePriceNonVeg: v.perPlatePriceNonVeg || '',
                            rating: v.rating || '',
                            reviews: Array.isArray(v.reviews) ? v.reviews.join('\n') : (v.reviews || ''),
                            opensAt: v.opensAt || '',
                            closesAt: v.closesAt || '',
                            startingPrice: v.startingPrice || '',
                            amenities: Array.isArray(v.amenities) ? v.amenities.join(', ') : (v.amenities || ''),
                            profilePic: null,
                            venueImages: [],
                            existingProfilePic: v.profilePic || '',
                            existingVenueImages: v.venueImages || [],
                        });
                        setInitialData(v);
                        setImagesToDelete([]);
                        setCurrentStep(1);
                        setError(null);
                    } else {
                        setError('Failed to load venue');
                    }
                })
                .catch(() => setError('Failed to load venue'))
                .finally(() => setLoading(false));
        }
    }, [editVenuePopup, venueId]);

    // Reset on close
    useEffect(() => {
        if (!editVenuePopup) {
            setFormData({});
            setInitialData(null);
            setImagesToDelete([]);
            setCurrentStep(1);
            setError(null);
        }
    }, [editVenuePopup]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, profilePic: file, existingProfilePic: '' }));
        }
    };

    const handleVenueImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({ ...prev, venueImages: files }));
    };

    // Mark image for deletion visually, but only delete on submit
    const handleDeleteExistingImage = (imgUrl) => {
        setFormData(prev => ({
            ...prev,
            existingVenueImages: prev.existingVenueImages.filter(url => url !== imgUrl)
        }));
        setImagesToDelete(prev => [...prev, imgUrl]);
    };

    // Submit all changes
    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem('token_admin');
        try {
            // 1. PUT venue fields/profilePic
            const form = new FormData();
            Object.entries(formData).forEach(([k, v]) => {
                if (k === 'venueImages' || k === 'existingVenueImages' || k === 'profilePic' || k === 'existingProfilePic') return;
                if (k === 'reviews') {
                    (v ? v.split('\n') : []).forEach(r => form.append('reviews', r));
                } else if (k === 'amenities') {
                    (v ? v.split(',') : []).forEach(a => form.append('amenities', a.trim()));
                } else {
                    form.append(k, v);
                }
            });
            if (formData.profilePic) form.append('profilePic', formData.profilePic);
            await fetch(`${import.meta.env.VITE_API_URL}/api/venues/${venueId}`, {
                method: 'PUT',
                headers: {
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: form
            });
            // 2. PATCH new venueImages (append)
            if (formData.venueImages && formData.venueImages.length > 0) {
                const imgForm = new FormData();
                formData.venueImages.forEach(img => imgForm.append('venueImages', img));
                await fetch(`${import.meta.env.VITE_API_URL}/api/venues/${venueId}/images`, {
                    method: 'PATCH',
                    headers: {
                        ...(token && { 'Authorization': `Bearer ${token}` })
                    },
                    body: imgForm
                });
            }
            // 3. DELETE removed images
            if (imagesToDelete.length > 0) {
                await fetch(`${import.meta.env.VITE_API_URL}/api/venues/${venueId}/images`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(token && { 'Authorization': `Bearer ${token}` })
                    },
                    body: JSON.stringify({ images: imagesToDelete })
                });
            }
            setEditVenuePopup(false);
            setCurrentStep(1);
        } catch (err) {
            setError('Failed to update venue');
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Step 1: Basic Info
    const renderStep1 = () => (
        <>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Venue Name</p>
                    <input className='editvenueeveryinput' type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Venue Address</p>
                    <input className='editvenueeveryinput' type="text" name="address" value={formData.address} onChange={handleInputChange} />
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>City</p>
                    <input className='editvenueeveryinput' type="text" name="city" value={formData.city} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Status</p>
                    <select className='editvenueeveryinput' name="isActive" value={formData.isActive ? 'active' : 'inactive'} onChange={e => setFormData(f => ({ ...f, isActive: e.target.value === 'active' }))}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Veg per Plate Price</p>
                    <input className='editvenueeveryinput' type="text" name="perPlatePriceVeg" value={formData.perPlatePriceVeg} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Non Veg per Plate Price</p>
                    <input className='editvenueeveryinput' type="text" name="perPlatePriceNonVeg" value={formData.perPlatePriceNonVeg} onChange={handleInputChange} />
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Venue Capacity</p>
                    <input className='editvenueeveryinput' type="text" name="venueCapacity" value={formData.venueCapacity} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Parking Details</p>
                    <input className='editvenueeveryinput' type="text" name="parkingDetails" value={formData.parkingDetails} onChange={handleInputChange} />
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Number of Rooms</p>
                    <input className='editvenueeveryinput' type="text" name="numberOfRooms" value={formData.numberOfRooms} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Space Available</p>
                    <input className='editvenueeveryinput' type="text" name="spaceAvailable" value={formData.spaceAvailable} onChange={handleInputChange} />
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Property Type</p>
                    <input className='editvenueeveryinput' type="text" name="propertyType" value={formData.propertyType} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Venue Type</p>
                    <input className='editvenueeveryinput' type="text" name="venueType" value={formData.venueType} onChange={handleInputChange} />
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Contact Number</p>
                    <input className='editvenueeveryinput' type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Opens At</p>
                    <input className='editvenueeveryinput' type="text" name="opensAt" value={formData.opensAt} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Closes At</p>
                    <input className='editvenueeveryinput' type="text" name="closesAt" value={formData.closesAt} onChange={handleInputChange} />
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Starting Price</p>
                    <input className='editvenueeveryinput' type="text" name="startingPrice" value={formData.startingPrice} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Rating</p>
                    <input className='editvenueeveryinput' type="text" name="rating" value={formData.rating} onChange={handleInputChange} />
                </div>
            </div>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Amenities (comma separated)</p>
                    <input className='editvenueeveryinput' type="text" name="amenities" value={formData.amenities} onChange={handleInputChange} />
                </div>
                <div className='editvenuepopup-halfitem'>
                    <p className='editvenueeverytitle'>Reviews (one per line)</p>
                    <textarea className='editvenueeveryinput' name="reviews" value={formData.reviews} onChange={handleInputChange} rows={3} />
                </div>
            </div>
        </>
    );

    // Step 2: Profile Image
    const renderStep2 = () => (
        <>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-profilepicbox'>
                    <p className='editvenueeverytitle'>Venue Profile Image</p>
                    <div className='editvenuepopup-profilepic'>
                        {formData.existingProfilePic && (
                            <img src={formData.existingProfilePic} alt="profile-pic" />
                        )}
                        {formData.profilePic && (
                            <img src={URL.createObjectURL(formData.profilePic)} alt="profile-pic-upload" />
                        )}
                        <label htmlFor='venuepeofileedit-popup' className='editvenuepopup-profilepiclabel'>
                            <i className="fa-regular fa-upload"/>
                            <p>Upload New Image</p>
                            <input type="file" id='venuepeofileedit-popup' onChange={handleProfilePicChange} />
                        </label>
                    </div>
                </div>
            </div>
        </>
    );

    // Step 3: Venue Images
    const renderStep3 = () => (
        <>
            <div className='editvenuepopup-fullwidth'>
                <div className='editvenuepopup-imagesection'>
                    <p className='editvenueeverytitle'>Venue Images</p>
                    <p className='editvenueeverydescription'>Manage your venue images. You can add new images or delete existing ones.</p>
                    {/* Add New Images */}
                    <div className='editvenuepopup-addimages'>
                        <label htmlFor='venueimagesedit-popup' className='editvenuepopup-addimageslabel'>
                            <i className="fa-regular fa-plus"/>
                            <p>Add New Images</p>
                            <input 
                                type="file" 
                                id='venueimagesedit-popup' 
                                multiple 
                                accept="image/*"
                                onChange={handleVenueImagesChange}
                            />
                        </label>
                    </div>
                    {/* Display Existing Images */}
                    <div className='editvenuepopup-imagesgrid'>
                        {formData.existingVenueImages.map((url, idx) => (
                            <div key={url} className='editvenuepopup-imageitem'>
                                <img src={url} alt={`venue-img-${idx}`} />
                                <div className='editvenuepopup-imageoverlay'>
                                    <button 
                                        className='editvenuepopup-deletebtn'
                                        onClick={() => handleDeleteExistingImage(url)}
                                    >
                                        <i className="fa-regular fa-trash"/>
                                        Delete
                                    </button>
                                </div>
                                <p className='editvenuepopup-imagename'>{`venue-img-${idx+1}`}</p>
                            </div>
                        ))}
                        {/* Show new images to be uploaded */}
                        {formData.venueImages.map((img, idx) => (
                            <div key={img.name + idx} className='editvenuepopup-imageitem'>
                                <img src={URL.createObjectURL(img)} alt={img.name} />
                                <p className='editvenuepopup-imagename'>{img.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            <div className={`editvenuepopup ${editVenuePopup ? 'editVenuePopup-active' : ''}`} onClick={() => {setEditVenuePopup(false); setCurrentStep(1)}}>
                <div className="editvenuepopup-inner" onClick={(e) => e.stopPropagation()}>
                    <svg onClick={() => {setEditVenuePopup(false); setCurrentStep(1)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x cutadminformicon"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    {/* Step Content */}
                    {currentStep === 1 && renderStep1()}
                    {currentStep === 2 && renderStep2()}
                    {currentStep === 3 && renderStep3()}
                    {/* Navigation Buttons */}
                    <div className='editvenuepopup-buttons'>
                        {currentStep > 1 && (
                            <div className='editvenuepopup-prevbtn' onClick={handlePrevious}>
                                <p>Previous</p>
                            </div>
                        )}
                        {currentStep < 3 ? (
                            <div className='editvenuepopup-nextbtn' onClick={handleNext}>
                                <p>Next</p>
                            </div>
                        ) : (
                            <div className='editvenuepopup-submitbtn' onClick={handleSubmit}>
                                <p>Submit</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditVenuePopup
