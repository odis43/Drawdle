import React, {Component} from "react";
import './Game.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Timer from './Timer';
import { responsiveProperty } from "@mui/material/styles/cssUtils";

    class Game extends Component {

      constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.state = {
            loading: true,
            word: null
        };
      }

      async componentDidMount () {
        const url = "https://random-word-form.herokuapp.com/random/noun";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({word: data, loading:false});
      }
      
        render() {
          const myStyle={
            backgroundImage: `url(${process.env.PUBLIC_URL})`, 
            height: '100vh',
            backgroundPosition: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          };

        return (
          <div style={myStyle}>
              <Timer/>
           <div>
             {this.state.loading || this.state.person ? (<div>loading..</div>):
             (<div>
               <div className="word">{this.state.word}</div>
             </div>)}
           </div>

           <div>
           <button onClick={() => {
            
            this.canvas.current.exportImage("jpeg")
              .then(imagedata => {
                console.log(imagedata);
              })
              .catch(e => {
                console.log(e);
              });
          }}
          >
            Submit Drawing!
            </button>
           </div>
            <div className = 'Gamebox'>
            <ReactSketchCanvas 
            ref={this.canvas}
            width="100"
            height="100"
            strokeWidth={5}
            background  
            strokeColor = "black"
            canvasColor =  "white"
            style = {myStyle}
            />
            </div>
            
          </div>
        );
      }
      }

    export default Game;