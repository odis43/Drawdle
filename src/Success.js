import React, {Component} from "react";
import './Success.css';
//import shareButton from './shareButton';
import Button from 'react-bootstrap/Button';

    class SuccessPage extends React.Component {

      constructor (props) {
        super(props);
        this.state = {
            imgSrc: require('./tryagainbefore.png'),
        };
        
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
            <div className = 'Success'>
              <div className='Statements'>
                <span className='font-link'>
                WINNER!
                <br></br><br></br><br></br><br></br>
                Drawdle Recognized your image!
                <br></br><br></br><br></br>
                <a href='./Game'>
                <button className='buttonprop'>
                <img
                src={this.state.imgSrc} width = {225} height = {50} alt = 'Try Again'/>
                </button>
              </a>
                </span>
                
              </div>
            </div>
            
          </div>
        );
      }
    }

export default SuccessPage