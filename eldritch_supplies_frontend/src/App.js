import React, { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';

import Home from "./components/Home"
import NavbarMain from './components/NavbarMain';
import Inventory from "./components/Inventory"
import ItemDetail from "./components/ItemDetail"
import Shoppes from "./components/Shoppes"

function App() {


  return (
    <div className="App">
     
      
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="inventory" element={<Inventory></Inventory>}/>
        {/* <Route path="inventory/:id" >
        </Route> */}
        <Route path="shoppes" element={<Shoppes></Shoppes>}/>
      </Routes>
    </div>
  );
}

export default App;
