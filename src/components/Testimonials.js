import React from 'react';
import NavBar from './NavBar'

const Testimonials = () => {

  const t1 = `
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  `
  const t2 = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, st ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`

  const t3 = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`

  return (
    <div>
      <NavBar/>
      <div class="header-div">
        <div class="header-title">
          Testimonials
        </div>
        <div class="mini-header-text">
          How and why is this nutrition plan working for you?
        </div>
      </div>
      <div class="page-body-container">
        <p>{t1}</p>
        <span class="cust-name-span">- Customer</span>
        <p>{t2}</p>
        <span class="cust-name-span">- Customer</span>
        <p>{t3}</p>
        <span class="cust-name-span">- Customer</span>
      </div>
    </div>
  )
}

export default Testimonials;
