import React from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Register from "./pages/Register";

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/products" exact component={Products} />
      <Route path="/product/:id" exact component={Product} />
      <Route path="/cart" exact component={Cart} />
      <Route component={Error} />
    </Switch>
  );
}

export default Router;
