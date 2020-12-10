import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

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
