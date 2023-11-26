import UpcomingReward from "../todayReward";
import UpcomingTask from "../todayTask";
import UpcomingTomorrow from "../UpcomingTomorrow";
import UpcomingOther from "../UpcomingOther";

const Upcoming = () => {
    return (
        <>
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0 pb-3">
                <UpcomingTask />
              </div>
              <div className="col-sm-6 mb-3 mb-sm-0 pb-3">
                <UpcomingReward />
              </div>
              <div className="col-sm-6 mb-3 mb-sm-0 pb-3">
                <UpcomingTomorrow />
              </div>
              <div className="col-sm-6 mb-3 mb-sm-0 pb-3">
                <UpcomingOther />
              </div>
            </div>
        </>
    )
}

export default Upcoming;