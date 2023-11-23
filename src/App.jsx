import "./assets/style.css";
import { useState } from "react";
import FullHeightComponent from "./components/FullHeight";

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive((prev) => !prev);
  };

  return (
    <>
      <FullHeightComponent />
      <div className="wrapper d-flex align-items-stretch">
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
          <h2 className="mb-4">Sidebar #01</h2>
          {/*For Page*/}
          <div className="page">
            {/*Card*/}
            <div className="card">
              {/*Card Header*/}
              <div className="card-header">
                <p>
                  {" "}
                  <i className="fa fa-bars" />{" "}
                  <i className="fa fa-calendar ml-4" aria-hidden="true" />{" "}
                  <i className="fa fa-star ml-4" aria-hidden="true" />{" "}
                  <span className="float-right">
                    {" "}
                    <span className="mr-4 navTask">Task</span>{" "}
                    <span className="mr-4">Archive</span>{" "}
                    <i className="fa fa-search" aria-hidden="true" />{" "}
                  </span>{" "}
                </p>
              </div>
              {/*Card Body*/}
              <div className="card-body">
                <p className="heading1">
                  {" "}
                  <span className="today">Today</span>{" "}
                  <span className="float-right headingright">7h 15min</span>{" "}
                </p>
                <p>
                  {" "}
                  <i className="fa fa-calendar mr-2" aria-hidden="true" />{" "}
                  <span className="task mt-4">Take kids to school</span>{" "}
                  <span className="time ml-2">8:00-8:30AM</span>{" "}
                  <span className="float-right">30min</span>{" "}
                </p>
                <p>
                  <i className="	fa fa-circle-thin mr-2" />{" "}
                  <span className="task">Process email</span>{" "}
                  <i className="fa fa-thumb-tack ml-2" aria-hidden="true" />{" "}
                  <span className="time ml-2">8:00-9:30AM</span>
                  <span className="float-right">1h</span>{" "}
                </p>
                <p>
                  <i className="fa fa-calendar mr-2" aria-hidden="true" />{" "}
                  <span className="task">Daily Stand-Up meeting</span>{" "}
                  <span className="time ml-2">9:00-10:00AM</span>{" "}
                  <span className="float-right">30min</span>{" "}
                </p>
                <p>
                  <i className="	fa fa-circle-thin mr-2" />
                  <span className="task">Create new templates</span>{" "}
                  <i className="fa fa-thumb-tack ml-2" aria-hidden="true" />{" "}
                  <i className="fa fa-user ml-2" />{" "}
                  <span className="time ml-2">10:00-11:45AM</span>{" "}
                  <span className="float-right">1h 45min</span>{" "}
                </p>
                <p>
                  <i className="fa fa-calendar mr-2" aria-hidden="true" />{" "}
                  <span className="task">Lunch with Anna</span>{" "}
                  <span className="time ml-2">12:00-12:30PM</span>{" "}
                  <span className="float-right">30min</span>{" "}
                </p>
                <p className="text-muted">
                  <i className="fa fa-plus mr-1" aria-hidden="true" /> Add Task
                  for Today
                </p>
                <p className="heading2">
                  <span className="tomorrow">Tomorrow</span>{" "}
                  <span className="float-right headingright">6h 30min</span>{" "}
                </p>
                <p className="task2 mt-4">
                  <i className="fa fa-calendar mr-2" aria-hidden="true" />{" "}
                  <span className="task">
                    Breakfast with the Marketing team
                  </span>{" "}
                  <span className="time ml-2">8:00-8:30AM</span>{" "}
                  <span className="float-right">30min</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
