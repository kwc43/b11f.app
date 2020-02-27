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
import NotFoundPage from '../../pages/_shared/error';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Router exact path="/404" component={NotFoundPage}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
