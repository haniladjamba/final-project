import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), value: inputValue, isComplete: false },
      ]);
      setInputValue("");
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
          onClick={handleAddTodo}
        >
          Add To-do
        </button>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new"
          value={inputValue}
          onChange={handleInputChange}
        />
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
