import { useState, useEffect } from "react";
import axios from "axios";

import Cookies from "universal-cookie";
import NavBar from "../components/NavBar";

const cookies = new Cookies();
const baseUrl = "https://dummyjson.com/products/categories";

function CreateScreen() {
  if (!cookies.get("token")) {
    return <LoginScreen />;
  }

  const [product, setProduct] = useState({
    title: '',
    descriptioin: '',
    price: '',
    brand: '',
    category: '',
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        setCategories(response.data);
        console.log(response.data);
      })
  }, [])

  const handleTitle = (event) => {
    product.title = event.target.value;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(product);
  } 

  return (
    <div>
      <NavBar />
      <div>
        
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-90">Título</label>
            <input defaultValue={product.title} onChange={handleTitle} type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
            <textarea defaultValue={product.description} type="text" id="description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
            <input defaultValue={product.price} type="number" id="price"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Marca</label>
            <input defaultValue={product.brand} type="text" id="price"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Categoría</label>
            <select name="selectCategorie" defaultValue={product.category}>
              {
                categories.map(elemento => (
                  <option key={elemento}>{elemento}</option>
                ))
              }
            </select>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        </form>

      </div>
    </div>
  );
}

export default CreateScreen;