import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
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
    </div>
  );
}

export default Dashboard;
