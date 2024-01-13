import React, { useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const [goToCart, setGoToCart] = useState(false);
  const { cart, totalPrice } = useCartContext();

  if (cart.lenght === 0) {
    return (
      <Container fluid>
        <Row className='justify-content-center'>
          <Col md={4}>
            <h3>No hay productos agregados al carrito</h3>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={4}>
            <Button variant="success"><Link to='/'></Link>Comprar</Button>
          </Col>
        </Row>
      </Container>
    )
  }
  else {
    return (
      <Container fluid>
        <Row className='justify-content-center'>
          <Table bordered hover>
            <thead>
              <tr>
                <th> </th>
                <th> </th>
                <th>PRODUCTO</th>
                <th>CANTIDAD</th>
                <th>PRECIO UNITARIO</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((producto) => (
                <ItemCart key={producto.id} product={producto} />
              ))}
            </tbody>
          </Table>
        </Row>
        <Row className='justify-content-center mt-4'>
          <Col className='text-center' md={2}>
            <h3>Total: ${totalPrice()}</h3>
           <Link to='/Checkout'><Button variant="success">Finalizar Compra</Button>{' '}</Link>
          </Col>
        </Row>
      </Container>
    );
  }

};
export default Cart