import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to= '/Rule'> </Link>
            <nav>
                <Link to= '/Game'> </Link>
            </nav>
        </nav>
    )
}

export default Nav;