import React from 'react';

class NavBar extends React.Component {

  render (){
    return (
      <div id="navBarDiv">
        <div class="nav-link">
          About
        </div>
        <div class="nav-link">
          Testimonials
        </div>
        <div class="nav-link">
          Contact
        </div>
      </div>
    )
  }
}

export default NavBar;
