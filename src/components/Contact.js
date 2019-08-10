import  React from 'react';
import NavBar from './NavBar'

const Contact = () => {

  return (
    <div>
      <NavBar/>
      <div class="header-div">
        <div class="header-title">
          Contact Us
        </div>
      </div>
      <div class="abt-page-body-container">
      <div id="contact-box">
          <div id="li-weight-counseling">
            NEW YORK WEIGHT COUNSELING, INC.
          </div>
          <div id="footer-address-details">
            555 Somewhere Turnpike
            City, N.Y. 11791
            <p>516-333-3333</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
