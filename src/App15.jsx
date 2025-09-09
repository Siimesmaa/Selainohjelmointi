// kopio edellisen tehtävän ratkaisu (1.2) tähän



const Header = (props) => (
  <div>
    <h1>{props.name}</h1>
  </div>
)


const Total = (props) => {
  console.log(props)
  let sum = 0
  for (let i = 0; i < props.parts.length; i++)
    sum += props.parts[i].exercises

  return(
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const Part = (props) => (<p>{props.part.name} {props.part.exercises}</p>)

const Content = (props) => {
  console.log('content: ', props)
  return (
    <div>
      {props.parts.map(part => 
        <Part key={part.id} part={part} />
      )}
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />   
    </div>
  )
}

const Course = ({course}) => (
  <div>
    <Header name={course.name} /> 
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

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
      <Header name={course.name}/>
      <Content parts = {course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
