import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'
import './CButton.css';

class CButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           imgSrc: require('./cbuttonblack.png'),
           disabled: false
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
            imgSrc: require('./cbuttoncolourful.png')
        });
        
    }

    handleMouseOut () {
        this.setState({
            imgSrc: require('./cbuttonblack.png')
        });
    }
    render() {
        return (
          <div className='cbutton'>
              <a href='./Game'>
                <button className='buttonprop' onClick={this.handleClick} disabled={this.state.disabled}>
                {this.state.disabled ? '' : 
                <img onMouseOver={this. handleMouseOver} onMouseOut={this.handleMouseOut}
                src={this.state.imgSrc} width = {225} height = {50} alt = 'Continue'/>}
                </button>
              </a>
          </div>          
        );
    }
}

CButton.propTypes = {
}

CButton.defaultProps = {
}
export default CButton