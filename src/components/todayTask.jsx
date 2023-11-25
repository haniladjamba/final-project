const UpcomingTask = () => {
    return(
        <div>
            
            <div className="">
            <div className="card">
             <div className="card-body">
                <p className="card-title display-6 lead">Today to-do list</p>
                <hr />
                {/* <Upcoming/> */}
                <ul style={{fontSize: "25px", maxHeight: "120px"}} className="overflow-auto lead">This is only a Test ^^
                  <li style={{fontSize: "20px"}}>
                    Hello
                  </li>
                  <li style={{fontSize: "20px"}}>
                    How are
                  </li>
                  <li style={{fontSize: "20px"}}>
                    You
                  </li>
                  <li style={{fontSize: "20px"}}>
                    Today?
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    )
}

export default UpcomingTask