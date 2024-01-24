import iconCart from "../assets/cart.svg"

const CarWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-link position-relative justify-content-center my-4">
                <img src={iconCart} alt="" width={25} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger my-2">1</span>
            </button>
        </div>
    )
}

export default CarWidget;