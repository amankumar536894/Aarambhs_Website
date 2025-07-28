import React, { useEffect } from 'react'
import './AdminCity.css'
import AdminSidebaar from '../../../components/Admin/AdminSidebaar/AdminSidebaar'
import AdminCitySection from '../../../components/Admin/AdminCitySection/AdminCitySection'
import { useNavigate } from 'react-router-dom';

const AdminCity = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token_admin');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <div className="admincity">
        <AdminSidebaar />
        <AdminCitySection/>
      </div>
    </>
  )
}

export default AdminCity
