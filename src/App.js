import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Game from './Game';

<<<<<<< HEAD
//import bgimg from './image/drawdleimg.png';
import Title from './Title';
//import Routes from './Routes';
=======
>>>>>>> 126228c52e703d5f3953a417e2bae1dbc1826ef0
import './Title.css';
import './PlayButton.css';
import './Rules.css';
import Home from './Home';
import logo from './difflogo';
import Title from './Title';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <Home />

    );
  }

>>>>>>> 126228c52e703d5f3953a417e2bae1dbc1826ef0
}



export default App;
