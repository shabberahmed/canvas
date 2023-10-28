import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
// import img from '../images/political.jpeg'

const Home = () => {
  const navigate = useNavigate();
  const Logout = () => {
    navigate('/');
  }

  return (
    <div className="main flex flex-col items-center justify-center">
      {/* <img src={img} alt=""  className="rounded-5" style={{width:100}}/> */}
      <div>
        <button onClick={Logout} className="btn btn-lg btn-danger mt-3"><i className="fa-solid fa-right-from-bracket"></i>Logout </button>
      </div>

      <div className="flex flex-col home-button-container items-center m-5" >
        {/* <button
        style={{backgroundImage:'url("https://www.shutterstock.com/image-vector/canvass-word-cloud-conceptual-design-260nw-2311243467.jpg")'}}
          className="btn mt-4 w-80 h-40 rounded-lg bg-blue-700  leading-34 text-center drop-shadow-md buttonScale"
          onClick={() => {
            navigate("/start-canvasing");
          }}
        >
          <span className="text-black text-4xl "> Start Canvassing</span>
         
        </button> */}

        <button
  className="btn mt-4 w-80 h-40 rounded-lg bg-blue-700 leading-34 text-center drop-shadow-md buttonScale"
  style={{
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYhwPEJbNPzX0KApQk3B2Y954V_30S0h3wA&usqp=CAU")',
   
  }}
  onClick={() => {
    navigate("/voter-application");
  }}
>
  <span className="text-black text-4xl"style={{ textShadow: '10px 10px 10px white' }}>Voter Application</span>
</button>

        <button  className="btn mt-4 w-80 h-40 rounded-lg bg-blue-700 leading-34 text-center drop-shadow-md buttonScale"style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MY2uqnyx1tZFd_cu7nEB4Olx1P5XlKaz3g&usqp=CAU)',backgroundSize:'cover'}} onClick={() => {
            navigate("/report-incident");
          }}></button>
{/* call icons */}
        <button className="btn home-call-btns">
          <a href="tel:8977011167" className="text-sm"><i className="fa-solid fa-phone"></i> Call incharge-1</a>
        </button>

        <button className="btn home-call-btns">
          <a href="tel:8977011167" className="text-sm"><i className="fa-solid fa-phone"></i> Call incharge-2</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
