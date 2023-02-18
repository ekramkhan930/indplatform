import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <>
        <div className="main_header">
          <div className="container">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  INDPLATFORM
                </NavLink>
                <div
                  className="menu_bar"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  onClick={(a) => {
                    a.currentTarget.classList.toggle("change");
                  }}
                >
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/services"
                      >
                        services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/team"
                      >
                        team
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/contact"
                      >
                        contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link join_now"
                        aria-current="page"
                        to="/join"
                      >
                        join now
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
