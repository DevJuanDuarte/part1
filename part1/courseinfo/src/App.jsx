const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

const Total2 = (props) => {
  return <p>Number of exercises {props.exercises1 - props.exercises2 - props.exercises3}</p>
}

const Total3 = (props) => {
  return <p>Number of exercises {props.exercises1 * props.exercises2 * props.exercises3}</p>
}

const Combinado = (props) => {
  return <h1>{props.course} {props.part1}</h1>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Combinado course={course} part1={part1}></Combinado>
      <Header course={course} />
      <p>
        <Content part1={part1} exercises1={exercises1} />
      </p>
      <p>
        <Content part2={part2} exercises2={exercises2} />
      </p>
      <p>
        <Content part3={part3} exercises3={exercises3} />
      </p>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total2 exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total3 exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App