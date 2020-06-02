import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Lodging from './components/features/Lodging';
import Food from './components/features/Food';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route path='/dashboard'>
            <PrivateRoute path='/dashboard' component={Dashboard} />            
          </Route>
          <Route path='/lodging'>
            <PrivateRoute path='/lodging' component={Lodging} />
          </Route>
          <Route path='/food'>
            <PrivateRoute path='/food' component={Food} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
