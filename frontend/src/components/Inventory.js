import React, { useContext, useEffect, useState }  from "react";
import { UserContext } from "../context/context";
import NavbarMain from "./NavbarMain";
import ItemCard from "./ItemCard";
import NewItemForm from "./NewItemForm"


const Inventory = () => {

    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    const currentUser = useContext(UserContext)
    
    console.log(currentUser)

    useEffect(() => {
        fetch("http://localhost:9292/items")
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
   
    const itemCards = () => {
        return ((items.length > 0) ? items.map((i) => (<ItemCard key={i.id} item={i}/>)) : <div></div>)
    }  

    return (
        <>
            <NavbarMain/>
            {!isOpen ? null : <NewItemForm/>}
            <div class="grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4 bg-indigo-50">
                {itemCards()}
            </div>
        </>
    )
}

export default Inventory;