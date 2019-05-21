import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import { Alert,DropdownButton,Dropdown,Modal } from 'react-bootstrap';
import Header from "./../../views/Header/Header";
import Footer from "./../../views/Footer/Footer";
function App() {
  let   handleShow=false;
  return (
    <div className="container">
      <Header/>

      <Footer />  
    </div>
  );
}

export default App;
