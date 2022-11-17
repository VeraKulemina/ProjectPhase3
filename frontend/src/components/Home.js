import React, {UseContext} from "react";
import NavbarHome from "./NavBarHome";
import { UserProvider } from "../context/user";

const Home = () => {

    const user = useContext(UserContext)
    console.log(user)
    
    console.log(user)
    return (
    <div>
        <NavbarHome/>
    </div>)
}

export default Home;