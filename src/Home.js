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


class Homepg extends Component {
  render() {
    const myStyle={
      backgroundImage: "url('http://localhost:3000/paper.png')",
      height: '100vh',
      backgroundPosition: 'relative',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };
  return (
    <div style={myStyle}>
      <div className="App">
        <Title/>
        <PlayButton/>
      </div>
    </div>
  );
}
}

export default Homepg;