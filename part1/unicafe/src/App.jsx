import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <div>
        <h1>Give Feedback</h1>

        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <div>
        <h1>Statistics</h1>

        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>

        <p>Total {getTotal()}</p>
        <p>Average {getAvg()}</p>
        <p>Positive {getPositive()} %</p>
      </div>
    </div>
  )
}

export default App