import React from "react";
import {NavLink} from "react-router-dom";

const NavbarHome = () => {
    return (
    <div className="navbar" id="nb">
        <br></br>
        <NavLink id="home1" to="inventory">Inventory</NavLink>
        <NavLink id="home2" to="shoppes">Shoppes</NavLink>
        <br></br>
    </div>)
}

export default NavbarHome;