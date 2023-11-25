import { useState } from 'react';

const TodoApp1 = () => {
  // Step 2: Create state variables
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Step 4: Input change handler
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Step 5: Add task function
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-black">
      {/* ... (unchanged code) */}
      {/* Create todo section */}
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              {/* Step 3: Input value and change handler */}
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add new .."
                value={newTask}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-auto m-0 px-2 d-flex align-items-center">
              {/* Step 7: Update button onClick */}
              <button type="button" className="btn btn-primary" onClick={addTask}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ... (unchanged code) */}
      {/* Todo list section */}
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {/* Step 6: Display the list of tasks */}
          {tasks.map((task, index) => (
            <div key={index} className="row px-3 align-items-center todo-item rounded">
              <div className="col px-1 m-1 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                  readOnly
                  value={task}
                  title={task}
                />
              </div>
              {/* ... (other code for each task) */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp1;
