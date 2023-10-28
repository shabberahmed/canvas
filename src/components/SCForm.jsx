import React, { useState } from "react";
import "../styles/scform.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SCForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    sonWifeDaughter: "",
    houseNumber: "",
    colony: "",
    villageDivision: "",
    occupation: "",
    totalNumberOfVoters: "",
    totalNumberOfLocalVoters: "",
    totalNumberOfNonLocalVoters: "",
    caste: "",
    category: "",
    religion: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://karyakartha-server.onrender.com/api/sc-form-data",
        formData
      );
      alert("Submit Success");
      console.log(response);
      navigate("/sc-forms-btns");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="sc-header">
        <span
          onClick={() => {
            navigate("/sc-forms-btns");
          }}
        >
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
        </span>
        <h3>Start Canvasing</h3>
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

          {/* Add more form elements with similar structure for responsiveness */}

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="houseNumber" className="col-form-label">
                House Number
              </label>
              <input
                type="text"
                id="houseNumber"
                className="form-control"
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="colony" className="col-form-label">
                Colony
              </label>
              <input
                type="text"
                id="colony"
                className="form-control"
                name="colony"
                value={formData.colony}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="villageDivision" className="col-form-label">
                Village/Division
              </label>
              <input
                type="text"
                id="villageDivision"
                className="form-control"
                name="villageDivision"
                value={formData.villageDivision}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="occupation" className="col-form-label">
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                className="form-control"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="totalNumberOfVoters" className="col-form-label">
                Total Number Of Voters
              </label>
              <input
                type="text"
                id="totalNumberOfVoters"
                className="form-control"
                name="totalNumberOfVoters"
                value={formData.totalNumberOfVoters}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label
                htmlFor="totalNumberOfLocalVoters"
                className="col-form-label"
              >
                Total Number Of Local Voters
              </label>
              <input
                type="text"
                id="totalNumberOfLocalVoters"
                className="form-control"
                name="totalNumberOfLocalVoters"
                value={formData.totalNumberOfLocalVoters}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label
                htmlFor="totalNumberOfNonLocalVoters"
                className="col-form-label"
              >
                Total Number Of Non Local Voters
              </label>
              <input
                type="text"
                id="totalNumberOfNonLocalVoters"
                className="form-control"
                name="totalNumberOfNonLocalVoters"
                value={formData.totalNumberOfNonLocalVoters}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="caste" className="col-form-label">
                Caste
              </label>
              <input
                type="text"
                id="caste"
                className="form-control"
                name="caste"
                value={formData.caste}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="category" className="col-form-label">
                Category
              </label>
              <input
                type="text"
                id="category"
                className="form-control"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="religion" className="col-form-label">
                Religion
              </label>
              <input
                type="text"
                id="religion"
                className="form-control"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="comments" className="col-form-label">
                Comments
              </label>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
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
        </div>
      </div>
    </>
  );
};

export default SCForm;
