import React, { useEffect } from "react";

import Nav from "../../components/Nav";
import "./Register.css";

function Register() {
  useEffect(() => {
    document.title = "Twister | Inscription";
  }, []);

  return (
    <div className="Register">
      <Nav />
      <p>Register</p>
    </div>
  );
}

export default Register;
