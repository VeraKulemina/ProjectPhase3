import React, { useContext } from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';

import Home from "./components/Home"
import NavbarMain from './components/NavbarMain';
import Inventory from "./components/Inventory"
import ItemDetail from "./components/ItemDetail"
import Shoppes from "./components/Shoppes"
import ShoppeDetail from "./components/ShoppeDetail"

function App() {

  const UserContext = React.createContext();

  function UserProvider({ children }) {
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
  }

  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}/>
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
