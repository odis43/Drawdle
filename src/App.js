import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Rule from './Rule';
import Game from './Game';
import Share from './Share';

import './Title.css';
import './PlayButton.css';
import './Rule.css';
import './Share.css';


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
            <Route path="/Share" component={Share}/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
