import Upcoming from "./Upcoming"

const UpcomingOther = () => {
    return(
        <div className="card">
            <div className="card-body">
                <p className="card-title lead display-6">Other list</p>
                <hr />
                <div style={{height: "240px"}} className="overflow-auto lead">
                    <Upcoming />
                </div>
            </div>
        </div>
    )
}

export default UpcomingOther