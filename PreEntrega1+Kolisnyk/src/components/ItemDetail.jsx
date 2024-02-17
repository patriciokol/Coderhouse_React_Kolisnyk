import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ item }) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mx-4">
                    <img src={item.imagen} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <h4>${item.precio}</h4>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;