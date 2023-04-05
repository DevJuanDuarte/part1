import { useState, useEffect } from 'react'
import './App.css'
import Note from './components/Note'
import axios from 'axios'
import { getAllNotes } from './services/notes/getAllnotes'
import { createNote } from './services/notes/createNote'

//Rederizando una colección:

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    console.log('UseEffect');
    setLoading(true)

    getAllNotes().then((notes)=>{
      setNotes(notes)
      setLoading(false)
    })
    
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Crear nota");

    const notesToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    createNote(notesToAddToState)
      .then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote))
      })


    // setNotes([...notes, notesToAddToState])
    setNewNote("")
  }

  console.log('Render');


  return (
    <div>

      <h1>Notes</h1>



      <ol>
        {loading ? 'cargando' : ''}
        {notes.map((note) => { return <Note key={note.id} {...note} /> })}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear</button>
      </form>
    </div>
  )
}

export default App
