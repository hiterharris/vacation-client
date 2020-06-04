import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../../actions';
import '../../styles/food.scss';

function Food(props) {
    props.fetchRestaurants()
    // console.log(props.restaurantList);
    return (
        <div className="Food">
            <h1>Food</h1>
            <div className='restaurant-list'>
            {props.restaurantList.map((restaurant, i) => {
            return (
                <div className='restaurant-card' key={i}>
                    <h2>{restaurant.name}</h2>
                    <a href={restaurant.url} target="_blank" rel="noopener noreferrer"><p>Details</p></a>
                    <img src={restaurant.image_url} alt="restaurant"/>
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
  