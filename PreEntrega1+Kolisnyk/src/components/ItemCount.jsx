import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= stock) {
            setItemStock(itemStock - counter);
            onAdd(counter);
            setItemAdded(true);
        }
    }

    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group" role="group" aria-label="ejemplo">
                <button className="btn btn-danger" onClick={decrementar}>-</button>
                <button className="btn btn-danger"><b>{counter}</b></button>
                <button className="btn btn-danger" onClick={incrementar}>+</button>
            </div>
            {itemAdded ? <Link to={"/cart"} className="btn btn-danger">Terminar Compra</Link> : <button className="btn btn-danger" onClick={addToCart}>Agregar al Carrito</button>}
        </div>
    );
}

export default ItemCount;