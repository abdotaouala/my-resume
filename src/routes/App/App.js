import React from 'react';
import './App.css';
import Header from "./../../views/Header/Header";
import Footer from "./../../views/Footer/Footer";
import Portfolio from "./../../containers/Portfolio/Portfolio";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div className="container">
        <Router>
            <Header/>
            <Portfolio/>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
