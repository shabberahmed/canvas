import React, { useState } from "react";
import "../styles/voter-application.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import VoterCard from "./VoterCard";
import img from './political.jpeg';

// import ShareButton from "./ShareButton";

const VoterApplication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    voterId: "",
    sonWifeDaughter: "",
    name: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8084/api/voter-applications",
        formData
      );
      alert("Submit Success");
      console.log(response);
      navigate("/voter-card");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="voter-application" style={{padding:10 ,margin:10}}>
      <div className="sc-header">
        <span
          onClick={() => {
            navigate("/home");
          }}
        >
          <i className="fa fa-home" aria-hidden="true"></i>
        </span>
        <h3>Voter Application</h3>
      </div>
      <div className="container mt-3">
        <div className="row g-1">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name" className="col-form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="sonWifeDaughter" className="col-form-label">
                S/o, W/o, D/o
              </label>
              <input
                type="text"
                id="sonWifeDaughter"
                className="form-control"
                name="sonWifeDaughter"
                value={formData.sonWifeDaughter}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="voterId" className="col-form-label">
                Voter Id Number
              </label>
              <input
                type="text"
                id="voterId"
                className="form-control"
                name="voterId"
                value={formData.voterId}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group gender-select-container">
              <label htmlFor="gender" className="col-form-label">
                Gender
              </label>
              <div className="form-group">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="gender-select"
                >
                  <option value="Select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group date-input-container">
              <label htmlFor="dob" className="col-form-label">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="form-control date-input"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-12">
            <button
              className="btn btn-primary mt-5 mb-3 w-100"
              style={{ borderRadius: "10px" }}
              onClick={handleSubmit}
            >
              Submit
            </button>
         {/* <div>
         <div className="flex flex-col">
        <div className="flex ">
          <p>Name</p> <p>Hello</p>
        </div>
      </div>
         </div> */}
          </div>
        <div className="flex rounded-4 row">
        <div className="flex flex-col rounded-4 col-6" style={{width:'22%',backgroundImage: `url(${img})`,opacity:'1',backgroundSize:'cover',width:500,height:500}}>
        <div className="rounded-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)' ,opacity:'1',height:'100vh',padding:'10px',width:500}}>
        <h1 className='text-center text-white text-6xl'> <span className='text-rose-500'>Party</span> <span className='text-green-500'>Name</span> </h1>
        <h1 className="text-center text-blue-400 text-6xl">contestant</h1>
        <div className="flex flex-row justify-between">
              <span className="text-white text-3xl">Name</span><span className="text-white text-3xl">Kowsalya XXXX</span>
            </div>
        <div className="flex flex-row justify-between ms-2 me-2 mt-3">
              <span className="text-white text-3xl">పేరు</span><span className="text-white text-3xl">కౌసల్య XXXX</span>
            </div>
        <div className="flex flex-row justify-between ms-2 me-2 mt-3">
              <span className="text-white text-3xl">Voter-id:</span><span className="text-white text-3xl">YVO0873779</span>
            </div>
        <div className="flex flex-row justify-between ms-2 me-2 mt-4">
              <span className="text-white text-3xl">Age/వయస్సు</span><span className="text-white text-3xl">44</span>
            </div>
        <div className="flex flex-row justify-between ms-2 me-2 mt-4">
              <span className="text-white text-3xl">constituency</span><span className="text-white text-3xl">Malkajgiri</span>
            </div>
            <div className="flex flex-row justify-between ms-2 me-2 mt-4">
              <span className="text-white text-3xl">నియోజకవర్గం</span><span className="text-white text-3xl">మల్కజగిరి</span>
            </div>
        <div className="flex flex-row justify-between ms-2 me-2 mt-3">
              <span className="text-white text-3xl">Booth-No/బూత్-నం</span><span className="text-white text-3xl">12</span>
            </div>
            <p className="text-white text-xl mt-5 ms-">polling date: XX-XX-2023 7AM to 6Pm</p>
        {/* <div className="flex flex-row justify-between">
              <span>Name</span><span>hello</span>
            </div> */}
             
        </div>
          </div>
          {/* ok */}
        
        </div>
        <div className="text-black flex flex-row text-6xl ms-5 col-6 col-md-12" style={{marginTop:'150px'}}> 
         <i class="fa-solid fa-download ms-5"></i>
         <i class="fa-solid fa-share ms-5"></i>
         <i class="fa-brands fa-square-whatsapp ms-5"></i>
         <i class="fa-solid fa-envelope ms-5"></i>
         </div>
        </div>
      </div>
      {/* cancel */}

     
          {/* <ShareButton/> */}
    </div>
  );
};

export default VoterApplication;
