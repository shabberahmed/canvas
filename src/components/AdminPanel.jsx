import React from 'react'
import Navbar from './Navbar'
import '../styles/admin-dashboard.css'
import { useNavigate } from 'react-router-dom'


const AdminPanel = () => {
  const navigate =useNavigate()
  return (
    <>
    <Navbar/>
    <div className="admin-dashboard">
        <h2 className='admin-h2'>Admin Panel</h2>
        <div className="container btn-container">
        <button className='btn adminpanel-btns' onClick={()=>{navigate("/add-karyakartha")}}>Add Karyakartha</button>
        <button className='btn adminpanel-btns'>View Convoying Status</button>
        <button className='btn adminpanel-btns'>Download Status</button>
        <button className='btn adminpanel-btns' onClick={()=>{navigate("/send-notifications")}}>Send Notifications</button>
        <button className='btn adminpanel-btns'>See Active Karyakartha</button>
        </div>
    </div>
    </>
  )
}

export default AdminPanel