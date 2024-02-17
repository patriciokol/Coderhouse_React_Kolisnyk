import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import iconTrash from "../assets/trash3.svg"

const Cart = () => {
  const { cart, removeItem, clear, cantTotalProductos, sumaTotalProductos } = useContext(CartContext);

  if (cantTotalProductos() == 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="alert alert-danger" role="alert">
              No hay productos en el carrito 😥
            </div>
            <Link to="/" className="btn btn-danger">Ver Productos</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text center">
          <h1>Productos Seleccionados:</h1>
        </div>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <td></td>
            <td><b>Nombre</b></td>
            <td><b>Precio Unitario</b></td>
            <td><b>Cantidad</b></td>
            <td><b>Precio Total</b></td>
            <td></td>
          </tr>
          {cart.map(product =>
            <tr key={product.id}>
              <td><div style={{ display: 'flex', alignItems: 'center' }}><img src={product.imagen} width={80} style={{ maxHeight: '100px' }} /></div></td>
              <td style={{ verticalAlign: 'middle' }}>{product.nombre}</td>
              <td style={{ verticalAlign: 'middle' }}>$ {product.precio}</td>
              <td style={{ verticalAlign: 'middle' }}>{product.quantity}</td>
              <td style={{ verticalAlign: 'middle' }}>$ {product.quantity * product.precio}</td>
              <td style={{ verticalAlign: 'middle' }}><a href="#" onClick={() => removeItem(product.id)}><img src={iconTrash} /></a></td>
            </tr>)
          }
          <tr>
            <td>Suma Total: </td>
            <td></td>
            <td></td>
            <td></td>
            <td>$ {sumaTotalProductos()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;