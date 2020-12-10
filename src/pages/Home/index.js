import React, { useEffect } from "react";

import Nav from "../../components/Nav";
import "./Home.css";

function Accueil() {
  useEffect(() => {
    document.title = "Twister | Accueil";
  }, []);

  return (
    <div className="Home">
      <Nav />
    </div>
  );
}

export default Accueil;
