import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import productosJson from '../productos.json'
import { Button, Card } from 'react-bootstrap'



function ItemListContainer({ greetings }) {
    const { categoriaId } = useParams();
    const [productos, setProductos] = useState([]);
    console.log(categoriaId);
    useEffect(() => {
        if(categoriaId){
            console.log(categoriaId);
        }
    }, []);

    return (
        <>
            <h1>{greetings}</h1>

            <div className='row justify-content-center my-5'>
                {productos.map((prod) => (
                    <div className="col-4">
                        <Card style={{ width: '18rem' }} key={prod.id}>
                            <Card.Img variant="top" src={prod.image} />
                            <Card.Body>
                                <Card.Title>{prod.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='btn btn-detail'>Más detalles</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemListContainer