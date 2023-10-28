import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import "../styles/sc.css";

const StartConvoying = () => {

  const navigate=useNavigate()
  const [selectedParliament, setSelectedParliament] = useState("");
  const [selectedAssembly, setSelectedAssembly] = useState("");
  const [selectedMandal, setSelectedMandal] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [boothNumber, setBoothNumber] = useState("");

  // Sample data for Hyderabad, Malkajgiri, and Secunderabad constituencies
  const parliamentAreas = ["Hyderabad", "Malkajgiri", "Secunderabad"];

  const assemblyConstituencies = {
    Hyderabad: ["Charminar", "Khairtabad", "Secunderabad"],
    Malkajgiri: ["Malkajgiri", "Quthbullapur", "Uppal"],
    Secunderabad: ["Cantonment", "Secunderabad", "Amberpet"],
  };

  const mandals = {
    Charminar: ["Mandal 1", "Mandal 2", "Mandal 3"],
    Khairtabad: ["Mandal A", "Mandal B", "Mandal C"],
    Secunderabad: ["Mandal X", "Mandal Y", "Mandal Z"],
    Malkajgiri: ["Mandal I", "Mandal II", "Mandal III"],
    Quthbullapur: ["Mandal P", "Mandal Q", "Mandal R"],
    Uppal: ["Mandal Alpha", "Mandal Beta", "Mandal Gamma"],
    Cantonment: ["Mandal Red", "Mandal Blue", "Mandal Green"],
    Amberpet: ["Mandal Red", "Mandal Blue", "Mandal Green"],
  };

  const municipalities = {
    "Mandal 1": ["Municipality A", "Municipality B", "Municipality C"],
    "Mandal 2": ["Municipality D", "Municipality E", "Municipality F"],
    "Mandal 3": ["Municipality G", "Municipality H", "Municipality I"],
    // Add more municipalities as needed
  };

  const handleParliamentChange = (e) => {
    setSelectedParliament(e.target.value);
    setSelectedAssembly("");
    setSelectedMandal("");
    setSelectedMunicipality("");
  };

  const handleAssemblyChange = (e) => {
    setSelectedAssembly(e.target.value);
    setSelectedMandal("");
    setSelectedMunicipality("");
  };

  const handleMandalChange = (e) => {
    setSelectedMandal(e.target.value);
    setSelectedMunicipality("");
  };

  const handleMunicipalityChange = (e) => {
    setSelectedMunicipality(e.target.value);
  };

  const handleBoothNumberChange = (e) => {
    setBoothNumber(e.target.value);
  };

  // Replace this function with your actual API endpoint and data
  const sendDataToBackend = () => {
    const dataToSend = {
      parliament: selectedParliament,
      assembly: selectedAssembly,
      mandals: selectedMandal,
      municipalityOrVillage: selectedMunicipality,
      boothNumber
    };

    axios
      .post("https://karyakartha-server.onrender.com/api/convoyingData", dataToSend)
      .then((response) => {
        console.log(response);
        alert("Submit Success")
        // console.log("Data sent successfully:", response.data);
        navigate("/sc-forms-btns")
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <>
      <div className="sc-header">
        <span
          onClick={() => {
            navigate("/home");
          }}
        >
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
        </span>

        <h3 >Start Canvasing</h3>
      </div>
      <div className="container mt-3">
        <div className="form-group">
          <label htmlFor="parliamentSelect">Select Parliamentary</label>
          <select
            className="form-control"
            id="parliamentSelect"
            value={selectedParliament}
            onChange={handleParliamentChange}
          >
            <option value="">Select</option>
            {parliamentAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {selectedParliament && (
          <div className="form-group mt-3">
            <label htmlFor="assemblySelect">Select Assembly</label>
            <select
              className="form-control"
              id="assemblySelect"
              value={selectedAssembly}
              onChange={handleAssemblyChange}
            >
              <option value="">Select</option>
              {assemblyConstituencies[selectedParliament].map((assembly) => (
                <option key={assembly} value={assembly}>
                  {assembly}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedAssembly && (
          <div className="form-group mt-3">
            <label htmlFor="mandalSelect">Select Mandal</label>
            <select
              className="form-control"
              id="mandalSelect"
              value={selectedMandal}
              onChange={handleMandalChange}
            >
              <option value="">Select</option>
              {mandals[selectedAssembly].map((mandal) => (
                <option key={mandal} value={mandal}>
                  {mandal}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedMandal && (
          <div className="form-group mt-3">
            <label htmlFor="municipalitySelect">Select Municipality/Village</label>
            <select
              className="form-control"
              id="municipalitySelect"
              value={selectedMunicipality}
              onChange={handleMunicipalityChange}
            >
              <option value="">Select</option>
              {municipalities[selectedMandal].map((municipality) => (
                <option key={municipality} value={municipality}>
                  {municipality}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group mt-3">
          <label htmlFor="boothNumber">Booth Number</label>
          <input
            type="text"
            id="boothNumber"
            className="form-control"
            name="boothNumber"
            value={boothNumber}
            onChange={handleBoothNumberChange}
          />
        </div>

        <button
          className="btn btn-primary mt-5 mb-5 w-100"
          onClick={sendDataToBackend}
          disabled={!selectedMunicipality}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default StartConvoying;
