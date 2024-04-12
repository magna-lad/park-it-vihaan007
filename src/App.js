import React from "react";
import "./App.css"; 
import Navbar from "./component/LandingPage/Navbar.js";
import Main from './component/LandingPage/Main.js';
import Procedure from "./component/LandingPage/procedure.js";
import SignUp from "./component/NavbarLinks/SignUp.js" ;
import SignIn from "./component/NavbarLinks/Sign-in.js";
import ListProperty from "./component/NavbarLinks/List-property.js";
import ClientPage from './component/ClientPage/ClientPage';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className="god">
        <Navbar />
        <Main />
        <Procedure />
        
          <SignUp /> 
          <SignIn /> 
          <ListProperty />

      </div>
  );
}

export default App;
