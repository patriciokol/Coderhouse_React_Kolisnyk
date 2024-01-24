import CarWidget from "./CartWidget";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="container my-3 ">
            <div className="row">
                <div className="col-md-2">
                    <Logo />
                </div>
                <div className="col-md-8">
                    <NavBar />
                </div>
                <div className="col-md-2">
                    <CarWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;