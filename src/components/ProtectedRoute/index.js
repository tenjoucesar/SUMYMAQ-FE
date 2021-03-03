import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "services/AuthService";
import SideNavigationBar from 'components/SideNavigationBar';
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
      return Component ? (
    <div style={{display: 'flex'}}>
      <SideNavigationBar />
      <Component {...props} />
    </div>
       ): null;
    }}
  />
);

export default ProtectedRoute;