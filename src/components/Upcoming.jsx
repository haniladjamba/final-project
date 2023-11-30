/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const TodoList = ({ endpoint }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("");
  const [details, setDetails] = useState({
    todo: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { todo } = details;

    // Combine task and priority
    const taskWithPriority = priority !== "" ? `${todo} * Priority: ${priority}` : todo;

    const res = await fetch(
      `https://project-100aa-default-rtdb.firebaseio.com/task/${endpoint}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fix the content type
        },
        body: JSON.stringify({
          todo: taskWithPriority,
        }),
      }
    );
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), value: inputValue, priority: parseInt(priority), isComplete: false },
      ]);
      setInputValue("");
      setPriority("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <div className="pb-3">
        <button
          style={{ backgroundColor: "#5B8FB9" }}
          className="btn btn-secondary"
          onClick={PostData}
        >
          Add To-do
        </button>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new"
          onChange={(e) => setDetails({ ...details, todo: e.target.value })}
        />

        {/* Priority selection */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select Priority</option>
          <option value="1">Low Priority</option>
          <option value="2">Medium Priority</option>
          <option value="3">High Priority</option>
        </select>
      </div>
      <hr />

      <ul className="todo-list__list" style={{ color: "#B6EADA" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-list__item ${
              todo.isComplete ? "todo-list__item--complete" : ""
            }`}
          >
            <span
              className="todo-list__complete-btn"
              onClick={() => handleCompleteTodo(todo.id)}
            ></span>
            <span className="todo-list__value">{todo.value}</span>
            <span className="todo-list__priority">{`Priority: ${todo.priority}`}</span>
            <span
              className="todo-list__delete-btn"
              onClick={() => handleDeleteTodo(todo.id)}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
