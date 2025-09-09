import ReactDOM from 'react-dom/client'
import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)

const result = notes.map(note => note.id)
console.log(result)

const result2 = notes.map(note => note.content)
console.log(result2)

const result3 = notes.map(note => {
    '<li>' + note.content + '</li>'
})
console.log(result3)

const result4 = notes.filter(note => note.important == true)
console.log(result4)