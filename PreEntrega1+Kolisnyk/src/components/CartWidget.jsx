import iconCart from "../assets/cart.svg"

const CarWidget = () => {
    return (
        <div class="position-relative">
            <img src={iconCart} alt="" width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ms-2">1</span>
        </div>
    )
}

export default CarWidget;