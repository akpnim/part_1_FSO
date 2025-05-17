import { useState } from 'react'
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  var [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const setToValue = (newValue,setName) => {
    setName(newValue)
  }
  
  console.log(votes)

  var copy = [...votes]

  var argmax = votes.indexOf(Math.max(...votes))

  const increment = (position) => {
    copy[position] += 1 
    votes = [...copy]
    argmax = votes.indexOf(Math.max(...votes))
    setVotes(copy)
  }
 
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button onClick={() => setToValue(Math.floor(Math.random()*anecdotes.length),setSelected)} text="next anecdote" />
      <Button onClick={() => increment(selected)} text="vote"/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[argmax]}</p>
      <p>has {votes[argmax]} votes</p>
    </div>
  )
}

export default App