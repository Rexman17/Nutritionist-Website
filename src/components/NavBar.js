import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

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

// <Route path="/" exact component={Index} />
// <Route path="/about/" component={About} />
// <Route path="/users/" component={Users} />
