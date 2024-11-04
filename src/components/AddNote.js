// src/components/AddNote.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../slices/notesSlice';


const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    dispatch(addNote(newNote));
    setTitle('');
    setContent('');
  };

  return (
    <div className="add-note">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};



export default AddNote;
