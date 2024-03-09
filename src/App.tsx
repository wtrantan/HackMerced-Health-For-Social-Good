import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="Login" element={<Login />} />
          {/* Add Routes Here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
