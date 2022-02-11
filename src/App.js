import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import UserList from './components/users-list.component';
import EditUser from './components/edit-user.component';

function App() {

  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<UserList/>}></Route>
        <Route path="/edit/:id" element={<EditUser/>}></Route>
      </Routes>
    </Router>
  );     
}

export default App;