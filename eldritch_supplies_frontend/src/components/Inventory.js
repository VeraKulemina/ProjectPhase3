import React from "react";

const Inventory = () => {

    let itemsToDisplay = fetch("http://localhost:9292/items") 


    const onClick = (category) => {
        itemsToDisplay = fetch(`http://localhost:9292/items/${category}`).then(res => res.json())
    }

    const onClickOrder = (order) => {
        if (order === "asc") {
            fetch(`http://localhost:9292/items/price_ascending`)
        }
        
    }


    return <div></div>
}

export default Inventory;