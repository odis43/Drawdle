//import { render } from '@testing-library/react';
import React, { Component } from 'react';
//import logo from './logo.svg';
//import bgimg from './image/drawdleimg.png'

import Title from './Title';
import './Title.css';
import PlayButton from './PlayButton';
import './PlayButton.css';
class App extends Component {
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

export default App;
