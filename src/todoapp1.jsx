import { useState } from 'react';

const TodoApp1 = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  
  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const editTask = (index, newValue) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newValue;
    setTasks(updatedTasks);
  };

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      {/* ... (unchanged code) */}
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add new .."
                value={newTask}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-auto m-0 px-2 d-flex align-items-center">
              <button type="button" className="btn btn-primary" onClick={addTask}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
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
              <div className="col-auto m-0 d-flex align-items-center">
              <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(index)}
                  />

                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm mx-2"
                  onClick={() => {
                    const newValue = prompt('Enter the new value:');
                    if (newValue !== null) {
                      editTask(index, newValue);
                    }
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp1;
