import React, {Component, useState, useEffect } from "react";
import './Game.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Timer from './Timer';
import useSound from 'use-sound';

  const styles = {
    
  };
    
    
    class Game extends Component {
        
        render() {
          const myStyle={
            backgroundImage: `url()`, 
            height: '100vh',
            backgroundPosition: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          };

        return (
          <div style={myStyle}>
            <div>
                <Timer/>
            </div>
            <div className = 'Gamebox'>
            <ReactSketchCanvas 
            width="100"
            height="100"
            strokeWidth={10}
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