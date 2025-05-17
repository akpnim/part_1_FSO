import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value} {props.percent}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.good + props.bad + props.neutral == 0){
    return (<p> No feedback given</p>)
  }

  return(
  <div>
    <table>
      <tbody>
        <StatisticLine value={props.good} name = {"good"}/>
        <StatisticLine value={props.neutral} name = {"neutral"}/>
        <StatisticLine value={props.bad} name = {"bad"}/>
        <StatisticLine value={props.good + props.bad + props.neutral} name = {"all"}/>
        <StatisticLine value={(props.good-props.bad)/(props.good+props.bad+props.neutral)} name = {"average"}/>
        <StatisticLine value={(props.good*100)/(props.good+props.bad+props.neutral)} percent = {'%'} name = {"positive"}/> 
      </tbody>
    </table>
  </div>)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToValue = (newValue,setName) => {
    console.log('value now', newValue)
    setName(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setToValue(good+1,setGood)} text="good" />
      <Button onClick={() => setToValue(neutral+1,setNeutral)} text="neutral" />
      <Button onClick={() => setToValue(bad + 1,setBad)} text="bad" />
      <h1>statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App