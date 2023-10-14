import React, { useState } from "react";
import { redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  
  const onLogin = (e) => {
    console.log("hola");
    e.preventDefault();
    
    if (email === "davidiqm@gmail.com") {
      if (password === "contraseña") {
        cookies.set("name", "David");
        cookies.set("token", "token");
        
        setError(false);

        window.location.reload();
      } else {
        setError(true);
        console.log(error);
      }
    } else {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="mt-20 mx-auto max-w-4xl">
      <h1 className="text-4xl mb-10">Login</h1>
      <form onSubmit={onLogin}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        { (error === true) ? <div className="mb-5 text-red-600">Correo o contraseña inválidos</div> : <div></div> }
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>

  );
}
    // <div className="background-container">
    //   <div className="background-card">
    //     <h2>Iniciar sesión</h2>
    //     <form onSubmit={onLogin}>
    //       <div className="inputs-container">
    //         <input
    //           onChange={(e) => setEmail(e.target.value)}
    //           type={"email"}
    //           className={"form-control"}
    //           placeholder={"Correo"}
    //         />
    //         <input
    //           onChange={(e) => setPassword(e.target.value)}
    //           type={"password"}
    //           className={"form-control"}
    //           placeholder={"Contraseña"}
    //         />
    //         <input type={"submit"} className="btn btn-primary" />
    //       </div>
    //       { (error === true) ? <div>Correo o contraseña inválidos</div> : <div></div> }
    //     </form>
    //   </div>
    // </div>

export default LoginScreen;