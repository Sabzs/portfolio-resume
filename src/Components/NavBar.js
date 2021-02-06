import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePic from "../assets/images/profile-navbar.jpg"


function NavBar() {
  return (
    <div className="navBar" >

      <nav className="navBar__nav-menu" >
        <div className="navBar__profile-pic" >
          <img src={ProfilePic} alt="" />
        </div>
        <ul className="navBar__nav-list" >
          <li className="navBar__nav-item" >
            <NavLink to="/" activeClassName="active" >Home</NavLink>
          </li>
          <li className="navBar__nav-item" >
            <NavLink to="/about" activeClassName="active" >About</NavLink>
          </li>
          <li className="navBar__nav-item" >
            <NavLink to="/portfolios" activeClassName="active" >Portfolios</NavLink>
          </li>
          <li className="navBar__nav-item" >
            <NavLink to="/blogs" activeClassName="active" >Blogs</NavLink>
          </li>
          <li className="navBar__nav-item" >
            <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
          </li>
        </ul>

        <footer className="navBar__footer"><p> ©2021 Sabo Jise </p> </footer>
      </nav>

    </div>
  )
}

export default NavBar;
