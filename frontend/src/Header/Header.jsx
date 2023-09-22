import React from 'react';
import logo from "../image/logo.png"
import { Link } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" >
          <Link to = "/">
          <a className="navbar-brand" href="head">
            <img src={logo} width="40px" alt="test" className="img-logo" />
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="headnavbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto list-items" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="head">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="head">
                  Help
                </a>
              </li>
              <Link to="/signIn">
              <li className="nav-item">
                <a className="btn btn-dark">
                  Login/Sign In
                </a>
              </li>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
