import React from 'react'
import './PlayButton.css';
import play from './playbutton.png';

class PlayButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           imgSrc: {play}
        };
    }

    render() {
        return (
          <div className='playbutton'>
              <button>
                <img src={play} width = {100} height = {50} alt = 'Play'/>
              </button>
          </div>
          
        );
    }
}

export default PlayButton

