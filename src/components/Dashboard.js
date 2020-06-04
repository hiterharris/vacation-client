import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchUser} from '../actions';
import '../styles/dashboard.scss';

function Dashboard(props) {
  props.fetchUser();
  return (
    <div className="Dashboard">
      <h1>Welcome {props.user.username}!</h1>
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  {fetchUser}
)(Dashboard);
