import React from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import HomePageBodyContainer from './containers/HomePageBodyContainer'

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <HomePageBodyContainer/>
    </div>
  );
}

export default App;
