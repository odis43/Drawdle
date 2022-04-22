import React from 'react'
import './Title.css';

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
      <div className='Logo'>
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} width = {1250} heigth = {1000}/>
      </div>
    );
  }

}

Title.propTypes = {
}

Title.defaultProps = {
}

export default Title;