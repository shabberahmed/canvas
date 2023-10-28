import React from 'react'
import '../styles/sc-forms.css'
import { useNavigate } from 'react-router-dom'

const SCFormButtons = () => {
    const navigate=useNavigate()
  return (
    <>
     <div className="sc-header">
        <span onClick={()=>{navigate("/start-canvasing")}}>
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
        </span>
        <span onClick={()=>{navigate("/home")}}>
        <i className="fa fa-home" aria-hidden="true"></i>
        </span>
    </div>
    <div className="container sc-form-btns-container">
     <button
          className="btn sc-form-btns"
          onClick={() => {
            navigate("/sc-form");
          }}
        >
          Start Canvasing
        </button>
        <button className="btn sc-form-btns" onClick={() => {
            navigate("/voter-reports");
          }}>Report Voters</button>
    </div>
    </>
  )
}

export default SCFormButtons