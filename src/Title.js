import React from 'react'
import './Title.css';
import play from './playbutton.png';

class Title extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: require('./dalogo')
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
<<<<<<< HEAD
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} width = {1000} heigth = {900} alt = 'Logo'/>
        <button>
        <img src={play} width = {100} height = {50} alt = 'Logo'/>
        </button>
=======
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} width = {900} heigth = {850} alt = 'Logo'/>
>>>>>>> e6d9ae2ac073861444a348b0e7ebafdb52ec8458
      </div>
    );
  }

}

Title.propTypes = {
}

Title.defaultProps = {
}

export default Title;