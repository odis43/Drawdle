import React, { Component } from 'react';
import './App.css';

//import bgimg from './image/drawdleimg.png';
import CButton from './CButton';
//import Routes from './Routes';
import './Title.css';
import './PlayButton.css';


class Share extends React.Component {
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
        <div className='ruleParagraph'>
                <span className='font-link'>
                Welcome to Drawdle!
                <br></br><br></br>
                Rules:
                <br></br><br></br><br></br><br></br>
                1. A 90 second timer will begin as soon as you click continue
                <br></br><br></br>
                2. Draw the prompt as accurately as you can!
                <br></br><br></br>
                3. Don't like your prompt? Click New Prompt!
                <br></br><br></br>
                4. You CANNOT ERASE! Be careful as you draw!
                </span>
              </div>
          <CButton/>
        </div>
    </div>
    );
  }
}


export default Share;