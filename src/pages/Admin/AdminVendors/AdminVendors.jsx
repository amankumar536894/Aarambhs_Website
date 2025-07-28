import React, { useEffect } from 'react'
import './AdminVendors.css'
import AdminSidebaar from '../../../components/Admin/AdminSidebaar/AdminSidebaar'
import AdminVendorsSection from '../../../components/Admin/AdminVendorsSection/AdminVendorsSection'
import { useNavigate } from 'react-router-dom';

const AdminVendors = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token_admin');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <div className="adminvendors">
        <AdminSidebaar />
        <AdminVendorsSection/>
      </div>
    </>
  )
}

export default AdminVendors
