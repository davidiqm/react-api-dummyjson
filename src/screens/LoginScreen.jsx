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
    <div className="background-container">
      <div className="background-card">
        <h2>Iniciar sesión</h2>
        <form onSubmit={onLogin}>
          <div className="inputs-container">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              className={"form-control"}
              placeholder={"Correo"}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              className={"form-control"}
              placeholder={"Contraseña"}
            />
            <input type={"submit"} className="btn btn-primary" />
          </div>
          { (error === true) ? <div>Correo o contraseña inválidos</div> : <div></div> }
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;