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
    <nav className="nav-bar">
      <Link to="/">
        <button  className="btn btn-outline-danger">
          Home
        </button>
      </Link>
      <Link to="/" onClick={onLogout}>
        <button  className="btn btn-outline-danger">
          Cerrar sesión
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
