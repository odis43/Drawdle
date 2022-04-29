import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Rule from './Rule';
import Game from './Game';
import Share from './Share';
import Success from './Success';

import './Title.css';
import './PlayButton.css';
import './Rule.css';
import './Share.css';
import './Success.css';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className= "App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Rule" component={Rule} />
            <Route path="/Game" component={Game} />
            <Route path="/Share" component={Share} />
            <Route path="/Success" component={Success} />
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
