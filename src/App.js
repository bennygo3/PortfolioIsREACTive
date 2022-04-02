import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/HeaderNav";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Project from "./pages/Projects/Project";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <Router>
     <Nav />
     
     <Routes>
       <Route path = '/PortfolioIsREACTive' element = {<Home/>} />
       <Route path = '/aboutme' element = {<AboutMe/>} />
       <Route path = '/portfolio' element = {<Project/>} />
       <Route path = '/resume' element = {<Resume/>} />
       <Route path = '/contact' element = {<Contact/>} />
     </Routes>
     <Footer />
     
   </Router>
    
  );
}

export default App;






