const Task = () => {
  return (
    <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus soluta doloremque dolorem, fuga, dolor similique voluptas architecto nemo cupiditate molestias mollitia eum veniam inventore, quod magnam fugiat modi officiis laborum?</p>
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
              <p>Make payment to Tokopedia</p>
              <p>Office Rent</p>
              <p>Office grocery shopping</p>
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
              <p>Final Project Front-End</p>
              <p>Final Project System Analysis and Design</p>
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
              <p>Ask for Lunch to Clients</p>
              <p>Create weekly tasks plan</p>
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task