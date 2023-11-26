import Upcoming from "./Upcoming"

const UpcomingReward = () => {
    return(
      <div>
          <div className="">
            <div className="card">
              <div className="card-body">
                <p className="card-title display-6 lead">Today s Reward</p>
                <hr />
                <div style={{height: "240px"}} className="overflow-auto lead">
                  <Upcoming />
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default UpcomingReward