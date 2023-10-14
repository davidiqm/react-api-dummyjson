import React from "react";
import { Link, redirect } from "react-router-dom";
import Cookies from "universal-cookie";


const NavBar = () => {
  const cookies = new Cookies();

  const onLogout = () => {
    cookies.remove("token");
    cookies.remove("name");

    windows.location.reload();

    return redirect("/");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <Link to="/"> 
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Home</span>
          </Link>
        </a>
        <div className="flex md:order-2">
        <Link to="/" onClick={onLogout}>

          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cerrar Sesión</button>
        </Link>
        </div>
      </div>
    </nav>

  );
};
    // <nav className="nav-bar">
    //   <Link to="/">
    //     <button  className="btn btn-outline-danger">
    //       Home
    //     </button>
    //   </Link>
    //   <Link to="/" onClick={onLogout}>
    //     <button  className="btn btn-outline-danger">
    //       Cerrar sesión
    //     </button>
    //   </Link>
    // </nav>

export default NavBar;
