import React from 'react'
import PlayButton from './PlayButton';
import './Title.css';
import difflogo from './difflogo'

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
    if (this.props.messageFromParent === false) {
      return (  
        <div className='logo'> 
            <view>
            <img src={difflogo} 
          style={{width: 800,
                  flex: 1,
                  height: null,
          }}
          
                  alt = 'Logo'
                  className='zoom'/>
              </view>
        </div>
      )
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
  }
}

Title.propTypes = {
}

Title.defaultProps = {
}

export default Title;