import React, {useEffect, useState} from "react";
import { UserContext } from "../context/context";
import {useParams} from "react-router-dom"

const ShoppeDetail = () => {

    const [shoppe, setShoppe] = useState()
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:9292/shoppes/${id}`)
            .then(r => r.json())
            .then(data => setShoppe(data))
    }, [])
    
    return !shoppe ? <p>shoppe doesn't exist</p> : (
    
    <div></div>
    )
}

export default ShoppeDetail;