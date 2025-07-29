import React, {useState, useEffect} from 'react'
import '../AdminCitySection/AdminCitySection.css'
import '../AdminTeamSection/AdminTeamSection.css'
import './AdminVenuesSection.css'
import {
    Plus,
    Edit,
    Trash2,
    Trash,
    BookOpen,
    DollarSign,
    FileText,
    Users,
    SquarePen,
} from "lucide-react";
import Stepone from './Steps/Stepone'
import Steptwo from './Steps/Steptwo'
import Stepthree from './Steps/Stepthree'
import Stepfour from './Steps/Stepfour'
import DeleteVenuePopup from '../DeleteVenuePopup/DeleteVenuePopup'
import EditVenuePopup from '../EditVenuePopup/EditVenuePopup'
import SteptwoRemaining from './Steps/SteptwoRemaining';


// Remove hardcoded vendors

const AdminVenuesSection = () => {
    const [venues, setVenues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);

    useEffect(() => {
        const fetchVenues = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/venues`);
                if (!response.ok) throw new Error('Failed to fetch venues');
                const data = await response.json();
                if (data.success) {
                    setVenues(data.data);
                } else {
                    setError('Failed to load venues');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchVenues();
    }, []);

    const fetchVenuesSearch = async (query) => {
        if (!query.trim()) {
            // If search is empty, fetch all venues
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/venues`);
            if (!response.ok) throw new Error('Failed to fetch venues');
            const data = await response.json();
            if (data.success) {
                setVenues(data.data);
            }
            return;
        }

        try {
            const token = localStorage.getItem('token_admin') || localStorage.getItem('token_team');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/venues/search/all?q=${encodeURIComponent(query)}`, {
                headers: {
                    ...(token && { 'Authorization': `Bearer ${token}` })
                }
            });
            if (!response.ok) throw new Error('Failed to search venues');
            const data = await response.json();
            if (data.success) {
                setVenues(data.data);
            } else {
                setError('Failed to search venues');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        
        // Clear existing timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        
        // Set new timeout for debounced search
        const timeout = setTimeout(() => {
            fetchVenuesSearch(query);
        }, 500);
        
        setSearchTimeout(timeout);
    };

    const [venueData, setVenueData] = useState({
        brand_name: '',
        address: '',
        contact_number: '',
        veg_price: '',
        non_veg_price: '',
        city: '',
        status: '',
        // moved to SteptwoRemaining:
        capacity: '',
        parking: '',
        rooms: '',
        space: '',
        property_type: '',
        vendor_type: '',
        venue_type: '',
        // new fields:
        isActive: true,
        opensAt: '',
        closesAt: '',
        startingPrice: '',
        amenities: '',
        profile_image: '',
        images: [],
    })

    const [formon, setFormon] = useState(false)
    const [deleteVenuePopup, setDeleteVenuePopup] = useState(false)
    const [deleteVenueId, setDeleteVenueId] = useState(null)
    const [editVenuePopup, setEditVenuePopup] = useState(false)
    const [editVenueId, setEditVenueId] = useState(null)
    const [step, setStep] = useState(1)
    const maxStep = 5;
    const [submitError, setSubmitError] = useState(null);

    // Confirmation state for toggling status
    const [confirmModal, setConfirmModal] = useState({ open: false, venue: null });
    const [toggleLoading, setToggleLoading] = useState(false);

    const handlePrev = (e) => {
        e.preventDefault();
        if (step > 1) setStep(step - 1);
    };
    const handleNext = (e) => {
        e.preventDefault();
        if (step < maxStep) setStep(step + 1);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);
        try {
            const formData = new FormData();
            // Map fields to backend keys
            formData.append('name', venueData.brand_name);
            formData.append('address', venueData.address);
            formData.append('city', venueData.city);
            formData.append('isActive', venueData.isActive);
            formData.append('contactNumber', venueData.contact_number);
            formData.append('venueCapacity', venueData.capacity);
            formData.append('parkingDetails', venueData.parking);
            formData.append('numberOfRooms', venueData.rooms);
            formData.append('spaceAvailable', venueData.space);
            formData.append('propertyType', venueData.property_type);
            formData.append('venueType', venueData.venue_type);
            formData.append('perPlatePriceVeg', venueData.veg_price);
            formData.append('perPlatePriceNonVeg', venueData.non_veg_price);
            formData.append('rating', venueData.rating || '');
            // reviews: split by newlines or comma
            if (venueData.reviews) {
                (Array.isArray(venueData.reviews) ? venueData.reviews : venueData.reviews.split('\n')).forEach(r => formData.append('reviews', r));
            }
            formData.append('opensAt', venueData.opensAt);
            formData.append('closesAt', venueData.closesAt);
            formData.append('startingPrice', venueData.startingPrice);
            // amenities: split by comma
            if (venueData.amenities) {
                (Array.isArray(venueData.amenities) ? venueData.amenities : venueData.amenities.split(',')).forEach(a => formData.append('amenities', a.trim()));
            }
            // profilePic (single image)
            if (venueData.profile_image) {
                formData.append('profilePic', venueData.profile_image);
            }
            // venueImages (multiple)
            if (venueData.images && venueData.images.length > 0) {
                venueData.images.forEach(img => formData.append('venueImages', img));
            }
            // Add vendor if needed (e.g., formData.append('vendor', ...))
            const token = localStorage.getItem('token_admin') || localStorage.getItem('token_team');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/venues`, {
                method: 'POST',
                headers: {
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: formData
            });
            let data;
            try {
                data = await response.json();
            } catch (jsonErr) {
                setSubmitError('Invalid JSON response: ' + jsonErr.message);
                return;
            }
            if (!response.ok || !data.success) {
                setSubmitError(JSON.stringify(data, null, 2));
                return;
            }
            setVenues(prev => [data.data, ...prev]);
        setFormon(false);
        setStep(1);
            setVenueData({
                brand_name: '',
                address: '',
                contact_number: '',
                veg_price: '',
                non_veg_price: '',
                city: '',
                status: '',
                capacity: '',
                parking: '',
                rooms: '',
                space: '',
                property_type: '',
                vendor_type: '',
                venue_type: '',
                isActive: true,
                opensAt: '',
                closesAt: '',
                startingPrice: '',
                amenities: '',
                profile_image: '',
                images: [],
            });
        } catch (err) {
            setSubmitError('Failed to create venue: ' + err.message);
        }
    };

    const handleToggleActive = (venue) => {
        setConfirmModal({ open: true, venue });
    };

    const doToggleActive = async () => {
        if (!confirmModal.venue) return;
        setToggleLoading(true);
        try {
            const token = localStorage.getItem('token_admin') || localStorage.getItem('token_team');
            const updated = { ...confirmModal.venue, isActive: !confirmModal.venue.isActive };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/venues/${confirmModal.venue._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: JSON.stringify({ isActive: updated.isActive })
            });
            const data = await response.json();
            if (data.success) {
                setVenues(prev => prev.map(v => v._id === data.data._id ? data.data : v));
            } else {
                alert(data.message || 'Failed to update status');
            }
        } catch (err) {
            alert('Failed to update status: ' + err.message);
        } finally {
            setToggleLoading(false);
            setConfirmModal({ open: false, venue: null });
        }
    };

    return (
        <>
            <div className="adminvenuessection">
                <div className="coursepagemain">
                    <div>
                        <h1 className="coursepagemaintitle">Venues Management</h1>
                    </div>
                    <button onClick={() => { setFormon(!formon) }} className="courseadbtn">
                        <Plus size={20} />
                        <span>Add Venue</span>
                    </button>
                </div>

                <div className='adminsearchcontainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search adminsearchicon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                    <input type='text' placeholder='Search Venues' value={searchQuery} onChange={handleSearchChange} />
                </div>


                <div className="coursescontainer">
                    {loading ? (
                        <div>Loading venues...</div>
                    ) : error ? (
                        <div style={{color: 'red'}}>Error: {error}</div>
                    ) : (
                        venues.map((item) => (
                            <div className="coursesbox" key={item._id}>
                                <div className="leftcoursebox">
                                    <div className="eachboxtitle">
                                        <p className="coursenametitle">
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className="eachboxdesc">
                                        Address: {item.address}
                                    </div>
                                    <div className="eachboxdesc">
                                        City: {item.city}
                                    </div>
                                    <div className="eachboxdesc">
                                        Capacity: {item.venueCapacity}
                                    </div>
                                    <div className="eachboxdesc">
                                        Contact Number: {item.contactNumber}
                                    </div>
                                </div>
                                <div className="rightcoursebox">
                                    <div className="courseeditbtn">
                                        <button
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: item.isActive ? 'green' : 'red',
                                                fontWeight: 400,
                                                fontSize: '0.9rem',
                                                cursor: 'pointer',
                                                marginBottom: 4
                                            }}
                                            onClick={() => handleToggleActive(item)}
                                            disabled={toggleLoading}
                                        >
                                            {item.isActive ? 'Active' : 'Inactive'}
                                        </button>
                                    </div>
                                    <div className="courseeditbtn" onClick={() => { setEditVenuePopup(true); setEditVenueId(item._id); }}>
                                        <SquarePen className="editdelete" />
                                        <p>Edit</p>
                                    </div>
                                    <div className="coursedeletebtn" onClick={() => { setDeleteVenuePopup(true); setDeleteVenueId(item._id); }}>
                                        <Trash className="editdelete" />
                                        <p>Delete</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div onClick={() => { setFormon(!formon), setStep(1) }} className={`addteamformpannel ${formon ? 'formon' : ''}`}>
                    <form className="addteamforminner" onClick={(e) => { e.stopPropagation() }}>
                        <svg onClick={() => { setFormon(!formon), setStep(1) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x cutadminformicon"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        {submitError && (
                            <div style={{color: 'red', marginBottom: '1rem', whiteSpace: 'pre-wrap', fontSize: '0.95rem', background: '#fff0f0', border: '1px solid #fbb', borderRadius: 6, padding: 8}}>
                                {submitError}
                            </div>
                        )}
                        {step === 1 && <Stepone venueData={venueData} setVenueData={setVenueData} />}
                        {step === 2 && <Steptwo venueData={venueData} setVenueData={setVenueData} />}
                        {step === 3 && <SteptwoRemaining venueData={venueData} setVenueData={setVenueData} />}
                        {step === 4 && <Stepthree venueData={venueData} setVenueData={setVenueData} />}
                        {step === 5 && <Stepfour venueData={venueData} setVenueData={setVenueData} />}

                        <div className='nextvendorbtns'>
                            <div
                                onClick={handlePrev}
                                className={`addteamformbtn${step === 1 ? ' disabled' : ''}`}
                                style={{ pointerEvents: step === 1 ? 'none' : 'auto', opacity: step === 1 ? 0.5 : 1 }}
                            >Previous</div>
                            {step < maxStep ? (
                                <div onClick={handleNext} className='addteamformbtn'>Next</div>
                            ) : (
                                <div onClick={handleSubmit} className='addteamformbtn'>Submit</div>
                            )}
                        </div>
                    </form>
                </div>

                <DeleteVenuePopup
                    deleteVenuePopup={deleteVenuePopup}
                    setDeleteVenuePopup={setDeleteVenuePopup}
                    venueId={deleteVenueId}
                    onDeleteSuccess={() => {
                        setVenues(prev => prev.filter(v => v._id !== deleteVenueId));
                        setDeleteVenueId(null);
                    }}
                />

                <EditVenuePopup editVenuePopup={editVenuePopup} setEditVenuePopup={setEditVenuePopup} venueId={editVenueId} />

                {/* Confirmation Dialog for toggle status */}
                {confirmModal.open && (
                    <div className="addteamformpannel formon" style={{zIndex: 1001}}>
                        <div className="addteamforminner" style={{maxWidth: 350, textAlign: 'center'}}>
                            <p style={{marginBottom: '1rem'}}>Are you sure you want to toggle the status of this venue?</p>
                            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                                <button className='addteamformbtn' onClick={doToggleActive} style={{minWidth: 80}} disabled={toggleLoading}>Yes</button>
                                <button className='addteamformbtn' onClick={() => setConfirmModal({ open: false, venue: null })} style={{minWidth: 80, background: '#ccc', color: '#222'}}>No</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default AdminVenuesSection 