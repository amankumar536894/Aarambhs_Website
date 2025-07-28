import React, { useEffect } from 'react'
import './AdminVenues.css'
import AdminSidebaar from '../../../components/Admin/AdminSidebaar/AdminSidebaar'
import AdminVenuesSection from '../../../components/Admin/AdminVenuesSection/AdminVenuesSection'
import { useNavigate } from 'react-router-dom';

const AdminVenues = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token_admin');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <div className="adminvenues">
        <AdminSidebaar />
        <AdminVenuesSection/>
      </div>
    </>
  )
}

export default AdminVenues
