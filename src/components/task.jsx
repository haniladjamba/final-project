const Task = () => {
  return (
    <div>
      <p style={{color: "#B6EADA"}} className="lead">
        The task list is organized into three priority levels: High, Medium, and Low.
      Ensuring focused attention and efficient execution based on importance and urgency.
      This can create a efficient work flow. and by making a task priority, you can finish it more quickly.
      </p>
      <meta charSet="UTF-8" />
      <title>Task Priority</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="priority-box">
        <div className="priority high pb-3">
          <div className="card">
            <div className="card-header">
              <h2>High Priority</h2>
            </div>
            <div className="card-body" style={{color: "#B6EADA"}}>
              {/* High priority tasks here */}
              <li>Make payment to Tokopedia</li>
              <li>Office Rent</li>
              <li>Office grocery shopping</li>
              {/* ... */}
            </div>
          </div>
        </div>
        <div className="priority medium pb-3">
          <div className="card">
            <div className="card-header">
              <h2>Medium Priority</h2>
            </div>
            <div className="card-body" style={{color: "#B6EADA"}}>
              {/* Medium priority tasks here */}
              <li>Final Project Front-End</li>
              <li>Final Project System Analysis and Design</li>
              {/* ... */}
            </div>
          </div>
        </div>
        <div className="priority low pb-3">
          <div className="card">
            <div className="card-header">
              <h2>Low Priority</h2>
            </div>
            <div className="card-body" style={{color: "#B6EADA"}}>
              {/* Low priority tasks here */}
              <li>Ask for Lunch to Clients</li>
              <li>Create weekly tasks plan</li>
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task