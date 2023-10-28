import React, { useState } from "react";
import "../styles/voter-report.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VoterReports = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    houseNumber: "",
    voterIdNumber: "",
    issue: "Issue Type",
    commentForIllegalMovement: "",
    commentForOthers: "",
    address: "",
    commentForAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://karyakartha-server.onrender.com/api/voter-reports"
      );
      console.log(response);
      alert("Submit Success");
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
        <h3>Voter Reports</h3>
      </div>

      <div className="container mt-3">
        <div className="row g-3">
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
              <label htmlFor="voterIdNumber" className="col-form-label">
                Voter ID Number
              </label>
              <input
                type="text"
                id="voterIdNumber"
                className="form-control"
                name="voterIdNumber"
                value={formData.voterIdNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="issue" className="col-form-label">
                Issue
              </label>
              <select
                className="form-select sc-select"
                aria-label="Default select example"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
              >
                <option value="Issue Type">Issue Type</option>
                <option value="Illegal movement/ Removed of vote">
                  Illegal movement/ Removed of vote
                </option>
                <option value="Change of Address">Change of Address</option>
                <option value="Married">Death</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          {formData.issue === "Illegal movement/ Removed of vote" ? (
            <div className="col-md-6">
              <div className="form-group">
                <label
                  htmlFor="commentForIllegalMovement"
                  className="col-form-label"
                >
                  Comments
                </label>
                <input
                  type="text"
                  id="commentForIllegalMovement"
                  className="form-control"
                  name="commentForIllegalMovement"
                  value={formData.commentForIllegalMovement}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : null}

          {formData.issue === "Others" ? (
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="commentForOthers" className="col-form-label">
                  Comments
                </label>
                <input
                  type="text"
                  id="commentForOthers"
                  className="form-control"
                  name="commentForOthers"
                  value={formData.commentForOthers}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : null}

          {formData.issue === "Change of Address" ? (
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="address" className="col-form-label">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : null}

          {formData.issue === "Change of Address" ? (
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="commentForAddress" className="col-form-label">
                  Comments
                </label>
                <input
                  type="text"
                  id="commentForAddress"
                  className="form-control"
                  name="commentForAddress"
                  value={formData.commentForAddress}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className="col-md-12">
          <button
            className="btn btn-primary mt-5 mb-5 w-100"
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

export default VoterReports;
