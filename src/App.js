import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Rule from './Rule';
import Game from './Game';

import './Title.css';
import './PlayButton.css';
import './Rule.css';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className= "App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Rule" component={Rule} />
            <Route path="/Game" component={Game}/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
