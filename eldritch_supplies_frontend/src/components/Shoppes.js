import React, {useState, useEffect} from "react";
import NavbarMain from "./NavbarMain";
import ShoppeCard from "./ShoppeCards";

const Shoppes = () => {
    

    const [shoppes, setShoppes] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:9292/shoppes")
        .then(res => res.json())
        .then(data => setShoppes(data))
    }, []);
   
    const shoppeCards = () => {
        return ((shoppes.length > 0) ? shoppes.map((i) => (<ShoppeCard key={i.id} shoppe={i}/>)) : <div></div>)
    }  

    
    return ( 
    <>
        <NavbarMain/>
        <div class="grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4 bg-indigo-50">
            {shoppeCards()}
        </div>
    </>)
}

export default Shoppes;