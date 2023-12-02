import React, { useEffect, useState } from 'react';
import './Reward.css';
import { getDatabase, ref, get, remove } from 'firebase/database';

const Reward = () => {
  const [rewards, setRewards] = useState([
    { priority: "", reward: "", todo: "" },
  ]);
  const [taskIDs, setTaskIDs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const categories = ['other', 'today', 'tommorow'];
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
  
        // Assuming allIDs contains the unique IDs
        console.log('All IDs:', allIDs);
  
        setRewards(allData);
        setTaskIDs(allIDs);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };
  
    fetchData();
  }, []);
  

  console.log(rewards);

  const handleClaim = async (index) => {
    try {
      const db = getDatabase();

      // Get the task ID and category based on the index
      const { id, category } = rewards[index];

      // Remove the task from the database using its unique ID
      await remove(ref(db, `task/${category}/${id}`));

      // Update the local state to reflect the removal
      const updatedRewards = rewards.filter((_, i) => i !== index);
      setRewards(updatedRewards);

      // Additional logic: perform any other actions needed when claiming a reward
    } catch (error) {
      console.error("Error removing data from Firebase:", error);
    }
  };

  return (
    <div>
      <p style={{ color: "#B6EADA" }} className="lead">
        in here you can see all the reward you can get if you complete a task.
        This can make you more motivated to do your task. So the more you do
        complete your task, the more reward you can get.
      </p>
      <div className="reward-container">
        <h2>My Rewards</h2>

        {rewards.map((rewards, index) => (
          <div className="reward-box" key={index}>
            <h3>{rewards.reward}</h3>
            <p>{rewards.todo}</p>
            <div className="task-id">
              Task ID: {rewards.priority} ({rewards.category})
              <button
                className="claim-button btn btn-success"
                onClick={() => handleClaim(index)}
              >
                Claim
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reward;