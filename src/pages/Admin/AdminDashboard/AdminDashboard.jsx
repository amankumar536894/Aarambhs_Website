import React, { useEffect } from 'react'
import './AdminDashBoard.css'
import AdminSidebaar from '../../../components/Admin/AdminSidebaar/AdminSidebaar'
import AdminDashboardSection from '../../../components/Admin/AdminDashboardSection/AdminDashboardSection'
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token_admin');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
    <div className="admindashboard">
      <AdminSidebaar />
      <AdminDashboardSection/>
    </div>
    </>
  )
}

export default AdminDashBoard
