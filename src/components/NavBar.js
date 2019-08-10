import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import AboutPage from './AboutPage'

class NavBar extends React.Component {

  render (){

    const style = {textDecoration: 'none', color: 'white' }

    return (
      <div id="navBarDiv">
        <div class="nav-link">
          <Link to="/about" style={style}>
            About
          </Link>
        </div>
        <div class="nav-link">
          <Link to="/testimonials" style={style}>
            Testimonials
          </Link>
        </div>
        <div class="nav-link">
          <Link to="/contact" style={style}>
            Contact
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar;
