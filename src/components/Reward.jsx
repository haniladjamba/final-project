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
  const [todoData, setTodoData] = useState({ todo: '', reward: '', priority: '' });
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
        const todoPriority1 = Object.values(data).find(item => item.priority === 1);

        if (todoPriority1) {
          // Update state with todo and reward values
          setTodoData({
            todo: todoPriority1.todo,
            reward: todoPriority1.reward,
            priority: todoPriority1.priority,
          });
          setRewards([
            {
              priority: todoPriority1.priority,
              reward: todoPriority1.reward,
              todo: todoPriority1.todo,
            },
          ]);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  rewards.id = 1

  console.log(rewards);


const handleClaim = (id) => {
     const newRewards = rewards.filter((rewards) => rewards.id !== id);
     setRewards(newRewards);
  };

 return (
  <div>
  <p style={{color: "#B6EADA"}} className="lead">in here you can see all the reward you can get if you complete a task.
    This can make you more motivated to do your task.
    So the more you do complete your task, the more reward you can get.

  </p>
    <div className="reward-container">
      <h2>My Rewards</h2>

      {rewards.map((rewards) => (
        <div className="reward-box" key={rewards.id}>
          <h3>{rewards.reward}</h3>
          <p>{rewards.todo}</p>
          <div className="task-id">
            Task ID: {rewards.priority}
            <button
              className="claim-button btn btn-success"
              onClick={() => handleClaim(rewards.id)}
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

Reward.propTypes = {
  rewards: propTypes.oneOfType([
    propTypes.arrayOf(
      propTypes.shape({
        priority: propTypes.string.isRequired,
        reward: propTypes.string.isRequired,
        todo: propTypes.string.isRequired,
      })
    ),
    propTypes.object, // Adjust this based on the actual structure of your rewards object
  ]),
};

export default Reward;