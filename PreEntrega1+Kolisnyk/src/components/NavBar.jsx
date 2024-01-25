import { NavLink } from 'react-router-dom';
import '../components/css/NavBarStyles.css'
import CarWidget from './CartWidget';

const NavBar = () => {
    return (
        <div> 
            <ul className="nav justify-content-center my-4">
                <li className="nav-item me-5">
                    <NavLink className="nav-link text-dark fs-5 " to={"/zapatillas"}>Zapatillas</NavLink>
                </li>
                <li className="nav-item me-5">
                    <NavLink className="nav-link text-dark fs-5" to={"/lanzamientos"}>Lanzamientos</NavLink>
                </li>
                <li className="nav-item me-5">
                    <NavLink className="nav-link text-dark fs-5" to={"/nosotros"}>Nosotros</NavLink>
                </li>
            </ul>
        </div>

    )
}

export default NavBar;