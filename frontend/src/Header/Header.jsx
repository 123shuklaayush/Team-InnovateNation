import React from 'react';
import logo from "../image/imagelogo-removebg-preview.png";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand" href="head">
              <img src={logo} alt="test" className="img-logo" />
            </a>
          </Link>
          <div className="orgname position-absolute top-5 start-50 translate-middle-x">OpenArms</div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto list-items">
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
