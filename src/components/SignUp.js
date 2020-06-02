import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.scss';

function SignUp() {
  const [newUser, setNewUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
		axios
      .post('http://localhost:3001/api/auth/register', newUser)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          history.push("/login");
        }, 500);
      })
      .catch(error => {
        console.log(error)
      });
    routeToSignIn();
  }

  const history = useHistory()
  const routeToSignIn = () => {
      history.push('/login')
  }

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
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
            <button onClick={handleSubmit} type='submit'>Sign Up</button>
        </div>

      </form>
    </div>
  );
}

export default SignUp;
