import { Link } from "react-router-dom";
import logoSneakerHouse from "../assets/logo_final.png"

const Logo = () =>{
    return(
        <Link to={"/"}><img src={logoSneakerHouse} alt="" width={120}/></Link>
    )
}

export default Logo;