import './App.css';
import React from 'react';
import SearchnButton from './components/SearchnButton';
import AppBarComp from './components/AppBarComp';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <AppBarComp />
      {/* <h1 className='Header'>Only for may june</h1> */}
      <SearchnButton />
    </div>
  );
}

export default App;
