import React from 'react';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>{localStorage.message}</h1>
    </div>
  );
}

export default Dashboard;
