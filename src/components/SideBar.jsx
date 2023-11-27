/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./header";
import Show from "./renderer/show";

const SideBar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive((prev) => !prev);
  };

  return (
    <>
      <nav style={{backgroundColor: "#301E67"}} id="sidebar" className={sidebarActive ? "active" : ""}>
        <div className="p-4 pt-5">
          <a
            href="#"
            className="img logo rounded-circle mb-5"
            style={{ backgroundImage: "url(images/logo.jpg)" }}
          />
          <ul className="list-unstyled components mb-5">

            <li className="Active">
              <Link to="pages/upcoming">Upcoming</Link>
            </li>
            <li>
              <Link to="pages/today">Today task</Link>
            </li>
            <li>
              <Link to="pages/priority">Task Priority</Link>
            </li>
            <li>
              <Link to="pages/reward">Reward</Link>
            </li>
          </ul>
          <div className="footer">

          </div>
        </div>
      </nav>
      <div id="content" className="p-4 p-md-5">
        <nav style={{backgroundColor: "#301E67"}} className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-dark"
              onClick={handleSidebarToggle}
              style={{backgroundColor: "#5B8FB9"}}
            >
              <i className="bi bi-list" />
              <span className="sr-only">Toggle Menu</span>
            </button>
            <Header />
          </div>
        </nav>
        <Show />
      </div>
    </>
  );
};

export default SideBar;
