import React, { useState } from "react";
import axios from "axios";
import "../styles/add-karyakartha.css";

const AddKaryakartha = () => {
  const [formData, setFormData] = useState({
    Name: "",
    MobileNo: "",
    UserId: "",
    Parliament: "",
    Assembly: "",
    Mandal: "",
    Municipality: "",
    BoothNo: "",
    Designation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 
      const response = await axios.post("https://karyakartha-server.onrender.com/api/add", formData);
     alert("Submitted")
     setFormData({
        Name: "",
        MobileNo: "",
        UserId: "",
        Parliament: "",
        Assembly: "",
        Mandal: "",
        Municipality: "",
        BoothNo: "",
        Designation: "",
      })
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <div className="addkaryakartha-container">
        <div className="container">
          <div className="form-text">
            <h2>Form</h2>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label htmlFor="Name" className="col-sm-2 col-form-label form-group-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="MobileNo" className="col-sm-2 col-form-label form-group-label">
                  Mobile No
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="inputMobileNo"
                    name="MobileNo"
                    value={formData.MobileNo}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="UserId" className="col-sm-2 col-form-label form-group-label">
                  User Id
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputUserId"
                    name="UserId"
                    value={formData.UserId}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="Parliament" className="col-sm-2 col-form-label form-group-label">
                  Parliament
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputParliament"
                    name="Parliament"
                    value={formData.Parliament}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="Assembly" className="col-sm-2 col-form-label form-group-label">
                  Assembly
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAssembly"
                    name="Assembly"
                    value={formData.Assembly}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="Mandal" className="col-sm-2 col-form-label form-group-label">
                  Mandal
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMandal"
                    name="Mandal"
                    value={formData.Mandal}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="Municipality" className="col-sm-2 col-form-label form-group-label">
                  Municipality
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMunicipality"
                    name="Municipality"
                    value={formData.Municipality}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="BoothNo" className="col-sm-2 col-form-label form-group-label">
                  Booth No
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputBoothNo"
                    name="BoothNo"
                    value={formData.BoothNo}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="Designation" className="col-sm-2 col-form-label form-group-label">
                  Designation
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control"
                    id="inputDesignation"
                    name="Designation"
                    value={formData.Designation}
                    onChange={handleChange}
                  >
                    <option value="Select">Select</option>
                    <option value="Booth Karyakartha">Booth Karyakartha</option>
                    <option value="Booth Incharge">Booth Incharge</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn add-karyakartha-btn">
                Add Karyakartha
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddKaryakartha;
