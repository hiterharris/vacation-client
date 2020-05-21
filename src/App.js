import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      {/* <div> */}
        <Nav />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
