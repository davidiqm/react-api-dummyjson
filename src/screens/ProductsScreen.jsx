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
      <div className="mt-7 max-w-4xl mx-auto">
        <div>
          <h1 className="mb-5 text-4xl">Lista de productos</h1>
          <Link to="/crear">
          <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Nuevo Producto</button>
          </Link>
        </div>
        <ProductsTable products={products.products} />
      </div>
    </div>
  );
}

export default ProductsScreen;