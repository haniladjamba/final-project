import Upcoming from "./Upcoming";
import UseGetData from "./database/GetTodayTask";

const UpcomingTask = () => {
  return (
    <div>
      <div className="">
        <div className="card" style={{ backgroundColor: "#301E67" }}>
          <div className="card-body">
            <p
              className="card-title display-6 lead"
              style={{ color: "#B6EADA" }}
            >
              Today to-do list
            </p>
            <hr />
            <div style={{ height: "240px" }} className="overflow-auto lead">
              <Upcoming />
              <ul style={{ color: "#B6EADA" }}>
                <li>
                  <UseGetData />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTask;
