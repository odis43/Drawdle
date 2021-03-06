import React, { Component } from 'react';
import './Game.css';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import Timer from './Timer';
import npButton from './newpromptbutton'
import word from './words.json'

const wordlist = word.nouns;
    class Game extends Component {
      
      constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.state = {
            loading: true,
            word: '',
            imgsrc: "",
            caption: "",
            subButton: require('./submitbutton.png')
        };
        this.handleMouseClick = this.handleMouseClick.bind(this);
        
      }

       componentDidMount() {
       
        let W = null;
        let index = Math.floor(Math.random() * (159 - 0 + 1)) + 0;

        wordlist.map((data,i) => {
          return (
            i === index ? W = data: <p></p>
          )
        })
        
        this.setState({
          word: W,
          loading:false
        })
      }

  handleMouseClick() {
    this.setState({
      subButton: require('./loading.png') //just need to add the new button
    });
  }
      

      handleWord() {
        return this.state.word
      }

      sendData = () => {
        this.props.parentCallback(this.state.caption);
    }


        render() {

          const myStyle={
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
              console.log(W);
              
              this.canvas.current.exportImage("jpeg") 
            
                .then(imagedata => { 
                 this.setState({
                    imgsrc: imagedata
                  })
                  fetch('https://hf.space/embed/Salesforce/BLIP/+/api/predict/', { method: "POST", body: JSON.stringify({"data":[imagedata,"Image Captioning","None","Nucleus sampling"]}), headers: { "Content-Type": "application/json" } })
                  .then(function(response) { 
                   return response.json(); })
                 .then(function(json_response)
                 {

                var word = W.toLowerCase();
                var blip = json_response.data[0].toLowerCase();
               

                  console.log(word);
                  console.log(blip);

                  localStorage.setItem("caption", blip);

                  window.location.href = blip.indexOf(word) > -1 ? '/Success': '/Share'
                  
                 })
               })
                .catch(e => {
                 console.log(e);
               });
           }}

            className='buttonprops'>

             <img onMouseDown={this.handleMouseClick} src={this.state.subButton} width = {100} height = {30} alt = 'Submit!'/>
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