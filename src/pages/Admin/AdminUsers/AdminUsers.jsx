import React, { useEffect } from 'react'
import './AdminUsers.css'
import AdminSidebaar from '../../../components/Admin/AdminSidebaar/AdminSidebaar'
import AdminUsersSection from '../../../components/Admin/AdminUsersSection/AdminUsersSection'
import { useNavigate } from 'react-router-dom';

const AdminUsers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token_admin');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <div className="adminusers">
        <AdminSidebaar />
        <AdminUsersSection/>
      </div>
    </>
  )
}

export default AdminUsers
