import "./assets/style.css";
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import FullHeightComponent from "./components/FullHeight";
// import Upcoming from "./components/Upcoming"

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive((prev) => !prev);
  };

  return (
    <div>
      <FullHeightComponent />
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar"  className={sidebarActive ? 'active' : ''}>
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
                className="btn btn-primary" onClick={handleSidebarToggle}>
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
          <h2 className="mb-4">Sidebar #01</h2>
              {/* Jerrico part */}
                      <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0 pb-3">
            <div className="card">
              <div className="card-body">
                <p className="card-title display-6 lead">Today to-do list</p>
                <hr />
                {/* <Upcoming/> */}
                <ul style={{fontSize: "25px", maxHeight: "120px"}} className="overflow-auto lead">This is only a Test ^^
                  <li style={{fontSize: "20px"}}>
                    Hello
                  </li>
                  <li style={{fontSize: "20px"}}>
                    How are
                  </li>
                  <li style={{fontSize: "20px"}}>
                    You
                  </li>
                  <li style={{fontSize: "20px"}}>
                    Today?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <p className="card-title display-6 lead">Today's Reward</p>
                <hr />
                <ul style={{fontSize: "25px", maxHeight: "120px"}} className="overflow-auto lead">
                  Here are the reward list
                  <li style={{fontSize: "20px"}}>
                    an eating coupon for dondon
                  </li>
                  <li style={{fontSize: "20px"}}>
                    a 5Gb internet
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <p className="card-title display-6 lead">Tomorrow to-do list</p>
                <hr />
                <ul style={{fontSize: "25px", maxHeight: "120px"}} className="overflow-auto lead">
                  You need to do:
                  <li style={{fontSize: "20px"}}>
                    Clean my room
                  </li>
                  <li style={{fontSize: "20px"}}>
                    throw the trash
                  </li>
                  <li style={{fontSize: "20px"}}>
                    Buy some eggs
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <p className="card-title lead display-6">Other list</p>
        <hr />
        <ul style={{fontSize: "25px", maxHeight: "120px"}} className="overflow-auto lead">
          You need to do:
          <li style={{fontSize: "20px"}}>
            Clean my room "again"
          </li>
          <li style={{fontSize: "20px"}}>
            call the plumber
          </li>
          <li style={{fontSize: "20px"}}>
            defrost the fish
          </li>
          <li style={{fontSize: "20px"}}>
            reset the router
          </li>


        </ul>
      </div>
    </div>
  </div>

        </div>

            {/*End of Jerrico part */}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
