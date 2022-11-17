import React, { useEffect, useState }  from "react";
import NavbarMain from "./NavbarMain";
import ItemCard from "./ItemCard";
import { UseContext } from "react";
import { UserProvider } from "../context/user";

const Inventory = () => {

    const [items, setItems] = useState([]);

    const user = useContext(UserContext)
    
    
    useEffect(() => {
        fetch("http://localhost:9292/items")
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
   
    const itemCards = () => {
        return ((items.length > 0) ? items.map((i) => (<ItemCard key={i.id} item={i}/>)) : <div></div>)
    }  

    console.log(UserContext)

    return (
        <>
            <NavbarMain/>
            <div class="grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4 bg-indigo-50">
                {itemCards()}
            </div>
        </>
    )
}

export default Inventory;