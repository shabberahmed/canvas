import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import StartConvoying from "./components/StartConvoying"
import SCFormButtons from "./components/SCFormButtons"
import SCForm from "./components/SCForm"
import VoterReports from "./components/VoterReports"
import AdminSigin from "./components/AdminSigin"
import Signup from "./components/Signup"
import AdminPanel from "./components/AdminPanel"
import AddKaryakartha from "./components/AddKaryakartha"
import SendNotifications from "./components/SendNotifications"
import VoterApplication from "./components/VoterApplication"
import ReportIncident from "./components/ReportIncident"
import VoterCard from "./components/VoterCard"

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<AdminSigin/>}/>
      <Route path="/signup" element={<Signup/>}/>

      <Route path="/home" element={<Home/>}/>
      <Route path="/start-canvasing" element={<StartConvoying/>}/>
      <Route path="/voter-application" element={<VoterApplication/>}/>
      <Route path="/report-incident" element={<ReportIncident/>}/>
      <Route path="/sc-forms-btns" element={<SCFormButtons/>}/>
      <Route path="/sc-form" element={<SCForm/>}/>
      <Route path="/voter-reports" element={<VoterReports/>}/>
      <Route path="/voter-card" element={<VoterCard/>}/>


      {/* Admin Panel */}
      <Route path="/admin" element={<AdminPanel/>}/>
      <Route path="/add-karyakartha" element={<AddKaryakartha/>}/>
      <Route path="/send-notifications" element={<SendNotifications/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
