import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/home.scss';

function Home() {
  const history = useHistory();

  const dashboardButton = () => {
    if (localStorage.token) {
        return <button onClick={() => history.push('/dashboard')}>Dashboard</button>;
    } else {
      return null;
    }
}

  return (
    <div className="Home">
      <h1>Home</h1>
      {dashboardButton()}
    </div>
  );
}

export default Home;
