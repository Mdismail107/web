import Loginsignup from './Components/Login-signup/Login-signup';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Login-signup/Register';
import Home from './Components/Login-signup/Homepage'
import Sidebar from './Components/Login-signup/sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginsignup />} />
        <Route path="/login" element={<Loginsignup />} />
        <Route path="/Register" element={<Register />} />
        <Route path ="/Home" element={<Home/>}/>
        {/* <Route path ="/Sidebar" element={<Sidebar/>}/> */}
        <Route
          path="/Sidebar"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

