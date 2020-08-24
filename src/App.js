import React from 'react';
import 'fontsource-roboto';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from '@material-ui/styles';
import Directory from 'containers/Directory';
import EquipmentData from 'containers/EquipmentData';
import Login from 'containers/Login';
import Signup from 'containers/Signup';
import Logout from 'containers/Logout';
import ProtectedRoute from 'components/ProtectedRoute';

function App() {
  return (
    <Router>
      <StylesProvider injectFirst>
        <Switch>
          <Route path="/register" component={Signup} />
          <ProtectedRoute path="/clients" component={Directory} />
          <ProtectedRoute path="/reports" component={EquipmentData} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Login} />
        </Switch>
      </StylesProvider>
    </Router>
  );
}

export default App;
