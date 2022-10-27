import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { Fragment, useEffect } from 'react'

function Newproduct() {
  return (
    
    <Form>
      <h2>Nuevo producto</h2>
      <Container>
      <Row>
      <Col>
        <Form.Group className="mb-3" controlId="productForm.nombre">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control type="String" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productForm.precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="Number" placeholder="Ingrese un valor sin puntos ni comas" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productForm.descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3}/>
      </Form.Group>
      </Col>
      <Col xs={6}><Form.Group controlId="productForm.imagen" className="mb-3">
        <Form.Label>Imagenes del producto</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Label>Categoria </Form.Label>
      <br></br>
        <Form.Select size="lg" controlId="productForm.categoria" className="mb-4">
        <option></option>
        <option value="1">Carton</option>
        <option value="2">Papel</option>
        <option value="3">Metal</option>
        <option value="4">Vidrio</option>
        <option value="5">Plastico</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="productForm.inventario">
        <Form.Label>Inventario</Form.Label>
        <Form.Control type="Number" placeholder="" />
      </Form.Group>
      </Col>
      </Row>
      </Container>
      </Form>
  );
}

export default Newproduct
