import { useState } from 'react'

const StatisticsLine = ({ text, value }) => (<tr><td>{text}</td><td>{value}</td></tr>);

const Statistics = ({ good, neutral, bad }) => {
  const getTotal = () => good + neutral + bad;

  const getAvg = () => {
    const total = getTotal();
    return total == 0 ? 0 : (good - bad) / total;
  };

  const getPositive = () => {
    const total = getTotal();
    return total == 0 ? 0 : (good / total) * 100;
  }

  return (
    <div>
      <h1>Statistics</h1>
      {
        getTotal() == 0
          ? <p>No feedback given</p>
          : <table>
            <tbody>
              <StatisticsLine text="Good" value={good}></StatisticsLine>
              <StatisticsLine text="Neutral" value={neutral}></StatisticsLine>
              <StatisticsLine text="Bad" value={bad}></StatisticsLine>
              <StatisticsLine text="Total" value={getTotal()}></StatisticsLine>
              <StatisticsLine text="Average" value={getAvg()}></StatisticsLine>
              <StatisticsLine text="Positive" value={getPositive()}></StatisticsLine>
            </tbody>
          </table>
      }
    </div>
  );
};

const Button = ({ text, onClick }) => (<button onClick={onClick}>{text}</button>);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button text="Good" onClick={() => setGood(good + 1)} />
        <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="Bad" onClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
};

export default App;