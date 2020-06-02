import React from 'react';
import {
    Link
  } from "react-router-dom";
import '../styles/nav.scss';
import logo from '../assets/images/logo2.jpg';
import { useHistory } from 'react-router-dom';

function Nav() {
    const history = useHistory();

    const logOut = () => {
        localStorage.clear();
        history.push('/login');
    }

    const logOutButton = () => {
        if (localStorage.token) {
            return <button onClick={() => logOut()}>Log Out</button>;
        } else {
            return <button onClick={() => history.push('/login')}>Login</button>;
        }
    }


    const dashboardButton = () => {
      if (localStorage.token) {
          return <button onClick={() => history.push('/dashboard')}>Dashboard</button>;
      } else {
        return null;
      }
  }

    return (
        <nav className='Nav'>
            <div className='nav-left'>
                <Link to="/"><img src={logo} alt='logo' /></Link>
                <h1>Vacation Planner</h1>
            </div>
            <div className='nav-right'>
                <ul>
                    {dashboardButton()}
                    <button onClick={() => history.push('/signup')}>Sign Up</button>
                    {logOutButton()}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
