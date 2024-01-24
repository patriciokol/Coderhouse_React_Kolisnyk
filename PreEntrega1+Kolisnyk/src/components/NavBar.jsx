import '../components/css/NavBarStyles.css'
import CarWidget from './CartWidget';

const NavBar = () => {
    return (
        <div> 
            <ul className="nav justify-content-center my-4">
                <li className="nav-item me-5">
                    <a className="nav-link text-dark fs-5 " href="#">Zapatillas</a>
                </li>
                <li className="nav-item me-5">
                    <a className="nav-link text-dark fs-5" href="#">Lanzamientos</a>
                </li>
                <li className="nav-item me-5">
                    <a className="nav-link text-dark fs-5" href="#">Nosotros</a>
                </li>
            </ul>
        </div>

    )
}

export default NavBar;