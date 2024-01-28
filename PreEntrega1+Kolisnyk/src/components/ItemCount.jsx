import { useState } from "react";

const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock)

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

    const onAdd = () => {
        if (counter < itemStock) {
            setItemStock(itemStock - counter);
        }
    }

    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group" role="group" aria-label="ejemplo">
                <button className="btn btn-danger" onClick={decrementar}>-</button>
                <button className="btn btn-danger"><b>{counter}</b></button>
                <button className="btn btn-danger" onClick={incrementar}>+</button>
            </div>
            <button className="btn btn-danger" onClick={onAdd}>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;