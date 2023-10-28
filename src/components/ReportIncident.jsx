import axios from "axios";
import "../styles/report-incident.css";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportIncident = () => {
  const navigate = useNavigate();
  const [comment,setComment]=useState("")
  const [image, setImage] = useState("");
  const [cloudinaryUrl,setCloudinary]=useState("")

  const uploadImagetodata = () => {
    if (image) {
      uploadImagetoCloudinary(image).then((res) => {
        setImage(res);
      });
    }
  };

  const uploadImagetoCloudinary = async (val) => {
    const data = new FormData();
    data.append("file", val);
    data.append("upload_preset", "jobminar");
    return axios
      .post("https://api.cloudinary.com/v1_1/jobminar/image/upload", data)
      .then((res) => {
        setCloudinary(res.data.url);
      });
  };
 
  const handleSubmit = async () => {
    if(comment ==="" || image ==="" || cloudinaryUrl===""){
      return alert("fill all fileds")   
    }
    else{
      const data={
        comment,image:cloudinaryUrl
      }
      console.log(data);
      try {
        await axios.post(
          "https://karyakartha-server.onrender.com/api/report-incident",
          data 
        );
        alert("Submit Success");
        navigate("/home");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="report-incident">
      <div className="sc-header">
        <span
          onClick={() => {
            navigate("/home");
          }}
        >
          <i className="fa fa-home" aria-hidden="true"></i>
        </span>
        <h3>Report Incident</h3>
      </div>

      <div className="container">
        <div className="container mt-3">
          <div className="row g-1">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="comment" className="col-form-label">
                  Comment
                </label>
                <textarea
                  type="text"
                  id="comment"
                  className="form-control"
                  name="comment"
                  value={comment}
                  onChange={(e)=>{setComment(e.target.value)}}
                ></textarea>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="photo">
                  Upload Photo <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="photo"
                  name="photo"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    // console.log(image);
                  }}
                  onBlur={uploadImagetodata}
                  required
                />
              </div>
            </div>

            <div className="col-md-12">
              <button
                id="btn-id"
                className="btn btn-primary mt-5 mb-3 w-100"
                style={{ borderRadius: "10px" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIncident;
