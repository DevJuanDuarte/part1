import { useState } from 'react'
import './App.css'
import Note from './components/Note'

//Rederizando una colección:

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [showAll,setShowAll] = useState(true)

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Crear nota");

    const notesToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    setNotes([...notes, notesToAddToState])
    setNewNote("")
  }

  const handleShowOut = () => {
    setShowAll(()=> {
      return !showAll
    })
  }

  return (
    <div>

      <h1>Notes</h1>

      <button onClick={handleShowOut}>{showAll ?  "Show Ony Important" : "Show All"}</button>

      <ol>
        {
          notes
          .filter(note => {
            if (showAll === true) return true
            return note.important === true
          })
          .map((note) => {
          return <Note key={note.id} {...note} />
        })}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear</button>
      </form>
    </div>
  )
}

export default App
