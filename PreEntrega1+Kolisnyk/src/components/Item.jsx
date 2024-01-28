import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
            <Link className="card mx-2 my-2 text-decoration-none" style={{ width: '18rem' }} to={`/producto/${item.id}`}>
                <img src={item.imagen} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">${item.precio}</p>
                </div>
            </Link>
    );
}

export default Item;