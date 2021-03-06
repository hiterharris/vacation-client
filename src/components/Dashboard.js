import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchUser} from '../actions';
import MyVacation from './MyVacation';
import '../styles/dashboard.scss';

function Dashboard(props) {
  props.fetchUser();
  return (
    <div className="Dashboard">
      <h1>Welcome {props.user.username}!</h1>
      <div className="dashboard-container">
        <Link className='link' to="">
          <h2>Travel</h2>
          <div className='dashboard-card'>
            <div></div>
          </div>
        </Link>
        <Link className='link' to="/lodging">
          <h2>Lodging</h2>
          <div className='dashboard-card'>
            <div></div>
          </div>
        </Link>
        <Link className='link' to="/food">
          <h2>Food</h2>
          <div className='dashboard-card'>
            <div className='card-image'></div>
          </div>
        </Link>
        <Link className='link' to="">
          <h2>Activities</h2>
          <div className='dashboard-card'>
            <div></div>
          </div>
        </Link>
      </div>
      <MyVacation />
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
