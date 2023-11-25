const UpcomingTomorrow = () => {
    return(
        <div className="card">
              <div className="card-body">
                <p className="card-title display-6 lead">Tomorrow to-do list</p>
                <hr />
                <ul style={{fontSize: "25px", maxHeight: "120px"}} className="overflow-auto lead">
                  You need to do:
                  <li style={{fontSize: "20px"}}>
                    Clean my room
                  </li>
                  <li style={{fontSize: "20px"}}>
                    throw the trash
                  </li>
                  <li style={{fontSize: "20px"}}>
                    Buy some eggs
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
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>
                  <li style={{fontSize: "20px"}}>
                    ...
                  </li>

                </ul>
              </div>
            </div>
    )
}

export default UpcomingTomorrow