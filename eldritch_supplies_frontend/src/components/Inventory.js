import React, { useEffect, useState }  from "react";
import NavbarMain from "./NavbarMain";
import ItemCard from "./ItemCard"


const Inventory = () => {

    const [items, setItems] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:9292/items")
        .then(res => res.json)
        .then(data => setItems(data))
    }, []);
   
    
    let itemCards = () => {
        (items.length > 0) ? itemCards = items.map((i) => (<ItemCard key={i.id} item={i}/>)) :  <div></div>
    } 
    
    console.log(items)
   


    return (
    <div>
        <NavbarMain/>
        {itemCards}
    </div>
    )
}

export default Inventory;