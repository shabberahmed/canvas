import React from "react";
import admin from '../assets/admin.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#F7C1F8" }}>
      <a className="navbar-brand" href="/" style={{marginLeft:"5rem"}}>
        Logo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">

      <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"50rem"}}>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="/">
              xxxxx
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              xxxxx
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              xxxxx
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              xxx
            </a>
          </li>
        </ul>
        <div className="rounded-circle profile-image">
          <img
            src={admin}
            alt="Profile"
            className="img-fluid"
            style={{width:"50px", border:"1px solid", borderRadius:"50%", padding:"5px"}}
          />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
