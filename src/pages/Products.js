import axios from 'axios'; // Para realizar peticiones basadas en promesas
import { useState, useEffect } from 'react'; // Para importar los hooks

import ProductCard from '../components/ProductCard';

// HOOKS
// Los hooks son una nueva modalidad de React 16.8 que nos permite crear componentes reactivos funcionales, sin necesidad de declarar clases
// Más info y ejemplos: https://reactjs.org/docs/hooks-overview.html

const Products = () => {
  // useState -> Inicializar y modificar el valor del estado de componentes funcionales
  // Similar a declarar this.state en componentes clase
  // Sintaxis: const [variableState, funcionModificarState] = useState('valor inicial')
  const [products, setProducts] = useState([]);

  // useEffect -> Nos permite controlar el renderizado de componentes funcionales
  // Similar a utilizar el método componentDidUpdate() en componentes clase
  // Sintaxis: useEffect(callback, []) (si agregamos como segundo argumento un arreglo vacío optimizamos el renderizado)
  const getProducts = async () => {
    const URL = 'https://api-firebase-b47.herokuapp.com/api/v1/products';
    await axios.get(URL)
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => getProducts(), []);

  const isEmpty = (data) => {
    if(data.length === 0) return (
      <div className="text-center">
        <h1 className="display-4 m-3">Cargando productos... ⌛️</h1>
        <div className="spinner-border text-primary my-5" role="status" style={{width: 8+'em', height: 8+'em'}}></div>
      </div>
    );
    else return <h1 className="display-4 m-3 text-center">Productos 🛍</h1>
  }

  return(
    <>
      {
        isEmpty(products)
      }
      <div className="container-fluid row justify-content-center my-5">
        {
          products.map(product => {
            return(
              <ProductCard
                key={product.id}
                id={product.id}
                data={product.data}
              />
            );
          })
        }
      </div>
    </>
  );
}

export default Products;
