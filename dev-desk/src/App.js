import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {
  HelperPrivateRoute,
  StudentPrivateRoute
} from './Components/privateRoute';

import HomePage from './Pages/homePage';
import LoginHelper from './Components/loginHelper';

import Helper from './Components/helper';
import studentLogin from './Pages/studentLogin';

import SignUp from './Pages/SignUp';
import studentDashboard from './Pages/studentDashboard';

import CreateTicket from './Components/createHelperTicket';
import '../src/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={HomePage}/>
        <Route path='/loginHelper' component={LoginHelper}/>
        <HelperPrivateRoute exact path ='/helper' component={Helper}/>
        <Route path="/studentLogin" component={studentLogin}/>
        <Route path="/SignUp" component={SignUp}/>
        <HelperPrivateRoute path='/helper/Ticket' component={CreateTicket}/>
        <StudentPrivateRoute exact path='/studentDashboard' component={studentDashboard}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Change Router /helper to private
