import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore"
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { idProducto } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", idProducto);
        getDoc(producto).then(r => {
            setLoading(false);
            setItem({ id: producto.id, ...r.data() });
        })
    }, [idProducto]);

    return (
        <>
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer;