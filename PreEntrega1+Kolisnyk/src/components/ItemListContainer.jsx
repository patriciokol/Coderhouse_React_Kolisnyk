import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import arrayProductos from "../json/productos.json";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000);
        })
        promise.then(data => {
            setItems(data);
        })
    }, []);

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer;