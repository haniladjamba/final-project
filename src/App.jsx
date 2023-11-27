/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./assets/style.css";
<<<<<<< HEAD
import { useState } from "react";
import FullHeightComponent from "./components/FullHeight";
import Reward from "./components/Reward";
=======
import "bootstrap/dist/css/bootstrap.css";
import SideBar from "./components/SideBar";
>>>>>>> b981de91cd8d1b3fa7cee9a380b57f5745b805c5

function App() {
  return (
    <>
      {/* ... (unchanged code) */}
      <div className="wrapper d-flex align-items-stretch">
<<<<<<< HEAD
        <nav id="sidebar" className={sidebarActive ? "active" : ""}>
          <div className="p-4 pt-5">
            <a
              href="#"
              className="img logo rounded-circle mb-5"
              style={{ backgroundImage: "url(images/logo.jpg)" }}
            />
            <ul className="list-unstyled components mb-5">
              <li className="active">
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  Home
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#">Home 1</a>
                  </li>
                  <li>
                    <a href="#">Home 2</a>
                  </li>
                  <li>
                    <a href="#">Home 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle collapsed"
                >
                  Pages
                </a>
                <ul
                  className="list-unstyled collapse"
                  id="pageSubmenu"
                  style={{}}
                >
                  <li>
                    <a href="#">Page 1</a>
                  </li>
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Page 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="footer">
              <p>
                Copyright © 2023 All rights reserved | This template is made
                with
                <i className="icon-heart" aria-hidden="true" /> by
                <a href="#" target="_blank">
                  Colorlib.com
                </a>
              </p>
            </div>
          </div>
        </nav>
        <div id="content" className="p-4 p-md-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-primary"
                onClick={handleSidebarToggle}
              >
                <i className="fa fa-bars" />
                <span className="sr-only">Toggle Menu</span>
              </button>
              <button
                className="btn btn-dark d-inline-block d-lg-none ml-auto collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" />
              </button>
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
                style={{}}
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <h2 className="mb-4"></h2>
          <p>On this page, you can view a comprehensive list of rewards attainable through completed tasks. Rewards are generated upon the completion of specific tasks, and after finishing a task, you can press the 'Claim' button to redeem the corresponding reward.</p>
          <div>
            <Reward />
          </div>
        </div>
=======
        <SideBar />
>>>>>>> b981de91cd8d1b3fa7cee9a380b57f5745b805c5
      </div>
    </>
  );
}

export default App;
