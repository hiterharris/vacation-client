import React, {useEffect} from 'react';
import axios from 'axios';


function Dashboard() {
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/users')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        })
  }, []);
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
