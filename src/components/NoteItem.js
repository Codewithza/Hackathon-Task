// src/components/NoteItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../slices/notesSlice';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default NoteItem;

