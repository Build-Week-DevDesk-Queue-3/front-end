import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//import privateRoute from './privateRoute';
import HomePage from './Components/homePage';
import LoginHelper from './Components/loginHelper';
import Helper from './Components/helper';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={HomePage}/>
        <Route path='/loginHelper' component={LoginHelper}/>
        <Route exact path ='/helper' component={Helper}/>
        <Route path="/studentLogin" component={studentLogin}/>
        <Route path="/studentRegister" component={studentRegister}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Change Router /helper to private
