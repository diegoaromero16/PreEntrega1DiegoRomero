import React from 'react'
import './ItemCart.css'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useCartContext } from '../Context/CartContext';

const ItemCart = ({ product }) => {
    console.log(product);
    const { removeProduct } = useCartContext();
    return (
        <Col id='itemCartCont' md={12} key={product.id}>
            <Row className='align-items-center'>
                <Col md={4}>
                    <img id='itemCartImg' src={product.image} />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={8} className='mt-3'>
                            <h3>{product.title}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='mt-1'>
                            <h5>Cantidad: {product.quantity}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='mt-1'>
                            <h5>Precio unitario: ${product.precioLista}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='mt-1'>
                            <h5>Subtotal: ${product.quantity * product.precioLista}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='mt-1'>
                            <Button variant='success' onClick={() => removeProduct(product.id)}>Eliminar Articulo</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default ItemCart