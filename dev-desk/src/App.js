import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
=======
import {BrowserRouter, Route} from 'react-router-dom';
//import privateRoute from './privateRoute';
import HomePage from './Components/homePage';
import LoginHelper from './Components/loginHelper';
import Helper from './Components/helper';
>>>>>>> Development
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route path='/loginHelper' component={LoginHelper}/>
      <Route exact path ='/helper' component={Helper}/>
    </div>
    </BrowserRouter>
>>>>>>> Development
  );
}

export default App;
<<<<<<< HEAD
=======

//Change Router /helper to private
>>>>>>> Development
