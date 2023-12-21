import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { useCartContext } from '../Context/CartContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {

    const { id } = useParams();

    const [producto, setProducto] = useState([]);
    const [count, setCount] = useState(parseInt(1));

    useEffect(() => {
        const queryDb = getFirestore();
        const productoCollection = doc(queryDb, "products", id);

        getDoc(productoCollection).then((response) =>
            setProducto({ id: response.id, ...response.data() })
        );
    }, [id]);

    const filtrarPorId = () => {
        const { addProduct } = useCartContext();

        if (producto) {
            return (
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className="col-4">
                            <img className='img-detail' src={producto.image} />
                        </div>
                        <div className='col-6'>
                            <div className='row my-5'>
                                <h2 className='detailTitle'>{producto.title}</h2>
                            </div>
                            <div className='row'>
                                <p className='descriptionDetail text-start'>
                                    Precio de lista: ${producto.precioLista}
                                </p>
                            </div>
                            <div className='row'>
                                <p className='descriptionDetail text-start'>
                                    Contado/Efectivo: ${producto.precioContado}
                                </p>
                            </div>
                            <div className='row'>
                                <p className='descriptionDetail'>
                                    Descripción: {producto.descripcion}
                                </p>
                            </div>
                            <div className='row'>
                                <p className='descriptionDetail'>
                                    Stock: {producto.stock}
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-1'>
                                    <button className='button-contador' disabled={count <= 1} onClick={() => setCount(count - 1)}>
                                        <span>
                                            <i className="fa-solid fa-minus"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className='col-1 text-center'>
                                    <h5>{count}</h5>
                                </div>
                                <div className='col-1'>
                                    <button className='button-contador' disabled={count >= producto.stock} onClick={() => setCount(count + 1)}>
                                        <span>
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className="d-grid gap-2 d-md-block">
                                    <button className='btn button-addCart'
                                        onClick={() => addProduct(producto, count)}>
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            <p>No se encontro el producto</p>
        }
    }

    return (
        <div>
            {filtrarPorId(id)}
        </div>
    )
}

export default ItemDetailContainer