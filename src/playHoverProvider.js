import React, { Component } from 'react';
import PlayButton from './PlayButton';

class playHoverProvider extends Component {

  Parentfunction () {
    this.PlayButton.beinghovered();
  }

  render() {
    return <PlayButton ref={component => this.PlayButton = component} />
  }
}

export default playHoverProvider

