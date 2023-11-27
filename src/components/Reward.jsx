import React, { useState } from 'react';
import './Reward.css';

const Reward = () => {
 const [rewards, setRewards] = useState([
    { id: 1, name: 'Liburan di kasur', description: 'maximum 10 hours' },
    { id: 2, name: 'Top-up Furina', description: 'max top-up Rp5.000' },
    { id: 3, name: 'TWS', description: 'Air pods 3 pro' },
 ]);

 const handleClaim = (id) => {
    const newRewards = rewards.filter((reward) => reward.id !== id);
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

      {rewards.map((reward) => (
        <div className="reward-box" key={reward.id}>
          <h3>{reward.name}</h3>
          <p>{reward.description}</p>
          <div className="task-id">
            Task ID: {reward.id}
            <button
              className="claim-button btn btn-success"
              onClick={() => handleClaim(reward.id)}
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