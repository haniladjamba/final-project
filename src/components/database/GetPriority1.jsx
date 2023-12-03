/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import propTypes from 'prop-types';

const GetPriority = ({ priority }) => {
    GetPriority.propTypes = {
        priority: propTypes.number.isRequired,
    };

  const [todos, setTodos] = useState([]);
  const [allData, setAllData] = useState([{ priority: '', reward: '', todo: '' }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();

         // Fetch data from 'other', 'today', and 'tomorrow'
         const categories = ['today', 'tommorow', 'other'];
         const allData = [];
 
         for (const category of categories) {
           const dataRef = ref(db, `task/${category}`);
           const snapshot = await get(dataRef);
           const data = snapshot.val();
 
           // Extract data values and add them to the array
           if (data) {
             const categoryData = Object.values(data).map(item => ({ ...item, category }));
             allData.push(...categoryData);
           }
         }

        setAllData(allData);

        // Filter data where priority is 1
        const priority1Todos = Object.values(allData)
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
            <strong>Task:</strong> {todo.todo} | <strong>Reward:</strong> {todo.reward} | <strong>Due:</strong> {todo.category}
          </li>
        ))}
    </>
  );
};

export default GetPriority;
