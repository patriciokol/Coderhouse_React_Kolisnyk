const Item = ({item}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
          <img src={item.imagen} className="card-img-top" alt={item.alt} />
          <div className="card-body">
            <h5 className="card-title">{item.titulo}</h5>
            <p className="card-text">{item.descripcion}</p>
            <a href={item.enlace} className="btn btn-primary">
              {item.enlaceTexto}
            </a>
          </div>
        </div>
      );
}

export default Item;