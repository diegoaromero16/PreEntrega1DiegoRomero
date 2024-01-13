import React, { useState } from 'react'
import '../Checkout/Checkout'
import { useCartContext } from '../Context/CartContext';
import { Button, Col, Container, Form, FormLabel, Row } from 'react-bootstrap';
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const { cart, totalPrice, removeProduct, clearCart } = useCartContext();

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('Complete el campo, por favor.'),
        apellido: Yup.string().required('Complete el campo, por favor.'),
        telefono: Yup.number().required('Complete el campo, por favor.'),
        email: Yup.string().email('Formato de correo electrónico no válido.').required('Complete el campo, por favor.'),
        confirmarEmail: Yup.string()
            .oneOf([Yup.ref('email'), null], 'Los correos electrónicos no coinciden.')
            .required('Complete el campo, por favor.'),
    });

    const handleSubmit = (values, { setSubmitting }) => {

        const total = totalPrice();

        setNombre(values.nombre);
        setApellido(values.apellido);
        setTelefono(values.telefono);
        setEmail(values.email);
        setEmailConfirm(values.confirmarEmail)

        const orden = {
            items: cart.map((producto) => ({
                id: producto.id,
                nombre: producto.title,
                cantidad: producto.quantity,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const db = getFirestore();
                const productoRef = doc(db, 'products', productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                const db = getFirestore();
                addDoc(collection(db, 'orders'), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        removeProduct();
                    })
                    .catch((error) => {
                        console.log('No se pudo crear la orden', error);
                        setError('Error en la orden');
                    });
            })
            .catch((error) => {
                console.log('No se puede actualizar el stock', error);
                setError('No se actualizo el stock');
            });


        setFormularioEnviado(true);
        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirm('');
        setMensaje('');
        setSubmitting(false);
    };

    const cleanCarrito = () => {
        clearCart();
    }


    return (
        <Container className='mt-5'>
            {formularioEnviado ? (
                <>
                    <Row className='justify-content-center'>
                        <Col md={4}>
                            <h1 className='text-center'>¡Pedido Enviado!</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-4'>
                        <Col md={12}>
                            <h3 className='text-center'>Tu numero de seguimiento es: {ordenId}</h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-4'>
                        <Col md={2}>
                            <Link to='/'><Button variant='success' onClick={cleanCarrito}>Ir al catalogo</Button></Link>
                        </Col>
                    </Row>
                </>
            ) : (
                <Formik
                    initialValues={{
                        nombre: '',
                        apellido: '',
                        telefono: '',
                        email: '',
                        confirmarEmail: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, handleChange, values, errors, touched }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className='mt-4'>
                                <Col md="12">
                                    <h3>Datos de facturacion:</h3>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col md="4">
                                    <Form.Group controlId="validationCustom01">
                                        <Form.Label>Nombre</Form.Label>
                                        <Field
                                            type="text"
                                            name="nombre"
                                            placeholder="Nombre"
                                            as={Form.Control}
                                            isInvalid={touched.nombre && !!errors.nombre}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group controlId="validationCustom02">
                                        <Form.Label>Apellido</Form.Label>
                                        <Field
                                            type="text"
                                            name="apellido"
                                            placeholder="Apellido"
                                            as={Form.Control}
                                            isInvalid={touched.apellido && !!errors.apellido}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.apellido}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group controlId="validationCustomUsername">
                                        <Form.Label>Teléfono</Form.Label>
                                        <Field
                                            type="number"
                                            name="telefono"
                                            placeholder="Telefono"
                                            as={Form.Control}
                                            isInvalid={touched.telefono && !!errors.telefono}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.telefono}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md="6">
                                    <Form.Group controlId="validationCustom03">
                                        <Form.Label>E-mail</Form.Label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            as={Form.Control}
                                            isInvalid={touched.email && !!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group controlId="validationCustom04">
                                        <Form.Label>Confirme E-mail</Form.Label>
                                        <Field
                                            type="email"
                                            name="confirmarEmail"
                                            placeholder="Confirmar Email"
                                            as={Form.Control}
                                            isInvalid={touched.confirmarEmail && !!errors.confirmarEmail}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.confirmarEmail}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className='d-grid gap-2 mt-4'>
                                <Button variant='success' type="submit">Finalizar</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </Container>
    );
}

export default Checkout