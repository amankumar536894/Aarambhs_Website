import React, { useState } from 'react'
import './DeleteVenuePopup.css'

const DeleteVenuePopup = ({deleteVenuePopup, setDeleteVenuePopup, venueId, onDeleteSuccess}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token_admin');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/venues/${venueId}`, {
                method: 'DELETE',
                headers: {
                    ...(token && { 'Authorization': `Bearer ${token}` })
                }
            });
            if (!response.ok) throw new Error('Failed to delete venue');
            const data = await response.json();
            if (data.success) {
                setDeleteVenuePopup(false);
                if (onDeleteSuccess) onDeleteSuccess();
            } else {
                setError(data.message || 'Failed to delete venue');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={`deletevenuepopup ${deleteVenuePopup ? 'deletevenuepopup-active' : ''}`} onClick={() => setDeleteVenuePopup(false)}>
                <div className="deletevenuepopup-inner" onClick={(e) => e.stopPropagation()}>
                    <p className='deletevenuepopup-inner-text'>Are you sure you want to delete this venue?</p>
                    {error && <div style={{color:'red',marginBottom:8}}>{error}</div>}
                    <div className="deletevenuepopup-inner-buttons">
                        <div className='deletevenuepopup-inner-buttons-cancel' onClick={() => setDeleteVenuePopup(false)}>Cancel</div>
                        <div className='deletevenuepopup-inner-buttons-delete' onClick={handleDelete} style={{opacity: loading ? 0.6 : 1}}>
                            {loading ? 'Deleting...' : 'Delete'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteVenuePopup
