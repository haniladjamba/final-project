import { useEffect, useState } from "react";
import { getDatabase, ref, get, on, off } from 'firebase/database';
import TodoApp from "../todoapp";

const GetDataToday2 = () => {
  // State to store the reward and todo lists
  // const [rewardList, setRewardList] = useState([]);
  // const [todoList, setTodoList] = useState([]);

  const [allData, setAllData] = useState([{ priority: '', reward: '', todo: '' }]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();

         // Fetch data from 'other', 'today', and 'tomorrow'
         const categories = ['today'];
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
          .filter(item => item.priority);

        setTodos(priority1Todos);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();

    const db = getDatabase();
    const todayTasksRef = ref(db, 'task/today');
    on(todayTasksRef, 'value', (snapshot) => {
      // Reload the page or update state when there are changes
      fetchData();
    });

    // Clean up the listener when the component is unmounted
    return () => {
      off(todayTasksRef, 'value');
    };
  }, []);

  return (
    <>
       <TodoApp todos={todos} />
    </>
  );
};

export default GetDataToday2;
