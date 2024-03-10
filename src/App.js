import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Cards/Card.js';
import Footer from './Components/Footer/Footer.js'
import Company from './Components/Company/Company.js'

function App() {
  return (
    <div className="container">

        <Header/>
        <Navbar/>
        <Hero/>
        <Company/>
        <Card/>
        <Footer/>
 
    </div>
  );
}

export default App;