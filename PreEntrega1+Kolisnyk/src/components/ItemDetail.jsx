import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
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
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;