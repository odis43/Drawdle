import { findAllByTestId } from '@testing-library/react';
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

    sendData = () => {
        this.props.parentCallback(this.state.data);
    }

    render() {
        return (
          <div className='playbutton flex-sm-colomn'>
              <a href='./Rule'>
                <button className='buttonprop2' onClick={this.handleClick} disabled={this.state.disabled}>
                {this.state.disabled ? '' : 
                <img onMouseOver= {this.handleMouseOver} onMouseOut= {this.handleMouseOut} onMouseEnter= {this.sendData} onMouseLeave= {this.sendData}
                    src={this.state.imgSrc} width = {100} height = {50} alt = 'Play'/>}
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