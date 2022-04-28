import React, {Component} from "react";
import './Rule.css';
import CButton from './CButton';

    class Menu extends Component {
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
            <div className = 'Rule'>
              <div className='ruleParagraph'>
                <span className='font-link'>
                Welcome to Drawdle!
                <br></br><br></br>
                Rules:
                <br></br><br></br><br></br><br></br>
                1. Don’t lift your finger from your mouse
                <br></br><br></br>
                2. A 3 minute timer will begin as soon as you click continue
                <br></br><br></br>
                3. Draw the prompt as accurately as you can!
                <br></br><br></br>
                4. Don't like your prompt? Click New Prompt!
                </span>
              </div>
              <CButton />
            </div>
          </div>
        );
      }
    }

export default Menu