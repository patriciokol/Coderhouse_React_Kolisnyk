import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayProductos from "../json/productos.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {idProducto} = useParams();

    useEffect(() => {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id == idProducto)
                // resolve(categoria ? arrayProductos.filter(item => item.category === categoria) : arrayProductos);
                resolve(producto);
            }, 2000);
        })
        promise.then(data => {
            setItem(data);
        })
    }, [idProducto]);

    return (
        <ItemDetail item={item} />
    )
}
 
export default ItemDetailContainer;