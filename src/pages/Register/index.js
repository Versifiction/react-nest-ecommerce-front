import React, { useEffect } from "react";

import Nav from "../../components/Nav";
import RegisterForm from "../../components/RegisterForm";
import "./Register.css";

function Register() {
  useEffect(() => {
    document.title = "Twister | Inscription";
  }, []);

  return (
    <div className="Register">
      <Nav />
      <RegisterForm />
    </div>
  );
}

export default Register;
