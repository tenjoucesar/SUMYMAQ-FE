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
import CreateClientForm from 'components/CreateClient';
import PreliminaryInspection from 'containers/PreliminaryInspection';

function App() {
  return (
    <Router>
      <StylesProvider injectFirst>
        <Switch>
          <Route path="/register" component={Signup} />
          <ProtectedRoute path="/clients/create" component={CreateClientForm} />
          <ProtectedRoute path="/clients" component={Directory} />
          <ProtectedRoute path="/reports" component={() => <EquipmentData subscription={{ submitting: true, pristine: true }}/>} />
          <ProtectedRoute path="/preliminaryInspection" component={() => <PreliminaryInspection subscription={{ submitting: true, pristine: true }}/>} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Login} />
        </Switch>
      </StylesProvider>
    </Router>
  );
}

export default App;
