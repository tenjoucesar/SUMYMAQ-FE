import React from 'react';
import 'fontsource-roboto';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from '@material-ui/styles';
import Directory from 'containers/Directory';
import Login from 'containers/Login';
import Signup from 'containers/Signup';
import Logout from 'containers/Logout';
import ProtectedRoute from 'components/ProtectedRoute';
import ReportsWizard from 'containers/ReportFormsWizard';
import RepairOrderWizard from 'containers/RepairOrdersWizard';
import CreateClientIndepentForm from 'components/CreateClientIndependtForm';

function App() {
  return (
    <Router>
      <StylesProvider injectFirst>
        <Switch>
          <ProtectedRoute path="/reports/create" component={() => <ReportsWizard />} />
          <ProtectedRoute path="/clients/create" component={() => <CreateClientIndepentForm subscription={{ submitting: true, pristine: true }} />} />
          <ProtectedRoute path="/clients/find" component={Directory} />
          <ProtectedRoute path="/repair/create" component={() => <RepairOrderWizard />} />
          <ProtectedRoute path="/clients" component={() => <ReportsWizard />} />
          <Route path="/register" component={Signup} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Login} />
        </Switch>
      </StylesProvider>
    </Router>
  );
}

export default App;
