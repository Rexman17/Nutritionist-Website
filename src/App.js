import React from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePageBodyContainer from './containers/HomePageBodyContainer'

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
