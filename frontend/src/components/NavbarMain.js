import React from "react";
import {NavLink} from "react-router-dom";
import UserBadge from "./UserBadge";

const NavbarMain = () => {
    return (
    <div className="navbar">
        <div className="navgrid">
            <p><NavLink to="/inventory">Inventory</NavLink></p>
            <p><NavLink to="/shoppes">Shoppes/Users</NavLink></p>
            <div className="categories">
                <div class="grid grid-cols-4 gap-x-2 bg-black w-full h-full">
                </div>
            </div>
            <UserBadge/>
        </div>
    </div>)
}

export default NavbarMain;