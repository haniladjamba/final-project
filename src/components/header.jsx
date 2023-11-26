import { useState } from "react";
import TodayTask from "./pages/today";

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
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/today">
                  Today Task
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
      <div>
        <TodayTask />
      </div>
    </>
  );
};

export default Header;
