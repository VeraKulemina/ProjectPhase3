import React from "react";
import NavbarHome from "./NavBarHome";

const Home = () => {
    return (
        <div  class="homepage">
            <NavbarHome/>
            <div class="headerdiv" >
                <img class="image" src="https://thornandmoonmagickalmarket.files.wordpress.com/2018/09/cropped-thornandmoon_logo_white.png?w=830"/>
                <h1 className="header">CAULDRON & ROSE</h1>
                <p className="header">handmade, witchcrafted occult and pagan supplies</p>
            </div>
        </ div>
    )
}

export default Home;