import Upcoming from "./Upcoming";
import GetOther from "./database/GetOtherTask";

const UpcomingOther = () => {
  return (
    <div className="card" style={{ backgroundColor: "#301E67" }}>
      <div className="card-body">
        <p className="card-title display-6 lead" style={{ color: "#B6EADA" }}>
          Other to-do list
        </p>
        <hr />
        <div style={{ height: "240px" }} className="overflow-auto lead">
          <Upcoming endpoint="other" />
          <ul style={{ color: "#B6EADA" }}>
            <li>
              <GetOther />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpcomingOther;
