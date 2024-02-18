import { Link } from "react-router-dom";
import iconCart from "../assets/cart.svg"
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const { cantTotalProductos } = useContext(CartContext);

    return (
        <Link to="/cart">
            <button type="button" className="btn btn-link position-relative justify-content-center my-4">
                <img src={iconCart} alt="" width={25} />
                {cantTotalProductos() > 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger my-2">{cantTotalProductos()}</span> : ""}
            </button>
        </Link>
    )
}

export default CartWidget;