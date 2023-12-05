import CartWidget from '../CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg">
            <Container fluid>
                <Navbar.Brand to="/">
                    <img className='logo-navbar' src='src\images\ElBidonDelDoctor_Logo.png' alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className='justify-content-end p-5'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='align-items-center'>
                            <Link className='links px-2' to="/">Inicio</Link>
                            <Link to="/category/mates" className="links px-2">Mates</Link>
                            <Link to="/category/bombillas" className="links px-2">Bombillas</Link>
                            <Link to="/category/termos" className='links px-2'>Termos</Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar