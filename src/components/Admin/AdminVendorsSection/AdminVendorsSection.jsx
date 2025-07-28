import React, {useState, useEffect} from 'react'
import './AdminVendorsSection.css'
import '../AdminCitySection/AdminCitySection.css'
import '../AdminTeamSection/AdminTeamSection.css'
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

function ConfirmationDialog({ open, message, onConfirm, onCancel }) {
    if (!open) return null;
    return (
        <div className="addteamformpannel formon" style={{zIndex: 1001}}>
            <div className="addteamforminner" style={{maxWidth: 350, textAlign: 'center'}}>
                <p style={{marginBottom: '1rem'}}>{message}</p>
                <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                    <button className='addteamformbtn' onClick={onConfirm} style={{minWidth: 80}}>Yes</button>
                    <button className='addteamformbtn' onClick={onCancel} style={{minWidth: 80, background: '#ccc', color: '#222'}}>No</button>
                </div>
            </div>
        </div>
    );
}

const AdminVendorsSection = () => {

    const [formon, setFormon] = useState(false)
    const [vendors, setVendors] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        brandName: '',
        vendorName: '',
        phone: '',
        whatsapp: '',
        email: '',
        isActive: true,
        venues: []
    });
    const [formLoading, setFormLoading] = useState(false);
    const [formError, setFormError] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const [editLoading, setEditLoading] = useState(false);
    const [editError, setEditError] = useState(null);
    // Add confirmation state
    const [confirmModal, setConfirmModal] = useState({ open: false, action: null, payload: null });
    const [search, setSearch] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);

    useEffect(() => {
        const fetchVendors = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendors`)
                if (!response.ok) throw new Error('Failed to fetch vendors')
                const data = await response.json()
                if (data.success) {
                    setVendors(data.data)
                } else {
                    setError('Failed to load vendors')
                }
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchVendors()
    }, [])

    // Search handler
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (searchTimeout) clearTimeout(searchTimeout);
        setSearchTimeout(setTimeout(() => {
            fetchVendorsSearch(value);
        }, 400)); // debounce 400ms
    };

    // Fetch vendors by search
    const fetchVendorsSearch = async (query) => {
        if (!query) {
            // If search is cleared, reload all vendors
            fetchVendors();
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token_admin') || localStorage.getItem('token_team');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendors/search/all?q=${encodeURIComponent(query)}`, {
                headers: {
                    ...(token && { 'Authorization': `Bearer ${token}` })
                }
            });
            if (!response.ok) throw new Error('Failed to search vendors');
            const data = await response.json();
            if (data.success) {
                setVendors(data.data);
            } else {
                setError('Failed to search vendors');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Refactor fetchVendors to be accessible
    const fetchVendors = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendors`);
            if (!response.ok) throw new Error('Failed to fetch vendors');
            const data = await response.json();
            if (data.success) {
                setVendors(data.data);
            } else {
                setError('Failed to load vendors');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Update useEffect to use fetchVendors
    useEffect(() => {
        fetchVendors();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAddVendor = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        setFormError(null);
        try {
            // Get token from localStorage
            const token = localStorage.getItem('token_admin') || localStorage.getItem('token_team');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendors`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to add vendor');
            }
            const data = await response.json();
            if (data.success) {
                setVendors((prev) => [data.data, ...prev]);
                setFormon(false);
                setFormData({
                    brandName: '',
                    vendorName: '',
                    phone: '',
                    whatsapp: '',
                    email: '',
                    isActive: true,
                    venues: []
                });
            } else {
                setFormError(data.message || 'Failed to add vendor');
            }
        } catch (err) {
            setFormError(err.message);
        } finally {
            setFormLoading(false);
        }
    };

    // Open edit modal and set data
    const handleEditClick = (vendor) => {
        setEditData({ ...vendor });
        setEditModal(true);
    };

    const handleEditInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Wrap edit submit with confirmation
    const handleEditVendor = async (e) => {
        e.preventDefault();
        setConfirmModal({
            open: true,
            action: 'edit',
            payload: { ...editData }
        });
    };

    // Actually send the PUT request after confirmation
    const doEditVendor = async (editPayload) => {
        setEditLoading(true);
        setEditError(null);
        try {
            const token = localStorage.getItem('token_admin') || localStorage.getItem('token_team');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendors/${editPayload._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: JSON.stringify(editPayload)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to update vendor');
            }
            const data = await response.json();
            if (data.success) {
                setVendors((prev) => prev.map(v => v._id === data.data._id ? data.data : v));
                setEditModal(false);
                setEditData(null);
            } else {
                setEditError(data.message || 'Failed to update vendor');
            }
        } catch (err) {
            setEditError(err.message);
        } finally {
            setEditLoading(false);
        }
    };

    // Toggle active/inactive with confirmation
    const handleToggleActive = (vendor) => {
        setConfirmModal({
            open: true,
            action: 'toggle',
            payload: vendor
        });
    };

    // Actually send the PUT request for toggle
    const doToggleActive = async (vendor) => {
        const updated = { ...vendor, isActive: !vendor.isActive };
        try {
            const token = localStorage.getItem('token_admin') || localStorage.getItem('token_team');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendors/${vendor._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                },
                body: JSON.stringify(updated)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to update vendor');
            }
            const data = await response.json();
            if (data.success) {
                setVendors((prev) => prev.map(v => v._id === data.data._id ? data.data : v));
            }
        } catch (err) {
            alert('Failed to update status: ' + err.message);
        }
    };

    // Add to confirmation dialog actions
    const handleDeleteVendor = (vendor) => {
        setConfirmModal({
            open: true,
            action: 'delete',
            payload: vendor
        });
    };

    const doDeleteVendor = async (vendor) => {
        try {
            const token = localStorage.getItem('token_admin');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vendors/${vendor._id}`, {
                method: 'DELETE',
                headers: {
                    ...(token && { 'Authorization': `Bearer ${token}` })
                }
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to delete vendor');
            }
            const data = await response.json();
            if (data.success) {
                setVendors((prev) => prev.filter(v => v._id !== vendor._id));
            } else {
                alert(data.message || 'Failed to delete vendor');
            }
        } catch (err) {
            alert('Failed to delete vendor: ' + err.message);
        }
    };

    // Update handleConfirm for delete
    const handleConfirm = () => {
        if (confirmModal.action === 'edit') {
            doEditVendor(confirmModal.payload);
        } else if (confirmModal.action === 'toggle') {
            doToggleActive(confirmModal.payload);
        } else if (confirmModal.action === 'delete') {
            doDeleteVendor(confirmModal.payload);
        }
        setConfirmModal({ open: false, action: null, payload: null });
    };
    const handleCancel = () => {
        setConfirmModal({ open: false, action: null, payload: null });
    };

    return (
        <>
            <div className="adminvendorssection">
                <div className="coursepagemain">
                    <div>
                        <h1 className="coursepagemaintitle">Vendors Management</h1>
                    </div>
                    <button onClick={() => { setFormon(!formon) }} className="courseadbtn">
                        <Plus size={20} />
                        <span>Add Vendor</span>
                    </button>
                </div>


                <div className='adminsearchcontainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search adminsearchicon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                    <input
                        type='text'
                        placeholder='Search Vendors'
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>

                {loading ? (
                    <div>Loading vendors...</div>
                ) : error ? (
                    <div style={{color: 'red'}}>Error: {error}</div>
                ) : (
                <div className="coursescontainer">
                        {vendors.map((item) => (
                            <div className="coursesbox" key={item._id}>
                                <div className="leftcoursebox">
                                    <div className="eachboxtitle">
                                        <p className="coursenametitle">
                                            {item.brandName}
                                        </p>
                                        <p className="facultydesignation">{item.vendorName}</p>
                                    </div>
                                    <div className="eachboxdesc">
                                        Contact Name: {item.vendorName}
                                    </div>
                                    <div className="courseperboxdowndetail">
                                        <p className="coursedurationbox">Contact Number: {item.phone}</p>
                                        <p className="coursedepartmentbox">
                                            Email: {item.email}
                                        </p>
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
                                        >
                                            {item.isActive ? 'Active' : 'Inactive'}
                                        </button>
                                    </div>
                                    <div className="courseeditbtn" onClick={() => handleEditClick(item)} style={{cursor:'pointer'}}>
                                        <SquarePen className="editdelete" />
                                        <p>Edit</p>
                                    </div>
                                    <div className="coursedeletebtn" onClick={() => handleDeleteVendor(item)} style={{cursor:'pointer'}}>
                                        <Trash className="editdelete" />
                                        <p>Delete</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                )}

                <div onClick={() => { setFormon(!formon) }} className={`addteamformpannel ${formon ? 'formon' : ''}`}>
                    <form className="addteamforminner" onClick={(e) => { e.stopPropagation(); }} onSubmit={handleAddVendor}>
                        <svg onClick={() => { setFormon(!formon) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x cutadminformicon"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        <input className='addteamforminput' type="text" name="brandName" placeholder='Brand Name' value={formData.brandName} onChange={handleInputChange} required />
                        <input className='addteamforminput' type="text" name="vendorName" placeholder='Vendor Name' value={formData.vendorName} onChange={handleInputChange} required />
                        <input className='addteamforminput' type="email" name="email" placeholder='Vendor Email' value={formData.email} onChange={handleInputChange} required />
                        <div className="twoinputinone">
                            <input className='addteamforminput halfwidth' type="text" name="phone" placeholder='Contact Number' value={formData.phone} onChange={handleInputChange} required />
                            <input className='addteamforminput halfwidth' type="text" name="whatsapp" placeholder='Whatsapp Number' value={formData.whatsapp} onChange={handleInputChange} />
                        </div>
                        <div className="twoinputinone">
                            <label style={{display:'flex',alignItems:'center',gap:'0.5rem',fontWeight:500}}>
                                <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleInputChange} /> Active
                            </label>
                        </div>
                        {formError && <div style={{color:'red',marginBottom:'0.5rem'}}>{formError}</div>}
                        <button className='addteamformbtn' type="submit" disabled={formLoading}>{formLoading ? 'Adding...' : 'Add Vendor'}</button>
                    </form>
                </div>
            </div>
            {/* Edit Vendor Modal */}
            {editModal && editData && (
                <div className={`addteamformpannel formon`}>
                    <form className="addteamforminner" onClick={e => e.stopPropagation()} onSubmit={handleEditVendor}>
                        <svg onClick={() => { setEditModal(false); setEditData(null); }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x cutadminformicon"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        <input className='addteamforminput' type="text" name="brandName" placeholder='Brand Name' value={editData.brandName || ''} onChange={handleEditInputChange} required />
                        <input className='addteamforminput' type="text" name="vendorName" placeholder='Vendor Name' value={editData.vendorName || ''} onChange={handleEditInputChange} required />
                        <input className='addteamforminput' type="email" name="email" placeholder='Vendor Email' value={editData.email || ''} onChange={handleEditInputChange} required />
                        <div className="twoinputinone">
                            <input className='addteamforminput halfwidth' type="text" name="phone" placeholder='Contact Number' value={editData.phone || ''} onChange={handleEditInputChange} required />
                            <input className='addteamforminput halfwidth' type="text" name="whatsapp" placeholder='Whatsapp Number' value={editData.whatsapp || ''} onChange={handleEditInputChange} />
                        </div>
                        <div className="twoinputinone">
                            <label style={{display:'flex',alignItems:'center',gap:'0.5rem',fontWeight:500}}>
                                <input type="checkbox" name="isActive" checked={!!editData.isActive} onChange={handleEditInputChange} /> Active
                            </label>
                        </div>
                        {editError && <div style={{color:'red',marginBottom:'0.5rem'}}>{editError}</div>}
                        <button className='addteamformbtn' type="submit" disabled={editLoading}>{editLoading ? 'Saving...' : 'Save Changes'}</button>
                    </form>
                </div>
            )}
            {/* Confirmation Dialog */}
            <ConfirmationDialog
                open={confirmModal.open}
                message={
                    confirmModal.action === 'edit' ? 'Are you sure you want to save changes to this vendor?'
                    : confirmModal.action === 'toggle' ? 'Are you sure you want to toggle the status of this vendor?'
                    : confirmModal.action === 'delete' ? 'Are you sure you want to delete this vendor? This action cannot be undone.'
                    : ''
                }
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </>
    )
}

export default AdminVendorsSection
