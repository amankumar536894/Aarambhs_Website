import React from 'react'
import './AdminSidebaar.css'
import logo from '../../../assets/aarambhlogo.png'
import { NavLink } from 'react-router-dom'

const AdminSidebaar = () => {
  return (
    <>
      <div className="adminsidebaar">
        <img className='adminpannellogo' src={logo} />
        <NavLink className="link" to="/admin/dashboard" > <div className="adminsidenav dashboard">Dashboard</div></NavLink>
        <NavLink className="link" to="/admin/dashboard/vendors" > <div className=" adminsidenav vendors">Vendors</div></NavLink>
        <NavLink className="link" to="/admin/dashboard/venues" > <div className=" adminsidenav venues">Venues</div></NavLink>
        <NavLink className="link" to="/admin/dashboard/users" > <div className=" adminsidenav users">Users</div></NavLink>
        <NavLink className="link" to="/admin/dashboard/team" ><div className='adminsidenav'>Team</div></NavLink>
        <NavLink className="link" to="/admin/dashboard/city" ><div className='adminsidenav'>City</div></NavLink>
      </div>
    </>
  )
}

export default AdminSidebaar
