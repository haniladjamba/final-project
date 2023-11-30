/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import propTypes from 'prop-types';

const GetPriority = ({ priority }) => {
    GetPriority.propTypes = {
        priority: propTypes.number.isRequired,
    };

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();

        // Replace 'your-firebase-endpoint' with the actual endpoint where your data is stored
        const dataRef = ref(db, 'task/other');
        const snapshot = await get(dataRef);
        const data = snapshot.val();

        // Filter data where priority is 1
        const priority1Todos = Object.values(data)
          .filter(item => item.priority === priority);

        setTodos(priority1Todos);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts

  return (
    <>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>Todo:</strong> {todo.todo} | <strong>Reward:</strong> {todo.reward}
          </li>
        ))}
    </>
  );
};

export default GetPriority;
