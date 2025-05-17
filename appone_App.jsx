const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const Header = (obj) => {
  return (
    <h1>{obj.course.name}</h1>
  )
}


const Content = (obj) => {
  const part1 = obj.parts[0]
  const part2 = obj.parts[1]
  const part3 = obj.parts[2]
  return (
  <div>
    <Part part = {part1.name} exercise = {part1.exercises}/>
    <Part part = {part2.name} exercise = {part2.exercises}/>
    <Part part = {part3.name} exercise = {part3.exercises}/>
  </div>
  )
}


const Total = (obj) => {
  const first = obj.parts[0].exercises
  const second = obj.parts[1].exercises
  const third = obj.parts[2].exercises
  return (
    <p>
      Number of exercises {first + second + third}
    </p>
  )
}


const Part = (obj) => {
  return (
  <div>
    <p>
      {obj.part} {obj.exercise}
    </p>
  </div>
  )
}

export default App