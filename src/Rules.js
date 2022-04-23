import React from 'react'
import './Rules.css';
import rules from './playbutton.png';

class Rules extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img: {rules}
        };

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        console.log("pop up");
    }

    handleMouseOut () {
        this.setState({
            img: require('./playbutton.png')
        });
    }

    render() {
        return (
            <div className='rules'>
                <button>
                    <img src={rules} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} width = {100} heigth = {50} alt = 'Logo'/>
                </button>
            </div>
        );
    }

}

    Rules.propTypes = {
    }
    
    Rules.defaultProps = {
    }

    export default Rules;









