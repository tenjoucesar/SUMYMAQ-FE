import React from 'react';
import logo from './logo.svg';
import './App.css';
import TemporaryDrawer from 'components/SideNavigationBar';
// import TemporaryDrawer from './components/SideNavigationBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemporaryDrawer/>
      </header>
    </div>
  );
}

export default App;
