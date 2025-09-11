import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <div>{text}{value}</div>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = (good / all) * 100 || 0


  return (
     <div>
      <StatisticLine text="Hyvä: " value={good} />
      <StatisticLine text="Neutraali: " value={neutral} />
      <StatisticLine text="Huono: " value={bad} />
      <StatisticLine text="Yhteensä: " value={all} />
      <StatisticLine text="Keskiarvo: " value={average.toFixed(1)} />
      <StatisticLine text="Positiivisia: " value={positive.toFixed(1) + ' %'} />
     </div>
  )
}

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="hyvä" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali" />
      <Button handleClick={() => setBad(bad + 1)} text="huono" />
      <h1>Tilastot</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}