import React from "react";
import {NavLink} from "react-router-dom";


const NavbarMain = () => {
    return (
    <div className="navbar">
        <NavLink to="inventory">Inventory</NavLink>
        <NavLink to="shoppes">Shoppes/Users</NavLink>
    </div>)
}

export default NavbarMain;