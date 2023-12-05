import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productosJson from '../productos.json'
import './ItemDetailContainer.css'

function ItemDetailContainer() {

    const { id } = useParams();

    const [producto, setProducto] = useState([]);
    const [count, setCount] = useState(0)

    useEffect(() => {
        setProducto(productosJson);
    }, []);

    const filtrarPorId = (id) => {
        const productoFiltered = producto.find(item => item.id === parseInt(id, 10));

        if (productoFiltered) {
            return (
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className="col-4">
                            <img className='img-detail' src={productoFiltered.image} />
                        </div>
                        <div className='col-6'>
                            <div className='row my-5'>
                                <h2 className='detailTitle'>{productoFiltered.title}</h2>
                            </div>
                            <div className='row'>
                                <p className='descriptionDetail text-start'>
                                    Precio de lista: ${productoFiltered.precioLista}
                                </p>
                            </div>
                            <div className='row'>
                                <p className='descriptionDetail text-start'>
                                    Contado/Efectivo: ${productoFiltered.precioContado}
                                </p>
                            </div>
                            <div className='row'>
                                <p className='descriptionDetail'>
                                    Descripción: {productoFiltered.descripcion}
                                </p>
                            </div>
                            <div className='row'>
                                <div className='col-1'>
                                    <button className='button-contador' onClick={() => setCount(count - 1)}>
                                        <span>
                                            <i className="fa-solid fa-minus"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className='col-1 text-center'>
                                    <h5>{count}</h5>
                                </div>
                                <div className='col-1'>
                                    <button className='button-contador' onClick={() => setCount(count + 1)}>
                                        <span>
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div class="d-grid gap-2 d-md-block">
                                    <button className='btn button-addCart'>
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