const UpcomingOther = () => {
    return(
        <div className="card">
                  <div className="card-body">
                    <p className="card-title lead display-6">Other list</p>
                    <hr />
                    <ul style={{fontSize: "25px", maxHeight: "120px"}} className="overflow-auto lead">
                      You need to do:
                      <li style={{fontSize: "20px"}}>
                        Clean my room "again"
                      </li>
                      <li style={{fontSize: "20px"}}>
                        call the plumber
                      </li>
                      <li style={{fontSize: "20px"}}>
                        defrost the fish
                      </li>
                      <li style={{fontSize: "20px"}}>
                        reset the router
                      </li>


                    </ul>
                  </div>
                </div>
    )
}

export default UpcomingOther