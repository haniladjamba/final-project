import Upcoming from "./Upcoming";
import GetReward from "./database/GetTodayReward";

const UpcomingReward = () => {
  return (
    <div>
      <div className="">
        <div className="card" style={{ backgroundColor: "#301E67" }}>
          <div className="card-body">
            <p
              className="card-title display-6 lead"
              style={{ color: "#B6EADA" }}
            >
              Today s Reward
            </p>
            <hr />
            <div style={{ height: "240px" }} className="overflow-auto lead">
              {/* <Upcoming /> */}
              <ul style={{ color: "#B6EADA" }}>
                <div className="reward-data centered-container">
                  <GetReward />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingReward;
