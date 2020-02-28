import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";

//Pages
import HomePage from '../../pages/home/home';
import ErrorPage from '../../pages/_shared/error';
import DashBoardPage from '../../pages/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/dashboard" component={DashBoardPage}/>
          <Route exact path="/error" component={ErrorPage}/>
          <Redirect to="/error"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
