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
            valid: false,
            imgsrc: ""
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
      sendImg = () => {
        this.props.parentCallback(this.state.imgsrc);
    }
        render() {
          
           let blip = "";
          const myStyle={
            width: '100vw', 
            height: '100vh',
            backgroundPosition: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          };

        return (
          <div style={myStyle}>
            <div className='misc'>
              <div className = "Timer">
              <Timer/>
              </div>
            <div>
              {this.state.loading? (<div className='word font-link'> loading...</div>):
              (<div>
                <div className='font-link word'>{this.state.word}</div>
              </div>)}
            </div>

          

            <div>
              <a href='./Game'>
                <button className='buttonprops'>
                  <img src={npButton} width = {115} height = {30} alt = 'New Prompt'/>
                </button>
              </a>


              <button onClick={() => { 
           
              let W = this.handleWord()
              let valid = this.state.valid

              this.canvas.current.exportImage("jpeg") 
            
                .then(imagedata => { 
                 this.setState({
                    imgsrc: imagedata
                  })
                  fetch('https://hf.space/embed/Salesforce/BLIP/+/api/predict/', { method: "POST", body: JSON.stringify({"data":[imagedata,"Image Captioning","None","Beam Sampling"]}), headers: { "Content-Type": "application/json" } })
                  .then(function(response) { 
                   return response.json(); })
                 .then(function(json_response)
                 {blip = json_response.data 
                
                 valid = blip.includes(W) 
                 console.log(valid)

                 window.location.href = valid ? "/Success" : "/Share"
            
                 })
               })
                .catch(e => {
                 console.log(e);
               });
           }}

            className='buttonprops'>

             <img src={submitbutton} width = {100} height = {30} alt = 'Submit!' onMouseEnter= {this.sendImg} />
              </button>
            </div>

            </div>




            <div className = 'Gamebox'>
            <ReactSketchCanvas 
            ref={this.canvas}
            width="100"
            
            strokeWidth={10}
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