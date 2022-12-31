import React, { useState } from "react";
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import {AdminPortal} from "./pages/admin/AdminPortal";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  const [currentForm, setCurrentForm] = useState('register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <AdminPortal onFormSwitch={toggleForm} />
      }
      
      {/* <Routes>
          <Route path="/admin" element={<AdminPortal />} />
      </Routes> */}
    </div>
  );
}

export default App;