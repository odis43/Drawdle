import React from 'react'
import './PlayButton.css';
import logo2 from './difflogo';
import logo from './dalogo';
import Title from './Title';

class PlayButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           imgSrc: require('./playbutton.png')
        };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver () {
        this.setState({
            imgSrc: require('./playbuttonblue.png')
        });
        this.changeState();
    }

    handleMouseOut () {
        this.setState({
            imgSrc: require('./playbutton.png')
        });
    }
    render() {
        return (
          <div className='playbutton'>
             <button className='buttonprop'>
              <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} width = {100} heigth = {50} alt = 'Play'/>
              </button>
          </div>          
        );
    }
}

PlayButton.propTypes = {
}

PlayButton.defaultProps = {
}
export default PlayButton