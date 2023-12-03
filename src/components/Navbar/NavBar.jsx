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
                            {/* <Link className='links px-2' to="/Productos">Productos</Link> */}
                            <NavDropdown title="Productos" id="basic-nav-dropdown" className='links px-2'>
                                <NavDropdown.Item as={Link} to='/category/mates' className='ddl-bg'>Mates</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/category/bombillas' className='ddl-bg'>Bombillas</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/category/yerbas' className='ddl-bg'>Yerbas</NavDropdown.Item>
                            </NavDropdown>
                            <Link className='links px-2' to="#link">Nosotros</Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar