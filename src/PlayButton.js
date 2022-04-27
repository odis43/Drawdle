import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import './PlayButton.css';

class PlayButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           imgSrc: require('./playbutton.png'),
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
            imgSrc: require('./playbuttonblue.png')
        });
        
    }

    handleMouseOut () {
        this.setState({
            imgSrc: require('./playbutton.png')
        });
    }


    render() {
        return (
          <div className='playbutton'>
              <a href='./Rule'>
                <button className='buttonprop' onClick={this.handleClick} disabled={this.state.disabled}>
                {this.state.disabled ? '' : 
                <img onMouseOver={this.handleMouseOver}
                 onMouseOut={this.handleMouseOut}  
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