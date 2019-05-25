import React from 'react';
import './App.css';
import Header from "./../../views/Header/Header";
import Footer from "./../../views/Footer/Footer";
import Portfolio from "./../../containers/Portfolio/Portfolio";
function App() {
  return (
    <div className="container">
      <Header/>
      <Portfolio/> 
      <Footer />  
    </div>
  );
}

export default App;
