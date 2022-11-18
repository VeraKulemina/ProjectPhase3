import React, { useContext, useEffect, useState }  from "react";
import { UserContext } from "../context/context";
import NavbarMain from "./NavbarMain";
import ShoppeCard from "./ShoppeCard";
import NewShoppeForm from "./NewShoppeForm";
import LogIn from "./LogIn";

const Shoppes = () => {
    const [shoppes, setShoppes] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    
    // const {currentUser, setUser} = useContext(UserContext)
    
    // console.log(currentUser)

    useEffect(() => {
        fetch("http://localhost:9292/shoppes")
        .then(res => res.json())
        .then(data => setShoppes(data))
    }, []);
   
    const shoppeCards = () => {
        return ((shoppes.length > 0) ? shoppes.map((i) => (<ShoppeCard key={i.id} shoppe={i}/>)) : <div></div>)
    }  

    const toggleForm = () => {
        setIsOpen(() => !isOpen)
    }


    return ( 
    <>
        
        <NavbarMain/>
        {/* <LogIn/> */}
        <button className="button" onClick={toggleForm}>
            Register Shoppe
        </button>
        {!isOpen ? null : <NewShoppeForm setIsOpen={setIsOpen} shoppes={shoppes} setShoppes={setShoppes}/>}
        <div class="grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4 bg-indigo-50">
            {shoppeCards()}
        </div>
    </>)
}

export default Shoppes;