import React, { useEffect } from "react";

import Nav from "../../components/Nav";
import "./Cart.css";

function Cart() {
  useEffect(() => {
    document.title = "RN | Panier";
  }, []);

  return (
    <div className="Cart">
      <Nav />
      <p>Panier</p>
    </div>
  );
}

export default Cart;
