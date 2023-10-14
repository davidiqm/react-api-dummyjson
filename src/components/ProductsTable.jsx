import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const baseUrl = "https://dummyjson.com/products/"

function ProductsTable({products}) {
  const [success, setSuccess] = useState(false);

  const onDelete = (id) => {
    axios.patch(baseUrl+id)
      .then(response => {
        console.log(response);
        setSuccess(response.status == 200 ? true : false)
        console.log(success)
        alert('Exitoso')
      })
    
    
  };

  return (
    <div className="container mx-auto">      
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Título
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Descripción
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Precio
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Marca
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Categoría
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Acciones
                      </th>
                  </tr>
              </thead>
              <tbody>
                {
                  products.map(product => (  
                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.id}
                        </th>
                        <td className="px-6 py-4">
                            {product.description}
                        </td>
                        <td className="px-6 py-4">
                            {product.title}
                        </td>
                        <td className="px-6 py-4">
                            {product.price}
                        </td>
                        <td className="px-6 py-4">
                            {product.brand}
                        </td>
                        <td className="px-6 py-4">
                            {product.category}
                        </td>
                        <td className="px-6 py-4">
                          <Link to="/editar/1">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Editar
                            </button>
                          </Link>
                          <button onClick={() => onDelete(product.id)} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Eliminar
                          </button>
                        </td>
                    </tr>
                  ))
                }
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default ProductsTable;