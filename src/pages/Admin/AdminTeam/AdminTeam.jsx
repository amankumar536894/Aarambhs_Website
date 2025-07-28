import React, { useEffect } from 'react'
import './AdminTeam.css'
import AdminSidebaar from '../../../components/Admin/AdminSidebaar/AdminSidebaar'
import AdminTeamSection from '../../../components/Admin/AdminTeamSection/AdminTeamSection'
import { useNavigate } from 'react-router-dom';

const AdminTeam = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token_admin');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <div className="adminteam">
        <AdminSidebaar />
        <AdminTeamSection/>
      </div>
    </>
  )
}

export default AdminTeam
