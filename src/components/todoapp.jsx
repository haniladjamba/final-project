/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getDatabase, ref, get, remove, update} from 'firebase/database';
import TodoList from './Upcoming';

const TodoApp = () => {

  const [tasks, setTasks] = useState([]);
  const [taskIDs, setTaskIDs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();

         // Fetch data from 'other', 'today', and 'tomorrow'
         const categories = ['today'];
         const allData = [];
         const allIDs = [];
 
         for (const category of categories) {
           const dataRef = ref(db, `task/${category}`);
           const snapshot = await get(dataRef);
           const data = snapshot.val();
 
           if (data) {
            const categoryData = Object.entries(data).map(([id, item]) => ({
              ...item,
              id,
              category,
            }));
            const categoryIDs = Object.keys(data);
            allIDs.push(...categoryIDs);
  
            allData.push(...categoryData);
          }
         }

         setTasks(allData);
         setTaskIDs(allIDs);

        // Filter data where priority is 1
        const priority1Todos = Object.values(allData)
          .filter(item => item.priority);

        setTasks(priority1Todos);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  console.log("tasks :", tasks);

  const deleteTask = async (index) => {

    // Remove the task from the database
    try {
      const db = getDatabase();

      // Get the task ID and category based on the index
      const { id } = tasks[index];

      // Remove the task from the database using its unique ID
      await remove(ref(db, `task/today/${id}`));

      // Update the local state to reflect the removal
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);

      // Additional logic: perform any other actions needed when claiming a reward
    } catch (error) {
      console.error("Error removing data from Firebase:", error);
    }

    // Update the tasks state
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newTaskValue, newRewardValue) => {
    const taskToUpdate = tasks[index];
  
    // Update the task in the database
    try {
      const db = getDatabase();
      const taskRef = ref(db, `task/today/${taskToUpdate.id}`);
      update(taskRef, { todo: newTaskValue, reward: newRewardValue });
    } catch (error) {
      console.error('Error updating task in Firebase:', error);
    }
  
    // Update the tasks state
    const updatedTasks = [...tasks];
    updatedTasks[index].task = newTaskValue;
    updatedTasks[index].reward = newRewardValue;
    setTasks(updatedTasks);
    setEditingIndex(null); // Reset editing state
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  console.log("tasks :", tasks);


  return (
    <div
      style={{ backgroundColor: "#301E67" }}
      className="container m-5 p-2 rounded mx-auto shadow"
    >
      {/* ... (unchanged code) */}
      <h2 style={{ color: "#B6EADA" }}>Task</h2>
      <TodoList endpoint={"today"}/>
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {tasks.map((tasks, index) => (
            <div key={index} className="today-container d-flex align-items-center mb-2">
            <li style={{ color: "#B6EADA", fontSize: "1.1em", marginRight: "10px" }}>
              <strong>Todo:</strong> {tasks.todo} | <strong>Reward:</strong> {tasks.reward}
            </li>
            <div style={{ marginLeft: "auto" }}>
              <button
                type="button"
                className="btn btn-warning btn-sm mx-2"
                onClick={() => {
                  const newTaskValue = prompt('Enter the new task value:', tasks.task);
                  if (newTaskValue !== null) {
                    const newRewardValue = prompt('Enter the new reward value:', tasks.reward);
                    if (newRewardValue !== null) {
                      editTask(index, newTaskValue, newRewardValue);
                    }
                  }
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;