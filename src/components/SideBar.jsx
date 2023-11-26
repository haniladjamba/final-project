/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./header";

const SideBar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive((prev) => !prev);
  };

  return (
    <>
      <nav id="sidebar" className={sidebarActive ? "active" : ""}>
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
              <Link to="#">Task Priority</Link>
            </li>
            <li>
              <Link to="#">Reward</Link>
            </li>
          </ul>
          <div className="footer">
            <p>
              Copyright © 2023 All rights reserved | This template is made with
              <i className="icon-heart" aria-hidden="true" /> by
              <a href="#" target="_blank">
                Colorlib.com
              </a>
            </p>
          </div>
        </div>
      </nav>
      <div id="content" className="p-4 p-md-5">
        <Header />
      </div>
    </>
  );
};

export default SideBar;