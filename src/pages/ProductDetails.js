import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Badge, Button } from 'reactstrap';

const ProductDetails = () => {

  const { id } = useParams();
  const [details, setDetails] = useState({});

  const getDetails = async (productId) => {
    const URL = 'http://api-firebase-b47.herokuapp.com/api/v1/products/'+productId;
    await axios.get(URL)
      .then(response => {
        setDetails(response.data);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => getDetails(id), [id]);

  const isEmpty = (data) => {
    if(!data.data) return (
      <div className="text-center">
        <h1 className="display-4 m-3">Cargando producto... ⌛️</h1>
        <div className="spinner-border text-primary my-5" role="status" style={{width: 8+'em', height: 8+'em'}}></div>
      </div>
    );
    return(
      <div className="text-center mt-5">
        <div className="container">
          <img src={details.data.imagen} alt={details.data.nombre} width="400px" className="img-thumbnail"/>
        </div>
        <h1 className="display-4 m-3">{details.data.nombre}</h1>
        <h3>${details.data.precio} pesos</h3>
        <Badge color="secondary">{details.data.categoria}</Badge>
        <p className="lead">
          <Link to={'/comprar'}>
            <Button className="mt-3" size="lg" color="primary">Comprar</Button>
          </Link>
        </p>
        <p className="lead">
          <Link to={'/products'}>
            <Button className="mt-3">Regresar</Button>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      {
        isEmpty(details)
      }
    </>
  );
};

export default ProductDetails;
