
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {
  //const token = getToken();
  //const [token, setToken] = useState();
  const { token, setToken } = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
    <h1>Application</h1>
    <BrowserRouter>
    <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/preferences" element={<Preferences/>}/>
          
        </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;