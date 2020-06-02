import React from 'react';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <p>{localStorage.message}</p>
      <button>Log Out</button>
    </div>
  );
}

export default Dashboard;
