import Upcoming from "./Upcoming"

const UpcomingTomorrow = () => {
    return(
        <div className="card">
              <div className="card-body">
                <p className="card-title display-6 lead">Tomorrow to-do list</p>
                <hr />
                <div style={{height: "240px"}} className="overflow-auto lead">
                  <Upcoming />
                </div>
              </div>
            </div>
    )
}

export default UpcomingTomorrow