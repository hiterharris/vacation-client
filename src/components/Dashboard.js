import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Link } from "react-router-dom";
import '../styles/dashboard.scss';

function Dashboard() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axiosWithAuth()
    .get(`/api/users/${localStorage.id}`)
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div className="Dashboard">
      <h1>Welcome {user.username}!</h1>
      <div className="dashboard-container">
        <Link className='link' to="">
          <div className='dashboard-card'>
            <h2>Travel</h2>
            <div></div>
          </div>
        </Link>
        <Link className='link' to="/lodging">
          <div className='dashboard-card'>
            <h2>Lodging</h2>
            <div></div>
          </div>
        </Link>
        <Link className='link' to="/food">
          <div className='dashboard-card'>
            <h2>Food</h2>
            <div></div>
          </div>
        </Link>
        <Link className='link' to="">
          <div className='dashboard-card'>
            <h2>Activities</h2>
            <div></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
