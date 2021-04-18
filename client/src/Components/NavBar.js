import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePic from "../assets/images/reflections.jpg"


function NavBar({ closeMenu }) {

  return (
    <div className="navBar"  >

      <nav className="navBar__nav-menu" >
        <div className="navBar__profile-pic" >
          <img src={ProfilePic} alt="" />
        </div>

        <ul className="navBar__nav-list" >
          <li className="navBar__nav-item" >
            <NavLink to="/" activeClassName="active" onClick={closeMenu}  >Home</NavLink>
          </li>
          <li className="navBar__nav-item" >
            <NavLink to="/about" activeClassName="active" onClick={closeMenu}  >About</NavLink>
          </li>
          <li className="navBar__nav-item" >
            <NavLink to="/portfolios" activeClassName="active" onClick={closeMenu}   >Projects</NavLink>
          </li>
          <li className="navBar__nav-item" >
            <NavLink to="/blogs" activeClassName="active" onClick={closeMenu}   >Blogs</NavLink>
          </li>
          <li className="navBar__nav-item" >
            <NavLink to="/contact" activeClassName="active" onClick={closeMenu}   >Contact</NavLink>
          </li>
        </ul>

        <footer className="navBar__footer"><p> ©2021 Sabo Jise </p> </footer>
      </nav>

    </div>
  )
}

export default NavBar;
