import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';

import Home from "./Home"
import Navbar from './NavbarMain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar/>
      <Routes>
        <Route path="home"></Route>
        <Route path="inventory" element={
          <Items></Items>}>
  
        </Route>
        <Route path="shoppes"></Route>
        <Route path="items/:id">
          <ItemDetail/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
