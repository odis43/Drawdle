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
            word: '',
            valid: false,
            imgsrc: ""
        };
        
      }

      

      async componentDidMount() {
        const response =  await fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=adjective%2C%20verb%2C%20adverb%2C%20interjection%2C%20pronoun%2C%20preposition%2C%20abbreviation%2C%20affix%2C%20article%2C%20auxiliary-verb%2C%20conjunction%2C%20definite-article%2C%20family-name%2C%20given-name%2C%20idiom%2C%20imperative%2C%20noun-plural%2C%20noun-posessive%2C%20past-participle%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20suffix%2C%20verb-intransitive%2C%20verb-transitive&minCorpusCount=100000&maxCorpusCount=100000000000&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=9mawv4j6y91w6khqbojxmmso2m5q8z70opf2x4muaaxwps8py');
      
        
        const data = await response.json();
        console.log(data.word);
        this.setState({
          word: data.word,
          loading: false
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