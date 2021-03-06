import React, { Component } from 'react'
import './Timer.css';
import { Redirect } from 'react-router-dom';

export default class Timer extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            seconds: 90,
            off: false
        };
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {           
                if(this.state.seconds !== 0) {
                    this.setState(({seconds}) => ({
                        seconds: seconds - 1
                    }))
                }
            
        }, 1000)
    }

    componentDidUpdate(){
        if(this.state.seconds === 0){
           window.location.href = "Share"
        }
    }
    

    render() {
        return (
            <span className='TimerStyle'>
               {this.state.seconds}
            </span>
        );
    }
}