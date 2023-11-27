const Task = () => {
  return (
    <div>
      <p>The task list is organized into three priority levels: High, Medium, and Low, ensuring focused attention and efficient execution based on importance and urgency.</p>
      <meta charSet="UTF-8" />
      <title>Task Priority</title>
      <link rel="stylesheet" href="styles.css" />
      <div className="priority-box">
        <div className="priority high">
          <div className="card">
            <div className="card-header">
              <h2>High Priority</h2>
            </div>
            <div className="card-body">
              {/* High priority tasks here */}
              <li>Make payment to Tokopedia</li>
              <li>Office Rent</li>
              <li>Office grocery shopping</li>
              {/* ... */}
            </div>
          </div>
        </div>
        <div className="priority medium">
          <div className="card">
            <div className="card-header">
              <h2>Medium Priority</h2>
            </div>
            <div className="card-body">
              {/* Medium priority tasks here */}
              <li>Final Project Front-End</li>
              <li>Final Project System Analysis and Design</li>
              {/* ... */}
            </div>
          </div>
        </div>
        <div className="priority low">
          <div className="card">
            <div className="card-header">
              <h2>Low Priority</h2>
            </div>
            <div className="card-body">
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