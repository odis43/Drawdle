import React, {Component} from "react";
import './Rule.css';

    class Menu extends Component {
        render() {
          const myStyle={
            backgroundImage: "url('http://localhost:3000/paper.png')",
            height: '100vh',
            backgroundPosition: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          };
          
        return (
          <div style={myStyle}>
            <div className = 'Rule'>
            
            </div>
          </div>
        );
      }
    }

export default Menu