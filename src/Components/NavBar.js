import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePic from "../assets/images/sabzs-profile-pic.jpg"

function NavBar() {
  return (
    <div className="navBar" >
      <div className="navBar__profile-pic" >
        <img src={ProfilePic} alt="" />
      </div>
      <div className="navBar__nav-menu" >
        <ul className="navBar__nav-items" >
          <li className="navBar__nav-list" >
            <NavLink to="/" activeClassName="active" >Home</NavLink>
          </li>
          <li className="navBar__nav-list" >
            <NavLink to="/about" activeClassName="active" >About</NavLink>
          </li>
          <li className="navBar__nav-list" >
            <NavLink to="/portfolios" activeClassName="active" >Portfolios</NavLink>
          </li>
          <li className="navBar__nav-list" >
            <NavLink to="/blog" activeClassName="active" >Blogs</NavLink>
          </li>
          <li className="navBar__nav-list" >
            <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
          </li>
        </ul>
      </div>




    </div>
  )
}

export default NavBar;
