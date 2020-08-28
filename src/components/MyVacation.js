import React from 'react';
import '../styles/vacation.scss';
import {connect} from 'react-redux';
import {foodList} from '../actions';

function MyVacation(props) {
  return (
    <div className="MyVacation">
      <h1>My Vacation</h1>
      <section className='vacation-container'>
        <div>
          <h2>Travel</h2>
          <div>
            <p>Travel List</p>
          </div>
        </div>
        <div>
          <h2>Lodging</h2>
          <div>
            <p>Lodging List</p>
          </div>
        </div>
        <div>
          <h2>Food</h2>
          <div>
            <p>Restaurant List</p>
          </div>
        </div>
        <div>
          <h2>Activities</h2>
          <div>
            <p>Activity List</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    foodList: state.foodList
  }
}

export default connect(
  mapStateToProps,
  {foodList}
)(MyVacation);
