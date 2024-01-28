import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import arrayProductos from "../json/productos.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(categoria ? arrayProductos.filter(item => item.category === categoria) : arrayProductos);
            }, 2000);
        })
        promise.then(data => {
            setItems(data);
        })
    }, [categoria]);

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer;