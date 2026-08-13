import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Dashboard from './views/Dashboard.tsx'
import Login from "./views/Login.tsx";
import Register from "./views/Register.tsx";
import MyProfile from "./views/MyProfile.tsx";
import Profile from "./views/Profile.tsx";
import OpenJoin from "./views/OpenJoinBowling.tsx";
import BowlingAlleys from "./views/BowlingAlleys.tsx";
import MyReservations from "./views/MyReservations.tsx";
import BowlingCenter from "./views/BowlingCenter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
