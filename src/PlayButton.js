<<<<<<< HEAD
import { hover } from '@testing-library/user-event/dist/hover';
=======
import { findAllByTestId } from '@testing-library/react';
>>>>>>> 25cb37c2668794df84a5180c6bd13e015825f1f5
import React from 'react'
import './PlayButton.css';
import './Title';

class PlayButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           imgSrc: require('./playbutton.png'),
           disabled: false,
           data: false,
           test: "false"
        };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    // On-click
    handleClick = (event) => {
        if (this.state.disabled) {
            return;
        }
        this.setState({
            disabled: true
        });
    }

    handleMouseOver () {
        this.setState({
            imgSrc: require('./playbuttonblue.png'),
            data: true,
            test: "true"
        });
        
    }

    handleMouseOut () {
        this.setState({
            imgSrc: require('./playbutton.png'),
            data: false,
            test: "false"
        });
    }

<<<<<<< HEAD
=======
    sendData = () => {
        this.props.parentCallback(this.state.data);
    }
>>>>>>> 25cb37c2668794df84a5180c6bd13e015825f1f5

    render() {
        return (
                        
          <div className='playbutton'>
              <a href='./Rule'>
                <button className='buttonprop2' onClick={this.handleClick} disabled={this.state.disabled}>
                {this.state.disabled ? '' : 
<<<<<<< HEAD
                <img onMouseOver={this.handleMouseOver}
                 onMouseOut={this.handleMouseOut}  
                src={this.state.imgSrc} width = {100} height = {50} alt = 'Play'/>}
=======
                <img onMouseOver= {this.handleMouseOver} onMouseOut= {this.handleMouseOut} onMouseEnter= {this.sendData} onMouseLeave= {this.sendData}
                    src={this.state.imgSrc} width = {100} height = {50} alt = 'Play'/>}
>>>>>>> 25cb37c2668794df84a5180c6bd13e015825f1f5
                </button>
              </a>
          </div>   
            
        );
    }
}

PlayButton.propTypes = {
}

PlayButton.defaultProps = {
}
export default PlayButton