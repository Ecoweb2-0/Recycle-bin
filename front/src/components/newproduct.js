import Form from 'react-bootstrap/Form';
import React, { Fragment, useEffect } from 'react'

function Newproduct() {
  return (
    <Form className="col-4">
        <h2>Nuevo producto</h2>
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
      <Form.Group controlId="productForm.imagen" className="mb-3">
        <Form.Label>Imagenes del producto</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productForm.categoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="String" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productForm.inventario">
        <Form.Label>Inventario</Form.Label>
        <Form.Control type="Number" placeholder="Ingrese un valor sin puntos ni comas" />
      </Form.Group>
    </Form>
  );
}

export default Newproduct
