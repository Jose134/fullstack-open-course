import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const getTotal = () => good + neutral + bad;
  
  const getAvg = () => {
    const total = getTotal();
    return total == 0 ? 0 : (good - bad) / getTotal();
  };

  const getPositive = () => {
    const total = getTotal();
    return total == 0 ? 0 : (good / getTotal()) * 100;
  }

  return (
    <div>
      <h1>Statistics</h1>

      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>

      <p>Total {getTotal()}</p>
      <p>Average {getAvg()}</p>
      <p>Positive {getPositive()} %</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>

        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
};

export default App;