import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './Components/homePage';
import LoginHelper from './Components/loginHelper';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route path='/loginHelper' component={LoginHelper}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
