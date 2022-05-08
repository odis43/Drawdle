import React, {Component} from "react";
import './Success.css';
//import shareButton from './shareButton';

    class SuccessPage extends React.Component {
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
                <br></br><br></br>
                <a href="Game"><button >Try Again</button></a> 
                </span>
                
              </div>
            </div>
            
          </div>
        );
      }
    }

export default SuccessPage