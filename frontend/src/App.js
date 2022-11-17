import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';

import Home from "./components/Home"
import NavbarMain from './components/NavbarMain';
import Inventory from "./components/Inventory"
import ItemDetail from "./components/ItemDetail"
import Shoppes from "./components/Shoppes"
import ShoppeDetail from "./components/ShoppeDetail"

import {UserProvider} from "./context/context"

function App() {

  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} class="homepage"/>
          <Route path="inventory" element={<Inventory/>}/>
          <Route path="inventory/:id" element={<ItemDetail/>}/>
          <Route path="shoppes" element={<Shoppes></Shoppes>}/>
          <Route path="shoppes/:id" element={<ShoppeDetail/>}/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
