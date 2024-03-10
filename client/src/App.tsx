import React, {useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import DrugUsage from './Pages/DrugUsage/DrugUsage';
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }

    )
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="DrugUsage" element={<DrugUsage />} />
          
          {/* Add Routes Here */}
        </Routes>
      </BrowserRouter>
     
      
    </>
  );
}

export default App;
