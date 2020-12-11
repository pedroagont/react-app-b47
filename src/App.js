import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CreateProduct from './pages/CreateProduct';
import Inicio from './pages/Inicio';

// React Router -> Nos permite renderizar dinámicamente los componentes desde el cliente sin necesidad de refrescar la página o cargar una nueva desde el lado del servidor
// Quick Start: https://reactrouter.com/web/guides/quick-start

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/create-product" component={CreateProduct}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/products/:id" component={ProductDetails}/>
        <Route exact path="/" component={Inicio}/>
      </Switch>
    </Router>
  );
}

export default App;
