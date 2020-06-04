import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../../actions';
import '../../styles/food.scss';

function Food(props) {
    props.fetchRestaurants()
    return (
        <div className="Food">
            <h1>Food</h1>
            <div className='restaurant-list'>
            {props.restaurantList.map((restaurant) => {
            return (
                <div className='restaurant-card'>
                    {console.log(restaurant)}
                    <h2>{restaurant.name}</h2>
                    <a href={restaurant.url} target="_blank"><p>Details</p></a>
                    <img src={restaurant.image_url} />
                </div>
                );
            })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      restaurantList: state.restaurantList
    }
  }
  
  export default connect(
    mapStateToProps,
    {fetchRestaurants}
  )(Food);
  