import Upcoming from "./Upcoming"

const UpcomingTomorrow = () => {
    return(
      <div className="card" style={{backgroundColor:"#301E67"}}>
      <div className="card-body">
          <p className="card-title display-6 lead" style={{color:"#B6EADA"}}>Tomorrow to-do list</p>
                <hr />
                <div style={{height: "240px"}} className="overflow-auto lead">
                  <Upcoming />
                </div>
              </div>
            </div>
    )
}

export default UpcomingTomorrow