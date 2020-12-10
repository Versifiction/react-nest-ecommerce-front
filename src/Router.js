import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={Error} />
    </Switch>
  );
}

export default Router;
