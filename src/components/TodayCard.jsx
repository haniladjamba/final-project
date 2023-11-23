import { useState } from 'react';
import AddTaskForm from "./TodayCardComponents/AddTaskForm";
import TaskList from "./TodayCardComponents/TaskList"
import { MdDarkMode, MdSunny } from "react-icons/md";
import "../assets/TodayCard.css";

function TodayCard() {
  const [tasks, setTasks] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, title) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const getCompletedTasks = () => tasks.filter((task) => task.completed);
  const getRemainingTasks = () => tasks.filter((task) => !task.completed);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`flex flex-col space-y-6 w-[600px] md:w-[100%] z-10 p-4 ${
        darkTheme ? "text-white" : "text-black"
      }`}
    >
      <div className=" w-full flex items-center justify-between">
        <h1 className=" uppercase text-4xl font-bold text-white tracking-widest mb-4 md:text-3xl">
          {/* Task Manager */}
          My Tasks
        </h1>

        {darkTheme ? (
          <MdSunny
            onClick={toggleTheme}
            className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${
              darkTheme ? "text-white" : "text-black"
            }`}
            size={32}
          />
        ) : (
          <MdDarkMode
            onClick={toggleTheme}
            className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${
              darkTheme ? "text-white" : "text-black"
            }`}
            size={32}
          />
        )}
      </div>
      <div className=" shadow-md">
        <AddTaskForm darkTheme={darkTheme} onAddTask={addTask} />
      </div>
      <div
        className={`scroll ${
          darkTheme ? "bg-gray-800" : "bg-white"
        } w-full h-[400px] md:h-[500px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500`}
      >
        <div
          className={`w-full overflow-hidden mb- sticky top-0 ${
            darkTheme ? "bg-gray-800" : "bg-white"
          } flex items-center justify-between text-gray-500 border-b`}
        >
          <p className=" text-gray-500 px-2 py-3">
            {getRemainingTasks().length} tasks left{" "}
          </p>
          <button onClick={clearTasks}>Clear all tasks</button>
        </div>

        {tasks.length ? (
          <TaskList
            tasks={tasks}
            onEditTask={editTask}
            onDeleteTask={deleteTask}
            onToggleCompleted={toggleCompleted}
          />
        ) : (
          <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
            <p className=" text-gray-500 text-center z-10">Empty task</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodayCard;