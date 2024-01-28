const Item = ({item}) => {
    return (
        <div className="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src={item.imagen} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">${item.precio}</p>
            {/* <a href={item.enlace} className="btn btn-primary">
              {item.enlaceTexto}
            </a> */}
          </div>
        </div>
      );
}

export default Item;