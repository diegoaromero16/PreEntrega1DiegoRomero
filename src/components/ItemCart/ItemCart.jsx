import React from 'react'
import './ItemCart.css'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../Context/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <tr>
            <td><Button variant='danger' onClick={() => removeProduct(product.id)}>Eliminar Articulo</Button></td>
            <td><img id='itemCartImg' src={product.image} /></td>
            <td className='text-center'><p>{product.title}</p></td>
            <td><p>{product.quantity}</p></td>
            <td><p>${product.precioLista}</p></td>
            <td><p>Subtotal: ${product.quantity * product.precioLista}</p></td>
        </tr>
    )
}

export default ItemCart