import React, {Component} from "react";
import './Game.css';
import Box from '@mui/material/Box';

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
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className = 'Gamebox'>
            
            </div>

          </div>
        );
      }
      }

    export default Game;