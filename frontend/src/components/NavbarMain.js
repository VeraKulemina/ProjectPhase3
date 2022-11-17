import React from "react";
import {NavLink} from "react-router-dom";


const NavbarMain = () => {
    return (

    <div className="navbar">
        <br></br>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/shoppes">Shoppes/Users</NavLink>
        <br></br>
    </div>)
}

export default NavbarMain;