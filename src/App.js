import React from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import HomePageBodyContainer from './containers/HomePageBodyContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <div>



        <Header/>
        <NavBar/>
        <HomePageBodyContainer/>
        <Footer/>


      </div>
  );
}

export default App;
