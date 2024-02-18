import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, getDocs, where } from "firebase/firestore"
import Loading from "./Loading";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = categoria ? query(itemsCollection, where("category", "==", categoria)) : itemsCollection;
        getDocs(q).then(r => {
            setLoading(false);
            setItems(r.docs.map(producto => ({ id: producto.id, ...producto.data() })));
        })
    }, [categoria]);

    return (
        <>
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer;