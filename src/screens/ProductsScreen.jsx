import { useEffect, useState } from "react";
import axios from "axios";
import { redirect, Link } from "react-router-dom";
import Cookies from "universal-cookie";

import NavBar from "../components/NavBar";
import ProductsTable from "../components/ProductsTable";
import Charging from "../components/Charging";
import LoginScreen from "./LoginScreen";

const cookies = new Cookies
const baseUrl = 'https://dummyjson.com/products';

function ProductsScreen() {
  if (!cookies.get("token")) {
    return <LoginScreen />;
  }

  const [products, setProducts] = useState(null);


  useEffect(() => {
    axios.get(baseUrl)
    .then(response => {
      setProducts(response.data);
    });
  }, []);

  if (!products) return (<Charging />)

  return (
    <div className="container">
      <NavBar />
      <div className="mt-3">
        <div>
          <h1>Lista de productos</h1>
          <Link to="/crear">
            <button>Nuevo</button>
          </Link>
        </div>
        <ProductsTable products={products.products} />
      </div>
    </div>
  );
}

export default ProductsScreen;