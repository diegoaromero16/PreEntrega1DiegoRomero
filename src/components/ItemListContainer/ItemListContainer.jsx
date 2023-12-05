import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { Link, useParams } from 'react-router-dom'
import productosJson from '../productos.json'
import { Button, Card } from 'react-bootstrap'


function ItemListContainer({ greetings }) {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        if (id) {
            setProductos(productosJson.filter(item => item.categoria === id));
            console.log(productos);
        }
        else {
            setProductos(productosJson);
        }
    }, [id]);

    return (
        <div className='container'>
            <div className='row align-items-center'>
                <h4 className='text-center my-4 font titles'>{greetings}</h4>

                {productos.map((prod) => (
                    <div className="col-4 " key={prod.id}>
                        <Card className='card-style' >
                            <Card.Img variant="top" src={prod.image} />
                            <Card.Body>
                                <Card.Title>{prod.title}</Card.Title>
                                <Card.Text>
                                    {prod.descripcion}
                                </Card.Text>
                                <Link to={`/item/${prod.id}`}><Button className='btn btn-detail' >Más detalles</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer