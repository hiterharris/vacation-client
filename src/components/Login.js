import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.scss';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/api/auth/login', user)
      .then(response => {
        console.log(response.data.message);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('message', response.data.message);
        routeToDashboard();
      })
      .catch(error => {
        console.log(error)
      })
  }

  const history = useHistory()
  const routeToDashboard = () => {
      history.push('/dashboard')
  }

  return (
    <div className="SignUp">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='input'>
            <input
              onChange={handleChange}
              id='username'
              type='text'
              name='username'
              placeholder='Username'
            />
        </div>
        
        <div className='input'>
            <input
              onChange={handleChange}
              id='password'
              type='text'
              name='password'
              placeholder='Password'
            />
        </div>

        <div>
            <button onClick={handleSubmit} type='submit'>Login</button>
        </div>

      </form>
    </div>
  );
}

export default Login;
