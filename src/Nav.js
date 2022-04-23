import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import PlayButton from './PlayButton';

function Nav() {
    return (
        <nav>
            <Link to= '/Game'>
                <PlayButton />
            </Link>
        </nav>
    )
}

export default Nav;