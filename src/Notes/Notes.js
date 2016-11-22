import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({ username, addNote, notes }) => (
  <div>
    <h3> Notes for {username} </h3>
    <AddNote
      username={username}
      addNote={addNote}
    />
    <NotesList notes={notes} />
  </div>
);

Notes.propTypes = {
  notes: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired,
};

export default Notes;
