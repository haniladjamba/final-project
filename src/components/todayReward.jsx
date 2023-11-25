const UpcomingReward = () => {
    return(
      <div>
          <div className="">
            <div className="card">
              <div className="card-body">
                <p className="card-title display-6 lead">Today's Reward</p>
                <hr />
                <ul style={{fontSize: "25px", maxHeight: "120px"}} className="overflow-auto lead">
                  Here are the reward list
                  <li style={{fontSize: "20px"}}>
                    an eating coupon for dondon
                  </li>
                  <li style={{fontSize: "20px"}}>
                    a 5Gb internet
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>

                </ul>
              </div>
            </div>
          </div>
      </div>
    )
}

export default UpcomingReward