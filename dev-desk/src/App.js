import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import HomePage from './Components/homePage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HomePage/>
    </div>
    </BrowserRouter>
  );
}

export default App;
