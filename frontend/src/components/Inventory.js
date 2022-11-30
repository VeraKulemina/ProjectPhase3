import React, { useContext, useEffect, useState }  from "react";
import { UserContext } from "../context/context";
import NavbarMain from "./NavbarMain";
import ItemCard from "./ItemCard";
import NewItemForm from "./NewItemForm";
import Search from "./Search"



const Inventory = () => {

    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    const currentUser = useContext(UserContext)

    useEffect(() => {
        fetch("http://localhost:9292/items")
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);

    const toggleForm = () => {
        setIsOpen(() => !isOpen)
    }
   
    const itemCards = () => {
        return ((items.length > 0) ? items.map((i) => (<ItemCard key={i.id} item={i}/>)) : <div></div>)
    }  

    return (
        <>
            <NavbarMain/>
            <button className="button" onClick={toggleForm}>
                New Form
            </button>
            <Search/>
            {!isOpen ? null : <NewItemForm setIsOpen={setIsOpen} items={items} setItems={setItems}/>}
            {/* <Button onClick={toggleForm}/> */}
            <div class="grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4 bg-indigo-50">
                {itemCards()}
            </div>
        </>
    )
}

export default Inventory;