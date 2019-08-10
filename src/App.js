import React from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePageBodyContainer from './containers/HomePageBodyContainer'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <NavBar/>
        <HomePageBodyContainer/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
