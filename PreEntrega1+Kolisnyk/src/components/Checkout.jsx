import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, addDoc, collection } from "firebase/firestore"

const Checkout = () => {
    const { cart, sumaTotalProductos, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [orderId, setOrderId] = useState();

    const generateOrder = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = { name: nombre, email: email, phone: telefono };
        const items = cart.map(item => ({ id: item.idx, title: item.nombre, price: item.precio }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumaTotalProductos();

        const order = { buyer: buyer, items: items, date: date, total: total };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            setOrderId(resultado.id);
            clear();
        });
    }

    return (
        <>
            <div className="container">
                {sumaTotalProductos() > 0 ? <>
                    <div className="row my-5">
                        <div className="col-md-6">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td className="text-center"><b>Nombre</b></td>
                                        <td className="text-center"><b>Precio Unitario</b></td>
                                        <td className="text-center"><b>Cantidad</b></td>
                                        <td className="text-center"><b>Precio Total</b></td>
                                    </tr>
                                    {cart.map(product =>
                                        <tr key={product.id}>
                                            <td><div style={{ display: 'flex', alignItems: 'center' }}><img src={product.imagen} width={40} style={{ maxHeight: '100px' }} /></div></td>
                                            <td className="text-center align-middle">{product.nombre}</td>
                                            <td className="text-center align-middle">$ {product.precio}</td>
                                            <td className="text-center align-middle">{product.quantity}</td>
                                            <td className="text-center align-middle">$ {product.quantity * product.precio}</td>
                                        </tr>)
                                    }
                                    <tr>
                                        <td>Total: </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-center align-middle">$ {sumaTotalProductos()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <form className="row g-3">
                                <div className="col-mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                                </div>
                                <div className="col-mb-3">
                                    <label className="form-label">E-Mail</label>
                                    <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="col-mb-3">
                                    <label className="form-label">Telefono</label>
                                    <input type="text" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                                </div>
                                <div className="col-mb-3">
                                    <div className="text-end">
                                        <button type="button" className="btn btn-danger" onClick={() => generateOrder()}>Confirmar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div></> : ""}
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? <div className="alert alert-success" role="alert">
                            <h1>Gracias por su compra</h1>
                            <p>Su id de compra es: <b>{orderId}</b></p>
                        </div> : ""}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;