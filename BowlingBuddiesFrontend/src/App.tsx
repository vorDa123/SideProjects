import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './views/Dashboard.tsx'
import Login from "./views/Login.tsx";
import Register from "./views/Register.tsx";
import MyProfile from "./views/MyProfile.tsx";
import Profile from "./views/Profile.tsx";
import OpenJoin from "./views/OpenJoinBowling.tsx";
import BowlingAlleys from "./views/BowlingAlleys.tsx";
import MyReservations from "./views/MyReservations.tsx";
import BowlingCenter from "./views/BowlingCenter.tsx";
import EditProfile from "./views/EditProfile.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/bowlingalleys" element={<BowlingAlleys />} />
        <Route path="/openjoin" element={<OpenJoin />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/bowlingcenterid" element={<BowlingCenter />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
