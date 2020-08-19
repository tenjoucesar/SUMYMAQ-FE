import React from 'react';
import 'fontsource-roboto';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from '@material-ui/styles';
import Directory from 'containers/Directory';

function App() {
  return (
    <Router>
      <StylesProvider injectFirst>
        <Switch>
          <Route path="/" component={Directory} />
        </Switch>
      </StylesProvider>
    </Router>
  );
}

export default App;
