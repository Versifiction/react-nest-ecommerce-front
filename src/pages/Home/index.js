import React, { useEffect } from "react";

import Nav from "../../components/Nav";
import "./Home.css";

function Accueil() {
  useEffect(() => {
    document.title = "Twister | Accueil";
  }, []);

  return (
    <div className="Accueil">
      <Nav />
    </div>
  );
}

export default Accueil;
