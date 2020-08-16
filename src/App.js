import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import Directory from 'containers/Directory';

function App() {
  return (
    <StylesProvider injectFirst>
       <Directory />
    </StylesProvider>
  );
}

export default App;
