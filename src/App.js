//import { render } from '@testing-library/react';
import React, { Component } from 'react';
//import logo from './logo.svg';
//import bgimg from './image/drawdleimg.png'

import Title from './Title';
import './Title.css';
class App extends Component {
  render() {
    const myStyle={
      backgroundImage: "url('http://localhost:3000/paper.png')",
      backgroundPosition: 'relative',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };
  return (
    <div style={myStyle}>
      <div className="App">
        <Title/>
      </div>
    </div>
  );
}
}

export default App;
