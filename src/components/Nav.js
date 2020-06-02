import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../styles/nav.scss';
import logo from '../assets/images/logo2.jpg';
import { useHistory } from 'react-router-dom';

function Nav() {
    const history = useHistory()

    const logOut = () => {
        localStorage.clear();
        history.push('/login');
    }

    return (
        <nav className='Nav'>
            <div className='nav-left'>
                <Link to="/"><img src={logo} /></Link>
                <h1>Vacation Planner</h1>
            </div>
            <div className='nav-right'>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <button onClick={() => logOut()}>Log Out</button>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
