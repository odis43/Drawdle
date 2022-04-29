import React, { Component } from 'react';
import './Game.css';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Timer from './Timer';
import axios from "axios";
import npButton from './newpromptbutton'
import submitbutton from './submitbutton.png'


    class Game extends Component {

      constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.state = {
            loading: true,
            word: null,
            valid: false
        };
      }
  
       componentDidMount () {
        axios.get('https://random-word-api.herokuapp.com/word')
      
        .then(response => {
          this.setState({
              word: response.data,
              loading: false
          })
          return response.data
        })
      }

      handleWord() {
        return this.state.word
      }

        render() {
           let blip = "";
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
             {this.state.loading? (<div>loading..</div>):
             (<div>
               <div className="word">{this.state.word}</div>
             </div>)}
           </div>

          <div>
            <a href='./Game'>
              <button className='buttonprops'>
                <img src={npButton} width = {125} height = {35} alt = 'New Prompt'/>
              </button>
            </a>
            <a href='./Share'>
            <button onClick={() => { 
            let W = this.handleWord()
            let valid = false;
            this.canvas.current.exportImage("jpeg")
              .then(imagedata => {
                fetch('https://hf.space/embed/Salesforce/BLIP/+/api/predict/', { method: "POST", body: JSON.stringify({"data":[imagedata,"Image Captioning","None","Beam Sampling"]}), headers: { "Content-Type": "application/json" } })

                .then(function(response) { 
                  return response.json(); })
                .then(function(json_response)
                
                {blip = json_response.data 
                  console.log(blip)
                  console.log(W)
                  valid = blip.includes(W)
                  console.log(valid)
                  
                })
              })
              .catch(e => {
                console.log(e);
              });
          }}
          className='buttonprops'>
            <img src={submitbutton} width = {120} height = {35} alt = 'Submit!'/>
            </button>
            </a>
           </div>

            <div className = 'Gamebox'>
            <ReactSketchCanvas 
            ref={this.canvas}
            width="100"
            height="100"
            strokeWidth={10}
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