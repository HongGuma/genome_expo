import React, { useState } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { ipCheck } from "./check_ip.js";

import main from "./main/Main.js";
import direction from "./main/Directions.js";
import previous from "./main/Previous_Expo.js";
import login from "./admin/Login.js";
import admin from "./admin/AdminMain.js";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={main} exact={true} />
        <Route path="/directions" component={direction} exact={true} />
        <Route path="/previous" component={previous} exact={true} />
        <PrivateRoute path="/admin" component={admin} exact={true} />
        <Route path="/admin/login" component={login} exact={true} />
      </Switch>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = sessionStorage.getItem("id");

  ipCheck().then((res) => {
    console.log(res);
  });
  return (
    <Route
      {...rest}
      render={(props) =>
        ipCheck() ? (
          user == null ? (
            <Redirect to="/admin/login" />
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default App;
