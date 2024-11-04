// src/App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/signup/SignUpForm';
import './App.css'; // Add your styles here

function App() {
  return (
    <div className="app-container">
       <h1>Collaborative Study Notes App</h1>
       <AddNote />
       <NoteList />
       <LoginForm />
       <SignUpForm />


      {/* <Router>
      <Routes>
        <Route path="/" element={<AddNote />} />
        <Route path="/notes" element={<NoteList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      </Router> */}
    </div>
  );
}

export default App;
