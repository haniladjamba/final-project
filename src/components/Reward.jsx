
import './Reward.css';

const Reward = () => {
  return (
    <div className="reward-container">
      <h2>My Rewards</h2>

      <div className="reward-box">
        <h3>Task Completed</h3>
        <p>Complete a task and get a reward!</p>
      </div>

      <div className="reward-box">
        <h3>Special Achievement</h3>
        <p>Complete a challenging task to unlock a special achievement.</p>
      </div>

      <div className="reward-box">
        <h3>Monthly Bonus</h3>
        <p>Complete a certain number of tasks in a month to receive a bonus reward.</p>
      </div>
    </div>
  );
};

export default Reward;
