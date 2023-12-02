import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const GetReward = () => {
  // State to store the reward and todo lists
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    console.log('useEffect is running');

    const dbRef = ref(getDatabase(), 'task/today');

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

        setRewards(uniqueRewardsArray);
      } else {
        console.log('No data available');
      }
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // You can also return the lists if needed
  return (
    <div>
       <ul style={{ color: "#B6EADA" }}>
      {rewards.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    </div>
  );
};

export default GetReward;
