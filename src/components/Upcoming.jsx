
import { useState } from 'react';


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
    setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
    if (inputValue.trim()) {
        setTodos([
            ...todos,
        { id: Date.now(), value: inputValue, isComplete: false },
        ]);
        setInputValue('');
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
        
        <div className="todo-list__input-container">
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="todo-list__input"
            />
            <button className="todo-list__add-btn" onClick={handleAddTodo}>
            Add Todo
            </button>
        </div>
        <ul className="todo-list__list">
            {todos.map((todo) => (
            <li
                key={todo.id}
                className={`todo-list__item ${
                todo.isComplete ? 'todo-list__item--complete' : ''
                }`}
            >
                <span
                className="todo-list__complete-btn"
                onClick={() => handleCompleteTodo(todo.id)}
                >
                &#10003;
                </span>
                <span className="todo-list__value">{todo.value}</span>
                <span
                className="todo-list__delete-btn"
                onClick={() => handleDeleteTodo(todo.id)}
                >
                &times;
                </span>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default TodoList;