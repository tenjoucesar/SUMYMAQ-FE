import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "services/AuthService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!Auth.getCurrentUser())
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      return Component ? <Component {...props} /> : null;
    }}
  />
);

export default ProtectedRoute;