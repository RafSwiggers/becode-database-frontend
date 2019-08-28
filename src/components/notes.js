import React from 'react'

const Notes = ({ notes }) => {
      
      return (
        <div>
          <center><h1>Note List</h1></center>
          {notes.map((note) => (
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">{note.title}</h5>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Notes