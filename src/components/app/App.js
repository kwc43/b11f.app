import React, { Component } from 'react';
import Header from '../header/Header.js';
import './App.css';

import { BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import HomePage from '../../pages/home/Home';
import ErrorPage from '../../pages/_shared/Error';
import DashBoardPage from '../../pages/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
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
