import React, { useState } from 'react'
import './AdminLoggin.css'
import logo from '../../../assets/aarambhlogo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLoggin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!phone || !password) {
      setError("Please enter both phone number and password.");
      return;
    }
    setError("");
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/admin/login`, {
        phone,
        password
      });
      if (res.status === 200 && res.data && res.data.token) {
        localStorage.setItem('token_admin', res.data.token);
        navigate('/admin/dashboard');
      } else {
        setError("Invalid phone number or password.");
      }
    } catch (err) {
      setError("Invalid phone number or password.");
    }
  };

  return (
    <div className="adminlogginpage">
      <div className="adminlogginbox">
        <img src={logo} alt="Aarambh Logo" className="adminlogginlogo" />
        <form className="adminlogginform" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone Number"
            className="adminloggininput"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="adminloggininput"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="adminlogginerror">{error}</div>}
          <button type="submit" className="adminlogginbtn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoggin
