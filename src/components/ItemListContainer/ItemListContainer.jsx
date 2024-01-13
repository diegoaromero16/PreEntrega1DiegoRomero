import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { Link, useParams } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore'


function ItemListContainer({ greetings }) {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const queryDb = getFirestore();
        const productosCollection = collection(queryDb, "products");
        if (id) {
            const productoFilter = query(productosCollection, where('categoria', '==', id));
            getDocs(productoFilter).then((response) =>
                setProductos(response.docs.map((p) => ({ id: p.id, ...p.data()})))
            );
        } else {
            getDocs(productosCollection).then((response) =>
                setProductos(response.docs.map((p) => ({ id: p.id, ...p.data()})))
            );
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