import logo from './dalogo';
import React from 'react'
import './Title.css';

function Title() {
    return (
        <div className='logo'>
             <img src= {logo} width={650} height={500} alt='logo' />
        </div>
    );
}

export default Title 
