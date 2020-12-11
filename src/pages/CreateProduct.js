import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label,
  Input, InputGroup, InputGroupAddon
} from 'reactstrap';
import axios from 'axios';

const CreateProduct = (props) => {

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState('');

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'nombre':
        setNombre(e.target.value)
        break;

      case 'categoria':
        setCategoria(e.target.value)
        break;

      case 'precio':
        setPrecio(e.target.value)
        break;

      case 'imagen':
        setImagen(e.target.value)
        break;

      default:
        break;
    }
  }

  const handleSubmit = async () => {
    const jsonSend = { nombre, categoria, precio, imagen };
    const URL = 'http://api-firebase-b47.herokuapp.com/api/v1/products';
    await axios.post(URL, jsonSend)
      .then(res => {
        alert('¡Producto creado! 😇');
        setNombre('');
        setCategoria('');
        setPrecio(0);
        setImagen('');
      })
      .catch(err => alert('Error al crear producto 😖'));
  };

  return (
    <Form className="container my-4">
      <h1 className="display-4">Crea un producto</h1>
      <FormGroup>
        <Label for="nombre">Nombre</Label>
        <Input type="text" name="nombre" id="nombre" placeholder="Guitarra" onChange={handleInput} />
      </FormGroup>
      <FormGroup>
        <Label for="categoria">Categoría</Label>
        <Input type="select" name="categoria" id="categoria" onChange={handleInput}>
          <option defaultValue="">Selecciona una categoría</option>
          <option value="Hogar">Hogar</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Videojuegos">Videojuegos</option>
          <option value="Juguetes">Juguetes</option>
          <option value="Personal">Personal</option>
          <option value="Electrodoméstricos">Electrodoméstricos</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="precio">Precio</Label>
        <InputGroup id="precio">
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input placeholder="2990" name="precio" min={1} max={1000000} type="number" step="1" onChange={handleInput} />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label for="imagen">URL de imagen (puedes subirlas a https://imgur.com/upload y copiar la liga)</Label>
        <Input type="text" name="imagen" id="imagen" placeholder="https://i.imgur.com/3il3ncr.jpg" onChange={handleInput} />
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default CreateProduct;
