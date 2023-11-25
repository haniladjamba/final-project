const Task = () => {
  return (
    <div>
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
              <p>Task 1</p>
              <p>Task 2</p>
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
              <p>Task 3</p>
              <p>Task 4</p>
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
              <p>Task 5</p>
              <p>Task 6</p>
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task