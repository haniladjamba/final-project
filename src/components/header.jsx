import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom"

import TodayTask from "./pages/today";
import Upcoming from "./pages/upcoming";

const Header = () => {
  const [setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive((prev) => !prev);
  };

  return (
    <>
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
                <Link className="nav-link" to="pages/upcoming">
                  Upcoming
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/today">
                  Today Task
                </Link>
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
      <Routes>
        <Route path="pages/upcoming" element={<Upcoming />} />
        <Route path="pages/today" element={<TodayTask />} />
      </Routes>
    </>
  );
};

export default Header;
