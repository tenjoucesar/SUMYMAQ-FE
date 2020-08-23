import React from 'react';
import 'fontsource-roboto';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from '@material-ui/styles';
import Directory from 'containers/Directory';
import Login from 'containers/Login';
import Signup from 'containers/Signup';

function App() {
  return (
    <Router>
      <StylesProvider injectFirst>
        <Switch>
          <Route path="/register" component={Signup} />
          <Route path="/clients" component={Directory} />
          <Route path="/" component={Login} />
        </Switch>
      </StylesProvider>
    </Router>
  );
}

export default App;
