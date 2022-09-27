import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import Customers from "../Pages/Customers";

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/customers" component={Customers} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
