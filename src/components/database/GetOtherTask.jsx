import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const GetOther = () => {
  // State to store the reward and todo lists
  const [rewardList, setRewardList] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log('useEffect is running');

    const dbRef = ref(getDatabase(), 'task/other');

    // Set up the onValue event listener
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const uniqueRewards = new Set();
        const uniqueTodos = new Set();

        // Iterate through each entry and extract reward and todo
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const entry = data[key];
            
            // Extract reward and add it to the rewardList
            const entryReward = entry.reward;
            if (!uniqueRewards.has(entryReward)) {
              uniqueRewards.add(entryReward);
            } else {
              console.log(`Duplicate reward found for ${key}: ${entryReward}`);
            }

            // Extract todo and add it to the todoList
            const entryTodo = entry.todo;
            if (!uniqueTodos.has(entryTodo)) {
              uniqueTodos.add(entryTodo);
            } else {
              console.log(`Duplicate todo found for ${key}: ${entryTodo}`);
            }
          }
        }

        // Convert the Sets to arrays and update the state
        const uniqueRewardsArray = Array.from(uniqueRewards);
        const uniqueTodosArray = Array.from(uniqueTodos);

        setRewardList(uniqueRewardsArray);
        setTodoList(uniqueTodosArray);
      } else {
        console.log('No data available');
      }
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array for running on mount

  // Access rewardList and todoList outside the useEffect
  console.log('Reward List outside useEffect:', rewardList);
  console.log('Todo List outside useEffect:', todoList);

  // You can also return the lists if needed
  return (
    <div>
       <ul style={{ color: "#B6EADA" }}>
      {todoList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    </div>
  );
};

export default GetOther;
