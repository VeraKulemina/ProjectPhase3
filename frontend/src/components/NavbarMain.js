import React from "react";
import {NavLink} from "react-router-dom";
import UserBadge from "./UserBadge";

const NavbarMain = () => {
    return (
    <div className="navbar">
        <div className="navgrid">
            <p class="box m-2 p-3"><NavLink to="/inventory">Inventory</NavLink></p>
            <p ><NavLink to="/shoppes">Shoppes/Users</NavLink></p>
            <div className="categories">
                <>
                <h1 class="z-15 bg-white">Cauldron and Rose</h1>
                <div class="static grid grid-cols-4 gap-x-2 bg-black w-full h-4/5">
                    <span class="text-yellow-400">Cat1</span>
                    <span class="text-yellow-400">Cat2</span>
                    <span class="text-yellow-400">Cat3</span>
                    <span class="text-yellow-400">Cat4</span>
                </div>
                </>
            </div>
            <UserBadge/>
        </div>
    </div>)
}

export default NavbarMain;