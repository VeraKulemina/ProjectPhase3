import React, { useEffect, useState }  from "react";
import NavbarMain from "./NavbarMain";
import ItemCard from "./ItemCard"


const Inventory = () => {

    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/items")
        .then(res => res.to_json)
        .then(data => setItems(data))
    }, []);

   

    const itemCards = items.map((item) => (
        <ItemCard key={item.id} item={item}/>
    ))


    return (
    <div>
        <NavbarMain/>
        {itemCards}
    </div>
    )
}

export default Inventory;