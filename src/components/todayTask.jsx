import Upcoming from "./Upcoming"
const UpcomingTask = () => {
    return(
        <div>
            
            <div className="">
            <div className="card">
              <div className="card-body">
                <p className="card-title display-6 lead">Today to-do list</p>
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

export default UpcomingTask