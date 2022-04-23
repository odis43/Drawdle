import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Game from './Game';

//import bgimg from './image/drawdleimg.png';
import Title from './Title';
//import Routes from './Routes';
import './Title.css';
import PlayButton from './PlayButton';
import './PlayButton.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className= "App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Game" component={Game}/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
