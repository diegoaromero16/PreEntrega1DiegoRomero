import React, { useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const [goToCart, setGoToCart] = useState(false);
  const { cart, totalPrice } = useCartContext();
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        {cart.map((producto) => (
          <ItemCart key={producto.id} product={producto} />
        ))}
      </Row>
    </Container>
  );
};
export default Cart