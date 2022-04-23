import React, {Component} from "react";
import './Game.css';
import Box from '@mui/material/Box';
import { ReactSketchCanvas } from 'react-sketch-canvas';

  const styles = {
    
  };

    class Game extends Component {
      
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
            <div className = 'Gamebox' style={{}}>
            <ReactSketchCanvas 
            width="100"
            height="100"
            strokeWidth={5}
            background  
            strokeColor="black"
            canvasColor =  "transparent"
            style = {myStyle}
            />
            </div>
          </div>
        );
      }
      }

    export default Game;