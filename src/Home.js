import React, { Component } from 'react';
import './App.css';

//import bgimg from './image/drawdleimg.png';
import Title from './Title';
//import Routes from './Routes';
import './Title.css';
import PlayButton from './PlayButton';
import './PlayButton.css';


class Homepg extends React.Component {
  state = {message: true}

  handleCallback = (PlayButtonData) => {
    this.setState({message: PlayButtonData})
  }

  render() {
    const myStyle={
      backgroundImage: `url(${process.env.PUBLIC_URL + '/paper.png'})`,  
      height: '100vh',
      backgroundPosition: 'relative',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };



    return (
      <div style={myStyle}>
      <div className="App">
        
        <Title messageFromParent={this.state.message} />
      </div>
    </div>
    );
  }
}


export default Homepg;