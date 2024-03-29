import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>

      <button
        className="btn btn-dark d-inline-block d-lg-none ml-auto collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list" />
      </button>
      <div
        className="navbar-collapse collapse"
        id="navbarSupportedContent"
        style={{}}
      >
        <ul className="nav navbar-nav ml-auto" style={{borderRadius: "5px"}}>
          <li className="nav-item active">
            <Link style={{color: "#B6EADA"}} className="nav-link" to="pages/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{color: "#B6EADA"}} className="nav-link" to="pages/today">
              Today Task
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{color: "#B6EADA"}} className="nav-link" to="pages/priority">
              Priority
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{color: "#B6EADA"}} className="nav-link" to="pages/reward">
              Reward
            </Link>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Header;
