import React, { useEffect } from "react";

import Nav from "../../components/Nav";
import "./Login.css";

function Login() {
  useEffect(() => {
    document.title = "RN | Connexion";
  }, []);

  return (
    <div className="Login">
      <Nav />
      <p>Login</p>
    </div>
  );
}

export default Login;
