import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminSigin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [err,setErr]=useState("")
  const [success,setSuccess]=useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password,
    };
    await axios
      .post("http://localhost:8084/api/login", data)
      .then((res) => {
        // console.log(res.data);
        
        sessionStorage.setItem("token", res.data.token);
        console.log(res.data.user);
        if (res.data.user.role === "admin"){
            setSuccess("Login Success")
            navigate("/admin");
          }
        else{
            navigate("/home");
          }
        
      })
      .catch((error) => {
        setErr(error.response.data.error)
        // console.log(error);
        navigate("/");
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">Log In</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                >
                  Log In
                </button>
                <p style={{color:"green"}}>{success}</p>
                <p style={{color:"red"}}>{err}</p>
                <p className="mt-3 text-center">
                  Don't have an account?{" "}
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default AdminSigin;
