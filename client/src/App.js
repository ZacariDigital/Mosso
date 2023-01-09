import React from 'react'
import NavBar from "./components/Navbar";
import "./App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from "./screens/Signup"
import Profile from "./screens/Profile";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Profile" element={<Profile />} />



      </Routes>
  </BrowserRouter>
    

  );
}

export default App;
