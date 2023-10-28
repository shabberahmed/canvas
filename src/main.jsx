import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './images/political.jpeg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div>
   <div className='flex justify-center'>
   <img src={img} alt=""  className="rounded-5 mt-5"  style={{width:100}}/>
   </div>
<App/>
   </div>
  </React.StrictMode>
)
