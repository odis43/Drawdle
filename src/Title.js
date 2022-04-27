import React from 'react'
import './Title.css'
import playHoverProvider from './playHoverProvider'

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
  }


}

Title.propTypes = {
}

Title.defaultProps = {
}

export default Title;