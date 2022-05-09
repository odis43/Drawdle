import React from 'react';
import './Share.css'
import Button from 'react-bootstrap/Button';

class Share extends React.Component {

    constructor (props) {
        var cap = localStorage.getItem("caption");
        var theCaption = cap;
        var say = `Here is what Drawdle thought you drew:`;
        super(props);
        this.state = {
            first: "Sorry this drawing sucks",
            second: say,
            caption: theCaption.slice(8),
            imgSrc: require('./tryagainwhite.png'),
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver () {
        this.setState({
            imgSrc: require('./tryagainafter.png')
        });
    }

    handleMouseOut () {
        this.setState({
            imgSrc: require('./tryagainwhite.png')
        });
    }

    render() {
        const myStyle={
            backgroundImage: `url(${process.env.PUBLIC_URL + '/paper.png'})`,
            height: '100vh',
            backgroundPosition: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          };

        return (
            <div style={myStyle}>
            <div className='bg'>
            <h1 className='font'>
                <br></br>
                {this.state.first}
                <br></br>
                {this.state.second}
                <br></br>
                <br></br>
                <div className='caption'>"{this.state.caption} "</div><br></br>
               
               <a href='./Game'>
                <button className='buttonprop'>
                <img onMouseOver={this. handleMouseOver} onMouseOut={this.handleMouseOut} 
                src={this.state.imgSrc} width = {225} height = {50} alt = 'Try Again'/>
                </button>
              </a>
              
                <br></br>
                <br></br>
                ⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝ 
                <br></br>
                ⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇
                <br></br>
                ⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀
                <br></br>
                ⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁
                <br></br>
                ⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉
                <br></br>
                ⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀
                <br></br>
                ⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀
                <br></br>
                ⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀
                <br></br>
                ⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                <br></br>
                ⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
                <br></br>
                ⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
                <br></br>
                ⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
                <br></br>
                ⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
                <br></br>
                </h1>
                </div>
                </div>
        );
    }


}

export default Share