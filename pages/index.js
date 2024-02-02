// default welcome page nextjs pages/index using class function
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function getNotes() {
      const response = await fetch('/api/notes')
      const { notes } = await response.json()
      console.log(notes.data)
      setNotes(notes.data)
    }

    getNotes()
  }, [])

  return (
    <div>
      <h1>Welcome to the Fauna Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  )
}


