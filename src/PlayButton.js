import React from 'react'
import './PlayButton.css';

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
    }

    handleMouseOut () {
        this.setState({
            imgSrc: require('./playbutton.png')
        });
    }
    render() {
        return (
          <div className='playbutton'>
<<<<<<< HEAD
              <button>
                <img src={play} width = {100} height = {50} alt = 'Play'/>
=======
             <button className='buttonprop'>
              <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} width = {100} heigth = {50} alt = 'Play'/>
>>>>>>> 522ac42d2bd5b7bcddbea21eb92c3cba0d34459b
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