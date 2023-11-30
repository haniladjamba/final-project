import React, { useEffect, useState } from 'react';
import './Reward.css';
import propTypes from 'prop-types';
import { getDatabase, ref, get } from 'firebase/database';

const Reward = () => {
  
  // const [rewardState, setRewards] = useState(newObject);

  // console.log(rewards);

  // if (!rewards || !Array.isArray(rewards) || rewards.length === 0) {
  //   return <p>Loading rewards...</p>;
  // }
  const [rewards, setRewards] = useState([{ priority: '', reward: '', todo: '' }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();

        // Replace 'your-firebase-endpoint' with the actual endpoint where your data is stored
        const dataRef = ref(db, 'task/other');
        const snapshot = await get(dataRef);
        const data = snapshot.val();

        // Filter data where priority is 1
        const todoPriority1 = Object.values(data)
          .filter(item => item.priority === 1);

        setRewards(todoPriority1);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  rewards.id = 2

  console.log(rewards);


const handleClaim = (index) => {
    // Create a new array excluding the randomly chosen item
    const updatedRewards = rewards.filter((_, i) => i !== index);
    setRewards(updatedRewards);
    // Additional logic: perform any other actions needed when claiming a reward
  };

 return (
  <div>
  <p style={{color: "#B6EADA"}} className="lead">in here you can see all the reward you can get if you complete a task.
    This can make you more motivated to do your task.
    So the more you do complete your task, the more reward you can get.

  </p>
    <div className="reward-container">
      <h2>My Rewards</h2>

      {rewards.map((rewards, index) => (
        <div className="reward-box" key={index}>
          <h3>{rewards.reward}</h3>
          <p>{rewards.todo}</p>
          <div className="task-id">
            Task ID: {rewards.priority}
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