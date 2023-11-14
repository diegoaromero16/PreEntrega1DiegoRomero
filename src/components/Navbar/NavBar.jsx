import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img className='logo-navbar' src='src\images\ElBidonDelDoctor_Logo.png' alt='Logo'></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end p-5" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar