import React from 'react'
<<<<<<< HEAD
import './Title.css'
import playHoverProvider from './playHoverProvider'
=======
import PlayButton from './PlayButton';
import './Title.css';
import difflogo from './difflogo'
>>>>>>> 25cb37c2668794df84a5180c6bd13e015825f1f5

class Title extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: require('./dalogo'),
       control: require('./dalogo')
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

  }

  handleMouseOver() {
    this.setState({
      imgSrc: require('./difflogo')
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: require('./dalogo')
    });
  }


  render() {
<<<<<<< HEAD
    return (
      <div className='logo'>
          <view>
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} 
        style={{width: 800,
                flex: 1,
                height: null,
        }}
                alt = 'Logo' />
            </view>
      </div>
    );
=======
    if (this.props.messageFromParent === false) {
      return (  
        <div className='logo'>
            <view>
            <img src={difflogo} 
          style={{width: 800,
                  flex: 1,
                  height: null,
          }}
          
                  alt = 'Logo'/>
              </view>
        </div>
      );
    } else {
      return (  
        <div className='logo'>
            <view>
          <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} 
          style={{width: 800,
                  flex: 1,
                  height: null,
          }}
          
                  alt = 'Logo'/>
              </view>
        </div>
      );
    }
>>>>>>> 25cb37c2668794df84a5180c6bd13e015825f1f5
  }
}

Title.propTypes = {
}

Title.defaultProps = {
}

export default Title;