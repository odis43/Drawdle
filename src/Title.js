import logo from './dalogo';
import React from 'react'
import './Title.css';

function Title() {
    return (
        <div className='logo'>
             <img src= {logo} width={1250} height={1000} alt='logo' />
        </div>
    );
}

export default Title 
