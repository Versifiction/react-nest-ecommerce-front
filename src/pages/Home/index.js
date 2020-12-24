import React, { useEffect } from "react";

import Nav from "../../components/Nav";
import "./Home.css";

function Accueil() {
  useEffect(() => {
    document.title = "RN | Accueil";
  }, []);

  return (
    <div className="Home">
      <Nav />
      <p>Accueil</p>
    </div>
  );
}

export default Accueil;
